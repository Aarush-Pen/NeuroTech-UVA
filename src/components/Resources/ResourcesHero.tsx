'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';

export default function ResourcesHero() {
    return (
        <section className="relative py-36 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            {/* Hexagonal pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%232563eb' stroke-width='0.5'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%232563eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: '56px 100px'
                }}
            />

            <SectionReveal className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
                <RevealItem>
                    <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-medium mb-8 text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        Knowledge Base
                    </span>
                </RevealItem>

                <RevealItem>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Tools for the{' '}
                        <span className="text-[var(--color-blue-primary)]">modern neuroengineer.</span>
                    </h1>
                </RevealItem>

                <RevealItem>
                    <p className="text-base md:text-lg leading-[1.8] max-w-lg mx-auto text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        Curated datasets, open-source libraries, and hardware guides to jumpstart your research.
                    </p>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={40} opacity={0.05} color="var(--color-blue-primary)" />
            </div>
        </section>
    );
}
