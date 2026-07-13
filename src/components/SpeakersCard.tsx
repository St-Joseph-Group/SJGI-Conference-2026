import { Mic } from 'lucide-react'
import speakerManlapaz from '../assets/speaker-manlapaz.jpg'
import speakerParekh from '../assets/speaker-parekh.jpg'
import speakerGogna from '../assets/speaker-gogna.jpg'
import logoFacebook from '../assets/logo-facebook.png'
import logoLinkedin from '../assets/logo-linkedin.png'
import logoSpotify from '../assets/logo-spotify.png'
import logoYoutube from '../assets/logo-youtube.png'

type Platform = 'linkedin' | 'facebook' | 'spotify' | 'youtube'

const PLATFORMS: Record<Platform, { logo: string; label: string }> = {
  linkedin: { logo: logoLinkedin, label: 'LinkedIn' },
  facebook: { logo: logoFacebook, label: 'Facebook' },
  spotify: { logo: logoSpotify, label: 'Spotify' },
  youtube: { logo: logoYoutube, label: 'YouTube' },
}

type SpeakerLink = {
  platform: Platform
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
      { platform: 'linkedin', href: 'https://www.linkedin.com/in/cris-manlapaz' },
    ],
  },
  {
    name: 'Maulik Parekh',
    photo: speakerParekh,
    links: [
      { platform: 'facebook', href: 'https://www.facebook.com/iammaulikparekh' },
      { platform: 'spotify', href: 'https://open.spotify.com/show/2PVoiC64mXIoFURvculvjj' },
    ],
  },
  {
    name: 'Arun Gogna',
    photo: speakerGogna,
    links: [
      { platform: 'facebook', href: 'https://www.facebook.com/gognaarun' },
      { platform: 'youtube', href: 'https://www.youtube.com/@gognaarun' },
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
              <p className="whitespace-nowrap font-lora text-sm font-bold uppercase tracking-tight text-navy">
                {speaker.name}
              </p>
              <ul className="mt-2 flex items-center gap-3">
                {speaker.links.map((link) => {
                  const { logo, label } = PLATFORMS[link.platform]
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${speaker.name} on ${label}`}
                        title={label}
                        className="inline-flex items-center justify-center rounded-md transition hover:scale-110"
                      >
                        <img
                          src={logo}
                          alt={label}
                          className="h-8 w-8 object-contain"
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpeakersCard
