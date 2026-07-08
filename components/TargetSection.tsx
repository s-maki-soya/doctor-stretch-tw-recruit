'use client'

import { useEffect, useRef, useState } from 'react'

const targets = [
  {
    emoji: '🔄',
    tag: '轉職首選',
    title: '想換個跑道，重新出發的你',
    body: '曾從事美容、服務業、餐飲等接待工作，想在更有制度的環境中找到有意義的職涯方向。',
  },
  {
    emoji: '💬',
    tag: '重視成就感',
    title: '喜歡與人互動，享受看到對方笑容的你',
    body: '每天的工作就是讓客人身體舒緩、帶著笑容離開。這份喜悅，正是這份工作最大的魅力。',
  },
  {
    emoji: '📈',
    tag: '積極上進',
    title: '認真工作，希望付出有所回報的你',
    body: '清楚的晉升制度和業績獎金，讓你的努力直接反映在職位和薪水上。越認真，越有回報。',
  },
]

export default function TargetSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-5">Who We&apos;re Looking For</p>
          <h2 className="section-title">
            我們在找的，<br className="md:hidden" />就是你這樣的人
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {targets.map((t, i) => (
            <div
              key={i}
              className={`group relative bg-brand-cream hover:bg-brand-black rounded-3xl p-8 transition-all duration-500 cursor-default overflow-hidden border border-transparent hover:border-brand-red/40 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Lime accent corner on hover */}
              <div className="absolute top-0 right-0 w-0 h-0 group-hover:w-16 group-hover:h-16 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-lime" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              </div>

              <div className="text-5xl mb-5">{t.emoji}</div>

              <span className="inline-block bg-brand-red/10 group-hover:bg-brand-red/20 text-brand-red text-xs font-semibold px-3 py-1 rounded-full mb-4 transition-colors">
                {t.tag}
              </span>

              <h3 className="text-lg font-bold text-brand-black group-hover:text-white mb-3 leading-snug transition-colors">
                {t.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors">
                {t.body}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-brand-red/8 border border-brand-red/25 rounded-full px-8 py-4">
            <span className="text-brand-red font-bold text-xl">✦</span>
            <span className="text-brand-black font-bold">完全歡迎無相關工作經驗的應徵者</span>
          </div>
        </div>
      </div>
    </section>
  )
}
