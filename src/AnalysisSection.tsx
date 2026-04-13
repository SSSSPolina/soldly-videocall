import React, { useState } from 'react';

const PURPLE = '#6B2EFF';
const DARK = '#000852';

type BadgeColor = 'green' | 'orange' | 'blue';
const badgeStyle: Record<BadgeColor, { bg: string; text: string }> = {
  green:  { bg: '#e6f9f0', text: '#0d8a50' },
  orange: { bg: '#fff3e0', text: '#e65100' },
  blue:   { bg: '#e8f0ff', text: '#1a56db' },
};
const Badge: React.FC<{ label: string; color: BadgeColor }> = ({ label, color }) => (
  <span style={{
    fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 600,
    color: badgeStyle[color].text, background: badgeStyle[color].bg,
    borderRadius: 6, padding: '3px 10px', whiteSpace: 'nowrap',
  }}>{label}</span>
);

const MetricRow: React.FC<{ label: string; badge: string; color: BadgeColor; score?: string }> = ({ label, badge, color, score }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
    <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: '#3d3f6e' }}>{label}</span>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {score && <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: '#b0aed0' }}>{score}</span>}
      <Badge label={badge} color={color} />
    </div>
  </div>
);

// ─── КОНТЕНТ ТАБІВ ───

const TabOverview = () => (
  <div style={{ flex: 1, overflowY: 'auto' }}>
    {[
      { label: 'ОГЛЯД ЗУСТРІЧІ', text: 'Дмитро з Soldly AI провів демо-дзвінок для Павла — власника компанії з 20 менеджерами, які продають кав\'ярні самообслуговування Touch через телефонні та відеодзвінки. Телефонія — Binotel. Дмитро показав як платформа автоматично аналізує дзвінки менеджерів: транскрибує розмову, оцінює якість продажу, визначає готовність клієнта до покупки та фіксує домовленості в CRM. Павло зацікавлений — особливо у контролі "гарячих" відеодзвінків, де менеджери часто зливають угоди.' },
      { label: 'КЛЮЧОВІ ДОМОВЛЕНОСТІ', text: 'Soldly AI інтегрується з Binotel напряму — без зміни процесів команди. Платформа аналізуватиме як телефонні дзвінки, так і відеодзвінки менеджерів. Домовились: Дмитро надішле приклад готового аналізу реального дзвінку з продажу Touch + доступ до тестового кабінету на 7 днів для 3 менеджерів. Павло підключить запис дзвінків і дасть фідбек після першого тижня.' },
      { label: 'ПИТАННЯ ТА ВІДПОВІДІ', text: 'П: Чи бачу я де саме менеджер облажався на дзвінку? — В: Так, Soldly AI показує момент з таймкодом — де клієнт засумнівався, де менеджер не відпрацював заперечення, де змінилась емоція. П: А відеодзвінки теж аналізуються? — В: Так, повністю — транскрипція, оцінка менеджера, готовність клієнта, задачі. П: Як швидко підключитись до Binotel? — В: Інтеграція займає до 15 хвилин, ми допомагаємо.' },
    ].map((row, i) => (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', borderBottom: '1px solid #f0eff5' }}>
        <div style={{ padding: '18px 16px', borderRight: '1px solid #f0eff5' }}>
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 9.5, fontWeight: 700, color: '#b0aed0', letterSpacing: '0.8px', textTransform: 'uppercase' as const, lineHeight: 1.4, display: 'block' }}>{row.label}</span>
        </div>
        <div style={{ padding: '18px 20px' }}>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: '#3d3f6e', lineHeight: 1.65, margin: 0 }}>{row.text}</p>
        </div>
      </div>
    ))}
    <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr' }}>
      <div style={{ padding: '18px 16px', borderRight: '1px solid #f0eff5' }}>
        <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 9.5, fontWeight: 700, color: '#b0aed0', letterSpacing: '0.8px', textTransform: 'uppercase' as const }}>НАСТУПНІ КРОКИ</span>
      </div>
      <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          'Дмитро — надіслати приклад аналізу реального дзвінку з продажу кав\'ярні Touch;',
          'Дмитро — надати тестовий доступ для 3 менеджерів на 7 днів;',
          'Павло — підключити запис дзвінків через Binotel;',
          'Через 7 днів — зустріч-ревью: які інсайти отримали, що змінити в скриптах;',
          'Павло — рішення про підключення всіх 20 менеджерів.',
        ].map((text, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ width: 20, height: 20, borderRadius: '50%', background: PURPLE, flexShrink: 0, fontFamily: "'Work Sans', sans-serif", fontSize: 10, fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>{i + 1}</span>
            <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: '#3d3f6e', lineHeight: 1.6 }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TabGeneral = () => (
  <div style={{ flex: 1, padding: '24px 28px', overflowY: 'auto' }}>
    <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: '#3d3f6e', lineHeight: 1.7, marginBottom: 20 }}>
      Демо-дзвінок тривав 38 хвилин. Дмитро провів живу демонстрацію Soldly AI на прикладі реального дзвінку з продажу кав'ярні Touch. Павло активно залучався — ставив питання про конкретні кейси, де менеджери зливають угоди на відеодзвінках. Атмосфера — жива, зацікавлена.
    </p>
    <div style={{ background: '#f8f7fc', borderRadius: 12, padding: '16px 20px', marginBottom: 16 }}>
      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 11, fontWeight: 700, color: '#b0aed0', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 10 }}>МЕТРИКИ ДЗВІНКУ</p>
      {[
        { label: 'Тривалість', value: '38:14' },
        { label: 'Говорив Дмитро', value: '58%' },
        { label: 'Говорив Павло', value: '42%' },
        { label: 'Питань від Павла', value: '11' },
        { label: 'Заперечень', value: '3' },
      ].map((m, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: i < 4 ? '1px solid #f0eff5' : 'none' }}>
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: '#5a5d8d' }}>{m.label}</span>
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, fontWeight: 600, color: DARK }}>{m.value}</span>
        </div>
      ))}
    </div>
    <div style={{ background: '#f0ebff', borderRadius: 12, padding: '16px 20px' }}>
      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 600, color: PURPLE, marginBottom: 8 }}>✨ AI-висновок</p>
      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: '#3d3f6e', lineHeight: 1.65, margin: 0 }}>
        Висока залученість Павла — 11 питань, особлива увага до аналізу відеодзвінків та моментів де менеджери "зливають" угоди. Клієнт готовий до тесту. Рекомендується надіслати приклад аналізу з продажу Touch та запропонувати ревью через тиждень.
      </p>
    </div>
  </div>
);

const TabManager = () => (
  <div style={{ flex: 1, padding: '24px 28px', overflowY: 'auto' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
      <div style={{ width: 44, height: 44, borderRadius: '50%', background: PURPLE, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Work Sans', sans-serif", fontSize: 16, fontWeight: 700, color: 'white' }}>ДЛ</div>
      <div>
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 14, fontWeight: 700, color: DARK, margin: 0 }}>Дмитро Литвин</p>
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: '#8b8db0', margin: 0 }}>Account Executive · Soldly AI</p>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 22, fontWeight: 800, color: PURPLE }}>91</span>
        <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: '#b0aed0' }}>/100</span>
      </div>
    </div>
    {[
      { label: 'Підготовка до дзвінку', badge: 'Відмінна', color: 'green' as BadgeColor, score: '95/100' },
      { label: 'Виявлення болів клієнта', badge: 'Глибоке', color: 'green' as BadgeColor, score: '93/100' },
      { label: 'Презентація продукту', badge: 'Переконлива', color: 'green' as BadgeColor, score: '92/100' },
      { label: 'Робота із запереченнями', badge: 'Впевнено', color: 'green' as BadgeColor, score: '88/100' },
      { label: 'Закриття на наступний крок', badge: 'Добре', color: 'green' as BadgeColor, score: '87/100' },
      { label: 'Follow-up після дзвінку', badge: 'Потребує пришвидшення', color: 'orange' as BadgeColor, score: '74/100' },
    ].map((r, i) => <MetricRow key={i} {...r} />)}
    <div style={{ marginTop: 16, background: '#f0ebff', borderRadius: 10, padding: '12px 16px' }}>
      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 11, fontWeight: 700, color: PURPLE, marginBottom: 6 }}>💡 Рекомендація AI</p>
      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12.5, color: '#3d3f6e', lineHeight: 1.6, margin: 0 }}>Надіслати follow-up протягом 2 годин із прикладом аналізу реального дзвінку з продажу Touch та посиланням на тестовий кабінет. Поки інтерес гарячий.</p>
    </div>
  </div>
);

const TabClient = () => (
  <div style={{ flex: 1, padding: '24px 28px', overflowY: 'auto' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
      <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#e8f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Work Sans', sans-serif", fontSize: 16, fontWeight: 700, color: '#1a56db' }}>ПМ</div>
      <div>
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 14, fontWeight: 700, color: DARK, margin: 0 }}>Павло М.</p>
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: '#8b8db0', margin: 0 }}>Власник · Touch, 20 менеджерів</p>
      </div>
      <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 11, color: '#b0aed0', margin: 0 }}>Готовність до покупки</p>
        <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 22, fontWeight: 800, color: '#0d8a50' }}>78</span>
        <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: '#b0aed0' }}>/100</span>
      </div>
    </div>
    {[
      { label: 'Зацікавленість у продукті', badge: 'Дуже висока', color: 'green' as BadgeColor },
      { label: 'Готовність до тесту', badge: 'Готовий', color: 'green' as BadgeColor },
      { label: 'Готовність до рішення', badge: 'Після тесту', color: 'blue' as BadgeColor },
      { label: 'Бюджетна готовність', badge: 'Є', color: 'green' as BadgeColor },
      { label: 'Технічна готовність', badge: 'Binotel підключений', color: 'green' as BadgeColor },
    ].map((r, i) => <MetricRow key={i} {...r} />)}
    <div style={{ marginTop: 16 }}>
      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 10, fontWeight: 700, color: '#b0aed0', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 8 }}>БОЛІ ТА ПОТРЕБИ</p>
      {[
        'Менеджери часто зливають угоди на "гарячих" відеодзвінках — немає розуміння де і чому.',
        'Немає системного контролю якості дзвінків: слухати вручну 20 менеджерів нереально.',
        'Хоче бачити хто з менеджерів реально продає, а хто "ходить на роботу".',
        'Потрібна автоматична фіксація домовленостей після кожного дзвінку.',
      ].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'flex-start' }}>
          <span style={{ color: PURPLE, fontSize: 14, marginTop: 1, flexShrink: 0 }}>·</span>
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: '#3d3f6e', lineHeight: 1.6 }}>{t}</span>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 12, background: '#e6f9f0', borderRadius: 10, padding: '12px 16px' }}>
      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 11, fontWeight: 700, color: '#0d8a50', marginBottom: 6 }}>✅ Сигнали готовності</p>
      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12.5, color: '#3d3f6e', lineHeight: 1.6, margin: 0 }}>Павло сам запропонував підключити 3 менеджерів на тест. Сказав: "Якщо буде те, що ти показав — беремо всіх 20". Висока ймовірність закриття після тижневого тесту.</p>
    </div>
  </div>
);

const TabTasks = () => (
  <div style={{ flex: 1, padding: '24px 28px', overflowY: 'auto' }}>
    <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 11, fontWeight: 700, color: '#b0aed0', letterSpacing: '0.8px', textTransform: 'uppercase' as const, marginBottom: 16 }}>ЗАДАЧІ · 5 АКТИВНИХ</p>
    {[
      { num: 1, who: 'Дмитро Литвин', text: 'Надіслати Павлу приклад аналізу реального дзвінку з продажу кав\'ярні Touch', deadline: 'Сьогодні до 18:00', color: '#e65100', done: false },
      { num: 2, who: 'Дмитро Литвин', text: 'Надати тестовий доступ до Soldly AI для 3 менеджерів Павла на 7 днів', deadline: 'Сьогодні до 18:00', color: '#e65100', done: false },
      { num: 3, who: 'Павло М.', text: 'Підключити запис дзвінків через Binotel до Soldly AI', deadline: 'До завтра', color: '#1a56db', done: false },
      { num: 4, who: 'Дмитро Литвин', text: 'Провести ревью-дзвінок після 7 днів тесту — показати інсайти по менеджерах', deadline: 'Через 7 днів', color: '#8b8db0', done: false },
      { num: 5, who: 'Павло М.', text: 'Прийняти рішення щодо підключення всіх 20 менеджерів після ревью', deadline: 'Після ревью', color: '#8b8db0', done: false },
    ].map((task) => (
      <div key={task.num} style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', border: `2px solid ${PURPLE}`, flexShrink: 0, marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {task.done && <span style={{ fontSize: 10, color: PURPLE }}>✓</span>}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: DARK, fontWeight: 600, margin: '0 0 4px 0' }}>{task.text}</p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 11, color: '#8b8db0' }}>{task.who}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#d0cfdf', display: 'inline-block' }} />
            <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 11, color: task.color, fontWeight: 600 }}>{task.deadline}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const TABS = [
  { icon: '⊞', label: 'Огляд',           content: <TabOverview /> },
  { icon: '📋', label: 'Загальний\nогляд', content: <TabGeneral /> },
  { icon: '👤', label: 'Менеджер',        content: <TabManager /> },
  { icon: '◎',  label: 'Клієнт',          content: <TabClient /> },
  { icon: '✓',  label: 'Задачі (5)',       content: <TabTasks /> },
];

const AnalysisSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);

  return (
    <section style={{ background: '#f8f7fc', padding: '100px 24px' }}>

      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <h2 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 700, letterSpacing: '-2px', color: '#000852', lineHeight: 1.1, marginBottom: 16 }}>
          AI аналізує кожен дзвінок.{' '}
          <span style={{ color: '#6B2EFF' }}>Ви бачите повну картину.</span>
        </h2>
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 18, color: '#5a5d8d', maxWidth: 560, margin: '0 auto' }}>
          Після кожної зустрічі — готовий аналіз менеджера, клієнта, ключові домовленості та задачі.
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 20, alignItems: 'stretch', height: 620 }}>

        {/* ─── ЛІВА КАРТКА ─── */}
        <div style={{ flex: 1, background: 'white', borderRadius: 20, border: '1px solid #e8e7f0', boxShadow: '0 8px 40px rgba(0,8,82,0.07)', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 0 }}>

          {/* Хедер */}
          <div style={{ padding: '24px 28px', borderBottom: '1px solid #f0eff5' }}>
            <h3 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 12 }}>
              Демо-дзвінок: Soldly AI → Touch
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: '#8b8db0' }}>🕐 10.04.2026 11:00</span>
              <span style={{ color: '#ddddf0' }}>|</span>
              <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, fontWeight: 500, color: DARK }}>Дмитро Литвин · Павло М.</span>
              <span style={{ color: '#ddddf0' }}>|</span>
              <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 600, color: PURPLE, background: '#f0ebff', borderRadius: 8, padding: '4px 12px', cursor: 'pointer', border: '1px solid rgba(107,46,255,0.2)' }}>👤 + контакт</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {[1,2,3,4,5].map(i => <span key={i} style={{ fontSize: 16, color: '#d0cfdf' }}>☆</span>)}
              <span style={{ width: 1, height: 18, background: '#e0dff0', margin: '0 6px', display: 'inline-block' }} />
              {['✓','🔒','↻','⬆','✉','↗','🗑'].map((icon, i) => (
                <button key={i} style={{ width: 30, height: 30, borderRadius: 8, background: '#f6f5fa', border: '1px solid #eeedf5', cursor: 'pointer', fontSize: 13, color: i === 6 ? '#e57373' : '#5a5d8d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</button>
              ))}
            </div>
          </div>

          {/* Таби — клікабельні */}
          <style>{`
            @keyframes tabPulse {
              0%, 100% { background: transparent; color: #8b8db0; }
              50% { background: rgba(107,46,255,0.12); color: #6B2EFF; }
            }
            @keyframes hintBounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
          `}</style>
          <div style={{ position: 'relative' }}>
            {/* Підказка */}
            {hintVisible && (
              <div style={{
                position: 'absolute', top: -36, left: '50%', transform: 'translateX(-50%)',
                background: PURPLE, color: 'white', borderRadius: 8,
                padding: '5px 12px', fontSize: 11, fontFamily: "'Work Sans', sans-serif",
                fontWeight: 600, whiteSpace: 'nowrap', zIndex: 10,
                animation: 'hintBounce 1.5s ease-in-out infinite',
                boxShadow: '0 4px 12px rgba(107,46,255,0.35)',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <span>👇</span> Натисни щоб переглянути
                <div style={{
                  position: 'absolute', bottom: -5, left: '50%', transform: 'translateX(-50%)',
                  width: 0, height: 0,
                  borderLeft: '5px solid transparent', borderRight: '5px solid transparent',
                  borderTop: `5px solid ${PURPLE}`,
                }} />
              </div>
            )}
            <div style={{ padding: '0 8px', borderBottom: '2px solid #f0eff5', display: 'flex', background: 'white' }}>
            {TABS.map((tab, i) => (
              <button
                key={i}
                onClick={() => { setActiveTab(i); setHintVisible(false); }}
                style={{
                  flex: 1,
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 12.5, fontWeight: activeTab === i ? 700 : 500,
                  color: activeTab === i ? PURPLE : '#8b8db0',
                  background: activeTab === i ? 'rgba(107,46,255,0.06)' : 'transparent',
                  border: 'none',
                  borderBottom: activeTab === i ? `2px solid ${PURPLE}` : '2px solid transparent',
                  marginBottom: -2,
                  padding: '12px 6px',
                  cursor: 'pointer', display: 'flex', flexDirection: 'column' as const,
                  alignItems: 'center', gap: 3,
                  textAlign: 'center' as const, whiteSpace: 'pre-line' as const, lineHeight: 1.25,
                  transition: 'all 0.18s',
                  borderRadius: activeTab === i ? '8px 8px 0 0' : 0,
                  animation: activeTab !== i && hintVisible ? 'tabPulse 2s ease-in-out infinite' : 'none',
                  animationDelay: `${i * 0.3}s`,
                }}
                onMouseEnter={e => { if (activeTab !== i) { (e.currentTarget as HTMLButtonElement).style.color = PURPLE; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(107,46,255,0.06)'; }}}
                onMouseLeave={e => { if (activeTab !== i) { (e.currentTarget as HTMLButtonElement).style.color = '#8b8db0'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}}
              >
                <span style={{ fontSize: 13, opacity: activeTab === i ? 1 : 0.5 }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
            </div>
          </div>

          {/* Контент активного табу */}
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
            {TABS[activeTab].content}
          </div>
        </div>

        {/* ─── ПРАВА ЧАСТИНА — відео + чат ─── */}
        <div style={{ width: 300, flexShrink: 0, background: 'white', borderRadius: 20, border: '1px solid #e8e7f0', boxShadow: '0 8px 40px rgba(0,8,82,0.07)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

          {/* Відео */}
          <div style={{ overflow: 'hidden', background: '#1c1c2e', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
              <img
                src="/videocall.png"
                alt="Відеодзвінок"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{ position: 'absolute', top: 8, right: 8, width: 26, height: 26, background: 'rgba(0,0,0,0.55)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'white', cursor: 'pointer', backdropFilter: 'blur(4px)' }}>✕</div>
            </div>
            <div style={{ background: '#1c1c2e', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 13, color: 'white', cursor: 'pointer' }}>▶</span>
              <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap' }}>0:00 / 38:14</span>
              <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }}>
                <div style={{ width: '18%', height: '100%', background: PURPLE, borderRadius: 2 }} />
              </div>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>🔊</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>⛶</span>
            </div>
          </div>

          {/* Чат */}
          <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'flex-end', borderBottom: '1px solid #f0eff5' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#f0ebff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>👤</div>
            </div>
            <div style={{ flex: 1, minHeight: 0, padding: '12px 14px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { who: 'ДЛ', name: 'Дмитро', time: '0:12', color: PURPLE, text: 'Павле, добрий день! Дякую що виділили час. Розкажіть трохи про вашу команду — як зараз організований продаж?' },
                { who: 'ПМ', name: 'Павло', time: '0:22', color: '#2a7d4f', text: 'Привіт! Ми — Touch, продаємо кав\'ярні самообслуговування. У нас 20 менеджерів, всі продають по телефону і через відеодзвінки. Використовуємо Binotel для телефонії.' },
                { who: 'ПМ', name: 'Павло', time: '0:48', color: '#2a7d4f', text: 'Основна проблема — я не можу контролювати якість роботи менеджерів. Особливо на гарячих відеодзвінках — клієнт вже майже готовий, і тут менеджер щось не так каже, і угода зривається.' },
                { who: 'ДЛ', name: 'Дмитро', time: '1:10', color: PURPLE, text: 'Це саме та ситуація, для якої ми і робили Soldly AI. Ви слухаєте записи дзвінків самостійно?' },
                { who: 'ПМ', name: 'Павло', time: '1:18', color: '#2a7d4f', text: 'Де там... Фізично неможливо. У нас було минулого тижня — менеджер злив угоду на фіналі, дізнався про це випадково від самого клієнта. Прослухав запис — а там все очевидно, він просто не відпрацював заперечення.' },
                { who: 'ДЛ', name: 'Дмитро', time: '1:38', color: PURPLE, text: 'Саме для цього Soldly AI. Давайте покажу на реальному прикладі — ось дзвінок вашого менеджера, я завантажив з Binotel.' },
                { who: 'ПМ', name: 'Павло', time: '3:44', color: '#2a7d4f', text: 'Зачекайте — це Олег?! І ви бачите де він облажався?' },
                { who: 'ДЛ', name: 'Дмитро', time: '3:51', color: PURPLE, text: 'Так — ось тут на 4:22 клієнт засумнівався в ціні, а Олег не відпрацював заперечення і перейшов далі. Soldly AI фіксує це з таймкодом і дає конкретну рекомендацію.' },
                { who: 'ПМ', name: 'Павло', time: '4:40', color: '#2a7d4f', text: 'Це сильно. А відеодзвінки теж аналізуються так само?' },
                { who: 'ДЛ', name: 'Дмитро', time: '4:46', color: PURPLE, text: 'Абсолютно. Відео, аудіо, Zoom, Google Meet — все. Транскрипція, оцінка менеджера, готовність клієнта і задачі після дзвінку в CRM автоматично.' },
                { who: 'ПМ', name: 'Павло', time: '5:18', color: '#2a7d4f', text: 'Як виглядає процес підключення для нашої команди?' },
                { who: 'ДЛ', name: 'Дмитро', time: '5:24', color: PURPLE, text: 'Давайте зробимо так — запускаємо вам 3 дні безкоштовного доступу. Підключите своїх менеджерів і побачите результат на реальних дзвінках.' },
                { who: 'ПМ', name: 'Павло', time: '5:46', color: '#2a7d4f', text: 'Давайте. Якщо результат такий як ти показав — беремо всіх 20.' },
              ].map((msg, i) => (
                <div key={i} style={{ display: 'flex', gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: msg.color, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Work Sans', sans-serif", fontSize: 9, fontWeight: 700, color: 'white', marginTop: 1 }}>{msg.who}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                      <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 600, color: msg.color }}>{msg.name}</span>
                      <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 10, color: '#b0aed0' }}>{msg.time}</span>
                      <span style={{ fontSize: 10, color: '#b0aed0', cursor: 'pointer' }}>▶</span>
                    </div>
                    <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: '#3d3f6e', lineHeight: 1.6, margin: 0 }}>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '12px 16px', borderTop: '1px solid #f0eff5', display: 'flex', justifyContent: 'flex-end' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `linear-gradient(135deg, ${PURPLE}, #9b6dff)`, borderRadius: 24, padding: '10px 18px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(107,46,255,0.3)' }}>
                <span style={{ fontSize: 14 }}>✨</span>
                <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, fontWeight: 600, color: 'white' }}>AI Insights</span>
                <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', fontFamily: "'Work Sans', sans-serif", fontSize: 11, fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>5</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
