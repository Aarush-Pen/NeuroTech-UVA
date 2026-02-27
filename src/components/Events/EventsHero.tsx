'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';

export default function EventsHero() {
    return (
        <section className="relative py-32 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(var(--color-blue-primary) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <SectionReveal className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <RevealItem>
                    <span
                        className="text-xs tracking-[0.2em] uppercase mb-6 block font-bold"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                    >
                        Synaptic Transmission
                    </span>
                </RevealItem>

                <RevealItem>
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Workshops, Talks, & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-blue-primary)] to-[var(--color-accent)]">Hackathons.</span>
                    </h1>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={60} opacity={0.1} />
            </div>
        </section>
    );
}
