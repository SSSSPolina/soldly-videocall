import React, { useState } from 'react';

const PURPLE = '#6B2EFF';
const DARK = '#000852';

// ─── БЛОК 4: Логотипи клієнтів ─────────────────────────────────────────────
const clientLogos = [
  'Forbes', 'Salesforce', 'Cloudflare', 'Deel', 'n8n', 'Roche', 'TOTVS',
];

export const ClientsSection: React.FC = () => (
  <section style={{ background: 'white', padding: '80px 24px', borderTop: '1px solid #f0eff5' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <h2 style={{
        fontFamily: "'Work Sans', sans-serif", fontSize: 'clamp(22px, 2.5vw, 36px)',
        fontWeight: 700, letterSpacing: '-1.5px', color: DARK,
        textAlign: 'center', marginBottom: 48,
      }}>
        Soldly Meet довіряють команди по всьому світу
      </h2>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 48, flexWrap: 'wrap', opacity: 0.55,
      }}>
        {clientLogos.map((name) => (
          <span key={name} style={{
            fontFamily: "'Work Sans', sans-serif", fontSize: 20, fontWeight: 800,
            color: DARK, letterSpacing: '-0.5px',
            fontStyle: name === 'Forbes' ? 'italic' : 'normal',
          }}>{name}</span>
        ))}
      </div>
    </div>
  </section>
);

// ─── БЛОК 5: AI промпти ────────────────────────────────────────────────────
const prompts = [
  { role: 'КЕРІВНИК ВІДДІЛУ ПРОДАЖІВ', text: 'Які заперечення найчастіше виникали на дзвінках цього тижня?' },
  { role: 'PRODUCT OWNER', text: 'Які фідбеки на наш продукт прозвучали на CS-дзвінках цього місяця?' },
  { role: 'МАРКЕТИНГ', text: 'Які болі клієнтів згадувались на discovery-колах? Як сейлзи відповідали?' },
  { role: 'МАРКЕТИНГ-ЛІД', text: 'Знайди цитати клієнтів для сайту з CS-дзвінків цього місяця.' },
  { role: 'PRODUCT MANAGER', text: 'Які баги продукту згадувались на Sales-дзвінках цього тижня?' },
];

const PromptCard: React.FC<{ role: string; text: string; width: number; tagColor?: string }> = ({
  role, text, width, tagColor = '#3d3060',
}) => (
  <div style={{
    width,
    background: 'white',
    borderRadius: 16,
    padding: '20px 20px 20px 22px',
    boxShadow: '0 6px 28px rgba(60,30,120,0.10)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 14,
  }}>
    <div style={{ flex: 1 }}>
      <span style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 8.5, fontWeight: 700,
        color: 'white',
        background: tagColor,
        borderRadius: 4, padding: '3px 9px',
        letterSpacing: '1px', textTransform: 'uppercase' as const,
        display: 'inline-block', marginBottom: 12,
      }}>{role}</span>
      <p style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14.5, fontWeight: 400,
        color: '#1a1a2e', lineHeight: 1.5,
        margin: 0,
      }}>{text}</p>
    </div>
    <button style={{
      flexShrink: 0,
      width: 40, height: 40,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #4f2bff, #7c3aed)',
      border: 'none', cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 14px rgba(79,43,255,0.4)',
      alignSelf: 'flex-end',
    }}>
      {/* Sparkle icon */}
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L10.2 7.2L15 9L10.2 10.8L9 16L7.8 10.8L3 9L7.8 7.2L9 2Z" fill="white"/>
      </svg>
    </button>
  </div>
);

export const AIInsightsSection: React.FC = () => {
  const messages = [
    { from: 'user', text: 'Проаналізуй дзвінок з Павлом і порадь: що пішло не так і як діяти далі?' },
    { from: 'ai', text: 'Проаналізував дзвінок (38 хв). Знайшов критичну проблему 👇' },
    { from: 'ai', text: '⚠️ На 4:22 клієнт сказав: «А чому так дорого порівняно з конкурентами?» — менеджер не відпрацював заперечення і просто перейшов далі. Клієнт замовк на 8 секунд — типова ознака втрати інтересу.' },
    { from: 'ai', text: '📊 Менеджер пропустив 3 заперечення з 4. Оцінка роботи із запереченнями — 23%. Це прямо впливає на конверсію.' },
    { from: 'ai', text: '✅ Для наступного дзвінка: почни з «Я розумію, що ціна важлива» — і покажи ROI. 1 врятована угода окупає Soldly на 6 місяців.' },
    { from: 'ai', text: '📌 Надішли Павлу приклад аналізу його менеджера сьогодні — він вже готовий купити, йому потрібен лише доказ.' },
  ];

  return (
    <section style={{ background: 'linear-gradient(135deg, #5b2fd4 0%, #7c4dff 50%, #a97aff 100%)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 64 }}>

        {/* Ліво — текст */}
        <div style={{ flex: 1, maxWidth: 500 }}>
          <span style={{
            fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 700,
            color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.18)', borderRadius: 6,
            padding: '4px 12px', textTransform: 'uppercase' as const,
            letterSpacing: '0.5px', display: 'inline-block', marginBottom: 24,
          }}>AI Insights</span>
          <h2 style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 'clamp(32px, 3.5vw, 48px)',
            fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.1,
            color: 'white', marginBottom: 20,
          }}>
            Запитай AI про{' '}
            <span style={{ whiteSpace: 'nowrap' }}>будь-який</span> дзвінок —{' '}
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>отримай чіткі дії</span>
          </h2>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 14 }}>
            AI проаналізує розмову і підкаже що пішло не так — де менеджер втратив клієнта і як діяти далі.
          </p>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: 36 }}>
            Конкретні рекомендації: який підхід обрати, на що звернути увагу і як побудувати наступний дзвінок.
          </p>
          <button style={{
            fontFamily: "'Work Sans', sans-serif", fontSize: 16, fontWeight: 700,
            color: PURPLE, background: 'white', borderRadius: 999,
            padding: '16px 40px', border: 'none', cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}>Спробувати безкоштовно</button>
        </div>

        {/* Право — AI чат вікно */}
        <div style={{ flex: '0 0 420px', marginLeft: 80 }}>
          <div style={{
            background: 'white',
            borderRadius: 20,
            boxShadow: '0 12px 48px rgba(0,8,82,0.10)',
            border: '1px solid #eeedf5',
            overflow: 'hidden',
            height: 520,
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Хедер */}
            <div style={{
              background: 'linear-gradient(90deg, #5b2fd4 0%, #7c4dff 100%)',
              padding: '16px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L10.2 7.2L15 9L10.2 10.8L9 16L7.8 10.8L3 9L7.8 7.2L9 2Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 15, fontWeight: 700, color: 'white' }}>AI Insights</div>
                  <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Аналіз дзвінків</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>
                <span style={{ cursor: 'pointer' }}>↺</span>
                <span style={{ cursor: 'pointer' }}>⤢</span>
                <span style={{ cursor: 'pointer' }}>∨</span>
              </div>
            </div>

            {/* Запит */}
            <div style={{ padding: '16px 16px 0', flexShrink: 0 }}>
              <div style={{
                background: 'linear-gradient(135deg, #7c4dff 0%, #9b5cff 100%)',
                borderRadius: 16, padding: '16px 20px', position: 'relative',
              }}>
                <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.75)', marginBottom: 8 }}>
                  Проаналізувати цей дзвінок • <strong style={{ color: 'white' }}>Діма Литвин</strong>
                </div>
                <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 15, color: 'white', lineHeight: 1.6 }}>
                  Проаналізуй історію дзвінків з цим клієнтом і порадь: який підхід обрати в наступному дзвінку? На що звернути увагу? Як краще побудувати розмову?
                </div>
                <span style={{
                  position: 'absolute', top: 12, right: 14,
                  color: 'rgba(255,255,255,0.5)', fontSize: 16, cursor: 'pointer',
                }}>×</span>
              </div>

              {/* Мета-інфо */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 4px', borderBottom: '1px solid #f0eff5', marginBottom: 4,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 700, color: PURPLE }}>27.5M</span>
                  <div style={{
                    fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: '#5a5d8d',
                    background: '#f4f3f9', borderRadius: 999, padding: '4px 12px',
                    border: '1px solid #e0dff0', cursor: 'pointer',
                  }}>Gemini 2.0 Flash ↓</div>
                </div>
                <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: '#b0aed0' }}>1 дзв. • ~3K / 150K</span>
              </div>
            </div>

            {/* Повідомлення */}
            <div style={{ padding: '12px 16px 16px', display: 'flex', flexDirection: 'column' as const, gap: 10, flex: 1, overflowY: 'auto' as const }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                  {msg.from === 'ai' && i === 1 && (
                    <div style={{
                      width: 26, height: 26, borderRadius: 8, flexShrink: 0,
                      background: 'linear-gradient(135deg, #7c4dff, #9b5cff)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2,
                    }}>
                      <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                        <path d="M9 2L10.2 7.2L15 9L10.2 10.8L9 16L7.8 10.8L3 9L7.8 7.2L9 2Z" fill="white"/>
                      </svg>
                    </div>
                  )}
                  {msg.from === 'ai' && i !== 1 && <div style={{ width: 26, flexShrink: 0 }} />}
                  <div style={{
                    background: msg.from === 'user' ? PURPLE : '#f8f7fc',
                    color: msg.from === 'user' ? 'white' : '#3d3f6e',
                    borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    padding: '10px 14px',
                    fontFamily: "'Work Sans', sans-serif", fontSize: 13, lineHeight: 1.65,
                    maxWidth: '85%',
                  }}>{msg.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export const PromptsSection: React.FC = () => (
  <section style={{
    backgroundImage: 'url(/prompts-bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '72px 24px',
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative', height: 560 }}>

        {/* SALES MANAGER — вгорі трохи правіше центру */}
        <div style={{ position: 'absolute', top: 10, left: '42%', transform: 'translateX(-50%)' }}>
          <PromptCard role="SALES MANAGER" text="Які заперечення найчастіше виникали на дзвінках цього тижня?" width={290} tagColor="#2d1b6e" />
        </div>

        {/* PRODUCT OWNER — зліва, нижче */}
        <div style={{ position: 'absolute', top: 180, left: 10 }}>
          <PromptCard role="PRODUCT OWNER" text="Які фідбеки на наш продукт прозвучали на CS-дзвінках цього місяця?" width={265} tagColor="#4a2a9e" />
        </div>

        {/* MARKETING MANAGER — справа, трохи вище */}
        <div style={{ position: 'absolute', top: 155, right: 10 }}>
          <PromptCard role="MARKETING MANAGER" text="Які болі клієнтів згадувались на discovery-колах? Як сейлзи відповідали?" width={270} tagColor="#3d3060" />
        </div>

        {/* MARKETING LEADER — внизу, зміщено до центру зліва */}
        <div style={{ position: 'absolute', bottom: 10, left: '18%' }}>
          <PromptCard role="MARKETING LEADER" text="Знайди цитати клієнтів для сайту з CS-дзвінків цього місяця." width={255} tagColor="#4a3580" />
        </div>

        {/* PRODUCT MANAGER — внизу справа */}
        <div style={{ position: 'absolute', bottom: 30, right: '6%' }}>
          <PromptCard role="PRODUCT MANAGER" text="Які баги продукту згадувались на Sales-дзвінках цього тижня?" width={250} tagColor="#3d3060" />
        </div>

      </div>
    </div>
  </section>
);

// ─── БЛОК 6: Безпека ───────────────────────────────────────────────────────
const securityBadges = [
  { icon: '🔒', title: 'SOC2 COMPLIANT', desc: 'Сертифікована безпека даних' },
  { icon: '🇪🇺', title: 'GDPR COMPLIANT', desc: 'Повна відповідність GDPR' },
  { icon: '🗄️', title: 'HOSTED IN EU', desc: 'Дані зберігаються в ЄС' },
  { icon: '🤖', title: 'PRIVATE AI', desc: 'AI не навчається на ваших даних' },
  { icon: '🛡️', title: 'EU-US SHIELD', desc: 'EU-US Privacy Shield' },
  { icon: '⚖️', title: 'EU AI ACT', desc: 'Відповідність EU AI Act' },
];

export const SecuritySection: React.FC = () => (
  <section style={{
    background: `linear-gradient(135deg, #0a0520 0%, #1a0a3e 50%, #0a1a3e 100%)`,
    padding: '100px 24px',
  }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{
        fontFamily: "'Work Sans', sans-serif", fontSize: 'clamp(28px, 3.5vw, 48px)',
        fontWeight: 700, letterSpacing: '-2px', color: 'white', lineHeight: 1.1, marginBottom: 16,
      }}>
        Ваші дані завжди захищені
      </h2>
      <p style={{
        fontFamily: "'Work Sans', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.6)',
        maxWidth: 640, margin: '0 auto 20px',
      }}>
        Корпоративний рівень безпеки: наскрізне шифрування, відповідність GDPR та SOC2. Ваші записи — лише ваші. Ми ніколи не використовуємо їх для навчання AI.
      </p>
      <p style={{
        fontFamily: "'Work Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.4)',
        maxWidth: 720, margin: '0 auto 56px', lineHeight: 1.6,
      }}>
        Дані зберігаються в ISO 27001-сертифікованих дата-центрах з AES-256 шифруванням для максимального захисту.
      </p>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
        {securityBadges.map((badge) => (
          <div key={badge.title} style={{
            background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20,
            padding: '28px 24px', width: 160, textAlign: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{badge.icon}</div>
            <p style={{
              fontFamily: "'Work Sans', sans-serif", fontSize: 10, fontWeight: 800,
              color: 'rgba(255,255,255,0.9)', letterSpacing: '0.8px', marginBottom: 8,
            }}>{badge.title}</p>
            <p style={{
              fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.4,
            }}>{badge.desc}</p>
          </div>
        ))}
      </div>

      <button style={{
        fontFamily: "'Work Sans', sans-serif", fontSize: 15, fontWeight: 600,
        color: 'white', background: 'rgba(255,255,255,0.12)',
        border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12,
        padding: '14px 28px', cursor: 'pointer',
        backdropFilter: 'blur(8px)',
      }}>
        Більше про безпеку →
      </button>
    </div>
  </section>
);

// ─── БЛОК 7: Відгук ───────────────────────────────────────────────────────
export const TestimonialSection: React.FC = () => (
  <section style={{ background: 'white', padding: '100px 24px' }}>
    <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
      {/* Логотип компанії */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 40,
      }}>
        <span style={{
          fontFamily: "'Work Sans', sans-serif", fontSize: 22, fontWeight: 800,
          color: DARK, letterSpacing: '-1px',
        }}>Zapier</span>
      </div>

      <blockquote style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 'clamp(20px, 2.5vw, 32px)',
        fontWeight: 500, letterSpacing: '-1px',
        color: DARK, lineHeight: 1.4,
        marginBottom: 48,
      }}>
        «Soldly Meet — незамінний інструмент для підтвердження та продажу продуктових рішень на основі реальних емоцій з кожного Sales, Customer та Research дзвінка.»
      </blockquote>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: `linear-gradient(135deg, ${PURPLE}, #9b6dff)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Work Sans', sans-serif", fontSize: 18, fontWeight: 700, color: 'white',
        }}>LV</div>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 15, fontWeight: 700, color: DARK }}>Lars Vedo</p>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: '#8b8db0' }}>Sr. Product Manager, Zapier</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── БЛОК 8: Sales Coaching ───────────────────────────────────────────────
const CoachingIcon = ({ type, color }: { type: string; color: string }) => {
  const s = { width: 22, height: 22 };
  if (type === 'mic') return <svg {...s} viewBox="0 0 24 24" fill="none"><rect x="9" y="2" width="6" height="12" rx="3" stroke={color} strokeWidth="1.8"/><path d="M5 10a7 7 0 0014 0" stroke={color} strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="20" x2="12" y2="17" stroke={color} strokeWidth="1.8" strokeLinecap="round"/><line x1="9" y1="20" x2="15" y2="20" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>;
  if (type === 'brain') return <svg {...s} viewBox="0 0 24 24" fill="none"><path d="M12 4C9 4 7 6 7 8.5c0 1-.3 1.8-.8 2.4C5.5 11.7 5 12.8 5 14c0 2.5 2 4 4 4h6c2 0 4-1.5 4-4 0-1.2-.5-2.3-1.2-3.1-.5-.6-.8-1.4-.8-2.4C17 6 15 4 12 4z" stroke={color} strokeWidth="1.8"/><line x1="12" y1="8" x2="12" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/><line x1="9" y1="11" x2="15" y2="11" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>;
  if (type === 'check') return <svg {...s} viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="14" height="16" rx="2" stroke={color} strokeWidth="1.8"/><path d="M7 10h6M7 14h4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/><path d="M15 3l2 2 4-4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (type === 'chat') return <svg {...s} viewBox="0 0 24 24" fill="none"><path d="M4 4h16v12H4z" rx="2" stroke={color} strokeWidth="1.8"/><path d="M8 20l4-4h8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 9h8M8 13h5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>;
  if (type === 'trend') return <svg {...s} viewBox="0 0 24 24" fill="none"><polyline points="3,17 8,11 13,14 21,6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="16,6 21,6 21,11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return null;
};

const coachingSteps: { step: string; title: string; desc: React.ReactNode; green: boolean }[] = [
  {
    step: '01', green: false,
    title: 'Запис дзвінка',
    desc: <><strong style={{ color: PURPLE }}>Автоматичний запис</strong> кожного дзвінка без бота — менеджер не відволікається.</>,
  },
  {
    step: '02', green: false,
    title: 'AI-аналіз',
    desc: <>AI оцінює <strong style={{ color: PURPLE }}>обробку заперечень</strong>, дотримання плейбуку і <strong style={{ color: PURPLE }}>готовність клієнта</strong> до покупки.</>,
  },
  {
    step: '03', green: false,
    title: 'Задачі з дзвінка',
    desc: <>Soldly <strong style={{ color: PURPLE }}>автоматично ставить задачі</strong> — надіслати КП, передзвонити, уточнити бюджет.</>,
  },
  {
    step: '04', green: false,
    title: 'Зворотній зв\'язок',
    desc: <>Керівник бачить <strong style={{ color: PURPLE }}>реальну картину</strong> по кожному менеджеру і дає точний фідбек.</>,
  },
  {
    step: '05', green: true,
    title: 'Продажі зростають',
    desc: <>Команда стає <strong style={{ color: 'rgba(255,255,255,0.95)' }}>розумнішою з кожним дзвінком</strong> — конверсія і виручка ростуть.</>,
  },
];

export const CoachingSection: React.FC = () => (
  <section style={{ background: '#f8f7fc', padding: '100px 24px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>

      {/* Заголовок */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <span style={{
          fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 700,
          color: PURPLE, background: '#f0ebff', borderRadius: 6, padding: '4px 12px',
          textTransform: 'uppercase' as const, letterSpacing: '0.5px',
          display: 'inline-block', marginBottom: 20,
        }}>Sales Coaching</span>
        <h2 style={{
          fontFamily: "'Work Sans', sans-serif", fontSize: 'clamp(28px, 3vw, 44px)',
          fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.12, color: DARK, marginBottom: 16,
        }}>
          Як Soldly перетворює дзвінки{' '}
          <span style={{ color: PURPLE }}>на зростання продажів</span>
        </h2>
        <p style={{
          fontFamily: "'Work Sans', sans-serif", fontSize: 17, color: '#5a5d8d',
          lineHeight: 1.65, maxWidth: 560, margin: '0 auto',
        }}>
          П'ять кроків від запису дзвінка до реального зростання виручки команди.
        </p>
      </div>

      {/* Кроки */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, position: 'relative' }}>
        {coachingSteps.map((s, i) => (
          <div key={s.step} style={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>
            {/* Картка */}
            <div style={{
              flex: 1,
              background: s.green ? 'linear-gradient(135deg, #1a7a4a 0%, #22a05e 100%)' : 'white',
              borderRadius: 20, padding: '24px 20px',
              border: s.green ? 'none' : '1px solid #eeedf5',
              boxShadow: s.green ? '0 8px 32px rgba(26,122,74,0.35)' : '0 4px 20px rgba(0,8,82,0.06)',
              display: 'flex', flexDirection: 'column' as const, gap: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{
                  fontFamily: "'Work Sans', sans-serif", fontSize: 11, fontWeight: 800,
                  color: s.green ? 'rgba(255,255,255,0.6)' : '#b0aed0',
                  letterSpacing: '1px', textTransform: 'uppercase' as const,
                }}>{s.step}</span>
              </div>
              <div>
                <p style={{
                  fontFamily: "'Work Sans', sans-serif", fontSize: 17, fontWeight: 800,
                  color: s.green ? 'white' : DARK, marginBottom: 10, letterSpacing: '-0.5px', lineHeight: 1.25,
                }}>{s.title}</p>
                <p style={{
                  fontFamily: "'Work Sans', sans-serif", fontSize: 13.5,
                  color: s.green ? 'rgba(255,255,255,0.8)' : '#5a5d8d', lineHeight: 1.65,
                }}>{s.desc}</p>
              </div>
            </div>

            {/* Стрілка між кроками */}
            {i < coachingSteps.length - 1 && (
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 32, flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke={i === coachingSteps.length - 2 ? '#22a05e' : PURPLE}
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  </section>
);

// ─── БЛОК 9: FAQ ──────────────────────────────────────────────────────────
const faqs = [
  { q: 'Що таке Soldly Meet?', a: 'Soldly Meet — AI-інструмент, який автоматично записує, транскрибує та аналізує відеодзвінки. Він оцінює роботу менеджера, готовність клієнта до покупки та оновлює CRM.' },
  { q: 'З якими платформами він інтегрується?', a: 'Zoom, Google Meet та Microsoft Teams. Також підтримуються HubSpot, Salesforce, Notion, Slack та 6000+ інструментів.' },
  { q: 'Soldly Meet безкоштовний?', a: 'Так, є безкоштовний план для початку. Платні плани відкривають повний AI-аналіз, коучинг та необмежену кількість дзвінків.' },
  { q: 'Чи підтримуються різні мови?', a: 'Так, транскрипція та аналіз доступні для 30+ мов, включаючи українську.' },
];

export const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ background: 'white', padding: '100px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Work Sans', sans-serif", fontSize: 'clamp(28px, 3vw, 44px)',
          fontWeight: 700, letterSpacing: '-2px', color: DARK,
          textAlign: 'center', marginBottom: 56,
        }}>
          Ваші запитання — наші відповіді
        </h2>
        <div style={{ borderRadius: 20, overflow: 'hidden', background: 'linear-gradient(135deg, #5b2fd4 0%, #7c4dff 50%, #a97aff 100%)', boxShadow: '0 12px 48px rgba(107,46,255,0.25)' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: i < faqs.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '22px 28px',
                  background: open === i ? 'rgba(255,255,255,0.12)' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  transition: 'background 0.2s',
                }}
              >
                <span style={{
                  fontFamily: "'Work Sans', sans-serif", fontSize: 16, fontWeight: 600,
                  color: 'white',
                }}>{faq.q}</span>
                <span style={{
                  width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: 18, color: 'white',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.2s',
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 28px 22px', background: 'rgba(255,255,255,0.08)' }}>
                  <p style={{
                    fontFamily: "'Work Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1.65,
                  }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── БЛОК 10: Footer з CTA ────────────────────────────────────────────────
const footerLinks = {
  'Продукт': ['AI для мітів', 'AI для продажів', 'Запис та транскрипція', 'AI нотатки', 'Коучинг', 'Безпека', 'Інтеграції'],
  'Рішення': ['Керівник відділу продажів', 'Бізнес-лідери', 'CS-команди', 'Product × Sales', 'Маркетинг'],
  'Платформи': ['Google Meet', 'Microsoft Teams', 'Zoom'],
  'Ресурси': ['Блог', 'Гайди', 'Центр підтримки', 'Безпека', 'Конфіденційність'],
  'Компанія': ['Кар\'єра', 'Розробникам', 'Партнери', 'Реселери'],
};

export const FooterSection: React.FC = () => (
  <footer style={{ background: '#05020f', color: 'white' }}>
    {/* CTA Banner */}
    <div style={{
      background: `linear-gradient(135deg, ${PURPLE}22 0%, rgba(192,132,252,0.15) 100%)`,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
        <h3 style={{
          fontFamily: "'Work Sans', sans-serif", fontSize: 'clamp(22px, 2.5vw, 36px)',
          fontWeight: 700, letterSpacing: '-1.5px', color: 'white',
        }}>
          Почніть з Soldly Meet безкоштовно
        </h3>
        <button style={{
          fontFamily: "'Work Sans', sans-serif", fontSize: 16, fontWeight: 600,
          color: 'white', background: PURPLE, borderRadius: 14,
          padding: '16px 36px', border: 'none', cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(107,46,255,0.4)', whiteSpace: 'nowrap' as const,
        }}>
          Спробувати безкоштовно →
        </button>
      </div>
    </div>

    {/* Основний footer */}
    <div style={{ padding: '64px 24px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Логотип */}
        <div style={{ marginBottom: 48 }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 400, color: PURPLE }}>Soldly</span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 300, color: PURPLE, opacity: 0.6 }}>meet</span>
        </div>

        {/* Лінки */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 32, marginBottom: 48 }}>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p style={{
                fontFamily: "'Work Sans', sans-serif", fontSize: 12, fontWeight: 700,
                color: 'rgba(255,255,255,0.9)', letterSpacing: '0.5px', marginBottom: 16,
              }}>{section}</p>
              {links.map((link) => (
                <p key={link} style={{
                  fontFamily: "'Work Sans', sans-serif", fontSize: 13.5,
                  color: 'rgba(255,255,255,0.4)', marginBottom: 10, cursor: 'pointer',
                  lineHeight: 1.4,
                }}>{link}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Нижній рядок */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Soldly Meet. Зроблено в 🇺🇦
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Конфіденційність', 'Умови використання', 'Безпека'].map((item) => (
              <span key={item} style={{
                fontFamily: "'Work Sans', sans-serif", fontSize: 13,
                color: 'rgba(255,255,255,0.3)', cursor: 'pointer',
              }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);
