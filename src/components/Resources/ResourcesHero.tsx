'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';
import { motion } from 'framer-motion';

export default function ResourcesHero() {
    return (
        <section className="relative py-36 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            {/* Floating hexagonal grid — knowledge/data theme */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%2338BDF8' stroke-width='0.5'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%2338BDF8' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: '56px 100px'
                }}
            />
            {/* Top-right warm orb */}
            <div className="absolute top-1/4 right-1/6 w-[350px] h-[350px] rounded-full blur-[100px] opacity-[0.05] pointer-events-none"
                style={{ background: 'linear-gradient(135deg, var(--color-secondary), var(--color-accent))' }}
            />

            <SectionReveal className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
                <RevealItem>
                    <span className="inline-block px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase mb-8 font-semibold"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-secondary)',
                            backgroundColor: 'rgba(96, 165, 250, 0.08)',
                            border: '1px solid rgba(96, 165, 250, 0.15)'
                        }}>
                        Knowledge Base
                    </span>
                </RevealItem>

                <RevealItem>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Tools for the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-blue-primary)] to-[var(--color-accent)]">
                            Modern Neuroengineer.
                        </span>
                    </h1>
                </RevealItem>

                <RevealItem>
                    <p
                        className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                        Curated datasets, open-source libraries, and hardware guides to jumpstart your research.
                    </p>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={50} opacity={0.06} />
            </div>
        </section>
    );
}
