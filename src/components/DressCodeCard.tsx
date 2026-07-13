import { Shirt } from 'lucide-react'
import outfit1 from '../assets/outfit-1.jpg'
import outfit2 from '../assets/outfit-2.jpg'
import outfit3 from '../assets/outfit-3.jpg'
import outfit4 from '../assets/outfit-4.jpg'
import outfit5 from '../assets/outfit-5.jpg'
import outfit6 from '../assets/outfit-6.jpg'

const OUTFITS = [outfit1, outfit2, outfit3, outfit4, outfit5, outfit6]

function DressCodeCard() {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-white/60 bg-white/70 p-6 text-center shadow-lg backdrop-blur-sm">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy">
        <Shirt className="h-8 w-8 text-white" aria-hidden="true" />
      </span>
      <h2 className="mt-3 font-canvas text-xl font-bold tracking-wide text-navy">
        BUSINESS CASUAL
      </h2>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {OUTFITS.map((outfit, i) => (
          <img
            key={outfit}
            src={outfit}
            alt={`Business casual outfit example ${i + 1}`}
            className="aspect-[3/4] w-full rounded-lg object-cover shadow-sm"
          />
        ))}
      </div>
    </div>
  )
}

export default DressCodeCard
