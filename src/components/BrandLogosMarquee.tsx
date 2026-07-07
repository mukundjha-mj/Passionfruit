import americanNautical from '../assets/american nautical.avif'
import blindsgalore from '../assets/blindsgalore.avif'
import blueair from '../assets/Blueair.avif'
import bluetea from '../assets/Bluetea.avif'
import caratlane from '../assets/caratlane.avif'
import czarnowski from '../assets/czarnowski.avif'
import doTheUndone from '../assets/do the undone.avif'
import facescanada from '../assets/facescanada.avif'
import gfuel from '../assets/Gfuel.avif'
import goli from '../assets/goli.avif'
import hp from '../assets/hp.avif'
import juicyChemistry from '../assets/juicy chemistry.avif'
import knowellaAnalytics from '../assets/Knowella Analytics.avif'
import lagence from '../assets/lagence.avif'
import mcaffeine from '../assets/mcaffeine.avif'
import mokabara from '../assets/mokabara.avif'
import niit from '../assets/NIIT.avif'
import nykaa from '../assets/nykaa.avif'
import plix from '../assets/plix.avif'
import rms from '../assets/rms.avif'
import samphire from '../assets/samphire.avif'
import solawave from '../assets/solawave.avif'
import thenolishop from '../assets/thenolishop.avif'
import thesouledstore from '../assets/thesouledstore.avif'
import tuttlebeach from '../assets/tuttlebeach.avif'
import twoBrothers from '../assets/two brothers.avif'
import unilever from '../assets/unilever.avif'
import wolt from '../assets/wolt.avif'
import Marquee from './ui/Marquee'

// Reference splits the wall of brands into 3 stacked rows, each its own
// independent infinite marquee, alternating scroll direction row to row.
const ROW_1 = [
  { src: nykaa, alt: 'Nykaa' },
  { src: wolt, alt: 'Wolt' },
  { src: hp, alt: 'HP' },
  { src: unilever, alt: 'Unilever' },
  { src: caratlane, alt: 'CaratLane' },
  { src: mcaffeine, alt: 'mCaffeine' },
  { src: plix, alt: 'Plix' },
  { src: solawave, alt: 'Solawave' },
]

const ROW_2 = [
  { src: rms, alt: 'RMS Beauty' },
  { src: samphire, alt: 'Samphire' },
  { src: juicyChemistry, alt: 'Juicy Chemistry' },
  { src: facescanada, alt: 'Faces Canada' },
  { src: mokabara, alt: 'Mokobara' },
  { src: niit, alt: 'NIIT' },
  { src: knowellaAnalytics, alt: 'Knowella Analytics' },
  { src: americanNautical, alt: 'American Nautical' },
  { src: czarnowski, alt: 'Czarnowski' },
  { src: doTheUndone, alt: 'Do The Undone' },
]

const ROW_3 = [
  { src: lagence, alt: "L'Agence" },
  { src: gfuel, alt: 'G Fuel' },
  { src: bluetea, alt: 'Blue Tea' },
  { src: blueair, alt: 'Blueair' },
  { src: goli, alt: 'Goli' },
  { src: blindsgalore, alt: 'Blindsgalore' },
  { src: thenolishop, alt: 'The Noli Shop' },
  { src: thesouledstore, alt: 'The Souled Store' },
  { src: tuttlebeach, alt: 'Tuttle Beach' },
  { src: twoBrothers, alt: 'Two Brothers' },
]

// Reference rows are a CSS grid stretched to a fixed ~1898px width regardless
// of item count (minmax(50px, 1fr) columns) — matched here with flex-1 tiles
// inside a fixed-width track, so every row scrolls the same distance/speed
// without ever repeating a brand within a single pass.
const ROW_WIDTH_PX = 1898

function LogoRow({
  logos,
  reverse,
}: {
  logos: { src: string; alt: string }[]
  reverse: boolean
}) {
  return (
    <Marquee speedPxPerSecond={50} reverse={reverse} gapClassName="gap-0">
      <div className="flex h-26 shrink-0" style={{ width: ROW_WIDTH_PX }}>
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex h-26 min-w-12.5 flex-1 items-center justify-center border-x"
            style={{ borderColor: 'rgb(196, 196, 196)' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-24 w-auto max-w-[82%] object-contain grayscale"
            />
          </div>
        ))}
      </div>
    </Marquee>
  )
}

export default function BrandLogosMarquee() {
  return (
    <section className="border-t border-border-soft bg-white pt-6 pb-10">
      <p className="mb-6 text-center font-sans text-2xl tracking-[-0.03em] text-ink-950 uppercase">
        Join the best brands in the world powered by Passionfruit
      </p>
      <div className="flex justify-center px-16">
        <div
          className="flex w-full max-w-360 flex-col divide-y border-y"
          style={{ borderColor: 'rgb(196, 196, 196)' }}
        >
          <LogoRow logos={ROW_1} reverse={false} />
          <LogoRow logos={ROW_2} reverse />
          <LogoRow logos={ROW_3} reverse={false} />
        </div>
      </div>
    </section>
  )
}
