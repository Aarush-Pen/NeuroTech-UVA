'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';
import { motion } from 'framer-motion';

export default function ProjectsHero() {
    return (
        <section className="relative py-36 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            {/* Animated concentric rings — circuit/tech theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {[200, 320, 440].map((size, i) => (
                    <motion.div
                        key={size}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 40 + i * 10, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-1/2 left-1/2 rounded-full border"
                        style={{
                            width: size,
                            height: size,
                            marginLeft: -size / 2,
                            marginTop: -size / 2,
                            borderColor: `rgba(56, 189, 248, ${0.06 - i * 0.015})`,
                            borderStyle: 'dashed'
                        }}
                    />
                ))}
            </div>
            {/* Cyan glow */}
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.05] pointer-events-none"
                style={{ background: 'var(--color-blue-primary)' }}
            />

            <SectionReveal className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
                <RevealItem>
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase mb-8 font-semibold"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-blue-primary)',
                            backgroundColor: 'rgba(56, 189, 248, 0.08)',
                            border: '1px solid rgba(56, 189, 248, 0.15)'
                        }}
                    >
                        Research & Development
                    </span>
                </RevealItem>

                <RevealItem>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-blue-primary)] via-[var(--color-secondary)] to-[var(--color-blue-primary)]">
                            Neural Future.
                        </span>
                    </h1>
                </RevealItem>

                <RevealItem>
                    <p
                        className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                        From non-invasive BCIs to neural signal processing, our projects push the boundaries of what undergraduates can achieve.
                    </p>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={50} opacity={0.06} />
            </div>
        </section>
    );
}
