'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';

const values = [
    {
        id: '01',
        title: 'Open Science',
        description: 'We believe knowledge should be free. All our code, datasets, and hardware designs are open-source and accessible to everyone.',
    },
    {
        id: '02',
        title: 'Interdisciplinary Thinking',
        description: 'Innovation happens at the intersection. We bring together engineers, neuroscientists, designers, and ethicists to solve complex problems.',
    },
    {
        id: '03',
        title: 'Ethical Engineering',
        description: 'We prioritize the ethical implications of neurotechnology, ensuring privacy, agency, and safety in everything we build.',
    },
    {
        id: '04',
        title: 'Hands-On Learning',
        description: 'We learn by doing — building real hardware, writing real code, and publishing real research. Theory is the starting point, not the destination.',
    },
    {
        id: '05',
        title: 'Community First',
        description: 'We foster a welcoming environment where curiosity is celebrated. No gatekeeping — just a shared passion for understanding the brain.',
    },
];

export default function Values() {
    return (
        <section className="py-24 md:py-32 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-14">
                    <RevealItem className="md:col-span-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Principles
                        </span>
                        <div className="w-8 h-px bg-[var(--color-blue-primary)] mt-4 opacity-40" />
                    </RevealItem>
                    <RevealItem className="md:col-span-8">
                        <h2 className="text-3xl md:text-4xl tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                            What we stand for
                        </h2>
                    </RevealItem>
                </div>

                <div className="space-y-0 border-t border-[var(--color-border)]">
                    {values.map((value) => (
                        <RevealItem key={value.id}>
                            <div className="group grid grid-cols-12 gap-6 py-8 border-b border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors -mx-4 px-4 rounded-sm">
                                <div className="col-span-1">
                                    <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                                        {value.id}
                                    </span>
                                </div>
                                <div className="col-span-11 md:col-span-4">
                                    <h3 className="text-lg group-hover:text-[var(--color-blue-primary)] transition-colors text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {value.title}
                                    </h3>
                                </div>
                                <div className="col-span-12 md:col-span-7 md:col-start-6">
                                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </RevealItem>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
