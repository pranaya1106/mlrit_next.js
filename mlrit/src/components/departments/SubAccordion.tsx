"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  title: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
};

export default function SubAccordion({
  id,
  title,
  defaultOpen = false,
  children,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div id={id} className={`sub-accordion${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="sub-accordion__header"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{title}</span>
        <span className="sub-accordion__chevron" aria-hidden="true">
          ▼
        </span>
      </button>
      <div className="sub-accordion__body">
        <div className="sub-accordion__content">{children}</div>
      </div>
    </div>
  );
}
