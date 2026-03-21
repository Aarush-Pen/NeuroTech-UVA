'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { SanityTimelinePhase } from '@/sanity/types';

export default function Timeline({ phases = [] }: { phases?: SanityTimelinePhase[] }) {
    return (
        <section className="py-24 md:py-32 border-y border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-14">
                    <RevealItem className="md:col-span-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Roadmap
                        </span>
                        <div className="w-8 h-px bg-[var(--color-blue-primary)] mt-4 opacity-40" />
                    </RevealItem>
                    <RevealItem className="md:col-span-8">
                        <h2 className="text-3xl md:text-4xl tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                            Our growth journey
                        </h2>
                    </RevealItem>
                </div>

                <div className="relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[var(--color-border)]" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {phases.map((phase) => (
                            <RevealItem key={phase._id}>
                                <div className={`group p-7 rounded-lg border transition-all duration-300 hover:-translate-y-1 h-full ${phase.status === 'active'
                                    ? 'border-[var(--color-blue-primary)]/20'
                                    : 'border-[var(--color-border)]'
                                    }`}
                                    style={{ backgroundColor: 'var(--color-surface)' }}
                                >
                                    <div className="flex items-center justify-between mb-5">
                                        <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-mono ${phase.status === 'active'
                                            ? 'bg-[var(--color-blue-muted)] text-[var(--color-blue-primary)] border border-[var(--color-blue-border)]'
                                            : phase.status === 'completed'
                                                ? 'bg-[var(--color-blue-muted)] text-[var(--color-blue-primary)] border border-[var(--color-border)]'
                                                : 'bg-[var(--color-ink)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]'
                                            }`}>
                                            {phase.phase}
                                        </div>
                                        <span className="text-[10px] tracking-[0.12em] uppercase font-medium text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                            {phase.year}
                                        </span>
                                    </div>

                                    <h3 className="text-lg mb-2 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {phase.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                        {phase.description}
                                    </p>

                                    {phase.status === 'active' && (
                                        <div className="mt-4 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue-primary)] animate-pulse" />
                                            <span className="text-[10px] tracking-wide uppercase font-medium text-[var(--color-blue-primary)]">Current Phase</span>
                                        </div>
                                    )}
                                </div>
                            </RevealItem>
                        ))}
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}
