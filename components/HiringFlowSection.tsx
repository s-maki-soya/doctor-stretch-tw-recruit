'use client'

import { useEffect, useRef, useState } from 'react'

const LINE_URL = 'https://lin.ee/s5IYRtF'

const steps = [
  {
    num: '01',
    emoji: '💬',
    title: 'LINE 免費諮詢',
    body: '點擊下方按鈕，加入我們的 LINE 官方帳號。有任何疑問都可以直接問，沒有壓力。',
    note: '免費・隨時都可以',
  },
  {
    num: '02',
    emoji: '🏪',
    title: '面試・門市參觀',
    body: '與負責人進行輕鬆的面談，並實際參觀我們的門市。不需要準備特別的資料，輕鬆前來即可。',
    note: '約 60 分鐘',
  },
  {
    num: '03',
    emoji: '🎉',
    title: '錄取・開始研修',
    body: '錄取後馬上開始完整的研修課程。入職第一天起就有薪資保障，安心展開你的新旅程。',
    note: '研修期間薪資保障',
  },
]

export default function HiringFlowSection() {
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
    <section id="flow" ref={ref} className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-5xl mx-auto px-6">

        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-5">How to Apply</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">應徵方式很簡單</h2>
          <p className="text-white/50 mt-4 text-lg">
            只要 <span className="text-brand-lime font-bold">3 個步驟</span>，就能開始你的新旅程
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 relative">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center text-center bg-white/4 border border-white/8 hover:border-brand-red/40 rounded-3xl px-7 py-10 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + i * 130}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-xl mb-5 z-10 shadow-lg shadow-brand-red/30">
                {s.num}
              </div>
              <div className="text-4xl mb-4">{s.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{s.body}</p>
              <span className="inline-block bg-brand-lime/15 text-brand-lime text-xs font-semibold px-4 py-1.5 rounded-full">
                {s.note}
              </span>
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
            className="btn-line !text-xl !px-12 !py-5"
          >
            <LineIcon />
            立即 LINE 諮詢（免費）
          </a>
          <p className="text-white/25 text-sm mt-4">問了再決定也完全 OK</p>
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
