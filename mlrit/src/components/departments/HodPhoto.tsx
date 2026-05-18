"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  name: string;
};

function getInitials(name: string) {
  const cleaned = name
    .replace(/^(Dr|Prof|Mr|Ms|Mrs)\.?\s*/i, "")
    .split(/[—–-]/)[0]
    .replace(/[.,]/g, "")
    .trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0].charAt(0);
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : "";
  return (first + last).toUpperCase();
}

export default function HodPhoto({ src, name }: Props) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return <div className="hod-msg__ini">{getInitials(name)}</div>;
  }

  return (
    <Image
      src={src}
      alt={name}
      width={100}
      height={100}
      sizes="100px"
      onError={() => setErrored(true)}
    />
  );
}
