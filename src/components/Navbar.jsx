import { useState, useEffect } from 'react';
import AeroLogo from './AeroLogo';

const navLinks = [
    { label: 'TIMELINE', href: '#timeline' },
    { label: 'SPONSORS', href: '#sponsors' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'ABOUT', href: '#about' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Replace with actual Google Form link
    const registrationLink = 'https://forms.gle/ML796iJ98SVKFyXX6';

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 transition-all duration-500 ${scrolled || isOpen ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5' : ''
            }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo — Left */}
                <a href="#" className="hover:opacity-90 transition-opacity">
                    <AeroLogo size="sm" />
                </a>

                {/* Center Links — Desktop */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-white text-[11px] font-medium tracking-[0.2em] uppercase opacity-50 hover:opacity-100 hover:text-brand-green transition-all duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right — Registration CTA + Hamburger */}
                <div className="flex items-center gap-4">
                    {/* Registration CTA — always visible, links to Google Form */}
                    <a
                        href={registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 group"
                    >
                        <span className="hidden sm:inline text-white text-[11px] font-medium tracking-[0.15em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                            REGISTER
                        </span>
                        <span className="w-9 h-9 rounded-full border border-brand-green/40 flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300">
                            <svg
                                className="w-3.5 h-3.5 text-brand-green group-hover:text-dark transition-colors duration-300 -rotate-45"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                    </a>

                    {/* Hamburger — Mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col gap-5 pb-6 border-t border-white/5 pt-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-white text-sm font-medium tracking-[0.2em] uppercase opacity-60 hover:opacity-100 hover:text-brand-green transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
