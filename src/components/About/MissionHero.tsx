'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';

export default function MissionHero() {
    return (
        <section className="relative py-32 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            {/* Background elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, var(--color-surface) 1px, transparent 1px), linear-gradient(to bottom, var(--color-surface) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--color-ink)] via-transparent to-[var(--color-ink)]" />

            <SectionReveal className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <RevealItem>
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Unlocking the <span style={{ color: 'var(--color-blue-primary)' }}>Code</span> of the Mind.
                    </h1>
                </RevealItem>

                <RevealItem>
                    <p
                        className="text-xl md:text-2xl italic leading-relaxed max-w-3xl mx-auto"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                        "We believe that the final frontier isn't space—it's the three pounds of matter between our ears. By bridging neuroscience and engineering, we aim to decode, interface with, and augment the human brain."
                    </p>
                </RevealItem>
            </SectionReveal>

            {/* EEG Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={60} opacity={0.15} />
            </div>
        </section>
    );
}
