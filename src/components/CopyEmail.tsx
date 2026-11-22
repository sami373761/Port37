'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      className="copy-email"
      onClick={copy}
      aria-label={copied ? 'E-posta kopyalandı' : 'E-posta adresini kopyala'}
      title={copied ? 'Kopyalandı' : 'Kopyala'}
    >
      <span>{email}</span>
      <span className="copy-email-icon" aria-live="polite">
        {copied ? <CheckIcon /> : <CopyIcon />}
      </span>
    </button>
  );
}
