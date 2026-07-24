'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '源自日本', label: '頂尖伸展品牌', note: '以運動科學為基礎發展而成的技術' },
  { value: '多店展開', label: '台灣持續擴店中', note: '穩定成長的企業' },
  { value: '完整研修', label: '入職即開始培訓', note: '零基礎也能成為專業訓練師' },
  { value: '明確晉升', label: '職涯路徑清晰', note: '努力就能晉升' },
]

export default function BrandSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6">

        {/* Two-column layout: text left, treatment photo right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Left: copy */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-5">About Dr.stretch</p>
            <h2 className="section-title mb-6">來自日本的<br />頂級伸展技術</h2>
            <div className="w-12 h-1 bg-brand-red mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Dr.stretch 是源自日本的專業伸展品牌，以運動科學為基礎的徒手伸展技術，
              讓客人能在短短60分鐘內感受到身體深層的舒緩與改變。
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              目前在台灣積極擴店中，誠邀有心的夥伴一同成長，共同打造台灣最好的伸展品牌。
            </p>
          </div>

          {/* Right: treatment photo */}
          {/*
            File: /public/images/treatment.jpg
            → Copy your 施術シーン photo (trainers stretching clients) here
          */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-xl"
              style={{
                backgroundImage: "url('/images/treatment.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Red accent corner */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-brand-red" />
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-brand-lime" />
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-brand-red font-bold text-xl mb-1">{stat.value}</div>
              <div className="text-brand-black font-semibold text-sm mb-2">{stat.label}</div>
              <div className="text-gray-400 text-xs leading-snug">{stat.note}</div>
            </div>
          ))}
        </div>

        {/* Red accent divider */}
        <div
          className={`mt-16 flex items-center gap-4 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex-1 h-px bg-gray-200" />
          <div className="w-8 h-1 bg-brand-red rounded-full" />
          <div className="w-3 h-1 bg-brand-lime rounded-full" />
          <div className="flex-1 h-px bg-gray-200" />
        </div>

      </div>
    </section>
  )
}
