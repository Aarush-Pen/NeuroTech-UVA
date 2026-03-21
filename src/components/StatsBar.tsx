'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import CountUp from './CountUp';
import { SanitySiteSettings } from '@/sanity/types';

export default function StatsBar({ settings }: { settings?: SanitySiteSettings }) {
    const stats = [
        { value: settings?.activeMembers || 24, label: 'Active Members' },
        { value: settings?.rdProjects || 3, label: 'R&D Projects' },
        { value: settings?.eventsHosted || 5, label: 'Events Hosted' },
        { value: settings?.foundedYear || 2024, label: 'Est.' },
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
