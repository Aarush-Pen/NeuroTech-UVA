'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';

const values = [
    {
        id: '01',
        title: 'Open Science',
        description: 'We believe knowledge should be free. All our code, datasets, and hardware designs are open-source and accessible to everyone.'
    },
    {
        id: '02',
        title: 'Interdisciplinary',
        description: 'Innovation happens at the intersection. We bring together engineers, neuroscientists, designers, and ethicists.'
    },
    {
        id: '03',
        title: 'Ethical Engineering',
        description: 'We prioritize the ethical implications of neurotechnology, ensuring privacy, agency, and safety in everything we build.'
    }
];

export default function Values() {
    return (
        <section className="py-24" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <SectionReveal className="max-w-4xl mx-auto px-6 lg:px-10">
                <RevealItem className="text-center mb-12">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase mb-4 font-semibold"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-blue-primary)',
                            backgroundColor: 'rgba(56, 189, 248, 0.08)',
                            border: '1px solid rgba(56, 189, 248, 0.15)'
                        }}
                    >
                        Principles
                    </span>
                    <h2
                        className="text-2xl md:text-3xl font-bold"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        What We Stand For
                    </h2>
                </RevealItem>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {values.map((value) => (
                        <RevealItem key={value.id}>
                            <div className="group rounded-2xl p-7 border transition-all duration-300 hover:border-[var(--color-blue-primary)]/30 hover:-translate-y-1 h-full"
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: 'var(--color-border)'
                                }}>
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold mb-5"
                                    style={{
                                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                                        color: 'var(--color-blue-primary)',
                                        border: '1px solid rgba(56, 189, 248, 0.2)'
                                    }}
                                >
                                    {value.id}
                                </div>
                                <h3
                                    className="text-lg font-bold mb-2 group-hover:text-[var(--color-blue-primary)] transition-colors"
                                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                                >
                                    {value.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                >
                                    {value.description}
                                </p>
                            </div>
                        </RevealItem>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
