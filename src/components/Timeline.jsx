import { useMemo, useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Award01Icon,
    Calendar03Icon,
    ConstructionIcon,
    Flag02Icon,
    PackageIcon,
    Rocket01Icon,
    School01Icon,
    Settings02Icon,
} from '@hugeicons/core-free-icons';
import BranchedMenu from './BranchedMenu';

const timelineItems = [
    { time: '10:00 AM', title: 'Opening Ceremony', description: 'Welcome address and official inauguration of Aerotech 2026.', day: 'DAY 1 — FEB 25', icon: Flag02Icon },
    { time: '10:30 AM', title: 'Aero Modeling Workshop', description: 'Hands-on workshop covering the fundamentals of aero modeling, aerodynamics, and aircraft design.', day: 'DAY 1 — FEB 25', icon: School01Icon },
    { time: '11:30 AM', title: 'Materials & Kit Distribution', description: 'Teams receive their building materials and kits to begin constructing their aircraft.', day: 'DAY 1 — FEB 25', icon: PackageIcon },
    { time: '12:00 PM', title: 'Build Phase Begins', description: 'Students start designing and building their model airplanes using the provided kits.', day: 'DAY 1 — FEB 25', icon: ConstructionIcon },
    { time: '10:00 AM', title: 'Flight Testing', description: 'Teams test-fly their built aircraft. Performance is evaluated on distance, stability, and design.', day: 'DAY 2 — FEB 26', icon: Settings02Icon },
    { time: '01:00 PM', title: 'Top Teams Competition', description: 'The best-performing teams compete head-to-head for the top positions.', day: 'DAY 2 — FEB 26', icon: Rocket01Icon },
    { time: '03:00 PM', title: 'Results & Awards Ceremony', description: 'Winners are announced and prizes are distributed. Closing of Aerotech 2026.', day: 'DAY 2 — FEB 26', icon: Award01Icon },
];

const timelineGroups = timelineItems.reduce((groups, item) => {
    if (!groups[item.day]) groups[item.day] = [];
    groups[item.day].push(item);
    return groups;
}, {});

const menuItems = Object.entries(timelineGroups).map(([day, items]) => ({
    label: day,
    children: items.map((item) => ({
        value: item.title,
        label: item.title,
        icon: item.icon,
    })),
}));

export default function Timeline() {
    const [activeTitle, setActiveTitle] = useState(timelineItems[0].title);
    const activeEvent = useMemo(
        () => timelineItems.find((item) => item.title === activeTitle) ?? timelineItems[0],
        [activeTitle],
    );

    return (
        <section id="timeline" className="section-padding relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-16">
                    <p className="text-brand-green text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase mb-3">
                        // Schedule
                    </p>
                    <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.02em] text-white">
                        EVENT TIMELINE
                    </h2>
                    <p className="text-white/30 text-sm font-inter mt-4 max-w-lg">
                        Aero Modeling Workshop &amp; Competition — two days of learning, building, and flying.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:items-start">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] px-5 py-6 sm:px-8 sm:py-8">
                        <div className="flex items-center gap-3 mb-7">
                            <HugeiconsIcon icon={Calendar03Icon} className="text-brand-green" size={18} strokeWidth={1.8} />
                            <span className="text-white/35 text-[10px] font-semibold tracking-[0.28em] uppercase">Select a milestone</span>
                        </div>
                        <BranchedMenu
                            items={menuItems}
                            defaultOpen={[0, 1]}
                            defaultActive={timelineItems[0].title}
                            onSelect={setActiveTitle}
                            color="#f5f5f5"
                            accentColor="#7bc144"
                            lineColor="#34383a"
                            width={380}
                            rowHeight={44}
                            indent={48}
                            fontSize={13}
                        />
                    </div>

                    <article className="relative min-h-[300px] lg:mt-8">
                        <div className="absolute -left-5 top-0 hidden h-full w-px bg-gradient-to-b from-brand-green/50 via-white/10 to-transparent lg:block" />
                        <div className="mb-8 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_18px_rgba(123,193,68,0.7)]" />
                            <span className="text-brand-green text-[10px] font-semibold tracking-[0.3em] uppercase">{activeEvent.day}</span>
                        </div>
                        <p className="font-anton text-5xl md:text-6xl text-white/15 tracking-wide">{activeEvent.time}</p>
                        <h3 className="mt-3 text-2xl md:text-3xl font-inter font-medium text-white">{activeEvent.title}</h3>
                        <p className="mt-5 max-w-xl text-sm md:text-base leading-7 text-white/40 font-inter">{activeEvent.description}</p>
                        <div className="mt-10 flex items-center gap-3 text-white/20 text-[10px] tracking-[0.25em] uppercase">
                            <span className="h-px w-10 bg-brand-green/50" />
                            Aerotech 2026
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
