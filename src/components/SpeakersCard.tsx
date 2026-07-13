import { Mic, ExternalLink } from 'lucide-react'
import speakerManlapaz from '../assets/speaker-manlapaz.jpg'
import speakerParekh from '../assets/speaker-parekh.jpg'
import speakerGogna from '../assets/speaker-gogna.jpg'

type SpeakerLink = {
  label: string
  href: string
}

type Speaker = {
  name: string
  photo: string
  links: SpeakerLink[]
}

const SPEAKERS: Speaker[] = [
  {
    name: 'Christian Manlapaz',
    photo: speakerManlapaz,
    links: [
      {
        label: 'linkedin.com/in/cris-manlapaz',
        href: 'https://www.linkedin.com/in/cris-manlapaz',
      },
    ],
  },
  {
    name: 'Maulik Parekh',
    photo: speakerParekh,
    links: [
      {
        label: 'facebook.com/iammaulikparekh',
        href: 'https://www.facebook.com/iammaulikparekh',
      },
      {
        label: 'Spotify show',
        href: 'https://open.spotify.com/show/2PVoiC64mXIoFURvculvjj',
      },
    ],
  },
  {
    name: 'Arun Gogna',
    photo: speakerGogna,
    links: [
      {
        label: 'facebook.com/gognaarun',
        href: 'https://www.facebook.com/gognaarun',
      },
      {
        label: 'youtube.com/@gognaarun',
        href: 'https://www.youtube.com/@gognaarun',
      },
    ],
  },
]

function SpeakersCard() {
  return (
    <div className="flex flex-col items-center rounded-3xl border-2 border-navy/30 bg-white/70 p-6 text-center shadow-lg backdrop-blur-sm">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy">
        <Mic className="h-8 w-8 text-white" aria-hidden="true" />
      </span>
      <h2 className="mt-3 font-canvas text-xl font-bold tracking-wide text-navy">
        SPEAKERS
      </h2>

      <ul className="mt-4 flex w-full flex-col gap-5">
        {SPEAKERS.map((speaker) => (
          <li key={speaker.name} className="flex items-center gap-4 text-left">
            <img
              src={speaker.photo}
              alt={speaker.name}
              className="h-16 w-16 shrink-0 rounded-full border-2 border-amber-400 object-cover"
            />
            <div className="min-w-0">
              <p className="font-lora text-sm font-bold uppercase tracking-wide text-navy">
                {speaker.name}
              </p>
              <ul className="mt-1 flex flex-col gap-1">
                {speaker.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 break-all text-xs font-medium text-blue-700 underline"
                    >
                      <ExternalLink
                        className="h-3.5 w-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpeakersCard
