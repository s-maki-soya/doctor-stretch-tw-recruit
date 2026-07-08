'use client'

import { useEffect, useRef, useState } from 'react'

const LINE_URL = 'https://lin.ee/s5IYRtF'

export default function FinalCTASection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-28 md:py-36 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-6">

        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Two-column layout on desktop: copy left, QR right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: copy + button */}
            <div className="text-center md:text-left">
              <div className="w-12 h-1 bg-brand-red mx-auto md:mx-0 mb-8" />

              <h2 className="text-3xl md:text-5xl font-bold text-brand-black leading-tight mb-6">
                先聽聽看，<br />也沒關係。
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                有任何疑問，或只是想多了解一點，<br />
                都可以先透過 LINE 跟我們聊聊。<br />
                <span className="text-brand-black font-semibold">沒有壓力，隨時都歡迎。</span>
              </p>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line !text-xl !px-10 !py-5 shadow-xl shadow-green-500/15"
              >
                <LineIcon />
                免費 LINE 諮詢
              </a>

              <p className="text-gray-300 text-sm mt-5">免費・無壓力・問了再決定也 OK</p>
            </div>

            {/* Right: QR code */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-400 text-sm font-medium">掃描 QR Code 加入 LINE</p>

              {/*
                File: /public/images/line-qr.png
                → The LINE QR code image you provided.
                Replace the img src below — it will display your actual QR Code.
              */}
              <div className="relative">
                {/* Red corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-brand-red rounded-tl-sm" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-brand-red rounded-tr-sm" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-brand-red rounded-bl-sm" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-brand-red rounded-br-sm" />

                <img
                  src="/images/line-qr.png"
                  alt="LINE QR Code — Dr.stretch Taiwan 招募"
                  className="w-44 h-44 rounded-xl object-contain bg-white p-2 shadow-md"
                />
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-300">@</span>
                <span className="text-xs text-gray-400 font-medium">Dr.stretch Taiwan 採用</span>
              </div>
            </div>
          </div>
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
