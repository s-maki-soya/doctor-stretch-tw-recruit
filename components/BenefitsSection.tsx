'use client'

import { useEffect, useRef, useState } from 'react'

const LINE_URL = 'https://lin.ee/s5IYRtF'

const benefits = [
  {
    num: '01',
    emoji: '🎓',
    tag: '業界零基礎OK',
    title: '完整的研修制度',
    sub: '從零開始，也能成為專業伸展師',
    body: '入職後有系統化的培訓課程，從基礎知識、施術技術到接客服務，一步一步紮實學習。完全零經驗也不用擔心。',
  },
  {
    num: '02',
    emoji: '🚀',
    tag: '1年後的自己看得見',
    title: '看得見的晉升制度',
    sub: '清楚的職涯路徑，讓你安心前進',
    body: '伸展師 → 資深伸展師 → 店長 → 區域管理，每個階段都有明確的評估標準。努力的方向清晰，升遷不靠運氣。',
  },
  {
    num: '03',
    emoji: '💰',
    tag: '努力 = 收入提升',
    title: '努力就能賺到的薪資結構',
    sub: '底薪＋業績獎金＋完善福利',
    body: '穩定底薪之外，業績獎金讓你的努力直接反映在收入上。福利制度完善，讓你能全力衝刺、安心工作。',
  },
  {
    num: '04',
    emoji: '🏆',
    tag: '今入即先機',
    title: '日系品牌帶來的穩定與信賴',
    sub: '在台灣持續展店，成長期正好現在',
    body: '成熟的日系管理制度與企業文化，讓你安心長期發展。現在加入，就是參與品牌在台灣成長故事的一員。',
  },
]

export default function BenefitsSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="benefits" ref={ref} className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-5xl mx-auto px-6">

        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-5">Why Join Us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            加入我們的 <span className="text-brand-lime">4</span> 個理由
          </h2>
        </div>

        {/*
          File: /public/images/treatment.jpg
          → The trainer-stretching-client photo you provided (lime uniform, black table)
          This is the same photo used in BrandSection — reusing the same file is fine.
        */}
        <div
          className={`relative w-full h-52 md:h-72 rounded-3xl overflow-hidden mb-12 bg-brand-charcoal transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundImage: "url('/images/treatment.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          {/* Copy over image */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-14">
            <p className="text-brand-lime text-xs font-bold tracking-[0.25em] uppercase mb-3">Dr.stretch Style</p>
            <p className="text-white text-xl md:text-3xl font-bold leading-snug">
              用雙手改變客人的身體，<br className="hidden md:block" />
              這就是伸展師的工作。
            </p>
          </div>

          {/* Red corner accent */}
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand-red" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`group relative border border-white/8 hover:border-brand-red/50 bg-white/3 hover:bg-white/6 rounded-3xl p-8 transition-all duration-400 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Lime top accent bar on hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-brand-lime opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

              {/* Large number watermark */}
              <span className="absolute top-5 right-7 text-7xl font-bold text-white/4 select-none leading-none">
                {b.num}
              </span>

              <div className="text-4xl mb-4">{b.emoji}</div>

              <span className="inline-block bg-brand-red/20 text-brand-red text-xs font-bold px-3 py-1 rounded-full mb-4">
                {b.tag}
              </span>

              <h3 className="text-xl font-bold text-white mb-1.5">{b.title}</h3>
              <p className="text-brand-lime/70 text-sm font-medium mb-4">{b.sub}</p>
              <p className="text-white/60 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line !text-lg !px-10 !py-4"
          >
            <LineIcon />
            先聊聊也沒關係
          </a>
          <p className="text-white/30 text-sm mt-4">免費・無壓力・隨時都可以問</p>
        </div>
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
