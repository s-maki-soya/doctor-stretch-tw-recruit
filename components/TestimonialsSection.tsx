'use client'

import { useEffect, useRef, useState } from 'react'

const LINE_URL = 'https://lin.ee/s5IYRtF'

/*
  Placeholder testimonials — replace with real staff quotes.
  Staff individual photos: place as /public/images/staff-1.jpg etc.
  Leave imagePath as '' to show initial-letter avatar instead.
*/
const testimonials = [
  {
    name: '',
    age: '',
    prev: '前健身教練',
    tenure: '入職四年三個月',
    quote: '完整的培訓制度、公開透明且人人有機會的升遷管道、海外進修機會，如果你也想找一個適合自己的事業、Dr.Stretch將會成為你最好的創業夥伴！從零經驗到世界級國際人才、這個大舞台等你來挑戰！',
    imagePath: '/images/staff-1.jpg',
    initial: '',
  },
  {
    name: '',
    age: '',
    prev: '',
    tenure: '入職六年兩個月',
    quote: '公司沒有過多的硬性規範限制，而是給予每個人發揮與成長的空間。團隊之間相處融洽，工作氛圍單純且互相支持。在這裡，不會因為年資或背景而限制發展，只要願意努力，並朝著正確的方向前進，就有機會獲得自己想要的成果與成長。如果你希望在一個能發揮自己的舞台上，不斷挑戰與提升自己，這裡會是一個值得加入的地方。',
    imagePath: '/images/staff-2.jpg',
    initial: '',
  },
  {
    name: '',
    age: '',
    prev: '',
    tenure: '',
    quote: '在這裡，你不是一個人單打獨鬥，而是一群人一起前進！沒有相關經驗也能跟開心的跟夥伴互相激勵成長！探索出屬於自己的未來！如果你也在找尋這樣的工作環境，我想你ㄧ定要來Dr.stretch試試！',
    imagePath: '/images/staff-3.jpg',
    initial: '',
  },
]

export default function TestimonialsSection() {
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
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Team Photo Banner ───────────────────────────────────── */}
        {/*
          File: /public/images/team.jpg
          → Copy the staff team photo (4 women in lime uniforms) here
        */}
        <div
          className={`relative w-full h-56 md:h-72 rounded-3xl overflow-hidden mb-20 bg-gray-100 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            backgroundImage: "url('/images/team.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        >
          {/* Dark overlay + copy */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
            <p className="text-brand-lime text-xs font-bold tracking-[0.25em] uppercase mb-3">Our Team</p>
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              一起成長的夥伴，<br />在這裡等你。
            </h3>
          </div>
          {/* Red corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-brand-red" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
        </div>

        {/* ── Section heading ─────────────────────────────────────── */}
        <div
          className={`text-center mb-14 transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-5">Real Voices</p>
          <h2 className="section-title">來自夥伴的真實心聲</h2>
        </div>

        {/* ── Testimonial cards ───────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative bg-brand-cream rounded-3xl p-8 overflow-hidden group hover:shadow-lg transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Red top accent bar on hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Quote mark */}
              <span className="absolute top-4 right-6 text-8xl font-serif text-brand-black/5 select-none leading-none">"</span>

              {/* Avatar */}
              <div className="w-28 h-28 rounded-full bg-brand-black/10 mb-6 overflow-hidden flex items-center justify-center">
                <div
                  className="w-full h-full bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url('${t.imagePath}')` }}
                >
                  <span className="text-brand-black font-bold text-xl">{t.initial}</span>
                </div>
              </div>

              <div className="mb-1">
                <span className="font-bold text-brand-black text-lg">{t.name}</span>
                <span className="text-gray-400 text-sm ml-2">{t.age}</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {t.prev} → <span className="text-brand-black font-medium">{t.tenure}</span>
              </p>
              <div className="w-8 h-0.5 bg-brand-red mb-4" />
              <p className="text-gray-600 text-base leading-relaxed relative z-10">{t.quote}</p>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
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
            我也想加入這個團隊
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
