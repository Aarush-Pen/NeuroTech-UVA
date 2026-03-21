'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import { motion } from 'framer-motion';

const pillars = [
    {
        id: '01',
        title: 'Brain-Computer Interfaces',
        description: 'Designing and prototyping non-invasive BCIs that translate neural signals into digital commands.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 2H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 2v6m12-2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
                <circle cx="12" cy="14" r="3" />
                <path d="M12 11V8" />
                <path d="M9.5 12.5L7.5 10.5" />
                <path d="M14.5 12.5l2-2" />
            </svg>
        ),
    },
    {
        id: '02',
        title: 'Neural Signal Processing',
        description: 'Applying signal processing and machine learning to decode patterns in EEG, fMRI, and electrophysiology data.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 12h2l3-7 4 14 3-7h2" />
                <path d="M18 12h4" />
            </svg>
        ),
    },
    {
        id: '03',
        title: 'Computational Neuroscience',
        description: 'Building models of neural circuits and cognitive processes to better understand how the brain computes.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <circle cx="5" cy="6" r="2" />
                <circle cx="19" cy="6" r="2" />
                <circle cx="5" cy="18" r="2" />
                <circle cx="19" cy="18" r="2" />
                <path d="M7 7.5L9.5 10" />
                <path d="M17 7.5l-2.5 2.5" />
                <path d="M7 16.5l2.5-2.5" />
                <path d="M17 16.5l-2.5-2.5" />
            </svg>
        ),
    },
    {
        id: '04',
        title: 'Neuroethics & Policy',
        description: 'Examining the ethical implications of neurotechnology — privacy, agency, equity, and responsible innovation.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
];

export default function ResearchPillars() {
    return (
        <section className="py-24 md:py-32 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-16">
                    <RevealItem className="md:col-span-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Focus Areas
                        </span>
                        <div className="w-8 h-px bg-[var(--color-blue-primary)] mt-4 opacity-40" />
                    </RevealItem>
                    <RevealItem className="md:col-span-8">
                        <h2 className="text-3xl md:text-4xl tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                            Our research pillars
                        </h2>
                    </RevealItem>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)] rounded-lg overflow-hidden">
                    {pillars.map((pillar) => (
                        <RevealItem key={pillar.id}>
                            <motion.div
                                whileHover={{ backgroundColor: 'var(--color-surface-hover)' }}
                                className="p-8 md:p-10 bg-[var(--color-surface)] group transition-colors duration-300"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-md border border-[var(--color-border)] flex items-center justify-center text-[var(--color-blue-primary)] group-hover:border-[var(--color-blue-primary)] transition-colors">
                                        {pillar.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-normal mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-blue-primary)] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                                            {pillar.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </RevealItem>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
