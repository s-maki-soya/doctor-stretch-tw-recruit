'use client'

import { useState, useEffect } from 'react'

const LINE_URL = 'https://lin.ee/s5IYRtF'

const NAV_LINKS = [
  { label: '職位特色', href: '#benefits' },
  { label: '工作內容', href: '#daily' },
  { label: '應徵方式', href: '#flow' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/97 backdrop-blur-md shadow-lg shadow-black/30 py-3' : 'bg-transparent py-5'
      }`}
    >
      {/* Red top accent always visible */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-brand-red" />

      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/*
          LOGO — Two-layer approach:
          1. logo.png is attempted first (place at /public/images/logo.svg)
          2. If missing, the styled text fallback renders automatically via onError
          File: /public/images/logo.svg  (download from Google Drive link provided)
        */}
        <a href="#" className="flex items-center gap-3 group" aria-label="Dr.stretch Taiwan トップへ">
          {/* Logo image — shows when logo.png is placed */}
          <img
            src="/images/logo.svg"
            alt="Dr.stretch"
            className="h-9 md:h-10 w-auto object-contain brightness-0 invert"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />

          {/* TAIWAN sub-label */}
          <span className="hidden sm:inline text-xs font-normal text-white/50 tracking-widest ml-1">
            TAIWAN
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line !py-2.5 !px-6 !text-sm"
          >
            <LineIcon className="w-4 h-4" />
            免費諮詢
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="開啟選單"
          className="md:hidden p-2 rounded-md text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-black border-t border-white/10 px-5 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white/70 hover:text-white font-medium border-b border-white/8 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line w-full"
            >
              <LineIcon className="w-5 h-5" />
              免費LINE諮詢
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? 'w-5 h-5'} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}
