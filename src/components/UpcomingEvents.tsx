'use client';

import Link from 'next/link';
import SectionReveal, { RevealItem } from './SectionReveal';
import EEGWaveform from './EEGWaveform';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { SanityEvent } from '@/sanity/types';

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getMonthDay = (dateString: string) => {
    const date = new Date(dateString);
    const month = MONTH_NAMES[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    return { month, day };
};

export default function UpcomingEvents({ events = [] }: { events?: SanityEvent[] }) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = events
        .filter(e => !e.isArchived && new Date(e.date) >= today)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 3);

    return (
        <section className="relative py-28 md:py-36 overflow-hidden border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <SectionReveal className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-14">
                    <RevealItem className="md:col-span-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Schedule
                        </span>
                        <div className="w-8 h-px bg-[var(--color-blue-primary)] mt-4 opacity-40" />
                    </RevealItem>
                    <RevealItem className="md:col-span-8">
                        <h2 className="text-3xl md:text-4xl tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                            Upcoming events
                        </h2>
                    </RevealItem>
                </div>

                <div className="flex flex-col gap-3">
                    {upcoming.map((event) => {
                        const { month, day } = getMonthDay(event.date);
                        return (
                            <RevealItem key={event._id}>
                                <div className="group flex items-center gap-6 p-5 md:p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-blue-primary)]/20 transition-all duration-300">
                                    {/* Date */}
                                    <div className="flex-shrink-0 w-14 text-center hidden sm:block">
                                        <span className="block text-[10px] tracking-[0.1em] uppercase font-medium text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                            {month}
                                        </span>
                                        <span className="block text-2xl text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                            {day}
                                        </span>
                                    </div>

                                    {/* Divider */}
                                    <div className="hidden sm:block w-px h-10 bg-[var(--color-border)]" />

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="sm:hidden flex items-center gap-2 mb-1">
                                            <span className="text-[10px] tracking-wide uppercase font-medium text-[var(--color-blue-primary)]">{month} {day}</span>
                                        </div>
                                        <h3 className="text-base font-medium mb-1 group-hover:text-[var(--color-blue-primary)] transition-colors text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                            {event.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-4">
                                            <span className="text-[11px] flex items-center gap-1.5 text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                                <Clock size={11} /> {event.time}
                                            </span>
                                            <span className="text-[11px] flex items-center gap-1.5 text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                                <MapPin size={11} /> {event.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Type badge */}
                                    <span className="hidden md:inline-block px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium rounded-md border border-[var(--color-border)] text-[var(--color-text-tertiary)] bg-[var(--color-ink)]" style={{ fontFamily: 'var(--font-body)' }}>
                                        {event.type}
                                    </span>
                                </div>
                            </RevealItem>
                        );
                    })}
                </div>

                <RevealItem>
                    <div className="mt-10">
                        <Link
                            href="/events"
                            className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-blue-primary)] hover:text-[var(--color-blue-hover)] transition-colors group"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            View full calendar
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0 opacity-60">
                <EEGWaveform height={30} opacity={0.04} color="var(--color-blue-primary)" />
            </div>
        </section>
    );
}
