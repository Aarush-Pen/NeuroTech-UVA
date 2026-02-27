'use client';

import Link from 'next/link';
import SectionReveal, { RevealItem } from './SectionReveal';

interface Event {
    dateMonth: string;
    dateDay: string;
    title: string;
    description: string;
    time: string;
    location: string;
}

const events: Event[] = [
    {
        dateMonth: 'FEB',
        dateDay: '22',
        title: 'Intro to EEG Signal Processing',
        description:
            'Hands-on workshop covering the fundamentals of EEG data acquisition, preprocessing, and spectral analysis using Python and MNE.',
        time: '6:00 PM EST',
        location: 'Rice Hall 340',
    },
    {
        dateMonth: 'MAR',
        dateDay: '08',
        title: 'BCI Demo Day',
        description:
            'Live demonstrations of our brain-computer interface projects, including real-time motor imagery control and P300 speller systems.',
        time: '5:30 PM EST',
        location: 'Thornton Hall E316',
    },
    {
        dateMonth: 'MAR',
        dateDay: '22',
        title: 'Neural Hardware Design Sprint',
        description:
            'A collaborative design session focused on custom electrode arrays and signal amplification circuits for affordable BCI hardware.',
        time: '4:00 PM EST',
        location: 'Lind-MakerSpace',
    },
];

export default function UpcomingEvents() {
    return (
        <section className="relative py-24 md:py-32" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col items-center text-center mb-16">
                    <RevealItem>
                        <span
                            className="text-xs tracking-[0.2em] uppercase mb-4 block font-bold"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                        >
                            Schedule
                        </span>
                    </RevealItem>

                    <RevealItem>
                        <h2
                            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                        >
                            Upcoming Events
                        </h2>
                    </RevealItem>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[24px] md:left-[50%] top-0 bottom-0 w-px" style={{ backgroundColor: 'var(--color-border)' }} />

                    <div className="flex flex-col gap-12">
                        {events.map((event, i) => (
                            <RevealItem key={i}>
                                <div className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Date Bubble (Center) */}
                                    <div className="absolute left-[24px] md:left-[50%] top-0 -translate-x-1/2 z-20 flex flex-col items-center justify-center w-12 h-12 rounded-full border-4"
                                        style={{
                                            borderColor: 'var(--color-ink-light)',
                                            backgroundColor: 'var(--color-blue-primary)',
                                            color: '#0F1B2D'
                                        }}>
                                        <span className="text-[10px] font-bold">{event.dateMonth}</span>
                                    </div>

                                    {/* Content Card (Side) */}
                                    <div className="flex-1 md:w-[50%] pl-16 md:pl-0">
                                        <div className={`
                                            p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                                            ${i % 2 === 0 ? 'md:ml-auto md:mr-12' : 'md:ml-12 md:mr-auto'}
                                        `}
                                            style={{
                                                backgroundColor: 'var(--color-surface)',
                                                borderColor: 'var(--color-border)'
                                            }}
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <span
                                                    className="text-3xl font-bold"
                                                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue-primary)' }}
                                                >
                                                    {event.dateDay}
                                                </span>
                                            </div>

                                            <h3
                                                className="text-xl font-bold mb-2 tracking-tight"
                                                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                                            >
                                                {event.title}
                                            </h3>
                                            <p
                                                className="text-sm leading-relaxed mb-4 opacity-90"
                                                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                            >
                                                {event.description}
                                            </p>
                                            <div className="flex flex-wrap gap-4 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                                                <span
                                                    className="text-xs font-semibold tracking-wide flex items-center gap-1"
                                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                                >
                                                    🕒 {event.time}
                                                </span>
                                                <span
                                                    className="text-xs font-semibold tracking-wide flex items-center gap-1"
                                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                                >
                                                    📍 {event.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </RevealItem>
                        ))}
                    </div>
                </div>

                <RevealItem>
                    <div className="text-center mt-16">
                        <Link
                            href="/events"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all hover:bg-[var(--color-surface)] border"
                            style={{
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-text-primary)'
                            }}
                        >
                            View Full Calendar
                        </Link>
                    </div>
                </RevealItem>
            </SectionReveal>
        </section>
    );
}
