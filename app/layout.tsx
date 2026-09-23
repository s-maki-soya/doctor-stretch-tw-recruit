import type { Metadata } from 'next'
import './globals.css'

// TODO: 正式デプロイドメイン確定後に置き換えること（現状はプレースホルダー）
const SITE_URL = 'https://REPLACE_WITH_PRODUCTION_DOMAIN.example'

const jobPostingJsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'JobPosting',
  title: '伸展師（未經驗可）｜Dr.stretch 台灣',
  description:
    '用雙手，改變一個人的一天。Dr.stretch 台灣現正招募伸展師夥伴。不需要相關經驗，提供完整研修制度、明確晉升路徑，日系品牌的穩定成長環境。',
  datePosted: '2026-08-18',
  employmentType: ['FULL_TIME'],
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Dr.stretch 台灣',
    sameAs: 'https://lin.ee/s5IYRtF',
    logo: `${SITE_URL}/images/logo.svg`,
  },
  // 給与情報は確定次第 baseSalary を追加すること（未確定情報のため現時点では記載しない）
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TW',
      // 店舗住所確定後に addressLocality / streetAddress を追加すること
    },
  },
}

export const metadata: Metadata = {
  title: 'Dr.stretch 台灣｜現正招募伸展師夥伴',
  description:
    '用雙手，改變一個人的一天。Dr.stretch 台灣現正招募伸展師夥伴。不需要相關經驗，完整研修制度，日系品牌的穩定成長環境。LINE免費諮詢受付中。',
  keywords: 'Dr.stretch,台灣招募,伸展師,工作,求職,日系,無經驗OK,徵才',
  openGraph: {
    title: 'Dr.stretch 台灣｜現正招募伸展師夥伴',
    description: '用雙手，改變一個人的一天。不需要相關經驗。完整研修制度＋明確晉升路徑。',
    locale: 'zh_TW',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
