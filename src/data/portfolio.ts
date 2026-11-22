// Sitedeki tüm içerik tek yerden yönetilir. Metinleri buradan güncelleyebilirsin.

export const profile = {
  name: 'Sami Yıldız',
  // Giriş başlığı: "Sami Yıldız | Full Stack Developer | Web Security"
  roles: ['Full Stack Developer', 'Web Security'],
  // Giriş açıklaması
  pitch: [
    'Modern web teknolojileri ve backend mimarileri konusunda deneyimli full-stack yazılım geliştirici.',
    'Yazılım mühendisliği temellerini, application security ve secure coding standartlarındaki pratik bilgiyle birleştirir.',
  ],
  email: 'samiylz83@gmail.com',
  location: 'İstanbul, Türkiye',
  github: 'https://github.com/sami373761',
  linkedin: 'https://www.linkedin.com/in/sami-yildiz/',
  lastUpdated: 'Kasım 2026',
};

export interface Project {
  title: string;
  summary: string;
  stack: string[];
  logo?: string; // Başlığın yanında küçük gösterilir
  logoInvert?: boolean; // Siyah logolar koyu kartta görünsün diye beyaza çevrilir
  repoUrl?: string;
  liveUrl?: string;
  // Maddeler: mimari / veritabanı / performans kararları
  points?: string[];
}

// Projeler 2x2 ızgarada gösterilir; 4'ten az proje varsa kalan hücreler boş kalır
export const PROJECT_SLOTS = 4;

export const projects: Project[] = [
  {
    title: 'RecoVision',
    summary:
      'Kullanıcıların izleme ve okuma alışkanlıklarını analiz edip görselleştiren, yapay zekâ destekli chatbot ile öneri sunan içerik keşif platformu.',
    stack: ['Python', 'Django', 'AWS S3', 'Google Cloud'],
    logo: '/recovision-logo.svg',
    repoUrl: 'https://github.com/sami373761/RecoVision2/tree/master',
    points: [
      'Medya dosyaları AWS S3’te, uygulama Google Cloud Run’da container olarak çalışıyor',
      'Harici içerik API’ları ile beslenen öneri katmanı',
    ],
  },
  {
    title: 'Tempus',
    summary:
      'Tek oyunculu tarih tahmin modları ve çevrimiçi eşleşme sistemiyle canlı birebir düellolar sunan, çok dilli kronoloji oyunu.',
    stack: ['Next.js', 'PostgreSQL', 'Cloudflare R2', 'Oracle Cloud'],
    logo: '/logo.svg',
    repoUrl: 'https://github.com/sami373761/TempusGame',
    liveUrl: 'https://tempusplay.com',
    points: [
      'Medya Cloudflare R2’de, oyun ve eşleşme verileri Supabase PostgreSQL’de',
      'Cevapları istemciden gizleyen, maç hakemliği veritabanı katmanında yürütülen yapı',
    ],
  },
  {
    title: 'Whisper Subtitle Studio',
    summary:
      'Whisper tabanlı konuşma tanıma altyapısı üzerine kurulu, içeriği senkronize bir şekilde altyazı üzerinden kontrol etmeyi sağlayan arayüz.',
    // TODO: arayüz teknolojisi etiketlere eklenecek
    stack: ['Python', 'Shell'],
    repoUrl: 'https://github.com/sami373761/whisper-subtitle-studio',
    // GEÇİCİ: maddeler arayüzün kendi tekniğine göre yeniden yazılacak
    points: [
      'Modelin dikkat ağırlıklarını sesle hizalayarak her kelimenin başlangıç ve bitiş zamanını çıkarma',
      'Ses aktivitesi tespitiyle sessiz ve müzikli bölümlerde hatalı altyazı üretimini engelleme',
    ],
  },
];

// Henüz hazır olmayan projeler: son kartta, on/off anahtarıyla aralarında geçiş yapılır
export const upcomingProjects: Project[] = [
  {
    title: 'MasadaKasa',
    summary:
      'İşletmelerin tek QR kodla menü yayınlayıp ödenen siparişleri mutfağa ve panele düşürdüğü sipariş ve kasa platformu.',
    points: [
      'React arayüzü ve Node sunucusu kendi sunucumuzda Caddy arkasında, veriler PostgreSQL’de',
      'JWT ile rol tabanlı personel girişi (Yönetici, Garson, Kasiyer) ve .NET Dapper API’si',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', '.NET', 'Caddy'],
    logo: '/ikon-siyah.svg',
    logoInvert: true,
  },
  {
    title: 'StarDev',
    summary:
      'Yazılımcıya planlamadan yayına kadar her aşamada çalışma alanı ve rehberlik sunan proje geliştirme platformu.',
    points: [
      'Ürün tanımından bakıma 5 aşamalı yol haritası, 3 seviyeli görev listeleri ve mentorluk kartları',
      'Notlar, görevler, dosyalar, ERD çizimi ve mimari karar kayıtları (ADR) tek çalışma alanında',
    ],
    stack: ['Next.js'],
    logo: '/alm-color.svg',
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string; // GG.AA.YYYY formatı, örn. "15.09.2025 – 30.10.2025"
  points: string[];
}

// Ters kronolojik sıra (en yeni en üstte)
export const experience: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'Enez Yazılım',
    location: 'İstanbul',
    period: '05.10.2026 – Güncel',
    points: [
      'Startup projesi MasadaKasa’nın uçtan uca geliştirilmesinde yer alıyorum.',
      'React arayüzü ve .NET Dapper ile API katmanını geliştiriyorum.',
    ],
  },
  {
    role: 'Uluslararası Stajyer',
    company: 'Human Ports',
    location: 'Sırbistan',
    period: '03.2026 – 04.2026',
    points: [
      'Şirketler hukuku ve operasyonel yönetim süreçlerinde bulundum.',
      'Proje yönetimi ve ekip içi iş akışı uygulamalarına dahil oldum.',
    ],
  },
  {
    role: 'Bilgi Teknolojileri Stajyeri',
    company: 'TNC Group',
    location: 'İstanbul',
    period: '15.09.2025 – 30.10.2025',
    points: [
      'Python ile otomasyon scriptlerinin geliştirilmesinde görev aldım.',
      'Excel ile veri yönetimi ve raporlama süreçlerinde yer aldım.',
    ],
  },
  {
    role: 'Web Geliştirme Stajyeri',
    company: 'Pantone Creative',
    location: 'İstanbul',
    period: '20.07.2024 – 30.08.2024',
    points: [
      'React ve Node.js projelerinde full stack geliştirmede yer aldım.',
      'API katmanlarının geliştirilmesine katkı sağladım.',
    ],
  },
];

export const education = [
  {
    school: 'Haliç Üniversitesi',
    location: 'İstanbul',
    degree: 'Yazılım Mühendisliği (İngilizce) · Tam Burslu',
    period: '2021 – 2026',
    // Freelance çalışmalar ayrı kayıt yerine okul başlığının altında anlatılır
    points: [
      'Bu süreçte farklı markalar için freelance projeler yürüttüm.',
      'Bağımsız web ve uygulama projeleri geliştirdim.',
      'Bug bounty programları kapsamında web uygulama güvenliği üzerine çalışmalar yürüttüm.',
    ],
  },
];

// note: etiketin yanında gösterilen kısa ibare (örn. seviye)
export type SkillItem = string | { name: string; note: string };

export const skills: { category: string; items: SkillItem[] }[] = [
  { category: 'Languages', items: ['Bash', 'Python', 'C++', 'JavaScript', 'PHP'] },
  { category: 'Frontend', items: ['React', 'Next.js'] },
  { category: 'Backend & Cloud', items: ['Node.js', 'Django', 'REST API', 'AWS', 'Google Cloud'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL'] },
  { category: 'Security / DevOps', items: ['Web App Pentest', 'Docker', 'Linux', 'Nginx', 'Git'] },
];

export const about =
  'Haliç Üniversitesi (İngilizce, tam burslu) Yazılım Mühendisliği mezunuyum. Lisans sürecimde web ajansı ve yurt dışı stajlarım kapsamında pratik sektör deneyimi edindim. Modern JavaScript ekosistemleri, web teknolojileri ve backend mimarileri alanında tecrübe sahibi bir full-stack yazılım geliştiriciyim. Yazılım mühendisliği temellerimi güvenli kodlama standartları ve uygulama güvenliği pratikleriyle destekliyorum. Responsive web uygulamaları geliştirmenin yanı sıra, dağıtık sistemler ve cloud mimarileri üzerine teknik yetkinliğimi artırmaya devam ediyorum.';

export const certificates = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    logo: '/aws-practitioner.png',
    url: 'https://www.credly.com/badges/5fae1761-128f-49e5-8344-17132b32f6f9',
  },
  {
    name: 'EF SET English Certificate · B2 Upper Intermediate',
    issuer: 'EF Education First',
    logo: '/efset.png',
    url: 'https://cert.efset.org/en/Cmb9M4',
  },
];
