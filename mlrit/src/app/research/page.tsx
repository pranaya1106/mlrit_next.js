import { redirect } from "next/navigation";

/** `/research` redirects to `/research/overview` — the canonical entry point. */
export default function ResearchIndexPage() {
  redirect("/research/overview");
}
