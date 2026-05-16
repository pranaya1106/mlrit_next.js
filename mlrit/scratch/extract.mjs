// Extracts structured DepartmentContent from live HTML pages in scratch/live-*.html
// and emits ../src/data/departments-content.ts.
//
// Run from project root: node scratch/extract.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCRATCH = __dirname;
const OUT = path.resolve(__dirname, "../src/data/departments-content.ts");

// ── HTML helpers ─────────────────────────────────────────────
function decodeEntities(s) {
  if (!s) return "";
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&hellip;/g, "…")
    .replace(/&larr;/g, "←")
    .replace(/&rarr;/g, "→")
    .replace(/&uarr;/g, "↑")
    .replace(/&darr;/g, "↓")
    .replace(/&#8377;/g, "₹")
    .replace(/&#9660;/g, "▼")
    .replace(/&#9654;/g, "▶")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)));
}

function stripTags(html) {
  return decodeEntities(
    String(html)
      .replace(/<br\s*\/?\s*>/gi, " ")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim()
  );
}

// Find balanced block: given a regex that locates an opening tag start
// (with class/id matching), find the matching closing tag and return inner html.
function getBlock(html, openRe, tagName = "div") {
  const m = html.match(openRe);
  if (!m) return null;
  let i = m.index + m[0].length;
  let depth = 1;
  const openRx = new RegExp(`<${tagName}\\b`, "gi");
  const closeRx = new RegExp(`</${tagName}\\s*>`, "gi");
  while (depth > 0 && i < html.length) {
    openRx.lastIndex = i;
    closeRx.lastIndex = i;
    const o = openRx.exec(html);
    const c = closeRx.exec(html);
    if (!c) break;
    if (o && o.index < c.index) {
      depth++;
      i = o.index + o[0].length;
    } else {
      depth--;
      i = c.index + c[0].length;
      if (depth === 0) {
        return html.slice(m.index + m[0].length, c.index);
      }
    }
  }
  return null;
}

function getAllBlocks(html, openRe, tagName = "div") {
  const out = [];
  let cursor = 0;
  while (cursor < html.length) {
    openRe.lastIndex = cursor;
    const m = openRe.exec(html);
    if (!m) break;
    const blockHtml = html.slice(m.index);
    const inner = getBlock(blockHtml, new RegExp(openRe.source.replace(/^\^/, "")), tagName);
    if (inner != null) {
      // Compute end position in original `html`
      const blockStart = m.index;
      const openLen = m[0].length;
      // Find matching close inside blockHtml to determine end offset
      let i = openLen;
      let depth = 1;
      const openRx = new RegExp(`<${tagName}\\b`, "gi");
      const closeRx = new RegExp(`</${tagName}\\s*>`, "gi");
      let end = blockHtml.length;
      while (depth > 0 && i < blockHtml.length) {
        openRx.lastIndex = i;
        closeRx.lastIndex = i;
        const o = openRx.exec(blockHtml);
        const c = closeRx.exec(blockHtml);
        if (!c) break;
        if (o && o.index < c.index) {
          depth++;
          i = o.index + o[0].length;
        } else {
          depth--;
          i = c.index + c[0].length;
          if (depth === 0) {
            end = c.index + c[0].length;
            break;
          }
        }
      }
      out.push({ inner, openTag: m[0], full: blockHtml.slice(0, end) });
      cursor = blockStart + end;
    } else {
      cursor = m.index + m[0].length;
    }
  }
  return out;
}

function attr(tag, name) {
  const re = new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, "i");
  const m = tag.match(re);
  return m ? decodeEntities(m[1]) : null;
}

// Path rewrites for any href/src found in the HTML
function rewritePath(p) {
  if (!p) return p;
  p = decodeEntities(p);
  if (p.startsWith("http") || p.startsWith("//") || p.startsWith("/")) return p;
  if (p.startsWith("../")) return "/" + p.slice(3); // back to site root
  if (p.startsWith("./")) p = p.slice(2);
  // Otherwise prepend /departments/
  return "/departments/" + p;
}

// Get text inside an inner-html tag matching selector
function pickText(html, selectorRe) {
  const block = getBlock(html, selectorRe, "div");
  return block ? stripTags(block) : null;
}

// ── PARSE A SINGLE DEPT ─────────────────────────────────────
function parseDept(html, slug) {
  // dept-nav__link--dept name
  const deptNavName =
    stripTags(
      (html.match(/<span class="dept-nav__link--dept"[^>]*>([\s\S]*?)<\/span>/i) || [])[1] || ""
    ) || `${slug.toUpperCase()} Department`;

  // hero
  const heroEyebrow = stripTags(
    (html.match(/<div class="dept-hero__eyebrow"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || ""
  );
  const heroTitle = stripTags(
    (html.match(/<div class="dept-hero__title"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || ""
  );
  const hasVideo = /<video[^>]*class="dept-hero__video"/i.test(html);

  // sidebar
  const sidebar = [];
  const dsRe = /<a class="ds-item"[^>]*data-ds-tab="([^"]*)"[^>]*data-ds-target="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  for (const m of html.matchAll(dsRe)) {
    const label = stripTags(
      (m[3].match(/<span class="ds-item__label"[^>]*>([\s\S]*?)<\/span>/i) || [])[1] || ""
    );
    if (label) sidebar.push({ tab: m[1], targetId: m[2], label });
  }

  // panels
  const panelOverview = getBlock(html, /<div class="dept-panel[^"]*" id="panel-overview"[^>]*>/i, "div") || "";
  const panelObjectives = getBlock(html, /<div class="dept-panel[^"]*" id="panel-objectives"[^>]*>/i, "div") || "";
  const panelFaculty = getBlock(html, /<div class="dept-panel[^"]*" id="panel-faculty"[^>]*>/i, "div") || "";
  const panelAcademics = getBlock(html, /<div class="dept-panel[^"]*" id="panel-academics"[^>]*>/i, "div") || "";
  const panelAchievements = getBlock(html, /<div class="dept-panel[^"]*" id="panel-achievements"[^>]*>/i, "div") || "";
  const panelCommittees = getBlock(html, /<div class="dept-panel[^"]*" id="panel-committees"[^>]*>/i, "div") || "";

  // OVERVIEW
  const hodBlock = getBlock(panelOverview, /<div id="hod-msg" class="hod-msg"[^>]*>/i, "div") || "";
  const hodPhoto =
    rewritePath(
      (hodBlock.match(/<img[^>]+src="([^"]+)"/i) || [])[1] || ""
    ) || "";
  const hodQuote = stripTags(
    (hodBlock.match(/<p class="hod-msg__text"[^>]*>([\s\S]*?)<\/p>/i) || [])[1] || ""
  ).replace(/^"|"$/g, "").replace(/^[“”]|[“”]$/g, "");
  let hodNameRaw = stripTags(
    (hodBlock.match(/<div class="hod-msg__name"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || ""
  );
  hodNameRaw = hodNameRaw.replace(/^[—-]\s*/, "").trim();
  let hodRole;
  const nameRoleMatch = hodNameRaw.match(/^(.*?),\s*(.+)$/);
  let hodName = hodNameRaw;
  if (nameRoleMatch) {
    hodName = nameRoleMatch[1].trim();
    hodRole = nameRoleMatch[2].trim();
  }

  // V&M
  const vmTwoCol = getBlock(panelOverview, /<div class="two-col"[^>]*>/i, "div") || "";
  const cards = getAllBlocks(vmTwoCol, /<div class="card card--accent"[^>]*>/gi, "div");
  let vision = "", mission = "";
  if (cards[0]) vision = stripTags((cards[0].inner.match(/<p[^>]*>([\s\S]*?)<\/p>/i) || [])[1] || "");
  if (cards[1]) mission = stripTags((cards[1].inner.match(/<p[^>]*>([\s\S]*?)<\/p>/i) || [])[1] || "");

  // Vision/mission doc link (the inline <a download> after the two-col)
  let vmDocHref, vmDocLabel;
  const vmDocRe = /<a[^>]+href="([^"]+)"[^>]+download[^>]*>([\s\S]*?)<\/a>/i;
  const vmDocMatch = panelOverview.match(/Vision\s+Mission\s+Process[\s\S]*?<\/a>/i);
  if (vmDocMatch) {
    const m = vmDocMatch[0].match(/href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
    if (m) {
      vmDocHref = rewritePath(m[1]);
      vmDocLabel = stripTags(m[2]).replace(/^[↓\s]+/, "");
    }
  }

  // Teaching method
  const teachIdx = panelOverview.search(/Innovative Teaching Methodology<\/div>/i);
  let teachingMethod = "";
  if (teachIdx >= 0) {
    const after = panelOverview.slice(teachIdx);
    const pMatch = after.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    if (pMatch) teachingMethod = stripTags(pMatch[1]);
  }

  // History
  const histBlock =
    getBlock(panelOverview, /<div id="history-section" class="sub-accordion"[^>]*>/i, "div") || "";
  const history = stripTags((histBlock.match(/<p[^>]*>([\s\S]*?)<\/p>/i) || [])[1] || "");

  // Labs
  const labsBlock =
    getBlock(panelOverview, /<div id="labs-section" class="sub-accordion"[^>]*>/i, "div") || "";
  const labsHeading =
    stripTags(
      (labsBlock.match(/<div class="sub-accordion__header"[^>]*>([\s\S]*?)<span/i) || [])[1] || ""
    ).trim() || undefined;
  const labCards = [...labsBlock.matchAll(/<div class="lab-card"[^>]*>([\s\S]*?)<\/div>\s*(?=<div class="lab-card"|<\/div>)/gi)];
  const labs = [];
  // safer: parse each lab-card by finding `lab-card__name` and `lab-card__desc`
  const labRe = /<div class="lab-card"[^>]*>([\s\S]*?)<\/div>(?=\s*<div class="lab-card"|\s*<\/div>)/gi;
  // Use a simpler approach: find each pair of name+desc
  const nameRe = /<div class="lab-card__name"[^>]*>([\s\S]*?)<\/div>\s*<div class="lab-card__desc"[^>]*>([\s\S]*?)<\/div>/gi;
  for (const m of labsBlock.matchAll(nameRe)) {
    labs.push({ name: stripTags(m[1]), desc: stripTags(m[2]) });
  }

  // OBJECTIVES
  const peos = [];
  const threeCol = getBlock(panelObjectives, /<div class="three-col"[^>]*>/i, "div") || "";
  const peoRe = /<div class="peo-num"[^>]*>([\s\S]*?)<\/div>\s*<p>([\s\S]*?)<\/p>/gi;
  for (const m of threeCol.matchAll(peoRe)) {
    peos.push({ num: stripTags(m[1]), text: stripTags(m[2]) });
  }

  // OBE grid
  const obeGrid = getBlock(panelObjectives, /<div class="obe-grid"[^>]*>/i, "div") || "";
  const obeCols = getAllBlocks(obeGrid, /<div class="obe-col"[^>]*>/gi, "div");
  function parseObeList(inner) {
    const out = [];
    const liRe = /<li>\s*<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>\s*<\/li>/gi;
    for (const m of inner.matchAll(liRe)) {
      out.push({ href: rewritePath(m[1]), label: stripTags(m[2]) });
    }
    return out;
  }
  const obeBTech = obeCols[0] ? parseObeList(obeCols[0].inner) : [];
  const obeMTech = obeCols[1] ? parseObeList(obeCols[1].inner) : undefined;

  // OBE portal href
  const portalMatch = panelObjectives.match(/Open OBE Portal[\s\S]{0,40}/i);
  let obePortalHref;
  const portalA = panelObjectives.match(/<a href="([^"]+)"[^>]+target="_blank"[^>]*>Open OBE Portal/i);
  if (portalA) obePortalHref = portalA[1];

  // Handbook card (last card in the panel)
  const handbookMatch = panelObjectives.match(/Handbook<\/div>\s*<div class="card"[^>]*>([\s\S]*?)<\/div>(?=\s*<\/div>|\s*$)/i);
  let handbookTitle = "Department Handbook";
  let handbookSub = "";
  if (handbookMatch) {
    const h3 = handbookMatch[1].match(/<h3>([\s\S]*?)<\/h3>/i);
    const p = handbookMatch[1].match(/<p>([\s\S]*?)<\/p>/i);
    if (h3) handbookTitle = stripTags(h3[1]);
    if (p) handbookSub = stripTags(p[1]);
  }

  // FACULTY
  const faculty = [];
  // each fcard is a div with class="fcard" data-author="..."
  const fcardRe = /<div class="fcard"[^>]*data-author="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*(?=<div class="fcard"|<\/div>)/gi;
  // safer: parse via getAllBlocks
  const fcardBlocks = getAllBlocks(panelFaculty, /<div class="fcard"[^>]*>/gi, "div");
  for (const { inner, openTag } of fcardBlocks) {
    const author = attr(openTag, "data-author") || "";
    const img = (inner.match(/<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"/i) || []);
    const photo = rewritePath(img[1] || "");
    const ini = stripTags((inner.match(/<div class="fcard__ini"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || "");
    const isHod = /HOD/i.test(inner.match(/<div style="position:absolute;top:10px[\s\S]*?<\/div>/i)?.[0] || "");
    // hover-info has the canonical name/role/specialty
    const hoverName = stripTags(
      (inner.match(/<div class="fcard__hover-name"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || ""
    );
    const hoverRole = stripTags(
      (inner.match(/<div class="fcard__hover-role"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || ""
    );
    const hoverSpec = stripTags(
      (inner.match(/<div class="fcard__hover-spec"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || ""
    );
    const profileHrefRaw = (inner.match(/<a[^>]+class="fcard__hover-btn"[^>]+href="([^"]+)"/i) || (inner.match(/<a[^>]+href="([^"]+)"[^>]+class="fcard__hover-btn"/i)) || [])[1] || "";
    const profileHref = profileHrefRaw ? rewritePath(profileHrefRaw) : undefined;
    faculty.push({
      name: hoverName || author,
      role: hoverRole || "",
      photo,
      initials: ini || (hoverName || author).split(" ").map(s => s[0]).filter(Boolean).slice(0, 2).join("").toUpperCase(),
      specialty: hoverSpec || undefined,
      isHod: isHod || undefined,
      profileHref,
    });
  }

  // ACADEMICS
  const syllabusPdfs = [];
  // Syllabus PDFs block: catalog-item items with both view + download buttons
  const sylBlock = panelAcademics; // simpler: scan whole panel
  const sylItemRe = /<div class="catalog-item"[^>]*>\s*<div>\s*<span class="catalog-item__text"[^>]*>([\s\S]*?)<\/span>\s*<span class="catalog-item__sub"[^>]*>([\s\S]*?)<\/span>\s*<\/div>\s*<div class="syll-actions"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
  for (const m of sylBlock.matchAll(sylItemRe)) {
    const label = stripTags(m[1]);
    const sublabel = stripTags(m[2]) || undefined;
    const actions = m[3];
    const view = (actions.match(/<a[^>]+href="([^"]+)"[^>]*class="syll-btn syll-btn--view"/i) || actions.match(/class="syll-btn syll-btn--view"[^>]*href="([^"]+)"/i) || [])[1];
    const dl = (actions.match(/<a[^>]+href="([^"]+)"[^>]*class="syll-btn syll-btn--download"/i) || actions.match(/class="syll-btn syll-btn--download"[^>]*href="([^"]+)"/i) || [])[1];
    if (view || dl) {
      syllabusPdfs.push({
        label,
        sublabel,
        viewHref: rewritePath(view || dl),
        downloadHref: rewritePath(dl || view),
      });
    }
  }

  // Course catalog: catalog-item anchors that point to <slug>-r25.html etc
  const courseCatalog = [];
  const ccRe = /<a href="([^"]+)"[^>]*target="_blank"[^>]*class="catalog-item"[^>]*>\s*<div>\s*<span class="catalog-item__text"[^>]*>([\s\S]*?)<\/span>(?:\s*<span class="catalog-item__sub"[^>]*>([\s\S]*?)<\/span>)?\s*<\/div>\s*<\/a>/gi;
  for (const m of sylBlock.matchAll(ccRe)) {
    courseCatalog.push({
      href: rewritePath(m[1]),
      label: stripTags(m[2]),
      sublabel: m[3] ? stripTags(m[3]) || undefined : undefined,
    });
  }

  // Regulations + subjectDetails — only attempt via direct regex match on inline JS
  let regulations;
  let subjectDetails;
  const regJsMatch = html.match(/var regulations\s*=\s*(\{[\s\S]*?\});\s*var syllabusUrls/i);
  if (regJsMatch) {
    try {
      // Use Function to evaluate the JS object literal safely
      // eslint-disable-next-line no-new-func
      const obj = Function(`"use strict"; return (${regJsMatch[1]});`)();
      const result = {};
      for (const key of Object.keys(obj)) {
        const v = obj[key];
        const yrs = {};
        for (const y of Object.keys(v.data || {})) {
          const sems = {};
          for (const s of Object.keys(v.data[y] || {})) {
            sems[s] = v.data[y][s];
          }
          yrs[y] = sems;
        }
        result[key] = {
          label: v.label,
          fullSyllabusHref: v.fullSyllabus ? rewritePath(v.fullSyllabus) : undefined,
          years: yrs,
        };
      }
      regulations = result;
    } catch (e) {
      console.warn(`[${slug}] regulations parse error:`, e.message);
    }
  }

  const sdMatch = html.match(/var subjectDetails\s*=\s*(\{[\s\S]*?\});\s*var regPills/i);
  if (sdMatch) {
    try {
      // eslint-disable-next-line no-new-func
      subjectDetails = Function(`"use strict"; return (${sdMatch[1]});`)();
    } catch (e) {
      console.warn(`[${slug}] subjectDetails parse error:`, e.message);
    }
  }

  // ACHIEVEMENTS
  const achievementCards = [];
  const acRe = /<div class="card achieve-card"[^>]*>\s*<h4>([\s\S]*?)<\/h4>\s*<p>([\s\S]*?)<\/p>/gi;
  for (const m of panelAchievements.matchAll(acRe)) {
    achievementCards.push({ title: stripTags(m[1]), body: stripTags(m[2]) });
  }

  const honourTable = [];
  const trRe = /<tr>\s*<td>([\s\S]*?)<\/td>\s*<td><span class="honour-name"[^>]*>([\s\S]*?)<\/span><\/td>\s*<td><span class="honour-badge ([^"]+)"[^>]*>([\s\S]*?)<\/span><\/td>\s*<td><span class="honour-score"[^>]*>([\s\S]*?)<\/span><\/td>\s*<\/tr>/gi;
  for (const m of panelAchievements.matchAll(trRe)) {
    const badgeKind = /topper/i.test(m[3]) ? "topper" : "rank";
    honourTable.push({
      year: stripTags(m[1]),
      name: stripTags(m[2]),
      badge: stripTags(m[4]),
      badgeKind,
      score: stripTags(m[5]),
    });
  }

  const studentAchievements = [];
  const listBlock = getBlock(panelAchievements, /<ul class="achieve-list"[^>]*>/i, "ul");
  if (listBlock) {
    for (const m of listBlock.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
      studentAchievements.push(stripTags(m[1]));
    }
  }

  const publications = [];
  const pubRe = /<div class="pub-card"[^>]*data-pub-year="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<span class="pub-card__year"[^>]*>[\s\S]*?<\/span>\s*<\/div>/gi;
  for (const m of panelAchievements.matchAll(pubRe)) {
    const year = m[1];
    const body = m[2];
    const title = stripTags((body.match(/<div class="pub-card__title"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || "");
    const authors = stripTags((body.match(/<div class="pub-card__authors"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || "");
    const journal = stripTags((body.match(/<div class="pub-card__journal"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || "");
    publications.push({ title, authors, journal, year });
  }

  const internStats = [];
  for (const m of panelAchievements.matchAll(/<div class="stat-card"[^>]*>\s*<div class="stat-card__num"[^>]*>([\s\S]*?)<\/div>\s*<div class="stat-card__label"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)) {
    internStats.push({ num: stripTags(m[1]), label: stripTags(m[2]) });
  }

  const internCards = [];
  const internCardRe = /<div class="intern-card__front"[^>]*>\s*<div class="intern-card__name"[^>]*>([\s\S]*?)<\/div>\s*<div class="intern-card__type"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<div class="intern-card__back"[^>]*>\s*<div class="intern-card__back-num"[^>]*>([\s\S]*?)<\/div>\s*<div class="intern-card__back-label"[^>]*>([\s\S]*?)<\/div>/gi;
  for (const m of panelAchievements.matchAll(internCardRe)) {
    const labelText = stripTags(m[4]);
    const yearMatch = labelText.match(/(\d{4})/);
    internCards.push({
      company: stripTags(m[1]),
      type: stripTags(m[2]),
      count: stripTags(m[3]),
      year: yearMatch ? yearMatch[1] : labelText,
    });
  }

  const placementStats = [];
  for (const m of panelAchievements.matchAll(/<div class="placement-stat"[^>]*>\s*<div class="placement-stat__num"[^>]*>([\s\S]*?)<\/div>\s*<div class="placement-stat__label"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)) {
    placementStats.push({ num: stripTags(m[1]), label: stripTags(m[2]) });
  }

  // Placement note: paragraph after placement-stats wrapper
  let placementNote = "";
  const placementWrapRe = /<div class="placement-stats"[^>]*>[\s\S]*?<\/div>\s*<p[^>]*>([\s\S]*?)<\/p>/i;
  const placementMatch = panelAchievements.match(placementWrapRe);
  if (placementMatch) placementNote = stripTags(placementMatch[1]);

  // COMMITTEES
  const committees = { intro: "", cards: [] };
  // First intro <p>
  const introMatch = panelCommittees.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  if (introMatch) committees.intro = stripTags(introMatch[1]);

  // Each panel-sub followed by a card
  const cmtRe = /<div class="panel-sub"[^>]*>([\s\S]*?)<\/div>\s*<div class="card"[^>]*>\s*<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>([\s\S]*?)<\/div>/gi;
  for (const m of panelCommittees.matchAll(cmtRe)) {
    const heading = stripTags(m[1]);
    const h3 = stripTags(m[2]);
    const body = stripTags(m[3]);
    let docHref, docLabel;
    const docMatch = m[4].match(/<a[^>]+href="([^"]+)"[^>]+download[^>]*>([\s\S]*?)<\/a>/i);
    if (docMatch) {
      docHref = rewritePath(docMatch[1]);
      docLabel = stripTags(docMatch[2]).replace(/^[↓\s]+/, "").trim();
    }
    committees.cards.push({ heading, h3, body, docHref, docLabel });
  }

  return {
    slug,
    deptNavName,
    hero: {
      eyebrow: heroEyebrow,
      title: heroTitle,
      video: hasVideo ? "/departments/dept.mp4" : undefined,
    },
    sidebar,
    overview: {
      hod: {
        name: hodName,
        role: hodRole,
        photo: hodPhoto,
        quote: hodQuote,
      },
      visionMission: { vision, mission, docHref: vmDocHref, docLabel: vmDocLabel },
      teachingMethod,
      history,
      labs,
      labsHeading,
    },
    objectives: {
      peos,
      obeBTech,
      obeMTech,
      obePortalHref,
      handbookTitle,
      handbookSub,
    },
    faculty,
    academics: {
      syllabusPdfs,
      courseCatalog,
      regulations,
      subjectDetails,
    },
    achievements: {
      achievementCards,
      honourTable,
      studentAchievements,
      publications,
      internStats,
      internCards,
      placementStats,
      placementNote,
    },
    committees,
  };
}

// ── SERIALIZATION ─────────────────────────────────────────
function jsStr(s) {
  return JSON.stringify(String(s ?? ""));
}

function serialize(v, indent = 0) {
  const pad = "  ".repeat(indent);
  const padInner = "  ".repeat(indent + 1);
  if (v === null || v === undefined) return "undefined";
  if (typeof v === "string") return jsStr(v);
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return "[]";
    // Compact for arrays of [string, string] tuples
    if (Array.isArray(v[0]) && v[0].length === 2 && typeof v[0][0] === "string") {
      const items = v.map((row) => `[${jsStr(row[0])}, ${jsStr(row[1])}]`);
      return `[${items.join(", ")}]`;
    }
    if (typeof v[0] === "string") {
      const items = v.map(jsStr);
      return `[\n${items.map((i) => padInner + i).join(",\n")}\n${pad}]`;
    }
    const items = v.map((x) => padInner + serialize(x, indent + 1));
    return `[\n${items.join(",\n")}\n${pad}]`;
  }
  // object
  const entries = Object.entries(v).filter(([, x]) => x !== undefined);
  if (entries.length === 0) return "{}";
  const lines = entries.map(([k, x]) => {
    const safeKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? k : jsStr(k);
    return `${padInner}${safeKey}: ${serialize(x, indent + 1)}`;
  });
  return `{\n${lines.join(",\n")}\n${pad}}`;
}

// ── RUN ─────────────────────────────────────────────────────
const FILES = {
  freshman: "live-freshman.html",
  cse: "live-cse.html",
  aiml: "live-aiml.html",
  "cse-ds": "live-cse-ds.html",
  "cse-cs": "live-cse-cs.html",
  csit: "live-csit.html",
  it: "live-it.html",
  ece: "live-ece.html",
  eee: "live-eee.html",
  mech: "live-mechanical.html",
  aero: "live-aeronautical.html",
  mba: "live-mba.html",
};

const result = {};
for (const [slug, file] of Object.entries(FILES)) {
  const p = path.join(SCRATCH, file);
  if (!fs.existsSync(p)) {
    console.warn(`Missing: ${p}`);
    continue;
  }
  const html = fs.readFileSync(p, "utf8");
  const data = parseDept(html, slug);
  result[slug] = data;
  console.log(
    `[${slug}] hero="${data.hero.title}" hod="${data.overview.hod.name}" labs=${data.overview.labs.length} faculty=${data.faculty.length} pubs=${data.achievements.publications.length}`
  );
}

const out = `import type { DepartmentContent } from "./departments-types";

// Auto-generated by scratch/extract.mjs from live HTML in scratch/live-*.html.
// To regenerate: node scratch/extract.mjs

export const departmentsContent: Record<string, DepartmentContent> = ${serialize(result, 0)};
`;

fs.writeFileSync(OUT, out, "utf8");
console.log(`\nWrote ${OUT}`);
console.log(`Slugs: ${Object.keys(result).join(", ")}`);
console.log(`Lines: ${out.split("\n").length}`);
