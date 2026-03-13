'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';
import { motion } from 'framer-motion';

export default function MissionHero() {
    return (
        <section className="relative py-32 md:py-44 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            {/* Animated gradient mesh */}
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
                style={{
                    background: 'conic-gradient(from 0deg, var(--color-blue-primary), var(--color-accent), var(--color-secondary), var(--color-blue-primary))',
                    borderRadius: '40%',
                    filter: 'blur(80px)'
                }}
            />
            {/* Grid overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, var(--color-text-secondary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-text-secondary) 1px, transparent 1px)',
                    backgroundSize: '48px 48px'
                }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--color-ink)] via-transparent to-[var(--color-ink)]" />

            <SectionReveal className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
                <RevealItem>
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase mb-6 font-semibold"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-blue-primary)',
                            backgroundColor: 'rgba(56, 189, 248, 0.08)',
                            border: '1px solid rgba(56, 189, 248, 0.15)'
                        }}
                    >
                        About Us
                    </span>
                </RevealItem>

                <RevealItem>
                    <h1
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        <span style={{ color: 'var(--color-text-primary)' }}>Unlocking the </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-blue-primary)] to-[var(--color-accent)]">Code</span>
                        <span style={{ color: 'var(--color-text-primary)' }}> of the Mind.</span>
                    </h1>
                </RevealItem>

                <RevealItem>
                    <p
                        className="text-base md:text-lg leading-relaxed max-w-xl mx-auto"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                        &ldquo;We believe that the final frontier isn&rsquo;t space—it&rsquo;s the three pounds of matter between our ears. By bridging neuroscience and engineering, we aim to decode, interface with, and augment the human brain.&rdquo;
                    </p>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={50} opacity={0.08} />
            </div>
        </section>
    );
}
