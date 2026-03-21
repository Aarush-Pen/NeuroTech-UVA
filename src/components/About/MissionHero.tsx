'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import EEGWaveform from '@/components/EEGWaveform';
import { motion } from 'framer-motion';

export default function MissionHero() {
    return (
        <section className="relative py-36 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            {/* Subtle rotating gradient */}
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
                style={{
                    background: 'conic-gradient(from 0deg, var(--color-blue-primary), transparent, var(--color-blue-primary))',
                    borderRadius: '50%',
                    filter: 'blur(100px)'
                }}
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, var(--color-text-secondary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-text-secondary) 1px, transparent 1px)',
                    backgroundSize: '64px 64px'
                }}
            />

            <SectionReveal className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
                <RevealItem>
                    <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-medium mb-8 text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        About Us
                    </span>
                </RevealItem>

                <RevealItem>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
                        <span className="text-[var(--color-text-primary)]">Unlocking the </span>
                        <span className="text-[var(--color-blue-primary)]">code</span>
                        <span className="text-[var(--color-text-primary)]"> of the mind.</span>
                    </h1>
                </RevealItem>

                <RevealItem>
                    <p className="text-base md:text-lg leading-[1.8] max-w-xl mx-auto text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        We believe that the final frontier isn&rsquo;t space &mdash; it&rsquo;s the three pounds of matter between our ears. By bridging neuroscience and engineering, we aim to decode, interface with, and augment the human brain.
                    </p>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0">
                <EEGWaveform height={40} opacity={0.06} color="var(--color-blue-primary)" />
            </div>
        </section>
    );
}
