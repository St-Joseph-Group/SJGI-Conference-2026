import RegistrationCard from './components/RegistrationCard'
import SpeakersCard from './components/SpeakersCard'
import DressCodeCard from './components/DressCodeCard'
import mobileBg from './assets/mobile-bg.jpg'
import desktopBg from './assets/desktop-bg.jpg'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden px-[clamp(1rem,4vw,3rem)] py-[clamp(2rem,5vw,4rem)]">
      {/* Mobile background image (fixed backdrop) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${mobileBg})` }}
      />

      {/* Desktop background image (fixed backdrop) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{ backgroundImage: `url(${desktopBg})` }}
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="text-center">
          <h1 className="font-lora font-bold uppercase tracking-wide text-navy drop-shadow-sm text-[clamp(1.75rem,6vw,4rem)] leading-tight">
            SJ Group of Companies
          </h1>
          <h2 className="mt-1 font-lora font-bold uppercase tracking-wide text-navy drop-shadow-sm text-[clamp(1.5rem,5vw,3.25rem)] leading-tight">
            Economic Briefing 2026
          </h2>
        </header>

        <main className="mt-[clamp(1.5rem,4vw,3rem)] grid grid-cols-1 gap-[clamp(1rem,2.5vw,2rem)] lg:grid-cols-[1fr_1.7fr_1fr] lg:items-start">
          <RegistrationCard />
          <DressCodeCard />
          <SpeakersCard />
        </main>
      </div>
    </div>
  )
}

export default App
