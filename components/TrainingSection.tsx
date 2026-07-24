'use client'

import { useEffect, useRef, useState } from 'react'

const LINE_URL = 'https://lin.ee/s5IYRtF'

/*
  Training step images — place in /public/images/:
    training-1.jpg  → 研修課程照片（授業・ホワイトボード前でのレクチャーシーン）
    training-2.jpg  → 実技練習照片（ペアでの練習シーン）
    training-3.jpg  → 門市上崗照片（チーム集合写真・店舗前）

  Tip: screenshot/export from recruit.doctorstretch.com or use any Dr.stretch training photos.
*/

const steps = [
  {
    num: '01',
    image: '/images/training-1.jpg',
    title: '入職培訓',
    sub: '扎實的基礎課程',
    body: '從人體解剖學、施術理論到接待禮儀，由專業講師系統化教學。沒有相關背景也能跟上。',
    accent: '#D41F1F',
  },
  {
    num: '02',
    image: '/images/training-2.jpg',
    title: '技術認定',
    sub: '180小時的實技演練',
    body: '通過完整的技術認定測驗後，才正式上崗。充分練習讓你帶著自信服務第一位客人。',
    accent: '#D41F1F',
  },
  {
    num: '03',
    image: '/images/training-3.jpg',
    title: '門市上崗',
    sub: '正式成為伸展師',
    body: '通過認定後，正式加入門市團隊。前輩一對一帶領，讓你在安心的環境中快速成長。',
    accent: '#C5E000',
  },
]

export default function TrainingSection() {
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
    <section id="training" ref={ref} className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-5">Training System</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            從零開始，<span className="text-brand-lime">放心學起</span>
          </h2>
          <p className="text-white/50 mt-4 text-lg">
            完整研修制度，讓每一位新夥伴都能自信上崗
          </p>
        </div>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-6 relative">

          {/* Connector arrows (desktop) */}
          <div className="hidden md:flex absolute top-[140px] left-[calc(33.33%-8px)] right-[calc(33.33%-8px)] justify-between items-center pointer-events-none z-10">
            <div className="flex-1 flex justify-center">
              <svg className="w-8 h-8 text-brand-red/60" fill="none" viewBox="0 0 32 32">
                <path d="M8 16h16M18 10l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 flex justify-center">
              <svg className="w-8 h-8 text-brand-red/60" fill="none" viewBox="0 0 32 32">
                <path d="M8 16h16M18 10l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-3xl overflow-hidden bg-white/5 border border-white/8 hover:border-brand-red/40 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 + i * 130}ms` }}
            >
              {/* Photo */}
              {/*
                training-1.jpg / training-2.jpg / training-3.jpg
                → Place your Dr.stretch training photos in /public/images/
                → Recommended size: 600×400px (landscape)
              */}
              <div
                className="relative w-full aspect-[3/2] bg-brand-charcoal overflow-hidden"
                style={{
                  backgroundImage: `url('${s.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Step number badge */}
                <div
                  className="absolute top-4 left-4 font-black text-5xl leading-none select-none"
                  style={{ color: s.accent, opacity: 0.9, fontStyle: 'italic' }}
                >
                  {s.num}
                </div>

                {/* Dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Step title overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                  <p
                    className="text-xs font-bold tracking-widest mb-0.5"
                    style={{ color: s.accent }}
                  >
                    {s.sub}
                  </p>
                  <h3 className="text-white font-bold text-xl">{s.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5 flex-1">
                <p className="text-white/55 text-sm leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile connector — vertical */}
        <style jsx>{`
          @media (max-width: 767px) {
            .step-connector { display: flex; justify-content: center; padding: 8px 0; }
          }
        `}</style>

        {/* Note + CTA */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-brand-lime/10 border border-brand-lime/25 rounded-full px-8 py-3 mb-8">
            <span className="text-brand-lime font-bold">✓</span>
            <span className="text-brand-lime/80 text-sm font-medium">研修期間薪資全額保障</span>
          </div>
          <br />
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line !text-lg !px-10 !py-4"
          >
            <LineIcon />
            想了解研修詳情
          </a>
          <p className="text-white/20 text-sm mt-4">免費諮詢・隨時可問</p>
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
