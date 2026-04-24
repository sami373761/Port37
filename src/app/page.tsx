import Image from 'next/image';
import Link from 'next/link';
import { getAllCards } from '@/lib/db';
import MatrixRain from '@/components/MatrixRain';

export const dynamic = 'force-dynamic';

export default function Home() {
  const cards = getAllCards();

  return (
    <div className="app-wrapper">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <Image 
          src="/profile.jpg" 
          alt="Sami Yıldız" 
          width={260} 
          height={260} 
          className="profile-img"
          priority
        />
        
        <div className="sidebar-title">
          <h1>Sami <span>Yıldız</span></h1>
          <p>Siber Güvenlik Uzmanı <br/> Penetration Tester</p>
        </div>

        <nav className="sidebar-nav">
          <Link href="#hakkimda">Hakkımda</Link>
          <Link href="#tecrube">Tecrübe</Link>
          <Link href="#sertifikalar">Sertifikalar</Link>
          <Link href="#projeler">Projeler</Link>
          <Link href="#iletisim">İletişim</Link>
        </nav>

        <div className="sidebar-footer">
          <p>© 2026 Sami Yıldız</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content animate-fade-in">
        
        {/* HAKKIMDA */}
        <section id="hakkimda" className="section">
          <h2 className="section-title">&gt; Hakkımda</h2>
          <div className="content-box">
            <p>
              Haliç Üniversitesi Yazılım Mühendisliği bölümünden İngilizce eğitim diliyle ve tam burslu olarak mezun oldum. Yazılım geliştirme süreçlerinde frontend ve backend taraflarını kapsayan çeşitli full-stack projelerde yer alarak uygulama geliştirme deneyimi edindim.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Şu anda siber güvenlik alanında çalışmakta, özellikle penetrasyon testleri (pentesting) ve web uygulama güvenliği üzerine çalışmalar yürütmekteyim. Bug bounty odaklı güvenlik testlerinin yanı sıra SOC süreçleri, güvenlik mimarisi ve genel bilgi güvenliği yaklaşımlarıyla ilgili çalışmalarda yer alma ve bu alanlarda deneyim kazanma fırsatı buldum.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Ayrıca bulut teknolojileri ve yapay zeka alanlarına ilgi duymakta, bu teknolojilerin güvenlik boyutları dahil olmak üzere güncel gelişmeleri takip etmeye ve bu alanlarda yetkinliğimi artırmaya devam etmekteyim.
            </p>
          </div>
        </section>

        {/* TECRÜBE */}
        <section id="tecrube" className="section">
          <h2 className="section-title">&gt; Tecrübe</h2>
          <div className="content-box">
            <div className="timeline">
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">20.07.2024 – 30.08.2024</span>
                  <h3 className="timeline-title">Pantone Creative, İstanbul – Web Geliştirme Stajyeri</h3>
                  <p className="timeline-description">React, Node.js ve JavaScript teknolojileriyle geliştirilen projelerin süreçlerinde yer alındı; sistemin Frontend ve Backend işleyişi ile API katmanları üzerinde çalışıldı.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">15.09.2025 – 30.10.2025</span>
                  <h3 className="timeline-title">TNC Group, İstanbul – Bilgi Teknolojileri Stajyeri</h3>
                  <p className="timeline-description">Python ile temel programlama ve otomasyon scriptleri üzerine çalışıldı; Excel üzerinden veri yönetimi ve raporlama süreçleri yürütüldü.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">13.03.2026 / 23.03.2026</span>
                  <h3 className="timeline-title">Human Ports, Sırbistan – Uluslararası Stajyer</h3>
                  <p className="timeline-description">Proje geliştirme süreçlerinde yer alınarak; şirketler hukuku ve operasyonel yönetim aşamaları üzerinde çalışıldı. Proje yönetimi ve ekip içi iş akış süreçlerinin uygulamaları yürütüldü.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">2021 – Güncel</span>
                  <h3 className="timeline-title">Freelance Projeler</h3>
                  <p className="timeline-description">Farklı markalar için web sitesi ve uygulama geliştirme süreçleri yürütülmekte; ayrıca sistem güvenlik açıklarının tespiti amacıyla bug bounty kapsamında freelance çalışmalara devam edilmektedir.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERTİFİKALAR */}
        <section id="sertifikalar" className="section">
          <h2 className="section-title">&gt; Sertifikalar</h2>
          <div className="matrix-container" style={{ minHeight: '520px', display: 'flex' }}>
            <MatrixRain />
            <div className="matrix-overlay">
              <div className="contact-matrix-grid">
                
                {/* COMPTIA SECURITY+ */}
                <div className="contact-inner-card cert-card">
                  <div className="cert-logo-container">
                    <img src="/comptia-security.png" alt="CompTIA Security+" className="cert-logo" />
                  </div>
                  <h3>CompTIA Security+</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', flexGrow: 1 }}>
                    Siber güvenlik dünyasının temel taşı sayılan bu sertifika ile ağ güvenliği, uyumluluk, operasyonel güvenlik ve tehdit yönetimi alanlarında global standartlarda yetkinlik kanıtlanmıştır.
                  </p>
                  <a href="#" className="btn">[ SERTİFİKAYI DOĞRULA ]</a>
                </div>

                {/* AWS CLOUD PRACTITIONER */}
                <div className="contact-inner-card cert-card">
                  <div className="cert-logo-container">
                    <img src="/aws-practitioner.png" alt="AWS Certified Cloud Practitioner" className="cert-logo" />
                  </div>
                  <h3>AWS Cloud Practitioner</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', flexGrow: 1 }}>
                    AWS hizmetleri, bulut bilişim temelleri, güvenlik, fiyatlandırma ve mimari konularında temel düzeyde bilgi sahibi olduğunuzu doğrular.
                  </p>
                  <a href="https://www.credly.com/badges/5fae1761-128f-49e5-8344-17132b32f6f9" target="_blank" rel="noopener noreferrer" className="btn">
                    [ SERTİFİKAYI DOĞRULA ]
                  </a>
                </div>

                {/* EF-SET SERTİFİKASI */}
                <div className="contact-inner-card cert-card cert-card-compact" style={{ gridColumn: 'span 2' }}>
                  <h3>EF-SET İngilizce Sertifikası</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', flexGrow: 1 }}>
                    B2 Upper Intermediate (Orta Üstü) seviye. Karmaşık metinleri anlama, akıcı iletişim kurma ve teknik konularda detaylı fikir alışverişinde bulunabilme yetkinliğini temsil eder.
                  </p>
                  <a href="https://cert.efset.org/en/Cmb9M4" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: 'fit-content' }}>[ SERTİFİKAYI DOĞRULA ]</a>
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* PROJELER */}
        <section id="projeler" className="section">
          <h2 className="section-title">&gt; Projeler</h2>
          {cards.length === 0 ? (
            <div className="empty-state">
              <p>&gt; ./system_scan --module=projects --status: NO_DATA_FOUND</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#666' }}>Henüz veritabanına eklenmiş bir proje bulunmuyor.</p>
            </div>
          ) : (
            <div className="cards-grid">
              {cards.map((card) => (
                <div key={card.id} className="card">
                  {card.imageUrl && (
                    <img src={card.imageUrl} alt={card.title} className="card-img" />
                  )}
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.description}</p>
                  
                  {card.tags && (
                    <div className="card-tags">
                      {card.tags.split(',').map(tag => (
                        <span key={tag} className="tag">{tag.trim()}</span>
                      ))}
                    </div>
                  )}
                  
                  <div className="card-meta">
                    <span suppressHydrationWarning>{card.date ? card.date : new Date(card.createdAt!).toLocaleDateString('tr-TR')}</span>
                    {card.link && card.link !== '#' ? (
                      <a href={card.link} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>
                        [ İNCELE ]
                      </a>
                    ) : card.link === '#' ? (
                      <span className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', cursor: 'not-allowed', opacity: 0.5 }}>
                        [ İNCELE ]
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim" className="section" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title">&gt; İletişim</h2>
          <div className="matrix-container" style={{ minHeight: '500px', display: 'flex' }}>
            <MatrixRain />
            <div className="matrix-overlay">
              <div className="contact-matrix-grid">
                
                {/* CARD 1: İLETIŞIM BILGILERI */}
                <div className="contact-inner-card">
                  <h3>İletişim Bilgileri</h3>
                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <span className="contact-info-label">E-Posta Adresi</span>
                      <span className="contact-info-value">samiylz83@gmail.com</span>
                    </div>
                    <div className="contact-info-item">
                      <span className="contact-info-label">Konum</span>
                      <span className="contact-info-value">İstanbul, Türkiye</span>
                    </div>
                  </div>
                </div>

                {/* CARD 2: BAĞLANTILAR */}
                <div className="contact-inner-card">
                  <h3>Bağlantılar</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Dijital dünyadaki varlığımı ve projelerimi aşağıdaki platformlar üzerinden takip edebilirsiniz.</p>
                  <div className="social-links-list">
                    <a href="https://github.com/sami373761" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', textAlign: 'left', paddingLeft: '1.5rem' }}>
                      &gt; GITHUB REPOSITORY
                    </a>
                    <a href="https://www.linkedin.com/in/sami-yildiz/" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', textAlign: 'left', paddingLeft: '1.5rem' }}>
                      &gt; LINKEDIN NETWORK
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
