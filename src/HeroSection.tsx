import React from 'react';

const attentionIcon = '/figma-assets/promo/attention-icon.svg';
const underlineSvg = '/figma-assets/promo/underline.svg';
const arrowRight = '/figma-assets/promo/arrow-right.svg';
const avatar1 = '/figma-assets/promo/avatar1.svg';
const avatar2 = '/figma-assets/promo/avatar2.svg';
const avatar3 = '/figma-assets/promo/avatar3.svg';
const starIcon = '/figma-assets/promo/star.svg';
const gdprIcon = '/figma-assets/promo/gdpr.svg';
const soc2Icon = '/figma-assets/promo/soc2.svg';
const cardBg = '/figma-assets/promo/card-bg.svg';
const meetingIcon = '/figma-assets/promo/meeting.svg';
const aiIcon = '/figma-assets/promo/ai.svg';
const followupIcon = '/figma-assets/promo/followup.svg';
const crmIcon = '/figma-assets/promo/crm.svg';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #fbfaff 0%, #ffffff 50%, #f6f6ff 100%)',
          minHeight: '800px',
        }}
      >
        {/* Background blobs */}
        <div
          className="absolute rounded-full blur-[50px] pointer-events-none"
          style={{
            width: 500,
            height: 500,
            right: -160,
            top: -160,
            background: 'linear-gradient(135deg, rgba(193,193,255,0.2) 0%, rgba(133,133,255,0.1) 100%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[50px] pointer-events-none"
          style={{
            width: 500,
            height: 500,
            left: -160,
            bottom: -160,
            background: 'linear-gradient(45deg, rgba(133,133,255,0.15) 0%, rgba(29,29,255,0.1) 100%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[60px] pointer-events-none"
          style={{
            width: 600,
            height: 600,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(135deg, rgba(29,29,255,0.05) 0%, rgba(29,29,255,0) 100%)',
          }}
        />

        {/* Inner content */}
        <div className="relative max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[384px] py-[52px]">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-0">

            {/* Left column */}
            <div className="flex-1 min-w-0 max-w-[544px]">

              {/* Attention badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-[11px] rounded-full border mb-[62px]"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(6px)',
                  borderColor: 'rgba(193,193,255,0.6)',
                  boxShadow: '0px 10px 15px -3px rgba(29,29,255,0.05), 0px 4px 6px -4px rgba(29,29,255,0.05)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: '#00d6ab' }}
                />
                <img src={attentionIcon} alt="" className="w-[14px] h-[14px] flex-shrink-0" />
                <span
                  className="text-[14px] font-medium tracking-[-0.64px] whitespace-nowrap"
                  style={{ color: '#1d1dff', fontFamily: "'Work Sans', sans-serif" }}
                >
                  Attention Sales Leaders, CS Teams &amp; Revenue Pros
                </span>
              </div>

              {/* Heading */}
              <div className="mb-[28px]">
                <h1
                  className="text-[48px] font-bold leading-[1.15] tracking-[-1.2px]"
                  style={{ color: '#000852', fontFamily: "'Work Sans', sans-serif" }}
                >
                  Never Write Meeting
                  <br />
                  Notes Again.
                  <br />
                  <span style={{ color: '#1d1dff' }}>Flawless CRM</span>
                  <br />
                  <span style={{ color: '#1d1dff' }}>Updates </span>
                  <span className="relative inline-block" style={{ color: '#1d1dff' }}>
                    On Autopilot.
                    <img
                      src={underlineSvg}
                      alt=""
                      className="absolute left-0 w-full"
                      style={{ bottom: -8, height: 6 }}
                    />
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p
                className="text-[18px] leading-[1.625] tracking-[-0.64px] mb-[38px] max-w-[524px]"
                style={{ color: '#5a5d8d', fontFamily: "'Work Sans', sans-serif" }}
              >
                Transform every conversation into actionable AI meeting minutes even if you have a
                back-to-back calendar, juggle Zoom, Google Meet, and MS Teams, and currently struggle
                with messy CRM hygiene.
              </p>

              {/* CTA Button */}
              <div className="mb-[32px]">
                <button
                  className="relative inline-flex items-center gap-3 px-8 py-3 rounded-[14px] text-white font-semibold text-[16px] tracking-[-0.64px] overflow-hidden"
                  style={{
                    background: 'linear-gradient(90deg, #1d1dff 0%, #0f0fcc 100%)',
                    boxShadow: '0px 20px 25px -5px rgba(29,29,255,0.3), 0px 8px 10px -6px rgba(29,29,255,0.3)',
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  {/* Shine overlay */}
                  <span
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                    }}
                  />
                  <span className="relative">Start Your 7-Day Free Trial</span>
                  <img src={arrowRight} alt="" className="relative w-4 h-4" />
                </button>
              </div>

              {/* Social proof row */}
              <div className="flex flex-wrap items-center gap-3 mb-[12px]">
                {/* Avatars */}
                <div className="flex items-center">
                  {[avatar1, avatar2, avatar3].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white"
                      style={{ marginLeft: i === 0 ? 0 : -8, boxShadow: '0px 1px 3px rgba(0,0,0,0.1)' }}
                    />
                  ))}
                </div>
                <span
                  className="text-[14px] tracking-[-0.64px]"
                  style={{ color: '#a6a8c7', fontFamily: "'Work Sans', sans-serif" }}
                >
                  Trusted by{' '}
                  <strong style={{ color: '#5a5d8d', fontFamily: "'Work Sans', sans-serif" }}>2M+</strong>{' '}
                  professionals
                </span>

                {/* G2 rating */}
                <div
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full border"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(4px)',
                    borderColor: '#e3e2ed',
                    boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={starIcon} alt="" className="w-[14px] h-[14px]" />
                  ))}
                  <span
                    className="text-[12px] font-semibold ml-1 tracking-[-0.64px]"
                    style={{ color: '#000852', fontFamily: "'Work Sans', sans-serif" }}
                  >
                    4.7
                  </span>
                  <span
                    className="text-[12px] tracking-[-0.64px]"
                    style={{ color: '#5a5d8d', fontFamily: "'Work Sans', sans-serif" }}
                  >
                    on G2
                  </span>
                </div>
              </div>

              {/* Compliance badges */}
              <div className="flex items-center gap-3">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border"
                  style={{
                    background: 'rgba(0,214,171,0.08)',
                    backdropFilter: 'blur(4px)',
                    borderColor: 'rgba(0,214,171,0.15)',
                  }}
                >
                  <img src={gdprIcon} alt="" className="w-[14px] h-[14px]" />
                  <span
                    className="text-[12px] font-medium tracking-[-0.64px]"
                    style={{ color: '#03815e', fontFamily: "'Work Sans', sans-serif" }}
                  >
                    GDPR Compliant
                  </span>
                </div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border"
                  style={{
                    background: 'rgba(29,29,255,0.06)',
                    backdropFilter: 'blur(4px)',
                    borderColor: 'rgba(29,29,255,0.15)',
                  }}
                >
                  <img src={soc2Icon} alt="" className="w-[14px] h-[14px]" />
                  <span
                    className="text-[12px] font-medium tracking-[-0.64px]"
                    style={{ color: '#1d1dff', fontFamily: "'Work Sans', sans-serif" }}
                  >
                    SOC2 Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Right column — AI card */}
            <div className="flex-1 flex justify-end items-start min-w-0">
              <div
                className="relative w-full max-w-[512px] h-[512px] rounded-[24px] overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.7)',
                  boxShadow: '0px 25px 50px -12px rgba(29,29,255,0.15)',
                }}
              >
                {/* Card gradient background */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(246,246,255,0.5) 0%, rgba(246,246,255,0) 50%, rgba(251,250,255,0.3) 100%)',
                  }}
                />

                {/* Full card SVG background (dots grid) */}
                <img src={cardBg} alt="" className="absolute inset-0 w-full h-full object-cover" />

                {/* Top status badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-[5px] rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.8)',
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00d6ab]" />
                    <span
                      className="text-[12px] tracking-[-0.64px]"
                      style={{ color: '#5a5d8d', fontFamily: "'Work Sans', sans-serif" }}
                    >
                      Chief-of-Staff Mode
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div
                    className="inline-flex items-center px-3 py-[5px] rounded-full"
                    style={{
                      background: 'rgba(29,29,255,0.06)',
                      border: '1px solid rgba(29,29,255,0.1)',
                    }}
                  >
                    <span
                      className="text-[12px] font-medium tracking-[-0.64px]"
                      style={{ color: '#1d1dff', fontFamily: "'Work Sans', sans-serif" }}
                    >
                      Autopilot Active
                    </span>
                  </div>
                </div>

                {/* Center tl;dv logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Dashed circle */}
                  <div
                    className="absolute rounded-full border-2 border-dashed"
                    style={{
                      width: 200,
                      height: 200,
                      borderColor: 'rgba(193,193,255,0.5)',
                    }}
                  />
                  {/* Logo box */}
                  <div
                    className="relative w-20 h-20 rounded-[16px] flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #1d1dff 0%, #00008200 100%)',
                      boxShadow: '0px 20px 25px -5px rgba(29,29,255,0.3), 0px 8px 10px -6px rgba(29,29,255,0.3)',
                    }}
                  >
                    <span
                      className="text-white font-bold text-[18px] tracking-[-0.64px]"
                      style={{ fontFamily: "'Work Sans', sans-serif" }}
                    >
                      tl;dv
                    </span>
                  </div>
                </div>

                {/* Corner status chips */}
                {/* Top-left: Meeting Captured */}
                <div
                  className="absolute flex items-center gap-2 px-3 py-2 rounded-[14px]"
                  style={{
                    top: '23%',
                    left: 17,
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.8)',
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: '#f6f6ff' }}
                  >
                    <img src={meetingIcon} alt="" className="w-4 h-4" />
                  </div>
                  <span
                    className="text-[12px] font-semibold tracking-[-0.64px]"
                    style={{ color: '#000852', fontFamily: "'Work Sans', sans-serif" }}
                  >
                    Meeting Captured
                  </span>
                </div>

                {/* Top-right: AI Extracting */}
                <div
                  className="absolute flex items-center gap-2 px-3 py-3 rounded-[14px]"
                  style={{
                    top: '22.7%',
                    right: 10,
                    background: 'linear-gradient(90deg, #8585ff, #c1c1ff)',
                    boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1)',
                  }}
                >
                  <div
                    className="w-[30px] h-[30px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.25)' }}
                  >
                    <img src={aiIcon} alt="" className="w-[17px] h-[17px]" />
                  </div>
                  <span
                    className="text-[13px] font-semibold tracking-[-0.7px] text-white"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    AI Extracting
                  </span>
                </div>

                {/* Bottom-left: Follow-ups Drafted */}
                <div
                  className="absolute flex items-center gap-2 px-3 py-2 rounded-[14px]"
                  style={{
                    bottom: '23.2%',
                    left: 17,
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.8)',
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: '#f6f6ff' }}
                  >
                    <img src={followupIcon} alt="" className="w-4 h-4" />
                  </div>
                  <span
                    className="text-[12px] font-semibold tracking-[-0.64px]"
                    style={{ color: '#000852', fontFamily: "'Work Sans', sans-serif" }}
                  >
                    Follow-ups Drafted
                  </span>
                </div>

                {/* Bottom-right: CRM Synced */}
                <div
                  className="absolute flex items-center gap-2 px-3 py-2 rounded-[14px]"
                  style={{
                    bottom: '23.2%',
                    right: 10,
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.8)',
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: '#f6f6ff' }}
                  >
                    <img src={crmIcon} alt="" className="w-4 h-4" />
                  </div>
                  <span
                    className="text-[12px] font-semibold tracking-[-0.64px]"
                    style={{ color: '#000852', fontFamily: "'Work Sans', sans-serif" }}
                  >
                    CRM Synced
                  </span>
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[12px] tracking-[-0.64px]"
                      style={{ color: '#5a5d8d', fontFamily: "'Work Sans', sans-serif" }}
                    >
                      Pipeline
                    </span>
                    <span
                      className="text-[12px] font-semibold tracking-[-0.64px]"
                      style={{ color: '#1d1dff', fontFamily: "'Work Sans', sans-serif" }}
                    >
                      Extracting insights...
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <div
                      className="h-1.5 rounded-full flex-1"
                      style={{ background: 'linear-gradient(90deg, #1d1dff, #8585ff)' }}
                    />
                    <div
                      className="h-1.5 rounded-full flex-1"
                      style={{ background: 'linear-gradient(90deg, #1d1dff, #8585ff)' }}
                    />
                    <div className="h-1.5 rounded-full flex-1 bg-[#e8e8ff]" />
                    <div className="h-1.5 rounded-full flex-1 bg-[#e8e8ff]" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
