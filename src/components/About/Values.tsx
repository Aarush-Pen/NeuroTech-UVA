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
        <section className="py-24 bg-[#080C14]">
            <SectionReveal className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {values.map((value) => (
                        <RevealItem key={value.id}>
                            <div className="relative pl-8 border-l-2 border-[#1E2D45] hover:border-[var(--color-blue-primary)] transition-colors duration-300 group flex gap-6">
                                <span
                                    className="absolute -left-[3px] top-0 w-[4px] h-0 bg-[var(--color-blue-primary)] group-hover:h-full transition-all duration-300 ease-in-out"
                                />
                                <span
                                    className="text-5xl font-black text-[#1E2D45] opacity-50 shrink-0 group-hover:text-[var(--color-blue-primary)]/20 transition-colors leading-none pt-1"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    {value.id}
                                </span>
                                <div>
                                    <h3
                                        className="text-[var(--color-text-primary)] text-2xl font-bold mb-3"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        {value.title}
                                    </h3>
                                    <p
                                        className="text-[var(--color-text-secondary)] text-base leading-relaxed"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
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
