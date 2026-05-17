import type { IQACBanner } from "@/data/iqac-types";

type Props = {
  banner: IQACBanner;
};

/**
 * Green gradient banner that sits between the navbar and the main IQAC
 * content. The faded watermark on the right is driven by `--iq-watermark`
 * so each page (IQAC, NBA, NAAC, NIRF, …) can theme it without HTML.
 *
 * Server component — no client interactivity required.
 */
export default function SectionHero({ banner }: Props) {
  const watermark = `'${banner.watermark}'`;
  return (
    <div
      className="iq-banner"
      style={{ ["--iq-watermark" as string]: watermark }}
    >
      <p>{banner.eyebrow}</p>
      <h1>{banner.title}</h1>
    </div>
  );
}
