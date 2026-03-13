'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';

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
        <section className="py-28 md:py-32 border-y relative" style={{ backgroundColor: 'var(--color-ink-light)', borderColor: 'var(--color-border)' }}>
            <SectionReveal className="max-w-4xl mx-auto px-6 lg:px-10">
                <RevealItem className="text-center mb-12">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase mb-4 font-semibold"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-blue-primary)',
                            backgroundColor: 'rgba(56, 189, 248, 0.08)',
                            border: '1px solid rgba(56, 189, 248, 0.15)'
                        }}
                    >
                        Roadmap
                    </span>
                    <h2
                        className="text-2xl md:text-3xl font-bold tracking-tight"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Our Growth Journey
                    </h2>
                </RevealItem>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {phases.map((phase) => (
                        <RevealItem key={phase.phase}>
                            <div
                                className={`group rounded-2xl p-7 h-full border transition-all duration-300 hover:-translate-y-1 ${phase.status === 'active'
                                    ? 'hover:border-[var(--color-blue-primary)]/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.06)]'
                                    : 'hover:border-[var(--color-border)]'
                                    }`}
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: phase.status === 'active' ? 'rgba(56, 189, 248, 0.2)' : 'var(--color-border)'
                                }}
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                                        style={{
                                            backgroundColor: phase.status === 'active' || phase.status === 'completed'
                                                ? 'rgba(56, 189, 248, 0.1)'
                                                : 'var(--color-ink)',
                                            color: phase.status === 'active' || phase.status === 'completed'
                                                ? 'var(--color-blue-primary)'
                                                : 'var(--color-text-secondary)',
                                            border: phase.status === 'active'
                                                ? '1px solid rgba(56, 189, 248, 0.3)'
                                                : '1px solid var(--color-border)',
                                            boxShadow: phase.status === 'active' ? '0 0 12px rgba(56, 189, 248, 0.15)' : 'none'
                                        }}
                                    >
                                        {phase.phase}
                                    </div>
                                    <span
                                        className="text-[10px] tracking-[0.12em] uppercase font-semibold"
                                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                                    >
                                        {phase.year}
                                    </span>
                                </div>

                                <h3
                                    className="text-lg font-bold mb-2"
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
                            </div>
                        </RevealItem>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
