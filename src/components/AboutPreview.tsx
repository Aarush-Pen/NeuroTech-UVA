'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
    return (
        <section className="relative py-28 md:py-36" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
                    {/* Left: Label */}
                    <RevealItem className="md:col-span-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Our Mission
                        </span>
                        <div className="w-8 h-px bg-[var(--color-blue-primary)] mt-4 opacity-40" />
                    </RevealItem>

                    {/* Right: Content */}
                    <div className="md:col-span-8">
                        <RevealItem>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                Where neuroscience meets engineering.
                            </h2>
                        </RevealItem>

                        <RevealItem>
                            <p className="text-base leading-[1.8] mb-6 text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                NeuroTech @ UVA is a research-forward, interdisciplinary student organization
                                exploring the intersection of brain science and modern engineering. We build
                                brain-computer interfaces, analyze neural signals, and push the boundaries of
                                what&rsquo;s possible in neurotechnology.
                            </p>
                        </RevealItem>

                        <RevealItem>
                            <a
                                href="/about"
                                className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-blue-primary)] hover:text-[var(--color-blue-hover)] transition-colors group"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Learn about our story
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </RevealItem>
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}
