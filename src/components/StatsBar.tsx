'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import CountUp from './CountUp';
import { SanityStats } from '@/sanity/types';

export default function StatsBar({ stats: s }: { stats?: SanityStats }) {
    const stats = [
        { value: s?.activeMembers || 24, label: 'Active Members' },
        { value: s?.rdProjects || 0, label: 'R&D Projects' },
        { value: s?.eventsHosted || 0, label: 'Events Hosted' },
        { value: s?.foundedYear || 2026, label: 'Est.' },
    ];

    return (
        <section className="py-12 border-y border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <RevealItem key={i}>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-3xl md:text-4xl font-light mb-1 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                    <CountUp to={stat.value} />
                                </span>
                                <span className="text-[10px] tracking-[0.18em] uppercase font-medium text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-body)' }}>
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
