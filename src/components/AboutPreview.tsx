'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import { ArrowRight } from 'lucide-react';

/* ── Abstract Neuron Node-Graph SVG ── */
function NeuronGraph() {
    return (
        <svg
            viewBox="0 0 400 400"
            className="w-full h-full max-w-sm"
            fill="none"
            aria-label="Abstract neuron node graph illustration"
        >
            <g stroke="var(--color-blue-primary)" strokeWidth="1" opacity="0.2">
                <path d="M200,200 C180,150 120,130 80,100" />
                <path d="M200,200 C160,170 100,180 50,160" />
                <path d="M200,200 C230,150 280,110 320,80" />
                <path d="M200,200 C250,170 310,160 350,140" />
                <path d="M200,200 C170,230 130,270 90,300" />
                <path d="M200,200 C220,240 250,280 280,320" />
                <path d="M200,200 C200,250 190,310 180,360" />
                <path d="M200,200 C240,210 300,200 350,210" />
            </g>
            <g fill="var(--color-blue-primary)" opacity="0.3">
                <circle cx="20" cy="70" r="3" />
                <circle cx="80" cy="30" r="2.5" />
                <circle cx="10" cy="180" r="2.5" />
                <circle cx="380" cy="50" r="3" />
                <circle cx="360" cy="20" r="2.5" />
                <circle cx="395" cy="145" r="2" />
                <circle cx="30" cy="330" r="2.5" />
                <circle cx="340" cy="350" r="3" />
                <circle cx="185" cy="395" r="2" />
            </g>
            <circle cx="200" cy="200" r="30" fill="var(--color-blue-primary)" opacity="0.03" />
            <circle cx="200" cy="200" r="10" fill="var(--color-blue-primary)" opacity="0.15" />
            <circle cx="200" cy="200" r="4" fill="var(--color-blue-primary)" />
        </svg>
    );
}

export default function AboutPreview() {
    return (
        <section id="about" className="relative py-28 md:py-36" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="rounded-2xl border p-10 md:p-14 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center"
                    style={{
                        backgroundColor: 'var(--color-surface)',
                        borderColor: 'var(--color-border)'
                    }}>
                    {/* Left: Text (60%) */}
                    <div className="md:col-span-3">
                        <RevealItem>
                            <span
                                className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase mb-5 font-semibold"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    color: 'var(--color-blue-primary)',
                                    backgroundColor: 'rgba(56, 189, 248, 0.08)',
                                    border: '1px solid rgba(56, 189, 248, 0.15)'
                                }}
                            >
                                Mission
                            </span>
                        </RevealItem>

                        <RevealItem>
                            <h2
                                className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight"
                                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                            >
                                Where neuroscience meets engineering.
                            </h2>
                        </RevealItem>

                        <RevealItem>
                            <p
                                className="text-base leading-relaxed mb-6"
                                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                            >
                                NeuroTech @ UVA is a research-forward, interdisciplinary student organization
                                exploring the intersection of brain science and modern engineering. We build
                                brain-computer interfaces, analyze neural signals, and push the boundaries of
                                what&rsquo;s possible in neurotechnology.
                            </p>
                        </RevealItem>

                        <RevealItem>
                            <a
                                href="/about"
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wide border transition-all duration-300 hover:bg-[var(--color-blue-primary)] hover:text-[#08090F] hover:border-[var(--color-blue-primary)]"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--color-text-primary)',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                Our Story <ArrowRight size={14} />
                            </a>
                        </RevealItem>
                    </div>

                    {/* Right: SVG (40%) */}
                    <RevealItem className="md:col-span-2 flex items-center justify-center">
                        <NeuronGraph />
                    </RevealItem>
                </div>
            </SectionReveal>
        </section>
    );
}
