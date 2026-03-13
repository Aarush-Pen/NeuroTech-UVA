'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import CountUp from './CountUp';

export default function StatsBar() {
    const stats = [
        { value: 24, label: 'Active Members' },
        { value: 3, label: 'R&D Projects' },
        { value: 5, label: 'Events Hosted' },
        { value: 2024, label: 'Est.' },
    ];

    return (
        <section className="py-16 border-y" style={{
            backgroundColor: 'var(--color-ink-light)',
            borderColor: 'var(--color-border)'
        }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
                    {stats.map((stat, i) => (
                        <RevealItem key={i}>
                            <div className="flex flex-col items-center text-center">
                                <span
                                    className="text-4xl md:text-5xl font-bold mb-2"
                                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue-primary)' }}
                                >
                                    {stat.value}
                                </span>
                                <span
                                    className="text-[11px] tracking-[0.15em] uppercase font-semibold"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        </RevealItem>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
