import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr.stretch 台灣｜現正招募伸展師夥伴',
  description:
    '用雙手，改變一個人的一天。Dr.stretch 台灣現正招募伸展師夥伴。不需要相關經驗，完整研修制度，日系品牌的穩定成長環境。LINE免費諮詢受付中。',
  keywords: 'Dr.stretch,台灣招募,伸展師,工作,求職,日系,未經驗OK,徵才',
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
      <body>{children}</body>
    </html>
  )
}
