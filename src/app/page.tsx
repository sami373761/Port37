import Image from 'next/image';
import CopyEmail from '@/components/CopyEmail';
import TableOfContents, { type TocItem } from '@/components/TableOfContents';
import ProjectCard from '@/components/ProjectCard';
import UpcomingProjectsCard from '@/components/UpcomingProjectsCard';
import { GitHubIcon, LinkedInIcon, MailIcon, PinIcon, ExternalIcon } from '@/components/Icons';
import {
  profile,
  projects,
  upcomingProjects,
  PROJECT_SLOTS,
  experience,
  education,
  skills,
  about,
  certificates,
} from '@/data/portfolio';

// Sol menüde yalnızca ana başlıklar var, alt başlık yok
const toc: TocItem[] = [
  { id: 'giris', label: 'Giriş' },
  { id: 'projeler', label: 'Projeler' },
  { id: 'deneyim', label: 'Deneyim' },
  { id: 'tech-stack', label: 'Tech Stack & Sertifikalar' },
  { id: 'hakkimda', label: 'Hakkımda' },
  { id: 'iletisim', label: 'İletişim' },
];

function SocialIcons({ size }: { size: number }) {
  return (
    <div className="socials">
      <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><GitHubIcon size={size} /></a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon size={size} /></a>
      <a href={`mailto:${profile.email}`} aria-label="E-posta" title="E-posta"><MailIcon size={size} /></a>
    </div>
  );
}

export default function Home() {
  const cardCount = projects.length + (upcomingProjects.length > 0 ? 1 : 0);
  const emptySlots = Math.max(0, PROJECT_SLOTS - cardCount);

  return (
    <div className="frame">
      <div className="layout">
        {/* SOL SIDEBAR: scrollspy */}
        <aside className="sidebar">
          <TableOfContents items={toc} />
        </aside>

        {/* SAĞ: İÇERİK */}
        <main className="content">
          {/* GİRİŞ: solda başlık ve açıklama, sağ üstte fotoğraf */}
          <section id="giris" className="section hero">
            <div className="hero-text">
              {/* İsim üst satırda, roller alt satırda */}
              <h1 className="hero-title">
                <span className="hero-name">{profile.name}</span>
                <span className="hero-roles">
                  {profile.roles.map((role, i) => (
                    <span key={role}>
                      {i > 0 && <span className="hero-sep" aria-hidden="true"> | </span>}
                      {role}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="hero-loc">
                <PinIcon /> {profile.location}
              </p>
              <p className="hero-pitch">{profile.pitch.join(' ')}</p>
              <SocialIcons size={22} />
            </div>
            <Image
              src="/profile.png"
              alt={profile.name}
              width={280}
              height={280}
              className="hero-photo"
              preload
            />
          </section>

          {/* PROJELER: 2x2 */}
          <section id="projeler" className="section">
            <h2 className="section-title">Projeler</h2>
            <div className="projects">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
              {upcomingProjects.length > 0 && <UpcomingProjectsCard projects={upcomingProjects} />}
              {Array.from({ length: emptySlots }, (_, i) => (
                <div key={`empty-${i}`} className="project-card project-empty" aria-hidden="true" />
              ))}
            </div>
          </section>

          {/* DENEYİM */}
          <section id="deneyim" className="section">
            <h2 className="section-title">Deneyim</h2>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.company} className="timeline-item">
                  <div className="timeline-meta">
                    <span className="timeline-company">{e.company}</span>
                    <span>{e.location}</span>
                    <span>{e.period}</span>
                  </div>
                  <div className="timeline-body">
                    <h3>{e.role}</h3>
                    <ul className="bullets">
                      {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
              {education.map((ed) => (
                <li key={ed.school} className="timeline-item">
                  <div className="timeline-meta">
                    <span className="timeline-company">{ed.school}</span>
                    <span>{ed.location}</span>
                    <span>{ed.period}</span>
                  </div>
                  <div className="timeline-body">
                    <h3>{ed.degree}</h3>
                    <ul className="bullets">
                      {ed.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* TECH STACK & SERTİFİKALAR */}
          <section id="tech-stack" className="section">
            <h2 className="section-title">Tech Stack & Sertifikalar</h2>
            {/* Tek çerçeve: her kategori tek satır, teknolojiler düz metin */}
            <dl className="skills">
              {skills.map((s) => (
                <div key={s.category} className="skill-row">
                  <dt>{s.category}</dt>
                  <dd className="skill-items">
                    {s.items.map((i, idx) => (
                      <span key={typeof i === 'string' ? i : i.name}>
                        {idx > 0 && <span className="skill-sep"> · </span>}
                        {typeof i === 'string' ? i : (
                          <>{i.name} <span className="tag-note">({i.note})</span></>
                        )}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="certs">
              {certificates.map((c) => (
                <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="cert">
                  <img src={c.logo} alt="" className="cert-logo" />
                  <span className="cert-text">
                    <strong>{c.name}</strong>
                    <small>{c.issuer} · Doğrula ↗</small>
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* HAKKIMDA */}
          <section id="hakkimda" className="section">
            <h2 className="section-title">Hakkımda</h2>
            <p className="about-text">{about}</p>
            <p className="about-note">
              Diğer proje ve çalışmalarımı incelemek için{' '}
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub sayfamı</a>{' '}
              ziyaret edebilirsiniz.
            </p>
          </section>

          {/* İLETİŞİM */}
          <section id="iletisim" className="section contact">
            <h2 className="section-title">İletişim</h2>
            <p className="contact-sub">Yeni projeler ve pozisyonlar için e-posta en hızlı yol.</p>
            {/* Tech Stack ile aynı yapı: tek çerçeve, her kanal bir satır */}
            <div className="contact-card">
              <div className="contact-item">
                <span className="contact-label"><MailIcon size={18} /> E-posta</span>
                <CopyEmail email={profile.email} />
              </div>
              <a className="contact-item" href={profile.github} target="_blank" rel="noopener noreferrer">
                <span className="contact-label"><GitHubIcon size={18} /> GitHub</span>
                <span className="contact-value">{profile.github.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} <ExternalIcon size={16} /></span>
              </a>
              <a className="contact-item" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="contact-label"><LinkedInIcon size={18} /> LinkedIn</span>
                <span className="contact-value">{profile.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} <ExternalIcon size={16} /></span>
              </a>
            </div>
            <p className="footer-meta">© {new Date().getFullYear()} {profile.name} · Son güncelleme: {profile.lastUpdated}</p>
          </section>
        </main>
      </div>
    </div>
  );
}
