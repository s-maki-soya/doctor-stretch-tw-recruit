import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隱私權政策｜個人資料蒐集告知事項｜Dr.stretch 台灣',
  description: 'Dr.stretch 台灣招募網站依據台灣個人資料保護法（個資法）發布之個人資料蒐集、處理及利用告知事項。',
  robots: { index: true, follow: true },
}

const LINE_URL = 'https://lin.ee/s5IYRtF'

export default function PrivacyPage() {
  return (
    <>
      <header className="bg-brand-black py-6">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.svg"
              alt="Dr.stretch"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <span className="text-xs font-normal text-white/50 tracking-widest">TAIWAN</span>
          </a>
          <a href="/" className="text-sm text-white/60 hover:text-white transition-colors">
            ← 返回首頁
          </a>
        </div>
      </header>

      <main className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-4">Privacy Policy</p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-3">隱私權政策（個人資料蒐集告知事項）</h1>
          <p className="text-gray-400 text-sm mb-12">最後更新日期：2026年8月18日</p>

          <div className="prose-custom space-y-10 text-gray-700 leading-relaxed">
            <p>
              Dr.stretch 台灣（以下稱「本公司」）於招募活動中，將依據台灣「個人資料保護法」（下稱「個資法」）之相關規定，
              蒐集、處理及利用您所提供之個人資料。為保障您的權益，請於提供個人資料前，詳閱以下告知事項。
            </p>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-3">一、蒐集之目的</h2>
              <p>
                本公司於招募、應徵作業過程中，將為以下目的蒐集您的個人資料：
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>人才招募與甄選作業（含履歷審核、面試安排、錄取通知）</li>
                <li>透過 LINE 官方帳號與您進行應徵相關之諮詢與聯繫</li>
                <li>錄取後之勞健保投保、勞動契約簽訂及人事管理作業</li>
                <li>依法令規定應履行之相關義務</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-3">二、個人資料之類別</h2>
              <p>本公司蒐集之個人資料類別包括但不限於：</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>識別類：姓名、出生年月日、聯絡電話、電子郵件、LINE 帳號、通訊地址</li>
                <li>學經歷類：學歷、工作經歷、證照資格</li>
                <li>其他於應徵、面試過程中您主動提供之相關資料</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-3">三、個人資料利用之期間、地區、對象及方式</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <span className="font-semibold text-brand-black">期間：</span>
                  自本公司蒐集之日起，至招募目的完成、您要求刪除，或依相關法令所定之保存期限屆滿為止。
                </li>
                <li>
                  <span className="font-semibold text-brand-black">地區：</span>
                  台灣地區（本公司及本公司人資、招募作業相關單位所在地）。
                </li>
                <li>
                  <span className="font-semibold text-brand-black">對象：</span>
                  本公司人資招募相關人員；未經您另行同意，本公司不會將您的個人資料提供予第三人，法令另有規定者不在此限。
                </li>
                <li>
                  <span className="font-semibold text-brand-black">方式：</span>
                  以電子化資料處理及書面文件保存等符合個資法規定之方式進行蒐集、處理及利用。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-3">四、當事人依個資法得行使之權利及方式</h2>
              <p>依個資法第 3 條規定，您就本公司保有之個人資料得行使以下權利：</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>查詢或請求閱覽</li>
                <li>請求製給複製本</li>
                <li>請求補充或更正</li>
                <li>請求停止蒐集、處理或利用</li>
                <li>請求刪除</li>
              </ul>
              <p className="mt-2">
                如您欲行使上述權利，請透過本頁下方之聯絡方式與本公司聯繫，本公司將於受理後依法令規定期限內處理回覆。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-3">五、不提供個人資料之影響</h2>
              <p>
                您所提供之個人資料為本公司辦理招募甄選作業所必要。若您選擇不提供相關個人資料，或提供之資料不完整，
                本公司將可能無法進行後續之應徵聯繫、面試安排或錄取作業。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-3">六、聯絡方式</h2>
              <p>
                如您對本告知事項或個人資料之蒐集、處理及利用有任何疑問，歡迎透過本公司 LINE 官方帳號與我們聯繫：
              </p>
              <p className="mt-3">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-line !py-3 !px-6 !text-sm"
                >
                  LINE 官方帳號諮詢
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-6">
                ※ 本公司之正式登記名稱、統一編號及其他聯絡方式（如客服電話、電子郵件信箱）將於確認後另行公告於本頁面。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-3">七、其他</h2>
              <p>
                本公司得因應法令修訂或業務需要修改本告知事項，修改後將公布於本頁面，請您隨時留意最新版本。
                若您不同意修改後之內容，得依前述方式行使相關權利。
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-brand-black py-10 text-center">
        <a href="/" className="text-white/40 hover:text-white/70 text-sm underline underline-offset-2 transition-colors">
          返回首頁
        </a>
        <p className="text-white/40 text-sm mt-3">© 2024 Dr.stretch Taiwan. All rights reserved.</p>
      </footer>
    </>
  )
}
