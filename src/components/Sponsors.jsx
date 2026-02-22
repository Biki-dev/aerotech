import bazarBakers from '../assets/sponsors_logos/Bazar_Bakers.png';
import campa from '../assets/sponsors_logos/campa.png';
import decathlon from '../assets/sponsors_logos/Decathlon-Logo.png';
import aai from '../assets/sponsors_logos/aai.png';
import cultees from '../assets/sponsors_logos/cultees.png';
import pakhtunBiriyani from '../assets/sponsors_logos/pakhtun_biriyani.png';
import robopixel from '../assets/sponsors_logos/robopixel.png';
import rollsMania from '../assets/sponsors_logos/rolls_mania.png';
import safarTravels from '../assets/sponsors_logos/safar_travels.png';
import theCulture from '../assets/sponsors_logos/the_culture.png';

// ── 2026 Sponsors — add new entries here ──
const currentSponsors = [
    { name: 'Campa', logo: campa, logoClass: 'max-h-32 md:max-h-36', tag: 'Drink Partner' },
    { name: 'Pakhtun Biriyani', logo: pakhtunBiriyani, logoClass: 'max-h-32 md:max-h-36', tag: 'Food Partner' },
    { name: 'Safar Travels', logo: safarTravels, logoClass: 'max-h-32 md:max-h-36', tag: 'Travel Partner' },
    { name: 'Bazar Bakers', logo: bazarBakers, logoClass: 'max-h-32 md:max-h-36', tag: 'Gifting Partner' },
    { name: 'The Culture', logo: theCulture, logoClass: 'max-h-32 md:max-h-36', tag: 'Accommodation Partner' },
    // Add more 2026 sponsors below:
];

// ── Previous Sponsors ──
const previousSponsors = [
    { name: 'Decathlon', logo: decathlon },
    { name: 'AAI', logo: aai },
    { name: 'Cultees', logo: cultees },
    { name: 'Robopixel', logo: robopixel },
    { name: 'Rolls Mania', logo: rollsMania },
];

function SponsorGrid({ sponsors }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {sponsors.map((s) => (
                <div
                    key={s.name}
                    className="relative flex items-center justify-center p-6 md:p-8 rounded-lg border border-white/5 hover:border-brand-green/30 bg-dark-card/30 hover:bg-dark-card/60 transition-all duration-500 cursor-default group"
                >
                    {s.tag && (
                        <span className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] md:text-xs font-medium tracking-wider uppercase text-brand-green bg-brand-green/10 border border-brand-green/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {s.tag}
                        </span>
                    )}
                    <img
                        src={s.logo}
                        alt={s.name}
                        className={`${s.logoClass || 'max-h-16 md:max-h-20'} w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export default function Sponsors() {
    return (
        <section id="sponsors" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="mb-10 md:mb-16">
                    <p className="text-brand-green text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase mb-3">
                        // Backed by the best
                    </p>
                    <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-white">
                        SPONSORS
                    </h2>
                </div>

                {/* 2026 Sponsors */}
                <div className="mb-10 md:mb-14">
                    <h3 className="font-anton text-xl md:text-2xl uppercase tracking-[0.05em] text-white/80 mb-5 flex items-center gap-3">
                        <span className="inline-block w-8 h-px bg-brand-green"></span>
                        2026 Sponsors
                    </h3>
                    <SponsorGrid sponsors={currentSponsors} />
                </div>

                {/* Previous Sponsors */}
                <div>
                    <h3 className="font-anton text-xl md:text-2xl uppercase tracking-[0.05em] text-white/40 mb-5 flex items-center gap-3">
                        <span className="inline-block w-8 h-px bg-white/20"></span>
                        Previous Sponsors
                    </h3>
                    <SponsorGrid sponsors={previousSponsors} />
                </div>
            </div>
        </section>
    );
}

