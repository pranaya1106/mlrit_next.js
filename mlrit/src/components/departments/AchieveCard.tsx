"use client";

import { useState } from "react";

type Props = {
  title: string;
  body: string;
};

export default function AchieveCard({ title, body }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`achieve-card${open ? " is-expanded" : ""}`}
      onClick={() => setOpen((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
      aria-expanded={open}
    >
      <h4>{title}</h4>
      <p>{body}</p>
      <button
        type="button"
        className="achieve-toggle"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        {open ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
