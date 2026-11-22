'use client';

import { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

// Bir başlık ekranın üstünden bu kadar piksel aşağıya geldiğinde "aktif" sayılır
const OFFSET = 120;

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const ids = items.flatMap((i) => [i.id, ...(i.children ?? []).map((c) => c.id)]);
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;
    // Klavyeyle başlatılan kaydırma sürerken hedef bölüm burada tutulur,
    // böylece oka art arda basınca her basış bir sonraki bölüme geçer.
    let pendingIndex: number | null = null;
    let pendingTimer = 0;

    const currentIndex = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) return ids.length - 1;
      let index = 0;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - OFFSET <= 0) index = i;
      });
      return index;
    };

    const update = () => {
      frame = 0;
      setActive(ids[currentIndex()]);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const clearPending = () => {
      pendingIndex = null;
      window.clearTimeout(pendingTimer);
    };

    // ↓ / ↑ tuşları bir sonraki / önceki bölüme atlar
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;

      const from = pendingIndex ?? currentIndex();
      const to = Math.min(ids.length - 1, Math.max(0, from + (e.key === 'ArrowDown' ? 1 : -1)));
      e.preventDefault();
      if (to === from) return;

      document.getElementById(ids[to])?.scrollIntoView({ block: 'start' });
      pendingIndex = to;
      window.clearTimeout(pendingTimer);
      pendingTimer = window.setTimeout(clearPending, 1000);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scrollend', clearPending);
    window.addEventListener('resize', onScroll);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scrollend', clearPending);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(pendingTimer);
      if (frame) cancelAnimationFrame(frame);
    };
    // ids içerik sabit olduğu için bir kez kurulması yeterli
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="toc" aria-label="Sayfa içeriği">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : undefined}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
            {item.children && (
              <ul>
                {item.children.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      className={`toc-sub${active === c.id ? ' is-active' : ''}`}
                      aria-current={active === c.id ? 'location' : undefined}
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
