'use client'

import { useEffect, useRef, useState } from 'react'

const LINE_URL = 'https://lin.ee/s5IYRtF'

const welfareItems = [
  {
    icon: '🛡️',
    title: '勞保・健保・雇主提撥退休金',
    body: '依法投保勞工保險、全民健康保險，並由雇主提撥退休金，工作有保障，未來更安心。',
  },
  {
    icon: '🌴',
    title: '特休假・生日假等假別完善',
    body: '特休假、生日假等假別制度完善，讓你在努力工作之餘，也能好好休息、照顧生活。',
  },
  {
    icon: '📚',
    title: '教育訓練與進修機會',
    body: '提供完整的教育訓練與進修機會，持續累積專業技術，陪你一起成長。',
  },
  {
    icon: '💰',
    title: '業績獎金・全勤獎金另計',
    body: '業績獎金、全勤獎金另計，努力與出勤表現都能直接反映在收入上。',
  },
]

export default function WelfareSection() {
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
    <section id="welfare" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-5">Benefits</p>
          <h2 className="section-title">完善的福利制度</h2>
          <p className="section-subtitle">讓你能安心長期發展的工作環境</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {welfareItems.map((item, i) => (
            <div
              key={i}
              className={`group relative bg-brand-cream hover:bg-brand-black rounded-3xl p-8 transition-all duration-500 border border-transparent hover:border-brand-red/40 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-brand-black group-hover:text-white mb-2 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/60 leading-relaxed transition-colors">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-14 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line"
          >
            <LineIcon />
            了解完整福利內容
          </a>
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
