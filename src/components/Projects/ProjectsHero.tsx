'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';
import { motion } from 'framer-motion';

export default function ProjectsHero() {
    return (
        <section className="relative py-36 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            {/* Concentric circles — technical theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {[180, 300, 420].map((size, i) => (
                    <motion.div
                        key={size}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 50 + i * 15, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-1/2 left-1/2 rounded-full"
                        style={{
                            width: size,
                            height: size,
                            marginLeft: -size / 2,
                            marginTop: -size / 2,
                            border: `1px dashed rgba(37, 99, 235, ${0.06 - i * 0.015})`,
                        }}
                    />
                ))}
            </div>

            <SectionReveal className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
                <RevealItem>
                    <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-medium mb-8 text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        Research & Development
                    </span>
                </RevealItem>

                <RevealItem>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Building the{' '}
                        <span className="text-[var(--color-blue-primary)]">neural future.</span>
                    </h1>
                </RevealItem>

                <RevealItem>
                    <p className="text-base md:text-lg leading-[1.8] max-w-lg mx-auto text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        From non-invasive BCIs to neural signal processing, our projects push the boundaries of what undergraduates can achieve.
                    </p>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={40} opacity={0.05} color="var(--color-blue-primary)" />
            </div>
        </section>
    );
}
