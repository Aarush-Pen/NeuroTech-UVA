'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import EEGWaveform from './EEGWaveform';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function NeuralGrid() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Sparse dot grid */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hero-dots" width="48" height="48" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="0.8" fill="var(--color-text-secondary)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-dots)" />
            </svg>

            {/* Single soft glow — blue accent */}
            <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.09, 0.06] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px]"
                style={{ background: 'var(--color-blue-primary)' }}
            />

            {/* Horizontal accent line */}
            <div className="absolute top-[60%] left-0 right-0 h-px opacity-[0.04]"
                style={{ background: 'linear-gradient(90deg, transparent, var(--color-blue-primary), transparent)' }}
            />
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            <NeuralGrid />

            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-ink)] pointer-events-none" />

            <SectionReveal className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 w-full pt-24">
                <div className="flex flex-col items-center text-center gap-6">
                    {/* Badge */}
                    <RevealItem>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[var(--color-border)] text-[11px] font-medium tracking-[0.08em] uppercase bg-[var(--color-surface)] text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue-primary)] animate-pulse" />
                            University of Virginia
                        </div>
                    </RevealItem>

                    {/* Heading — editorial serif */}
                    <RevealItem>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                            <span className="text-[var(--color-text-primary)]">NeuroTech</span>
                            <br />
                            <span className="text-[var(--color-blue-primary)]">@ UVA</span>
                        </h1>
                    </RevealItem>

                    {/* Tagline */}
                    <RevealItem>
                        <p className="text-lg md:text-xl max-w-md font-light leading-relaxed text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Engineering the future of the mind — where neuroscience meets technology.
                        </p>
                    </RevealItem>

                    {/* CTAs */}
                    <RevealItem>
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                            <a
                                href="https://groupme.com/join_group/113177848/ViLRyCBl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2 px-7 py-3 text-[13px] font-medium transition-all duration-300 hover:shadow-[0_0_24px_var(--color-blue-glow)] bg-[var(--color-blue-primary)] text-white rounded-md"
                            >
                                Join the Lab
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>

                            <a
                                href="/projects"
                                className="group flex items-center justify-center gap-2 px-7 py-3 text-[13px] font-medium border border-[var(--color-border)] transition-all duration-300 hover:bg-[var(--color-surface)] hover:border-[var(--color-text-tertiary)] text-[var(--color-text-primary)] rounded-md"
                            >
                                Explore Research
                                <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                            </a>
                        </div>
                    </RevealItem>
                </div>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0 z-0">
                <EEGWaveform height={60} opacity={0.08} color="var(--color-blue-primary)" />
            </div>
        </section>
    );
}
