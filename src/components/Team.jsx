import './Team.css';

const teamMembers = [
    { name: 'Aarav Mehta', role: 'Event Director', image: '/team/member-1.jpg' },
    { name: 'Maya Sharma', role: 'Aviation Lead', image: '/team/member-2.jpg' },
    { name: 'Rohan Kapoor', role: 'Operations Lead', image: '/team/member-3.jpg' },
    { name: 'Anika Rao', role: 'Design & Creative', image: '/team/member-4.jpg' },
    { name: 'Kabir Singh', role: 'Technical Lead', image: '/team/member-5.jpg' },
    { name: 'Zoya Khan', role: 'Outreach & Partnerships', image: '/team/member-6.jpg' },
    { name: 'Ishaan Das', role: 'Flight Operations', image: '/team/member-7.jpg' },
    { name: 'Tara Nair', role: 'Experience Lead', image: '/team/member-8.jpg' },
];

function TeamCard({ member, index }) {
    return (
        <article className={`team-card team-card--${index + 1}`} style={{ '--team-delay': `${index * 70}ms` }}>
            <div className="team-card__image-wrap">
                <img src={member.image} alt={`${member.name}, ${member.role}`} className="team-card__image" />
                <div className="team-card__shade" />
                <span className="team-card__number">0{index + 1}</span>
                <span className="team-card__orbit" aria-hidden="true" />
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

                <div className="team-rule"><span>03</span><i /><span>mission control</span></div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => <TeamCard key={member.name} member={member} index={index} />)}
                </div>

                <div className="team-footer-note">
                    <span className="team-footer-note__line" />
                    <span>Built with curiosity · flown with purpose</span>
                    <span className="team-footer-note__line" />
                </div>
            </div>
        </section>
    );
}
