"use client";

import { useState } from "react";
import type { Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

// Henüz yayında olmayan projeler tek kartta; sağ üstteki butonla aralarında geçiş yapılır
export default function UpcomingProjectsCard({
  projects,
}: {
  projects: Project[];
}) {
  const [index, setIndex] = useState(1); // varsayılan: StarDev (anahtar kapalı)
  const current = projects[index];
  const next = projects[(index + 1) % projects.length];

  // On/off anahtarı: kapalı = StarDev, açık = MasadaKasa
  const on = index === 0;
  const toggle = (
    <span className="upcoming-action">
      <span className="dev-badge">Geliştiriliyor</span>
      {projects.length > 1 && (
        <button
          type="button"
          role="switch"
          aria-checked={on}
          className={`switch${on ? " is-on" : ""}`}
          onClick={() => setIndex((i) => (i + 1) % projects.length)}
          aria-label={`${next.title} projesine geç`}
          title={`${next.title} projesine geç`}
        >
          <span className="switch-knob" />
        </button>
      )}
    </span>
  );

  return <ProjectCard key={current.title} project={current} action={toggle} />;
}
