import { ClipboardCheck } from 'lucide-react'
import qrCode from '../assets/qr-code.png'

const REGISTRATION_URL = 'https://forms.cloud.microsoft/r/jzDSJCE3Cx'

function RegistrationCard() {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-white/60 bg-white/70 p-6 text-center shadow-lg backdrop-blur-sm">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy">
        <ClipboardCheck className="h-8 w-8 text-white" aria-hidden="true" />
      </span>
      <h2 className="mt-3 font-canvas text-xl font-bold tracking-wide text-navy">
        REGISTRATION
      </h2>

      <a
        href={REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md"
      >
        <img
          src={qrCode}
          alt="QR code to scan for conference registration"
          className="h-40 w-40 object-contain sm:h-48 sm:w-48"
        />
      </a>

      <a
        href={REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center rounded-md border-2 border-blue-900 bg-blue-700 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white shadow transition hover:bg-blue-800"
      >
        Scan to Register
      </a>
    </div>
  )
}

export default RegistrationCard
