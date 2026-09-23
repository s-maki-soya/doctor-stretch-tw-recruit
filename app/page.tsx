import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import BrandSection from '@/components/BrandSection'
import TargetSection from '@/components/TargetSection'
import BenefitsSection from '@/components/BenefitsSection'
import WelfareSection from '@/components/WelfareSection'
import TrainingSection from '@/components/TrainingSection'
import DailyScheduleSection from '@/components/DailyScheduleSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import HiringFlowSection from '@/components/HiringFlowSection'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'
import FloatingCTA from '@/components/FloatingCTA'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandSection />
        <TargetSection />
        <BenefitsSection />
        <WelfareSection />
        <TrainingSection />
        <DailyScheduleSection />
        <TestimonialsSection />
        <HiringFlowSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <footer className="bg-brand-black py-10 text-center">
        <a href="/privacy" className="text-white/40 hover:text-white/70 text-sm underline underline-offset-2 transition-colors">
          隱私權政策
        </a>
        <p className="text-white/40 text-sm mt-3">© 2024 Dr.stretch Taiwan. All rights reserved.</p>
      </footer>
      <FloatingCTA />
    </>
  )
}
