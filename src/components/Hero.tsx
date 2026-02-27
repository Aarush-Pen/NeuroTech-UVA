'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import EEGWaveform from './EEGWaveform';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function BrainPattern() {
    return (
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="var(--color-blue-primary)" opacity="0.3" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <motion.path
                d="M-100,50 Q200,300 500,50 T1000,200"
                fill="none"
                stroke="var(--color-blue-primary)"
                strokeWidth="1"
                opacity="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />
        </svg>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
            <BrainPattern />

            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[var(--color-ink)]/50 to-[var(--color-ink)] pointer-events-none" />

            <SectionReveal className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-16 mt-8">
                <div className="flex flex-col items-start gap-8 md:gap-10">
                    <RevealItem>
                        <h1
                            className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tight"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                        >
                            <span className="block mb-2">NEUROTECH</span>
                            <span className="flex items-center gap-4 text-[var(--color-text-secondary)]">
                                <span className="text-4xl md:text-6xl font-light italic opacity-70">@</span>
                                UVA
                            </span>
                        </h1>
                    </RevealItem>

                    <RevealItem>
                        <p
                            className="text-xl md:text-2xl lg:text-3xl max-w-2xl font-light leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                        >
                            Engineering the <span className="italic text-[var(--color-text-primary)]">future of the mind</span>.
                        </p>
                    </RevealItem>

                    <RevealItem>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <a
                                href="#"
                                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: 'var(--color-blue-primary)',
                                    color: '#0F1B2D'
                                }}
                            >
                                Join the Lab
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#"
                                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold border transition-all duration-300 hover:bg-[var(--color-surface)]"
                                style={{
                                    borderColor: 'var(--color-border)',
                                    color: 'var(--color-text-primary)'
                                }}
                            >
                                Explore Research
                                <ChevronRight size={18} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-blue-primary)] transition-colors" />
                            </a>
                        </div>
                    </RevealItem>
                </div>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0 z-0">
                <EEGWaveform height={100} opacity={0.15} />
            </div>
        </section>
    );
}
