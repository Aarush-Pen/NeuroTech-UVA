'use client';

import Link from 'next/link';
import SectionReveal, { RevealItem } from './SectionReveal';
import EEGWaveform from './EEGWaveform';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { SanityEvent } from '@/sanity/types';

const MONTH_NAMES = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

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
        <section className="relative py-28 md:py-36 overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
            {/* Subtle background distinction: radial glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.03)_0%,_transparent_60%)]" />

            <SectionReveal className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <RevealItem>
                        <span
                            className="inline-block px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase mb-5 font-semibold"
                            style={{
                                fontFamily: 'var(--font-body)',
                                color: 'var(--color-blue-primary)',
                                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                                border: '1px solid rgba(56, 189, 248, 0.15)'
                            }}
                        >
                            Schedule
                        </span>
                    </RevealItem>

                    <RevealItem>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                        >
                            Upcoming Events
                        </h2>
                    </RevealItem>
                </div>

                {/* Vertical timeline layout — distinct from the 3-col project cards */}
                <div className="relative">
                    {/* Timeline vertical line */}
                    <div
                        className="absolute left-[27px] md:left-[31px] top-4 bottom-4 w-px hidden sm:block"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />

                    <div className="flex flex-col gap-6">
                        {upcoming.map((event) => {
                            const { month, day } = getMonthDay(event.date);
                            return (
                                <RevealItem key={event._id}>
                                    <div className="group flex gap-6 items-start">
                                        {/* Date node */}
                                        <div className="flex-shrink-0 relative z-10 hidden sm:flex flex-col items-center">
                                            <div
                                                className="w-[56px] h-[56px] rounded-xl flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] group-hover:border-[rgba(56,189,248,0.4)]"
                                                style={{
                                                    backgroundColor: 'var(--color-surface)',
                                                    border: '1px solid var(--color-border)'
                                                }}
                                            >
                                                <span
                                                    className="text-[10px] tracking-[0.1em] uppercase font-bold leading-none"
                                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                                                >
                                                    {month}
                                                </span>
                                                <span
                                                    className="text-xl font-bold leading-none mt-0.5"
                                                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                                                >
                                                    {day}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content card */}
                                        <div
                                            className="flex-1 rounded-2xl border p-6 md:p-7 transition-all duration-300 group-hover:border-[rgba(56,189,248,0.2)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.04)] group-hover:-translate-y-0.5"
                                            style={{
                                                backgroundColor: 'var(--color-surface)',
                                                borderColor: 'var(--color-border)'
                                            }}
                                        >
                                            {/* Mobile date */}
                                            <div className="sm:hidden flex items-center gap-2 mb-3">
                                                <span className="text-[10px] tracking-[0.12em] uppercase font-bold" style={{ color: 'var(--color-blue-primary)' }}>
                                                    {month} {day}
                                                </span>
                                            </div>

                                            <h3
                                                className="text-lg font-bold mb-2 tracking-tight group-hover:text-[var(--color-blue-primary)] transition-colors"
                                                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                                            >
                                                {event.title}
                                            </h3>
                                            <p
                                                className="text-sm leading-relaxed mb-5"
                                                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                            >
                                                {event.description}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-5">
                                                <span
                                                    className="text-[11px] font-medium flex items-center gap-1.5"
                                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                                >
                                                    <Clock size={12} className="opacity-50" /> {event.time}
                                                </span>
                                                <span
                                                    className="text-[11px] font-medium flex items-center gap-1.5"
                                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                                >
                                                    <MapPin size={12} className="opacity-50" /> {event.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </RevealItem>
                            );
                        })}
                    </div>
                </div>

                <RevealItem>
                    <div className="text-center mt-14">
                        <Link
                            href="/events"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-[13px] font-semibold tracking-wide transition-all border hover:bg-[var(--color-surface)]"
                            style={{
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-text-primary)'
                            }}
                        >
                            View Full Calendar <ArrowRight size={14} />
                        </Link>
                    </div>
                </RevealItem>
            </SectionReveal>

            <div className="absolute bottom-0 left-0 right-0 opacity-60">
                <EEGWaveform height={40} opacity={0.06} />
            </div>
        </section>
    );
}
