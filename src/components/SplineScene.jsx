import { Suspense, lazy, useState, useRef, useEffect } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineScene({ scene, className = '' }) {
    const [loaded, setLoaded] = useState(false);
    const [widthMultiplier, setWidthMultiplier] = useState(1);
    const [visualScale, setVisualScale] = useState(1);
    const containerRef = useRef(null);

    // On small screens:
    // 1. Widen the canvas so the 3D camera shows the full plane
    // 2. Scale down visually so the plane isn't oversized on screen
    useEffect(() => {
        const computeDimensions = () => {
            const vw = window.innerWidth;
            if (vw >= 1024) {
                setWidthMultiplier(1);
                setVisualScale(1);
            } else {
                const t = (1024 - Math.max(vw, 320)) / (1024 - 320);
                setWidthMultiplier(1 + t * 0.8);   // 100% at 1024px → 180% at 320px
                setVisualScale(1 - t * 0.45);       // 100% at 1024px →  65% at 320px
            }
        };
        computeDimensions();
        window.addEventListener('resize', computeDimensions);
        return () => window.removeEventListener('resize', computeDimensions);
    }, []);

    // Hide watermark after scene loads
    useEffect(() => {
        if (!loaded || !containerRef.current) return;

        const hideWatermark = () => {
            const container = containerRef.current;
            if (!container) return;

            // Hide links to spline.design
            const links = container.querySelectorAll('a');
            links.forEach((link) => {
                if (link.href && link.href.includes('spline')) {
                    link.style.cssText = 'display:none!important;opacity:0!important;visibility:hidden!important;width:0!important;height:0!important;overflow:hidden!important;position:absolute!important;';
                }
            });

            // Hide any element containing "Built with Spline" or "Spline" branding text
            const allElements = container.querySelectorAll('div, span, p, a, img');
            allElements.forEach((el) => {
                const text = el.textContent || el.alt || '';
                if (text.includes('Built with') || text.includes('Spline')) {
                    el.style.cssText = 'display:none!important;opacity:0!important;visibility:hidden!important;';
                }
            });

            // Hide images with spline sources
            const images = container.querySelectorAll('img');
            images.forEach((img) => {
                if ((img.src && img.src.includes('spline')) || (img.alt && img.alt.includes('Spline'))) {
                    img.style.cssText = 'display:none!important;';
                }
            });
        };

        hideWatermark();
        const timer1 = setTimeout(hideWatermark, 1000);
        const timer2 = setTimeout(hideWatermark, 3000);
        const timer3 = setTimeout(hideWatermark, 5000);

        const observer = new MutationObserver(hideWatermark);
        observer.observe(containerRef.current, { childList: true, subtree: true });

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            observer.disconnect();
        };
    }, [loaded]);

    return (
        <div ref={containerRef} className={`relative w-full h-full overflow-visible ${className}`}>
            {/* Loading state */}
            {!loaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-8 h-8 border-2 border-brand-green/20 border-t-brand-green rounded-full animate-spin" />
                    <span className="text-white/20 text-[9px] font-inter uppercase tracking-[0.25em]">Loading 3D</span>
                </div>
            )}

            {/* Spline scene */}
            <Suspense fallback={null}>
                <Spline
                    scene={scene}
                    onLoad={() => setLoaded(true)}
                    style={{
                        width: `${widthMultiplier * 100}%`,
                        height: '100%',
                        marginLeft: `${(1 - widthMultiplier) * 50}%`,
                        opacity: loaded ? 1 : 0,
                        transition: 'opacity 0.8s ease-in-out',
                        transform: `scale(${visualScale})`,
                    }}
                />
            </Suspense>
        </div>
    );
}
