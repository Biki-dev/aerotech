import AeroLogo from './AeroLogo';

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 section-padding !py-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-12">
                    {/* Brand */}
                    <div>
                        <AeroLogo size="md" />
                        <p className="text-white/25 text-sm font-inter mt-4 leading-relaxed max-w-xs">
                            The flagship aeromodelling workshop and competition. Where innovation takes flight.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <span className="text-white/20 text-[10px] font-semibold tracking-[0.25em] uppercase block mb-4">Links</span>
                        <div className="space-y-3">
                            <a href="#timeline" className="block text-white/35 text-sm font-inter hover:text-brand-green transition-colors duration-300">Event Timeline</a>
                            <a href="#sponsors" className="block text-white/35 text-sm font-inter hover:text-brand-green transition-colors duration-300">Sponsors</a>
                            <a href="#about" className="block text-white/35 text-sm font-inter hover:text-brand-green transition-colors duration-300">About</a>
                            <a href="https://forms.gle/ML796iJ98SVKFyXX6" target="_blank" rel="noopener noreferrer" className="block text-white/35 text-sm font-inter hover:text-brand-green transition-colors duration-300">Registration</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <span className="text-white/20 text-[10px] font-semibold tracking-[0.25em] uppercase block mb-4">Contact</span>
                        <div className="space-y-3 text-white/35 text-sm font-inter">
                            <p>aerotechaec2026@gmail.com</p>
                            <p>+91 6003398115</p>
                            <p className="text-white/20">Assam Engineering College</p>
                        </div>
                        {/* Social icons */}
                        <div className="flex items-center gap-3 mt-6">
                            <span className="text-white/25 text-[10px] tracking-[0.15em] uppercase font-inter">Follow us on</span>
                            <a
                                href="https://www.instagram.com/aerotech_aec/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/30 hover:text-brand-green transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/15 text-[10px] tracking-[0.15em] uppercase">
                        © 2026 Aerotech. All rights reserved.
                    </p>
                    <p className="text-white/10 text-[10px] tracking-[0.1em]">
                        Designed with precision
                    </p>
                </div>
            </div>
        </footer>
    );
}
