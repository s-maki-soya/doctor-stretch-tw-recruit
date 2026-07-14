'use client'

import { useEffect, useState } from 'react'

const LINE_URL = 'https://lin.ee/s5IYRtF'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Background photo ─────────────────────────────────────────
          File: /public/images/hero-bg.jpg
          → Copy your store exterior photo here.
          ──────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundColor: '#111111' }}
        aria-hidden="true"
      />

      {/* Layered gradient: keeps text readable + adds brand energy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.80) 0%, rgba(17,17,17,0.65) 50%, rgba(212,31,31,0.25) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Red accent bar top */}
      <div className="absolute top-0 inset-x-0 h-1 bg-brand-red" aria-hidden="true" />

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto w-full pt-28 pb-20">

        {/* Status pill */}
        <div
          className={`inline-flex items-center gap-2 mb-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="text-sm font-medium tracking-[0.15em]">現正招募中</span>
        </div>

        {/* Main headline */}
        <h1
          className={`font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="block text-5xl md:text-7xl tracking-tight">用雙手，</span>
          <span className="block text-5xl md:text-7xl tracking-tight mt-2">
            改變一個人的一天。
          </span>
        </h1>

        {/* Red accent line */}
        <div
          className={`w-14 h-1 bg-brand-red mx-auto my-8 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Sub headline */}
        <p
          className={`text-lg md:text-xl text-white/85 max-w-xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          不需要相關經驗。<br />
          只要有<span className="text-brand-lime font-semibold">「想讓人變好」</span>的心，<br />
          我們會教你剩下的一切。
        </p>

        {/* CTA row */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-[400ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line !text-lg !px-10 !py-4 w-full sm:w-auto shadow-green-500/30"
          >
            <LineIcon />
            免費LINE諮詢
          </a>
          <a
            href="#benefits"
            className="w-full sm:w-auto text-white/70 hover:text-white border border-white/25 hover:border-white/50 rounded-full px-8 py-4 font-medium transition-all duration-300 text-center"
          >
            了解更多 ↓
          </a>
        </div>

        {/* Trust badges */}
        <div
          className={`flex flex-wrap justify-center gap-x-8 gap-y-2 mt-14 mb-16 transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {['✓ 無經驗OK', '✓ 完整研修', '✓ 日系品牌', '✓ 明確晉升制度'].map((badge) => (
            <span key={badge} className="text-sm text-white/60 font-medium">
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-white/30 pointer-events-none">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}

function LineIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}
