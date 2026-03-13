'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import EEGWaveform from './EEGWaveform';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function FloatingOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary blue orb */}
            <motion.div
                animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.95, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.07]"
                style={{ background: 'radial-gradient(circle, var(--color-blue-primary), transparent)' }}
            />
            {/* Accent violet orb */}
            <motion.div
                animate={{ x: [0, -25, 15, 0], y: [0, 30, -25, 0], scale: [1, 0.9, 1.05, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px] opacity-[0.05]"
                style={{ background: 'radial-gradient(circle, var(--color-accent), transparent)' }}
            />
            {/* Dot grid */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dotgrid" width="32" height="32" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="var(--color-blue-primary)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotgrid)" />
            </svg>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
            <FloatingOrbs />

            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-ink)] pointer-events-none" />

            <SectionReveal className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 w-full pt-20 mt-8">
                <div className="flex flex-col items-center text-center gap-8">
                    {/* Badge */}
                    <RevealItem>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-semibold tracking-widest uppercase"
                            style={{
                                borderColor: 'var(--color-border)',
                                backgroundColor: 'var(--color-surface)',
                                color: 'var(--color-blue-primary)',
                                fontFamily: 'var(--font-body)'
                            }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue-primary)] animate-pulse" />
                            University of Virginia
                        </motion.div>
                    </RevealItem>

                    {/* Heading with gradient */}
                    <RevealItem>
                        <h1
                            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text-primary)] via-[var(--color-blue-primary)] to-[var(--color-accent)]">
                                NEUROTECH
                            </span>
                            <span className="block mt-2 text-3xl md:text-5xl lg:text-6xl font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                                @ UVA
                            </span>
                        </h1>
                    </RevealItem>

                    {/* Tagline */}
                    <RevealItem>
                        <p
                            className="text-lg md:text-xl lg:text-2xl max-w-xl font-normal leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                        >
                            Engineering the <span className="text-[var(--color-blue-primary)] font-medium">future of the mind</span>.
                        </p>
                    </RevealItem>

                    {/* CTAs */}
                    <RevealItem>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#"
                                className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_var(--color-blue-glow)]"
                                style={{
                                    backgroundColor: 'var(--color-blue-primary)',
                                    color: '#08090F'
                                }}
                            >
                                Join the Lab
                                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>

                            <a
                                href="#"
                                className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-semibold border transition-all duration-300 hover:bg-[var(--color-surface)] hover:border-[var(--color-blue-primary)]/30"
                                style={{
                                    borderColor: 'var(--color-border)',
                                    color: 'var(--color-text-primary)'
                                }}
                            >
                                Explore Research
                                <ArrowRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                            </a>
                        </div>
                    </RevealItem>
                </div>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0 z-0">
                <EEGWaveform height={80} opacity={0.1} />
            </div>
        </section>
    );
}
