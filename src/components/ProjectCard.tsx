import type { ReactNode } from 'react';
import type { Project } from '@/data/portfolio';
import { GitHubIcon, ExternalIcon } from './Icons';

// Tek bir proje kartı. `action` verilirse sağ üstte linklerin yerine o gösterilir.
export default function ProjectCard({ project: p, action }: { project: Project; action?: ReactNode }) {
  return (
    <article className="project-card">
      <div className="project-head">
        <div className="project-id">
          {p.logo && (
            <img src={p.logo} alt="" className={`project-logo${p.logoInvert ? ' is-inverted' : ''}`} />
          )}
          <h3>{p.title}</h3>
        </div>
        <div className="project-links">
          {action}
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} canlı demo`} title="Canlı demo">
              <ExternalIcon />
            </a>
          )}
          {p.repoUrl && (
            <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} kaynak kodu`} title="Kaynak kod">
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>

      {p.summary && <p className="project-summary">{p.summary}</p>}

      {p.points && p.points.length > 0 && (
        <ul className="bullets">
          {p.points.map((a) => <li key={a}>{a}</li>)}
        </ul>
      )}

      {p.stack.length > 0 && (
        <ul className="tags">
          {p.stack.map((s) => <li key={s} className="tag">{s}</li>)}
        </ul>
      )}
    </article>
  );
}
