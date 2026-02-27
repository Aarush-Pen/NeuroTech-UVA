'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';

export default function ProjectsHero() {
    return (
        <section className="relative py-32 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(var(--color-surface) 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>

            <SectionReveal className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <RevealItem>
                    <span
                        className="text-xs tracking-[0.2em] uppercase mb-6 block font-bold"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                    >
                        Research & Development
                    </span>
                </RevealItem>

                <RevealItem>
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Building the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-blue-primary)] to-[var(--color-secondary)]">Neural Future.</span>
                    </h1>
                </RevealItem>

                <RevealItem>
                    <p
                        className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                        From non-invasive BCIs to neural signal processing, our projects push the boundaries of what undergraduates can achieve.
                    </p>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={60} opacity={0.1} />
            </div>
        </section>
    );
}
