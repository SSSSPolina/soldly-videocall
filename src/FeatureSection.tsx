import React from 'react';

const PURPLE = '#6B2EFF';
const DARK = '#000852';

function CrmMockup() {
  let tagFlySeq = 0;
  const nextFlyIdx = () => Math.min(tagFlySeq++, 4);

  return (
    <>
      <style>{`
        @keyframes crmFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        /* Десктоп: плашки «вилітають» вправо (як раніше) */
        @keyframes tagFly0 {
          0%   { opacity: 0; transform: translate3d(-6px, 2px, 0) scale(0.96); }
          10%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          40%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          100% { opacity: 0; transform: translate3d(200px, -12px, 0) scale(0.35); }
        }
        @keyframes tagFly1 {
          0%   { opacity: 0; transform: translate3d(-6px, 2px, 0) scale(0.96); }
          10%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          40%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          100% { opacity: 0; transform: translate3d(220px, -18px, 0) scale(0.32); }
        }
        @keyframes tagFly2 {
          0%   { opacity: 0; transform: translate3d(-6px, 2px, 0) scale(0.96); }
          10%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          40%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          100% { opacity: 0; transform: translate3d(240px, -10px, 0) scale(0.3); }
        }
        @keyframes tagFly3 {
          0%   { opacity: 0; transform: translate3d(-6px, 2px, 0) scale(0.96); }
          10%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          40%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          100% { opacity: 0; transform: translate3d(260px, -22px, 0) scale(0.28); }
        }
        @keyframes tagFly4 {
          0%   { opacity: 0; transform: translate3d(-6px, 2px, 0) scale(0.96); }
          10%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          40%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          100% { opacity: 0; transform: translate3d(230px, -14px, 0) scale(0.3); }
        }
        /* Мобілка: плашки залітають у середину папки (без вильоту за межі), під шаром зображення */
        @keyframes tagIntoCrm {
          0%   { opacity: 0; transform: translate3d(-12px, 4px, 0) scale(0.92); }
          10%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          40%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          75%  { opacity: 0.85; transform: translate3d(
            calc(var(--to-x) * var(--reach-x) * 0.82),
            calc(var(--to-y) * var(--reach-y) * 0.82),
            0
          ) scale(0.32); }
          100% { opacity: 0; transform: translate3d(
            calc(var(--to-x) * var(--reach-x)),
            calc(var(--to-y) * var(--reach-y)),
            0
          ) scale(0.07); }
        }
        .crm-floating-tag {
          will-change: transform, opacity;
        }
        @media (min-width: 768px) {
          .crm-floating-tag[data-fly="0"] { animation: tagFly0 3.2s ease-in-out infinite; }
          .crm-floating-tag[data-fly="1"] { animation: tagFly1 3.2s ease-in-out infinite; }
          .crm-floating-tag[data-fly="2"] { animation: tagFly2 3.2s ease-in-out infinite; }
          .crm-floating-tag[data-fly="3"] { animation: tagFly3 3.2s ease-in-out infinite; }
          .crm-floating-tag[data-fly="4"] { animation: tagFly4 3.2s ease-in-out infinite; }
        }
        @media (max-width: 767px) {
          .crm-floating-tag {
            --to-x: var(--mob-x, 0px);
            --to-y: calc(var(--mob-y, 0px) + var(--mob-y-extra, 0px));
            /* reach ~0.9: майже до центру папки; моб. Y задаємо з «підлогою», бо min(px,vh) давав занадто мало */
            --reach-x: 0.78;
            --reach-y: 0.88;
            position: relative;
            z-index: 6;
            animation: tagIntoCrm 4.2s ease-in-out infinite;
          }
          .crm-mockup-mobile { overflow: visible; --reach-x: 0.78; --reach-y: 0.88; }
          .crm-tag-line { padding-left: 0 !important; }
          .crm-floating-tag { white-space: normal !important; max-width: min(340px, calc(100vw - 2rem)); text-align: center; font-size: 12px !important; padding: 8px 14px !important; line-height: 1.35; }
        }
      `}</style>
      <div
        className="crm-mockup-mobile flex max-md:flex-col md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-[72px] lg:px-10 items-center"
        style={{
          maxWidth: 1100, margin: '0 auto', padding: '0 16px', position: 'relative', gap: 40,
          ['--mob-y-extra' as string]: 'clamp(72px, 12vh, 120px)',
        }}
      >

        {/* Фіолетовий blob */}
        <div style={{
          position: 'absolute', right: '10%', top: '30%', transform: 'translateY(-50%)',
          width: 'min(280px, 70vw)', height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,46,255,0.22) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* S-логотип — великий */}
        <div className="z-[1] max-md:z-[4] shrink-0 max-md:order-2 md:order-1" style={{ animation: 'crmFloat 4s ease-in-out infinite' }}>
          <img src="/soldly-s-logo.png" alt="Soldly" className="w-[min(200px,45vw)] h-[min(200px,45vw)] sm:w-52 sm:h-52 md:w-[260px] md:h-[260px] mx-auto object-contain" />
        </div>

        {/* Теги — десктоп: виліт вправо; мобілка: в папку CRM */}
        <div className="flex-1 z-[1] max-md:z-[6] relative flex flex-col gap-3 sm:gap-3.5 py-2 px-2 md:px-6 max-md:order-1 md:order-2 w-full max-w-lg md:max-w-none max-md:overflow-visible">
          {[
            {
              row: [
                { label: "Ім'я: Василь", delay: '0s', desk: { x: '128px', y: '22px' }, mob: { x: '0px', y: 'max(400px, min(620px, 82vh))' } },
                { label: 'Місто: Львів', delay: '0.35s', desk: { x: '152px', y: '26px' }, mob: { x: '0px', y: 'max(385px, min(600px, 79vh))' } },
              ],
            },
            { label: 'Продукт: навушники PROJ', delay: '0.65s', desk: { x: '168px', y: '44px' }, mob: { x: '2px', y: 'max(330px, min(530px, 70vh))' }, paddingLeft: 60 },
            { label: 'Бюджет: 5000 грн', delay: '0.95s', desk: { x: '182px', y: '56px' }, mob: { x: '0px', y: 'max(285px, min(475px, 62vh))' }, paddingLeft: 0 },
            { label: 'Мета: подарунок дівчині', delay: '1.25s', desk: { x: '198px', y: '70px' }, mob: { x: '-2px', y: 'max(245px, min(420px, 54vh))' }, paddingLeft: 80 },
          ].map((item, i) => {
            const tagEl = (label: string, delay: string, mob: { x: string; y: string }, key: string) => {
              const fly = nextFlyIdx();
              return (
                <div
                  key={key}
                  className="crm-floating-tag"
                  data-fly={fly}
                  style={{
                    display: 'inline-block',
                    background: PURPLE,
                    color: 'white',
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    borderRadius: 999,
                    padding: '10px 22px',
                    boxShadow: '0 4px 20px rgba(107,46,255,0.28)',
                    whiteSpace: 'nowrap' as const,
                    animationDelay: delay,
                    ['--mob-x' as string]: mob.x,
                    ['--mob-y' as string]: mob.y,
                  }}
                >
                  {label}
                </div>
              );
            };
            if ('row' in item && item.row) {
              const rows = item.row;
              return (
                <div key={i} className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {rows.map((r, ri) => tagEl(r.label, r.delay, r.mob, `${i}-${ri}`))}
                </div>
              );
            }
            const single = item as { label: string; delay: string; desk: { x: string; y: string }; mob: { x: string; y: string }; paddingLeft: number };
            return (
              <div key={single.label + i} className="crm-tag-line flex justify-center md:justify-start" style={{ paddingLeft: single.paddingLeft }}>
                {tagEl(single.label, single.delay, single.mob, String(i))}
              </div>
            );
          })}
        </div>

        {/* CRM папка — велика */}
        <div className="max-md:order-3 md:order-3 shrink-0 z-[1] max-md:z-20 max-md:relative w-full max-w-[min(340px,92vw)] mx-auto md:mx-0 md:w-auto" style={{ animation: 'crmFloat 4s ease-in-out infinite', animationDelay: '1s', position: 'relative' }}>
          <img src="/crm-folder.png" alt="CRM" className="w-full h-auto object-contain block max-w-[340px] mx-auto" />
          <span style={{
            position: 'absolute', top: 'clamp(10px, 3vw, 16px)', left: 'clamp(16px, 5vw, 24px)',
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 'clamp(14px, 3.5vw, 17px)', fontWeight: 800,
            color: DARK, letterSpacing: '-0.3px',
          }}>ВАША CRM</span>
        </div>

      </div>
    </>
  );
}

function CalendarMockup() {
  const days = [
    { short: 'Пн', num: 13 },
    { short: 'Вт', num: 14 },
    { short: 'Ср', num: 15 },
    { short: 'Чт', num: 16 },
    { short: 'Пт', num: 17 },
    { short: 'Сб', num: 18 },
    { short: 'Нд', num: 19 },
  ];
  const hours = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00'];

  type CalEvent = { day: number; startRow: number; endRow: number; title: string; type: 'blue'|'green'|'purple'; sub?: string };
  const events: CalEvent[] = [
    { day: 0, startRow: 0, endRow: 4, title: 'Демо дзвінок', type: 'green', sub: '✓ Записано  Дивитись' },
    { day: 0, startRow: 5, endRow: 6, title: 'Зустріч з Поліною', type: 'purple', sub: '⚡ Автозапис  📹 Записати' },
    { day: 0, startRow: 6, endRow: 7, title: 'Онбординг клієнта', type: 'blue', sub: '14:00 - 15:00' },
    { day: 1, startRow: 1, endRow: 3, title: 'Презентація Touch', type: 'green', sub: '✓ Записано  Дивитись' },
    { day: 1, startRow: 4, endRow: 5, title: 'Дзвінок з Павлом', type: 'blue', sub: '12:00 - 13:00' },
    { day: 1, startRow: 5, endRow: 6, title: 'Weekly Meet', type: 'green', sub: '✓ Записано  Дивитись' },
    { day: 1, startRow: 7, endRow: 8, title: 'Фідбек сесія', type: 'purple', sub: '⚡ Автозапис  📹 Записати' },
    { day: 2, startRow: 0, endRow: 2, title: 'Discovery Call', type: 'green', sub: '✓ Записано  Дивитись' },
    { day: 2, startRow: 4, endRow: 5, title: 'Sync з командою', type: 'blue', sub: '12:00 - 13:00' },
    { day: 2, startRow: 7, endRow: 8, title: 'Демо продукту', type: 'purple', sub: '⚡ Автозапис  📹 Записати' },
    { day: 3, startRow: 2, endRow: 4, title: 'Зустріч з інвестором', type: 'green', sub: '✓ Записано  Дивитись' },
    { day: 3, startRow: 4, endRow: 5, title: 'Переговори з Touch', type: 'blue', sub: '12:00 - 13:00' },
    { day: 4, startRow: 1, endRow: 2, title: 'Стратегічний міт', type: 'green', sub: '✓ Записано  Дивитись' },
    { day: 4, startRow: 3, endRow: 5, title: 'Демо для Binotel', type: 'purple', sub: '⚡ Автозапис  📹 Записати' },
    { day: 4, startRow: 6, endRow: 7, title: 'Ревью менеджерів', type: 'blue', sub: '14:00 - 15:00' },
  ];

  const eventColors = {
    blue:   { bg: '#e8eeff', border: '#a5b4fc', text: '#3730a3' },
    green:  { bg: '#dcfce7', border: '#86efac', text: '#166534' },
    purple: { bg: '#f3e8ff', border: '#d8b4fe', text: '#6B2EFF' },
  };

  const ROW_H = 52;

  return (
    <div style={{
      background: 'white', borderRadius: 20,
      boxShadow: '0 24px 80px rgba(0,8,82,0.13)',
      border: '1px solid #eeedf5', overflow: 'hidden',
      fontFamily: "'Work Sans', sans-serif",
    }}>
      {/* Топ-бар */}
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #f0eff5', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' as const }}>
        <span style={{ fontSize: 12, color: '#5a5d8d', marginRight: 4 }}>☰ Записи 78</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: PURPLE, borderBottom: `2px solid ${PURPLE}`, paddingBottom: 2 }}>📅 Календар</span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 11, background: '#f0f9f3', color: '#166534', border: '1px solid #86efac', borderRadius: 6, padding: '4px 10px' }}>⚡ Автозапис</span>
        {['День', 'Тиждень'].map((t, i) => (
          <span key={i} style={{ fontSize: 11, color: '#5a5d8d', padding: '4px 8px', cursor: 'pointer' }}>{t}</span>
        ))}
        <button style={{ fontSize: 11, fontWeight: 600, color: 'white', background: PURPLE, border: 'none', borderRadius: 8, padding: '5px 12px', cursor: 'pointer' }}>+ Нова подія</button>
        <button style={{ fontSize: 11, fontWeight: 600, color: 'white', background: '#ef4444', border: 'none', borderRadius: 8, padding: '5px 12px', cursor: 'pointer' }}>🔴 Записати зараз</button>
        <span style={{ fontSize: 11, color: '#5a5d8d' }}>‹</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: DARK, background: '#f4f3f9', borderRadius: 6, padding: '4px 10px' }}>13 квіт. - 19 квіт.</span>
        <span style={{ fontSize: 11, color: '#5a5d8d' }}>›</span>
      </div>

      {/* Сітка */}
      <div className="max-md:overflow-x-auto max-md:overflow-y-hidden max-md:-mx-1 max-md:px-1 md:overflow-visible [-webkit-overflow-scrolling:touch]" style={{ display: 'flex', maxHeight: 420 }}>
        {/* Колонка годин */}
        <div style={{ width: 48, flexShrink: 0, borderRight: '1px solid #f0eff5' }}>
          <div style={{ height: 36 }} />
          {hours.map(h => (
            <div key={h} style={{ height: ROW_H, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: 8, paddingTop: 4 }}>
              <span style={{ fontSize: 10, color: '#b0aed0' }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Колонки днів */}
        {days.map((day, di) => (
          <div key={di} style={{ flex: '1 0 76px', borderRight: di < 6 ? '1px solid #f0eff5' : 'none', position: 'relative', minWidth: 76 }}>
            {/* Заголовок дня */}
            <div style={{
              height: 36, display: 'flex', flexDirection: 'column' as const,
              alignItems: 'center', justifyContent: 'center',
              background: di === 0 ? '#f4f2ff' : 'white',
              borderBottom: '1px solid #f0eff5',
            }}>
              <span style={{ fontSize: 10, color: '#8b8db0' }}>{day.short}</span>
              <span style={{ fontSize: 13, fontWeight: di === 0 ? 700 : 400, color: di === 0 ? PURPLE : DARK }}>{day.num}</span>
            </div>
            {/* Слоти */}
            {hours.map((_, hi) => (
              <div key={hi} style={{ height: ROW_H, borderBottom: '1px solid #f8f7fc', position: 'relative' }}>
                {hi === 4 && di === 0 && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#ef4444', zIndex: 3 }} />
                )}
              </div>
            ))}
            {/* Події */}
            {events.filter(e => e.day === di).map((ev, ei) => {
              const c = eventColors[ev.type];
              return (
                <div key={ei} style={{
                  position: 'absolute',
                  top: 36 + ev.startRow * ROW_H + 2,
                  height: (ev.endRow - ev.startRow) * ROW_H - 4,
                  left: 2, right: 2,
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  borderRadius: 6,
                  padding: '3px 5px',
                  overflow: 'hidden',
                  zIndex: 2,
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: c.text, lineHeight: 1.3 }}>{ev.title}</div>
                  {ev.sub && <div style={{ fontSize: 9, color: c.text, opacity: 0.8, marginTop: 2, lineHeight: 1.3 }}>{ev.sub}</div>}
                </div>
              );
            })}
          </div>
        ))}
      </div>

    </div>
  );
}

const FeatureSection: React.FC = () => (
  <div>

    {/* ── СЕКЦІЯ 1: Календар ── */}
    <section className="max-md:py-12 max-md:px-4 md:py-[100px] md:px-12 overflow-hidden" style={{ background: 'linear-gradient(135deg, #5b2fd4 0%, #7c4dff 50%, #a97aff 100%)' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center max-md:gap-10 lg:gap-[72px]">

        {/* Ліво — компонент календаря */}
        <div className="w-full max-w-[580px] lg:flex-[0_0_580px] lg:max-w-none mx-auto lg:mx-0 relative shrink-0">
          <div style={{
            position: 'absolute', inset: -30,
            background: 'radial-gradient(ellipse at center, rgba(107,46,255,0.25) 0%, transparent 70%)',
            zIndex: 0, pointerEvents: 'none',
            filter: 'blur(30px)',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <CalendarMockup />
          </div>
        </div>

        {/* Право — текст */}
        <div className="w-full min-w-0 text-center lg:text-left">
          <span style={{
            fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 700,
            color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.18)', borderRadius: 6,
            padding: '4px 12px', textTransform: 'uppercase' as const,
            letterSpacing: '0.5px', display: 'inline-block', marginBottom: 24,
          }}>Автозапис зустрічей</span>
          <h2 style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.15,
            color: 'white', marginBottom: 20,
          }}>
            Записуйте всі ваші зустрічі автоматично — просто{' '}
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>підключіть календар</span>
          </h2>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 16 }}>
            Soldly Meet автоматично приєднується до кожного відеодзвінка з вашого Google або Outlook Calendar — без зайвих дій з вашого боку.
          </p>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 32 }}>
            Жодна зустріч не залишиться без аналізу. Після дзвінка — готовий звіт, нотатки та задачі в CRM автоматично.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14, marginBottom: 36 }}>
            {[
              { icon: '📅', text: 'Підключення Google та Outlook Calendar' },
              { icon: '🤖', text: 'Автоматичне приєднання бота до зустрічі' },
              { icon: '📝', text: 'Транскрипція, аналіз та задачі після кожного дзвінка' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 16, flexShrink: 0,
                }}>{item.icon}</span>
                <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 15, color: 'white', fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
          <button className="w-full md:w-auto max-w-md mx-auto lg:mx-0" style={{
            fontFamily: "'Work Sans', sans-serif", fontSize: 15, fontWeight: 600,
            color: PURPLE, background: 'white', borderRadius: 999,
            padding: '14px 32px', border: 'none', cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          }}>Дізнатись більше</button>
        </div>

      </div>
    </section>

    {/* ── СЕКЦІЯ 2: Дашборд аналітики менеджерів ── */}
    <section className="max-md:py-12 max-md:px-4 md:py-[100px] md:px-12 bg-[#f8f7fc] border-t border-[#f0eff5]">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Заголовок */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 700, color: PURPLE, background: '#f0ebff', borderRadius: 6, padding: '4px 12px', textTransform: 'uppercase' as const, letterSpacing: '0.5px', display: 'inline-block', marginBottom: 20 }}>Аналітика команди</span>
          <h2 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 700, letterSpacing: '-2px', lineHeight: 1.1, color: DARK, marginBottom: 20 }}>
            Контролюйте роботу менеджерів<br />
            <span style={{ color: PURPLE }}>за кастомними параметрами в одному дашборді</span>
          </h2>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 17, color: '#5a5d8d', lineHeight: 1.65, maxWidth: 620, margin: '0 auto' }}>
            Більше не потрібно слухати кожен дзвінок — AI оцінює кожного менеджера по ключових навичках і показує де втрачаються угоди.
          </p>
        </div>

        {/* Таблиця дашборду */}
        <div style={{
          background: 'white',
          borderRadius: 20,
          boxShadow: '0 12px 48px rgba(0,8,82,0.10)',
          border: '1px solid #eeedf5',
          overflow: 'hidden',
        }}>
          {/* Хедер таблиці */}
          {/* Хедер з фіолетовим градієнтом */}
          <div style={{
            background: 'linear-gradient(90deg, #7c3aed 0%, #6B2EFF 100%)',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap' as const,
            gap: 12,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 18 }}>🏆</span>
              <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 16, fontWeight: 700, color: 'white' }}>Аналітика Ефективності</span>
              {['Менеджери', 'Відділи'].map((t, i) => (
                <button key={i} style={{
                  fontFamily: "'Work Sans', sans-serif", fontSize: 13, fontWeight: 600,
                  color: i === 0 ? PURPLE : 'rgba(255,255,255,0.8)',
                  background: i === 0 ? 'white' : 'transparent',
                  border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.3)',
                  borderRadius: 8, padding: '5px 16px', cursor: 'pointer',
                }}>{t}</button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {[
                { label: 'Тип дзвінка: Презентація продукту', icon: '↓' },
                { label: '📅 Всі відділи', icon: '↓' },
              ].map((btn, i) => (
                <button key={i} style={{
                  fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 500,
                  color: 'white', background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)', borderRadius: 8,
                  padding: '6px 12px', cursor: 'pointer',
                }}>{btn.label} {btn.icon}</button>
              ))}
              <button style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'white', fontSize: 14, cursor: 'pointer',
              }}>⚙</button>
            </div>
          </div>

          {/* Колонки */}
          <div style={{ overflowX: 'auto' as const }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 900 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f0eff5' }}>
                  {['Менеджер', 'Загальна Оцінка', 'Презентація', 'Пропозиція бонусу', 'Чіткість умов', 'Підсумок розмови', 'Закриття угоди', 'Згадка конт.'].map((col, i) => (
                    <th key={i} style={{
                      fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 600,
                      color: '#8b8db0', padding: '12px 16px',
                      textAlign: i === 0 ? 'left' as const : 'center' as const,
                      whiteSpace: 'nowrap' as const,
                    }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Dmytro Lytvyn',          calls: 1,  total: 80.0, totalColor: '#22c55e', scores: [0, 100, 60, 100, 100, 60], avatarBg: '#e0d4ff', initials: 'DL' },
                  { name: 'Дмитро Федько',           calls: 42, total: 52.7, totalColor: '#f59e0b', scores: [33, 8, 35, 44, 50, 59],  avatarBg: '#fde8c8', initials: 'ДФ' },
                  { name: 'Тупко Віктор Сергійович', calls: 29, total: 43.2, totalColor: '#f59e0b', scores: [14, 11, 20, 40, 42, 53], avatarBg: '#d4f0e0', initials: 'ТВ' },
                  { name: 'Марія Семенишин',         calls: 52, total: 42.1, totalColor: '#f59e0b', scores: [9, 0, 16, 34, 35, 58],   avatarBg: '#fdd4d4', initials: 'МС' },
                  { name: 'Яна Храпко',              calls: 8,  total: 41.4, totalColor: '#f59e0b', scores: [13, 0, 28, 23, 23, 60],  avatarBg: '#d4e8fd', initials: 'ЯХ' },
                ].map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: '1px solid #f8f7fc', transition: 'background 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#fafafe')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'white')}
                  >
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                          width: 34, height: 34, borderRadius: '50%',
                          background: row.avatarBg,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, fontWeight: 700, color: '#3d3f6e', flexShrink: 0,
                          fontFamily: "'Work Sans', sans-serif",
                        }}>{row.initials}</div>
                        <div>
                          <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, fontWeight: 600, color: DARK }}>{row.name}</div>
                          <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 11, color: '#b0aed0' }}>{row.calls} дзвінків</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' as const }}>
                      <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 15, fontWeight: 700, color: row.totalColor }}>{row.total}%</span>
                    </td>
                    {row.scores.map((score, si) => {
                      const bg = score >= 80 ? '#dcfce7' : score >= 40 ? '#fef9c3' : '#fee2e2';
                      const color = score >= 80 ? '#16a34a' : score >= 40 ? '#b45309' : '#dc2626';
                      return (
                        <td key={si} style={{ padding: '14px 16px', textAlign: 'center' as const }}>
                          <span style={{
                            fontFamily: "'Work Sans', sans-serif", fontSize: 13, fontWeight: 600,
                            color, background: bg, borderRadius: 6, padding: '4px 10px',
                            display: 'inline-block', minWidth: 40,
                          }}>{score}%</span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  </div>
);

export const CrmSection: React.FC = () => (
  <section className="max-md:py-12 max-md:pt-16 max-md:overflow-visible md:py-[100px] md:pt-[100px] bg-white border-t border-[#f0eff5]">
    <div className="text-center max-md:mb-10 md:mb-16 px-4">
      <h2 style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 'clamp(22px, 5.5vw, 48px)',
        fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.12,
        color: DARK, marginBottom: 16, textTransform: 'uppercase' as const,
      }}>
        Передавайте аналітику <span style={{ color: PURPLE }}>з Soldly в CRM</span>
        <br className="hidden md:inline" />
        <span className="md:hidden"> </span>автоматично
      </h2>
      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 16, color: '#8b8db0', maxWidth: 480, margin: '0 auto' }}>
        Поля заповнюються самі, а менеджери зосереджуються на продажах.
      </p>
    </div>
    <CrmMockup />
  </section>
);

export default FeatureSection;
