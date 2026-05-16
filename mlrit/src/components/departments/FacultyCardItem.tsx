"use client";

import Image from "next/image";
import { useState } from "react";
import type { FacultyCard } from "@/data/departments-types";

type Props = {
  faculty: FacultyCard;
};

export default function FacultyCardItem({ faculty }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="fcard" data-author={faculty.name}>
      {!imgError ? (
        <Image
          src={faculty.photo}
          alt={faculty.name}
          fill
          sizes="(max-width: 768px) 50vw, 220px"
          onError={() => setImgError(true)}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      ) : (
        <div className="fcard__ini">{faculty.initials}</div>
      )}

      {faculty.isHod && <div className="fcard__hod-badge">HOD</div>}

      <div className="fcard__overlay">
        <div className="fcard__name">{faculty.name}</div>
        <div className="fcard__role">{faculty.role}</div>
      </div>

      <div className="fcard__hover-info">
        <div className="fcard__hover-name">{faculty.name}</div>
        <div className="fcard__hover-role">{faculty.role}</div>
        {faculty.specialty && (
          <div className="fcard__hover-spec">{faculty.specialty}</div>
        )}
        {faculty.profileHref && (
          <a href={faculty.profileHref} className="fcard__hover-btn">
            View Research
          </a>
        )}
      </div>
    </article>
  );
}
