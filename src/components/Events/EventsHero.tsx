'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';
import { motion } from 'framer-motion';

export default function EventsHero() {
    return (
        <section className="relative py-36 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            {/* Animated horizontal lines — signal/frequency theme */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 12 + i * 4, repeat: Infinity, ease: 'linear', delay: i * 2 }}
                        className="absolute h-px w-full"
                        style={{
                            top: `${20 + i * 15}%`,
                            background: `linear-gradient(90deg, transparent, rgba(56, 189, 248, ${0.08 - i * 0.01}), transparent)`,
                        }}
                    />
                ))}
            </div>
            {/* Warm glow at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
                style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-blue-primary))' }}
            />

            <SectionReveal className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
                <RevealItem>
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase mb-8 font-semibold"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-accent)',
                            backgroundColor: 'rgba(129, 140, 248, 0.08)',
                            border: '1px solid rgba(129, 140, 248, 0.15)'
                        }}
                    >
                        Synaptic Transmission
                    </span>
                </RevealItem>

                <RevealItem>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Workshops, Talks, &<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-blue-primary)] to-[var(--color-secondary)]">
                            Hackathons.
                        </span>
                    </h1>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={50} opacity={0.06} />
            </div>
        </section>
    );
}
