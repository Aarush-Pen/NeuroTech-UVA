'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { motion } from 'framer-motion';

const phases = [
    {
        phase: '01',
        title: 'Foundation',
        year: '2024',
        description: 'Establishing the core team, defining our research pillars, and building initial hardware prototypes for EEG acquisition.',
        status: 'completed'
    },
    {
        phase: '02',
        title: 'Research Expansion',
        year: '2025',
        description: 'Launching 3 distinct R&D tracks, partnering with UVA neuroscience labs, and hosting our first hackathon.',
        status: 'active'
    },
    {
        phase: '03',
        title: 'Publication & Impact',
        year: '2026',
        description: 'Publishing findings in undergraduate journals, open-sourcing our BCI stack, and expanding community outreach.',
        status: 'future'
    }
];

export default function Timeline() {
    return (
        <section className="py-24 border-y relative" style={{ backgroundColor: 'var(--color-ink-light)', borderColor: 'var(--color-border)' }}>
            <SectionReveal className="max-w-7xl mx-auto px-6 overflow-x-auto">
                <div className="flex flex-col md:flex-row gap-8 md:gap-0 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px z-0" style={{ backgroundColor: 'var(--color-border)' }} />

                    {phases.map((phase, i) => (
                        <div key={phase.phase} className="flex-1 relative z-10 min-w-[300px]">
                            <RevealItem className="h-full flex flex-col p-6 md:p-8 border-l md:border-l-0 md:border-t-0 hover:bg-[var(--color-surface)]/50 transition-colors rounded-lg"
                                style={{ borderColor: 'var(--color-border)' }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <span
                                        className="text-6xl font-black opacity-20"
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            color: phase.status === 'active' ? 'var(--color-blue-primary)' : 'var(--color-text-secondary)',
                                            opacity: phase.status === 'active' ? 0.4 : 0.2
                                        }}
                                    >
                                        {phase.phase}
                                    </span>
                                    <span
                                        className="text-xs tracking-widest uppercase font-bold"
                                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                                    >
                                        {phase.year}
                                    </span>
                                </div>

                                {/* Indicator Dot (Desktop) */}
                                <div className={`hidden md:block absolute top-[52px] left-8 w-4 h-4 rounded-full border-2 z-20 transition-colors`}
                                    style={{
                                        backgroundColor: phase.status === 'active' || phase.status === 'completed' ? 'var(--color-blue-primary)' : 'var(--color-ink)',
                                        borderColor: phase.status === 'active' || phase.status === 'completed' ? 'var(--color-blue-primary)' : 'var(--color-text-secondary)',
                                        boxShadow: phase.status === 'active' ? '0 0 15px var(--color-blue-glow)' : 'none'
                                    }}
                                />

                                <h3
                                    className="text-2xl font-bold mb-3"
                                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                                >
                                    {phase.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                >
                                    {phase.description}
                                </p>
                            </RevealItem>
                        </div>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
