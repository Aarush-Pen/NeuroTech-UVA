'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import CountUp from './CountUp'; // Use our custom count up component or direct implementation

export default function StatsBar() {
    const stats = [
        { value: 24, label: 'Active Members' },
        { value: 3, label: 'R&D Projects' },
        { value: 5, label: 'Events Hosted' },
        { value: 2024, label: 'Est.' },
    ];

    return (
        <section className="py-12 border-y" style={{
            backgroundColor: 'var(--color-ink-light)',
            borderColor: 'var(--color-border)'
        }}>
            <SectionReveal className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <RevealItem key={i}>
                            <div className="flex flex-col items-center md:items-start">
                                <span
                                    className="text-4xl md:text-5xl font-bold mb-2 blue-glow"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                                >
                                    {stat.value}
                                </span>
                                <span
                                    className="text-sm tracking-widest uppercase font-bold"
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
