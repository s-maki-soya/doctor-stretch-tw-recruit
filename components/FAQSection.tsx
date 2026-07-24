'use client'

import { useEffect, useRef, useState } from 'react'

const faqs = [
  {
    q: '完全沒有相關經驗，可以應徵嗎？',
    a: '完全沒問題！我們非常歡迎零經驗的應徵者。入職後有完整的研修課程，從基礎知識到施術技術一步步教起，請放心應徵。',
  },
  {
    q: '研修期間有薪水嗎？',
    a: '有的。研修期間同樣有薪資保障，不需要擔心收入問題。詳細的薪資結構，請透過 LINE 與我們諮詢。',
  },
  {
    q: '需要會說日文嗎？',
    a: '不需要日文能力。日常工作以中文為主，所有教材和指導都是中文的，請安心應徵。',
  },
  {
    q: '工作班表是怎麼安排的？',
    a: '採排班制，會根據店面的營業狀況排定班表。入職時會與您討論適合的班次，有任何問題都歡迎透過 LINE 事先詢問。',
  },
  {
    q: '薪資大概是多少？',
    a: '採底薪加業績獎金制。具體金額視職位和個人表現而定，詳細內容請透過 LINE 進行個別說明，我們會詳細地為您介紹和說明。',
  },
  {
    q: '一天會服務幾位客人？',
    a: '約 3〜6 位客人，每位施術時間約 60 分鐘。我們重視服務品質，不會讓夥伴過度勞累。',
  },
]

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-5">FAQ</p>
          <h2 className="section-title">常見問題</h2>
        </div>

        {/* Accordion */}
        <div
          className={`space-y-3 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span className="flex-shrink-0 font-bold text-brand-red text-lg leading-tight">Q</span>
                  <span className="font-medium text-brand-charcoal leading-snug">{faq.q}</span>
                </div>
                <svg
                  className={`w-5 h-5 text-brand-black flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? 'max-h-60' : 'max-h-0'
                }`}
              >
                <div className="flex gap-3 px-6 pb-6">
                  <span className="flex-shrink-0 font-bold text-brand-black text-lg leading-tight">A</span>
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
