'use client'

import { useEffect, useRef, useState } from 'react'

/*
  Daily schedule images — place in /public/images/ as square photos:
    daily-1.jpg  → 出勤・準備（朝のミーティング、スタッフ準備中）
    daily-2.jpg  → 開始接待客人（施術シーン）← treatment.jpg を流用してもOK
    daily-3.jpg  → 午休（スタッフが休憩・食事）
    daily-4.jpg  → 下午施術（施術シーン）
    daily-5.jpg  → 店務整理・自主練習（スタッフ同士で練習）
    daily-6.jpg  → 準時下班（笑顔で帰るスタッフ）

  推奨サイズ: 600×600px（正方形）
  ✅ 画像がない場合はグラデーションのプレースホルダーが表示されます
*/

const schedule = [
  // Top row
  {
    time: '10:00',
    icon: '☀️',
    title: '出勤・準備',
    body: '確認預約，整理工具，與同事晨間交流。',
    image: '/images/daily-1.jpg',
  },
  {
    time: '10:30',
    icon: '🤝',
    title: '開始接待客人',
    body: '確認需求，進行量身打造的伸展施術。',
    image: '/images/daily-2.jpg',
  },
  {
    time: '12:30',
    icon: '🍱',
    title: '午休',
    body: '輕鬆的休息時間，在附近用餐放鬆。',
    image: '/images/daily-3.jpg',
  },
  // Bottom row
  {
    time: '14:00',
    icon: '💪',
    title: '下午施術',
    body: '繼續服務午後的客人，每位都是獨一無二的對待。',
    image: '/images/daily-4.jpg',
  },
  {
    time: '17:30',
    icon: '📝',
    title: '店務整理・自主練習',
    body: '整理環境、更新記錄，和同事互相練習新技術。',
    image: '/images/daily-5.jpg',
  },
  {
    time: '19:00',
    icon: '🌙',
    title: '準時下班',
    body: '充實的一天結束。工作與生活的平衡是我們重視的事。',
    image: '/images/daily-6.jpg',
  },
]

// Gradient fallbacks per card index (shown when image is missing)
const fallbackGradients = [
  'from-zinc-700 to-zinc-900',
  'from-stone-600 to-stone-900',
  'from-neutral-600 to-neutral-900',
  'from-zinc-600 to-zinc-900',
  'from-stone-700 to-neutral-900',
  'from-neutral-700 to-zinc-900',
]

export default function DailyScheduleSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleImgError = (i: number) => {
    setImgErrors(prev => new Set(prev).add(i))
  }

  return (
    <section id="daily" ref={ref} className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-5">A Day in the Life</p>
          <h2 className="section-title">伸展師的一天</h2>
          <p className="section-subtitle">了解這份工作真實的日常節奏</p>
        </div>

        {/* 2×3 square grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {schedule.map((item, i) => (
            <div
              key={i}
              className={`relative aspect-square rounded-2xl overflow-hidden group cursor-default transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              {/* Background image */}
              {!imgErrors.has(i) ? (
                <img
                  src={item.image}
                  alt={item.title}
                  onError={() => handleImgError(i)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                /* Fallback gradient when image is missing */
                <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradients[i]} flex items-center justify-center`}>
                  <span className="text-4xl md:text-5xl opacity-60">{item.icon}</span>
                </div>
              )}

              {/* Always-on dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

              {/* Time badge — top left */}
              <div className="absolute top-3 left-3">
                <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-md leading-snug">
                  {item.time}
                </span>
              </div>

              {/* Content — bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 md:px-4 md:pb-4">
                <h3 className="text-white font-bold text-[11px] md:text-sm leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-white/60 text-[9px] md:text-xs leading-snug line-clamp-2">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
