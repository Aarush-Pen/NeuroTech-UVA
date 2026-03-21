'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';
import { motion } from 'framer-motion';

export default function EventsHero() {
    return (
        <section className="relative py-36 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            {/* Animated horizontal signal lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 14 + i * 5, repeat: Infinity, ease: 'linear', delay: i * 3 }}
                        className="absolute h-px w-full"
                        style={{
                            top: `${25 + i * 15}%`,
                            background: `linear-gradient(90deg, transparent, rgba(37, 99, 235, ${0.06 - i * 0.01}), transparent)`,
                        }}
                    />
                ))}
            </div>

            <SectionReveal className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
                <RevealItem>
                    <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-medium mb-8 text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        Calendar
                    </span>
                </RevealItem>

                <RevealItem>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Workshops, talks, &{' '}
                        <span className="text-[var(--color-blue-primary)]">hackathons.</span>
                    </h1>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={40} opacity={0.05} color="var(--color-blue-primary)" />
            </div>
        </section>
    );
}
