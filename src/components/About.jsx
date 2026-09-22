import CountUp from './CountUp';

export default function About() {
    const stats = [
        { value: '500+', label: 'Participants' },
        { value: '5+', label: 'Years Legacy' },
        { value: '25+', label: 'Colleges' },
        { value: '2', label: 'Days' },
    ];

    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="mb-10 md:mb-16">
                    <p className="text-brand-green text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase mb-3">
            // About the event
                    </p>
                    <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-white">
                        ABOUT
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left — Description */}
                    <div className="space-y-6">
                        <p className="text-white/60 text-base md:text-lg font-inter leading-relaxed">
                            <span className="text-white font-medium">Aerotech</span> is the flagship aeromodelling workshop and competition — a convergence of innovation, engineering, and the boundless sky.
                        </p>
                        <p className="text-white/40 text-sm md:text-base font-inter leading-relaxed">
                            From hands-on aeromodelling workshops to building and flying model aircraft, from keynote sessions by chief guests from the industry to exciting competitions — Aerotech brings together the brightest minds who dare to take flight.
                        </p>
                        <p className="text-white/40 text-sm md:text-base font-inter leading-relaxed">
                            Now in its 2026 edition, Aerotech continues to grow as a platform where future aeromodelling enthusiasts are born, ideas take flight, and innovation is celebrated.
                        </p>

                        {/* CTA */}
                        <div className="pt-4">
                            <a href="https://forms.gle/ML796iJ98SVKFyXX6" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3">
                                <span className="text-brand-green text-sm font-medium tracking-[0.15em] uppercase group-hover:text-brand-green-light transition-colors">
                                    Join the mission
                                </span>
                                <svg className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform duration-300 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right — Stats */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="p-4 sm:p-5 md:p-8 border border-white/5 rounded-lg flex flex-col items-center justify-center text-center">
                                <span className="font-anton text-3xl sm:text-4xl md:text-5xl text-brand-green block mb-1 sm:mb-2">
                                    <CountUp
                                        from={0}
                                        to={parseInt(stat.value, 10)}
                                        separator=","
                                        duration={1.8}
                                    />
                                    {stat.value.includes('+') ? '+' : ''}
                                </span>
                                <span className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
