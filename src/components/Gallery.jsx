const images = [
    { src: 'gallery/1.jpg', alt: 'Aerotech event photo 1', span: 'md:col-span-2 md:row-span-2' },
    { src: 'gallery/2.jpeg', alt: 'Aerotech event photo 2', span: '' },
    { src: 'gallery/3.jpg', alt: 'Aerotech event photo 3', span: '' },
    { src: 'gallery/4.jpeg', alt: 'Aerotech event photo 4', span: '' },
    { src: 'gallery/5.jpeg', alt: 'Aerotech event photo 5', span: '' },
    { src: 'gallery/6.jpeg', alt: 'Aerotech event photo 6', span: '' },
];

export default function Gallery() {
    return (
        <section id="gallery" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="mb-10 md:mb-16">
                    <p className="text-brand-green text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase mb-3">
                        // Moments captured
                    </p>
                    <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-white">
                        GALLERY
                    </h2>
                </div>

                {/* Collage grid — 3 columns, image 1 is the 2×2 hero */}
                <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-1.5 sm:gap-2 md:gap-3">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`${img.span} group relative overflow-hidden rounded-lg cursor-pointer`}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}${img.src}`}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-all duration-700 ease-out
                                           grayscale group-hover:grayscale-0
                                           scale-105 group-hover:scale-100"
                                loading="lazy"
                            />
                            {/* Dark overlay that lifts on hover */}
                            <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-all duration-500" />
                            {/* Subtle border */}
                            <div className="absolute inset-0 rounded-lg border border-white/5 group-hover:border-brand-green/20 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}