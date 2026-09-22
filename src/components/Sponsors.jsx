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
import './Sponsors.css';

const currentSponsors = [
    { name: 'Campa', logo: campa, tag: 'Drink Partner' },
    { name: 'Pakhtun Biriyani', logo: pakhtunBiriyani, tag: 'Food Partner' },
    { name: 'Safar Travels', logo: safarTravels, tag: 'Travel Partner' },
    { name: 'Bazar Bakers', logo: bazarBakers, tag: 'Gifting Partner' },
    { name: 'The Culture', logo: theCulture, tag: 'Accommodation Partner' },
];

const previousSponsors = [
    { name: 'Decathlon', logo: decathlon },
    { name: 'AAI', logo: aai },
    { name: 'Cultees', logo: cultees },
    { name: 'Robopixel', logo: robopixel },
    { name: 'Rolls Mania', logo: rollsMania },
];

function PartnerCard({ sponsor, index, featured = false }) {
    return (
        <article
            className={`sponsor-card${featured ? ' sponsor-card--featured' : ''}`}
            style={{ '--card-delay': `${index * 90}ms` }}
        >
            <div className="sponsor-card__topline">
                <span className="sponsor-card__index">0{index + 1}</span>
            </div>
            <div className="sponsor-card__logo-wrap">
                <span className="sponsor-card__halo" />
                <img src={sponsor.logo} alt={sponsor.name} className="sponsor-card__logo" />
            </div>
            <div className="sponsor-card__footer">
                <span className="sponsor-card__tag">{sponsor.tag}</span>
            </div>
        </article>
    );
}

function ArchiveRail() {
    const loopedSponsors = [...previousSponsors, ...previousSponsors];

    return (
        <div className="sponsor-archive" aria-label="Previous sponsors">
            <div className="sponsor-archive__track">
                {loopedSponsors.map((sponsor, index) => (
                    <div className="archive-pill" key={`${sponsor.name}-${index}`}>
                        <img src={sponsor.logo} alt={index < previousSponsors.length ? sponsor.name : ''} aria-hidden={index >= previousSponsors.length} />
                        <span>{sponsor.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Sponsors() {
    return (
        <section id="sponsors" className="sponsors-section section-padding relative overflow-hidden">
            <div className="sponsors-section__glow sponsors-section__glow--one" />
            <div className="sponsors-section__glow sponsors-section__glow--two" />
            <div className="max-w-6xl mx-auto relative z-10">
                <header className="sponsors-header">
                    <div>
                        <p className="sponsors-kicker"><span /> Backed by the best</p>
                        <h2 className="font-anton sponsors-title">SPONSORS</h2>
                        <p className="sponsors-intro">
                            The people and brands helping the next generation take flight.
                        </p>
                    </div>
                    <div className="sponsors-count" aria-label={`${currentSponsors.length} current partners`}>
                        <strong>{String(currentSponsors.length).padStart(2, '0')}</strong>
                        <span>current<br />partners</span>
                    </div>
                </header>

                <div className="sponsors-rule"><span>01</span><i /><span>current partners</span></div>

                <div className="sponsor-wall">
                    {currentSponsors.map((sponsor, index) => (
                        <PartnerCard key={sponsor.name} sponsor={sponsor} index={index} featured={index === 0} />
                    ))}
                </div>

                <div className="sponsors-history">
                    <div className="sponsors-rule sponsors-rule--muted"><span>02</span><i /><span>from the archive</span></div>
                    <div className="sponsors-history__heading">
                        <h3 className="font-anton">Past supporters</h3>
                        <p>A growing flight path, built together.</p>
                    </div>
                    <ArchiveRail />
                </div>
            </div>
            <span className="sponsors-ghost-year" aria-hidden="true">26</span>
        </section>
    );
}
