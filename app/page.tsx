import { HeroOpening } from "@/components/home/hero-opening"
import { QuestionsCarousel } from "@/components/home/questions-carousel"
import { SkyNow } from "@/components/home/sky-now"
import { HoroscopeSection } from "@/components/home/horoscope-section"
import { LunarCard } from "@/components/home/lunar-card"
import { PlansSection } from "@/components/home/plans-section"
import { ScheduleSection } from "@/components/home/schedule-section"

export default function HomePage() {
  return (
    <main>
      {/* Data Astral — abertura e funil */}
      <HeroOpening />
      <QuestionsCarousel />

      {/* Conteúdo livre, sem login e sem dados pessoais.
          O céu é o mesmo para todos; horóscopo e lua são autorais. */}
      <SkyNow />
      <HoroscopeSection />
      <LunarCard />

      {/* Monetização */}
      <PlansSection />
      <ScheduleSection />
    </main>
  )
}
