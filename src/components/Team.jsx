import './Team.css';

const teamMembers = [
    { name: 'Amlanjyoti', role: 'Aerotech Head', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790091019/IMG_20260628_105813.jpg_2_-removebg-preview_fk1bgy.png' },
    { name: 'Biki', role: 'Technical', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790091182/ChatGPT_Image_Sep_21_2026_01_03_58_PM_fpgswf.png' },
    { name: 'Ipshita', role: 'PR', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790092212/IMG_20260913_135616.jpg_1_-Photoroom_gnajgs.png' },
    { name: 'Tushar', role: 'Motion', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790092148/IMG_20260913_135743.jpg_3_-Photoroom_obhudj.png' },
    { name: 'Akashdeep', role: 'Finance', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790091046/IMG_1114_1_-Photoroom_u0oywd.png' },
    { name: 'Himanshu', role: 'Management', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790091120/ChatGPT_Image_Sep_21_2026_02_08_34_PM_xqg3r5.png' },
    { name: 'Swapnali', role: 'Graphics', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790092261/IMG_20260913_140201.jpg_2_-removebg-preview_fiqkk2.png' },
    { name: 'Mung Chung', role: 'Content Manager', image: 'https://res.cloudinary.com/dnmobechs/image/upload/v1790090973/EVENT_HEAD-removebg-preview_tluflu.png' },
];

function TeamCard({ member, index }) {
    return (
        <article className={`team-card team-card--${index + 1}`} style={{ '--team-delay': `${index * 70}ms` }}>
            <div className="team-card__image-wrap">
                <img src={member.image} alt={`${member.name}, ${member.role}`} className="team-card__image" />
                <div className="team-card__shade" />
            </div>
            <div className="team-card__info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
            </div>
        </article>
    );
}

export default function Team() {
    return (
        <section id="team" className="team-section section-padding relative overflow-hidden">
            <div className="team-section__grid" aria-hidden="true" />
            <div className="max-w-6xl mx-auto relative z-10">
                <header className="team-header">
                    <div>
                        <p className="team-kicker"><span /> The crew behind the lift-off</p>
                        <h2 className="font-anton team-title">CORE TEAM</h2>
                    </div>
                    <p className="team-intro">Eight minds. One runway. Meet the people turning Aerotech from an idea into an experience.</p>
                </header>
                <div className="team-grid">
                    {teamMembers.map((member, index) => <TeamCard key={member.name} member={member} index={index} />)}
                </div>
            </div>
        </section>
    );
}
