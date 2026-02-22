import SplineScene from './SplineScene';

export default function Hero() {
    return (
        <section className="relative w-full md:min-h-screen flex flex-col items-center justify-start md:justify-center px-4 sm:px-6 md:px-10 pt-24 md:pt-24 pb-6 overflow-hidden">
            {/* Ambient background elements */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {/* Faint background text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span
                        className="font-anton text-[22vw] md:text-[18vw] font-normal uppercase tracking-[0.1em] text-white select-none whitespace-nowrap"
                        style={{ opacity: 0.03, filter: 'blur(4px)' }}
                    >
                        AEROTECH
                    </span>
                </div>

                {/* Glow blobs — clamped for mobile */}
                <div className="absolute -bottom-20 -right-20 w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full mix-blend-screen animate-pulse-glow"
                    style={{ background: 'radial-gradient(circle, #7BC144 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.35 }} />
                <div className="absolute -bottom-20 -left-20 md:-left-32 w-[300px] md:w-[500px] h-[150px] md:h-[250px] rounded-full mix-blend-screen animate-pulse-glow"
                    style={{ background: 'radial-gradient(ellipse, #7BC144 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.25, animationDelay: '2s' }} />
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[100px] md:h-[150px] rounded-full"
                    style={{ background: 'radial-gradient(ellipse, #7BC14420 0%, transparent 70%)', filter: 'blur(60px)' }} />

                {/* Star particles */}
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="absolute rounded-full bg-white"
                        style={{
                            width: `${Math.random() * 2 + 0.5}px`, height: `${Math.random() * 2 + 0.5}px`,
                            top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.3 + 0.05,
                            animation: `float ${Math.random() * 5 + 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 4}s`,
                        }} />
                ))}

                {/* Subtle grid */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }} />
            </div>

            {/* ─── Main Content ─── */}
            <div className="relative z-30 text-center w-full max-w-6xl mx-auto animate-slide-up">
                {/* Tagline */}
                <p className="text-brand-green text-[9px] sm:text-[10px] md:text-xs font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-2 md:mb-3">
                    Where curiosity meets innovation
                </p>

                {/* Logo as main headline — scales responsively */}
                <div className="flex justify-center mb-2 md:mb-3">
                    <img
                        src={`${import.meta.env.BASE_URL}aerotech_logo.png`}
                        alt="Aerotech"
                        className="w-[85vw] max-w-[700px] md:w-[60vw] lg:w-[50vw] h-auto object-contain"
                    />
                </div>

                {/* Year badge */}
                <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 sm:px-5 py-1.5 sm:py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-glow" />
                    <span className="text-white/50 text-[9px] sm:text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">2026</span>
                </div>
            </div>

            {/* ─── 3D Spline Scene ─── */}
            <div className="relative z-20 mt-0 md:-mt-[170px] w-full md:max-w-5xl mx-auto animate-fade-in delay-300" style={{ opacity: 0 }}>
                <div className="w-full aspect-square md:aspect-[5/3] overflow-hidden">
                    <SplineScene scene="https://prod.spline.design/ab3TbnMwWnvvEoio/scene.splinecode" />
                </div>
            </div>

            {/* ─── Floating Text — Mobile (below model, side by side) ─── */}
            <div className="lg:hidden relative z-30 w-full mx-auto mt-4 px-4 animate-slide-up delay-500" style={{ opacity: 0 }}>
                <div className="flex flex-row items-end justify-between gap-4">
                    {/* Left — Welcome */}
                    <div className="flex-1 text-left">
                        <p className="text-white/30 text-[8px] sm:text-[9px] font-inter tracking-[0.2em] uppercase mb-1">// Welcome</p>
                        <p className="text-white/50 text-[10px] sm:text-xs font-inter leading-relaxed">
                            The ultimate aeromodelling workshop and competition.
                        </p>
                    </div>
                    {/* Right — Ignite */}
                    <div className="flex-1 text-right">
                        <p className="text-white/30 text-[8px] sm:text-[9px] font-inter tracking-[0.2em] uppercase mb-0.5">// Ignite your</p>
                        <p className="text-white font-anton text-base sm:text-lg uppercase tracking-wide leading-tight">
                            AEROMODELLING<br />JOURNEY
                        </p>
                    </div>
                </div>
            </div>

            {/* ─── Floating Text — Desktop (positioned absolutely) ─── */}
            <div className="hidden lg:block">
                <div className="absolute bottom-[120px] left-10 z-10 max-w-xs animate-slide-up delay-500" style={{ opacity: 0 }}>
                    <p className="text-white/30 text-[10px] font-inter tracking-[0.2em] uppercase mb-2">// Welcome</p>
                    <p className="text-white/60 text-sm font-inter leading-relaxed">
                        The ultimate aeromodelling workshop and competition. Pushing the boundaries of flight, engineering, and innovation.
                    </p>
                </div>
                <div className="absolute bottom-[140px] right-10 z-10 text-right animate-slide-up delay-700" style={{ opacity: 0 }}>
                    <p className="text-white/30 text-[10px] font-inter tracking-[0.2em] uppercase mb-1">// Ignite your</p>
                    <p className="text-white font-anton text-2xl xl:text-3xl uppercase tracking-wide leading-tight">
                        AEROMODELLING<br />JOURNEY
                    </p>
                </div>
            </div>

            {/* ─── Register + Scroll — centered at bottom ─── */}
            <div className="absolute bottom-3 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30 animate-fade-in delay-1000" style={{ opacity: 0 }}>
                <a
                    href="https://forms.gle/xhpM4GWUgFcwUxBZ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 border border-white/10 hover:border-brand-green/40 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 transition-all duration-300"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-glow" />
                    <span className="text-white/50 group-hover:text-brand-green text-[9px] sm:text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase transition-colors duration-300">Register</span>
                </a>
                <span className="text-white/20 text-[9px] font-inter tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-px h-7 bg-gradient-to-b from-white/20 to-transparent" />
            </div>  
        </section>
    );
}
