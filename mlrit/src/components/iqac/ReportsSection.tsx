import type { DocListBlock } from "@/data/iqac-types";
import DocumentCard from "./DocumentCard";

type Props = {
  data: DocListBlock;
};

/** Grouped list of downloadable documents (AQAR PDFs, AICTE approvals, etc.). */
export default function ReportsSection({ data }: Props) {
  return (
    <ul className="iq-doc-list">
      {data.items.map((item) => (
        <DocumentCard key={`${item.label}-${item.href}`} item={item} />
      ))}
    </ul>
  );
}
