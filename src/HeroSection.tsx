import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';

const bg = '/figma-assets/hero/bg.png?v=2';
const thumb1 = '/figma-assets/hero/thumb1.png';
const thumb2 = '/figma-assets/hero/thumb2.png';
const thumb3 = '/figma-assets/hero/thumb3.png';
const thumb4 = '/figma-assets/hero/thumb4.png';
const thumb5 = '/figma-assets/hero/thumb5.png';
const hubspot = '/figma-assets/hero/hubspot.svg';
const zoom = '/figma-assets/hero/zoom.svg';
const slack = '/figma-assets/hero/slack.svg';
const gmeet = '/figma-assets/hero/gmeet.svg';
const notion = '/figma-assets/hero/notion.svg';
const teams = '/figma-assets/hero/teams.svg';
const stars = '/figma-assets/hero/stars.svg';
const sendIcon = '/figma-assets/hero/send.svg';
const checkIcon = '/figma-assets/hero/check.svg';
const g2Star = '/figma-assets/hero/g2-star.svg';

const PURPLE = '#6B2EFF';

const meetings = [
  { thumb: thumb1, label: 'Заперечення', title: 'Як менеджер опрацьовував заперечення на відеодзвінку', date: '08/04/26', icons: [] },
  { thumb: thumb2, label: 'Готовність до покупки', title: 'Наскільки клієнт наблизився до покупки після Google Meet', date: '05/04/26', icons: [] },
  { thumb: thumb4, label: 'Відео демо', title: 'Чи всі переваги були висвітлені клієнту під час демо продукту?', date: '03/04/26', icons: [] },
  { thumb: thumb3, label: 'Задачі команди', title: 'Всі задачі з тижневого дзвінку вже поставлені співробітникам', date: '01/04/26', icons: [] },
  { thumb: thumb5, label: 'Огляд для клієнта', title: 'Відправте клієнту огляд розмови — він прийме рішення швидше', date: '30/03/26', icons: [] },
];

const MeetingCard: React.FC<{ thumb: string; label: string; title: string; date: string; icons: string[]; delay: number }> = ({
  thumb, label, title, delay,
}) => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      <style>{`
        @keyframes cardRise {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 210, flexShrink: 0, borderRadius: 14,
          boxShadow: hovered ? '0 12px 36px rgba(107,46,255,0.18)' : '0 2px 16px rgba(0,8,82,0.09)',
          background: 'white', overflow: 'hidden',
          display: 'flex', flexDirection: 'column' as const,
          opacity: visible ? 1 : 0,
          animation: visible ? `cardRise 0.55s cubic-bezier(0.22,1,0.36,1) both` : 'none',
          transform: hovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
          transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease',
          cursor: 'pointer',
        }}
      >
        <div style={{ height: 130, flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
          <img
            src={thumb} alt={title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(107,46,255,0.10) 0%, rgba(192,132,252,0.06) 100%)', mixBlendMode: 'overlay' }} />
        </div>
        <div style={{ padding: '10px 12px 14px', flex: 1, display: 'flex', flexDirection: 'column' as const }}>
          <span style={{
            fontFamily: "'Work Sans', sans-serif", fontSize: 9, fontWeight: 700,
            color: PURPLE, background: '#f0ebff', borderRadius: 4,
            padding: '2px 7px', letterSpacing: '0.3px', textTransform: 'uppercase' as const,
            display: 'inline-block', marginBottom: 7,
          }}>{label}</span>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 11.5, fontWeight: 500, color: '#000852', lineHeight: 1.5, margin: 0 }}>
            {title}
          </p>
        </div>
      </div>
    </>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Фоновий градієнт-зображення */}
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      {/* Легкий overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.18) 80%, rgba(255,255,255,0.4) 100%)' }}
      />

      <Navbar />

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative flex flex-col items-center text-center" style={{ paddingTop: 80, paddingLeft: 24, paddingRight: 24 }}>

        {/* Верхній бейдж */}
        <div
          className="inline-flex items-center gap-2 mb-6"
          style={{
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(107,46,255,0.2)',
            borderRadius: 999,
            padding: '6px 14px',
            boxShadow: '0 2px 12px rgba(107,46,255,0.08)',
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00d6ab', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, fontWeight: 600, color: PURPLE, letterSpacing: '-0.2px' }}>
            AI-нотатник для Zoom, Google Meet та Teams
          </span>
        </div>

        {/* ─── ЗАГОЛОВОК ─── */}
        <h1
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 'clamp(38px, 4.5vw, 64px)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-2.5px',
            color: '#000852',
            maxWidth: 1000,
            marginBottom: 20,
          }}
        >
          AI-аналіз ваших відеодзвінків.{' '}
          <span style={{ color: PURPLE }}>Як продавав менеджер і чи готовий клієнт купити.</span>
        </h1>

        {/* ─── ПІДЗАГОЛОВОК ─── */}
        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 20,
            fontWeight: 400,
            color: '#3d3f6e',
            letterSpacing: '-0.5px',
            lineHeight: 1.55,
            maxWidth: 700,
            marginBottom: 32,
          }}
        >
          Soldly Meet записує, транскрибує й аналізує кожну відеозустріч. <strong style={{ fontWeight: 600, color: '#000852' }}>Домовленості фіксуються в CRM автоматично</strong> — без ручних нотаток.
        </p>

        {/* ─── CTA ─── */}
        <div className="flex items-center gap-3 mb-10">
          <button
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 17,
              fontWeight: 600,
              color: 'white',
              background: PURPLE,
              borderRadius: 14,
              padding: '14px 32px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(107,46,255,0.35)',
              letterSpacing: '-0.3px',
            }}
          >
            Спробувати безкоштовно
          </button>
        </div>

        {/* ─── КАРТКИ ДЗВІНКІВ ─── */}
        <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
          {meetings.map((m, i) => (
            <MeetingCard key={i} {...m} delay={300 + i * 120} />
          ))}
        </div>



      </div>
    </div>
  );
};

export default HeroSection;
