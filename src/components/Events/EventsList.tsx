'use client';

import React, { useState } from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { ChevronDown, ChevronUp, CalendarX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Event {
    id: string;
    date: Date;
    title: string;
    description: string;
    time: string;
    location: string;
    type: string;
}

const MONTH_NAMES = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// Helper to format date for display
const getMonthDay = (date: Date) => {
    const month = MONTH_NAMES[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    return { month, day };
};

const allEvents: Event[] = [
    // Upcoming
    {
        id: '1',
        date: new Date('2026-02-22T18:00:00'),
        title: 'Intro to EEG Signal Processing',
        description: 'Hands-on workshop covering the fundamentals of EEG data acquisition, preprocessing, and spectral analysis using Python and MNE.',
        time: '6:00 PM EST',
        location: 'Rice Hall 340',
        type: 'Workshop'
    },
    {
        id: '2',
        date: new Date('2026-03-08T17:30:00'),
        title: 'BCI Demo Day',
        description: 'Live demonstrations of our brain-computer interface projects, including real-time motor imagery control and P300 speller systems.',
        time: '5:30 PM EST',
        location: 'Thornton Hall E316',
        type: 'Social'
    },
    {
        id: '3',
        date: new Date('2026-03-22T16:00:00'),
        title: 'Neural Hardware Design Sprint',
        description: 'A collaborative design session focused on custom electrode arrays and signal amplification circuits for affordable BCI hardware.',
        time: '4:00 PM EST',
        location: 'Lind-MakerSpace',
        type: 'Hackathon'
    },
    {
        id: '4',
        date: new Date('2026-04-05T18:30:00'),
        title: 'Guest Lecture: Dr. Smith on Neuralink',
        description: 'Dr. Smith joins us to discuss the latest advancements in invasive BCI technology and the future of neural interfaces.',
        time: '6:30 PM EST',
        location: 'Rice Hall Auditorium',
        type: 'Speaker'
    },
    // Past (Recent - within 30 days)
    {
        id: '5',
        date: new Date('2026-02-10T18:00:00'),
        title: 'Spring Kickoff Meeting',
        description: 'Welcoming new members and outlining the semester roadmap for all research tracks.',
        time: '6:00 PM EST',
        location: 'Rice Hall 130',
        type: 'Social'
    },
    // Past (Archive)
    {
        id: '6',
        date: new Date('2025-11-15T09:00:00'),
        title: 'NeuroTechX Hackathon 2025',
        description: 'Developed a gaze-controlled keyboard. 2nd Place Winner.',
        time: '9:00 AM EST',
        location: 'Remote',
        type: 'Hackathon'
    },
    {
        id: '7',
        date: new Date('2025-04-10T17:00:00'),
        title: 'Python for Neuroscience Workshop',
        description: 'Introductory series on using NumPy, Pandas, and SciPy for neural data analysis.',
        time: '5:00 PM EST',
        location: 'Olsson Hall',
        type: 'Workshop'
    },
    {
        id: '8',
        date: new Date('2025-02-20T18:00:00'),
        title: 'Careers in Neurotech Panel',
        description: 'Featuring alumni from Neurable, Kernel, and Neuralink.',
        time: '6:00 PM EST',
        location: 'Newcomb Hall',
        type: 'Speaker'
    }
];

function EventCard({ event, isPast = false }: { event: Event, isPast?: boolean }) {
    const { month, day } = getMonthDay(event.date);

    return (
        <div className={`relative flex gap-6 md:gap-10 group ${isPast ? 'opacity-80 hover:opacity-100' : ''}`}>
            <div className="relative z-10 flex-shrink-0 w-[100px] md:w-[140px] text-right pr-6 md:pr-10 py-8 flex flex-col items-end">
                <div
                    className="text-xs tracking-widest uppercase font-bold mb-0.5"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                >
                    {month}
                </div>
                <div
                    className="text-3xl md:text-4xl font-bold leading-none mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                    {day}
                </div>
                <div className="inline-block px-2 py-0.5 rounded border text-[10px] tracking-wider uppercase font-bold"
                    style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)'
                    }}>
                    {event.type}
                </div>
            </div>

            <div className="absolute left-[100px] md:left-[140px] top-0 bottom-0 flex justify-center">
                <div className="w-px h-full" style={{ backgroundColor: 'var(--color-border)' }} />
                <div className="absolute top-[42px] w-[9px] h-[9px] rounded-full border-2 transition-colors duration-200 z-20"
                    style={{
                        backgroundColor: 'var(--color-ink)',
                        borderColor: 'var(--color-blue-primary)'
                    }}
                />
            </div>

            <div className={`flex-1 py-8 border-b transition-colors flex flex-col justify-start`} style={{ borderColor: 'var(--color-border)' }}>
                <h3
                    className="text-lg md:text-xl font-bold mb-2 tracking-tight group-hover:text-[var(--color-blue-primary)] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                    {event.title}
                </h3>
                <p
                    className="text-sm md:text-base leading-relaxed mb-3 max-w-2xl"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                >
                    {event.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-auto">
                    <span className="text-[11px] tracking-wide font-medium" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                        🕒 {event.time}
                    </span>
                    <span className="text-[11px] tracking-wide font-medium" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                        📍 {event.location}
                    </span>
                </div>
                {!isPast && (
                    <a href="#" className="inline-block mt-4 text-xs tracking-wide uppercase font-bold hover:underline"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}>
                        RSVP &rarr;
                    </a>
                )}
            </div>
        </div>
    );
}

function PastEventCard({ event }: { event: Event }) {
    const { month, day } = getMonthDay(event.date);
    const year = event.date.getFullYear();

    return (
        <div className="border border-[color:var(--color-border)] rounded-lg p-5 flex flex-col h-full bg-[var(--color-surface)] hover:border-[color:var(--color-blue-primary)] transition-colors opacity-80 hover:opacity-100 group">
            <div className="flex justify-between items-start mb-3">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-[var(--color-blue-primary)] tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>{month} {day}, {year}</span>
                    <span className="text-[10px] uppercase font-bold text-[var(--color-text-secondary)] mt-0.5 tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>{event.type}</span>
                </div>
            </div>
            <h4 className="text-base font-bold mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-blue-primary)] transition-colors leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {event.title}
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)] mb-4 line-clamp-3 leading-relaxed flex-grow" style={{ fontFamily: 'var(--font-body)' }}>
                {event.description}
            </p>
            <div className="flex flex-col gap-1 mt-auto">
                <span className="text-[10px] tracking-wide font-medium text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                    🕒 {event.time}
                </span>
                <span className="text-[10px] tracking-wide font-medium text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                    📍 {event.location}
                </span>
            </div>
        </div>
    );
}

export default function EventsList() {
    // "Current" date simulation (Feb 17, 2026)
    const today = new Date('2026-02-17T00:00:00');
    const thirtyDaysAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));

    // Sort: Future/Recent Ascending? Usually Upcoming is Ascending (nearest first). Past is Descending (newest first).
    // Request: "Events should be sorted with the most recent/upcoming at the top, and oldest at the bottom of the past events archive."
    // This implies a single timeline order for everything?
    // "Most recent/upcoming at the top" -> Ascending for future?
    // "Oldest at the bottom of the past events" -> Descending for past? 
    // Wait. "Oldest at bottom" means Newest at top.
    // So BOTH lists should be sorted: Recent -> Distant.
    // For Upcoming: Feb 22, Mar 8, Mar 22... (Ascending)
    // For Past: Feb 10, Jan, Dec... (Descending)

    // Filter
    const upcomingEvents = allEvents
        .filter(e => e.date >= today)
        .sort((a, b) => a.date.getTime() - b.date.getTime());

    const recentPastEvents = allEvents
        .filter(e => e.date < today && e.date >= thirtyDaysAgo)
        .sort((a, b) => b.date.getTime() - a.date.getTime()); // Newest first

    const archiveEvents = allEvents
        .filter(e => e.date < thirtyDaysAgo)
        .sort((a, b) => b.date.getTime() - a.date.getTime()); // Newest first

    const mainList = [...upcomingEvents, ...recentPastEvents];

    const [showArchive, setShowArchive] = useState(false);

    return (
        <section className="py-24" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-12">
                <RevealItem>
                    <h2
                        className="text-3xl font-bold mb-12"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Upcoming & Recent
                    </h2>
                </RevealItem>

                {mainList.length > 0 ? (
                    <div className="flex flex-col">
                        {mainList.map(event => (
                            <RevealItem key={event.id}>
                                <EventCard event={event} isPast={event.date < today} />
                            </RevealItem>
                        ))}
                    </div>
                ) : (
                    <RevealItem>
                        <div className="py-16 text-center border rounded-xl border-dashed"
                            style={{ borderColor: 'var(--color-border)' }}>
                            <CalendarX className="mx-auto mb-4 opacity-50" size={48} style={{ color: 'var(--color-text-secondary)' }} />
                            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                                No upcoming events
                            </h3>
                            <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                                Check back soon or join our Discord for updates!
                            </p>
                        </div>
                    </RevealItem>
                )}

                {/* Archive Section */}
                {archiveEvents.length > 0 && (
                    <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
                        <RevealItem>
                            <button
                                onClick={() => setShowArchive(!showArchive)}
                                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-colors hover:text-[var(--color-blue-primary)] mb-8"
                                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                            >
                                {showArchive ? 'Hide Past Events' : 'View Past Events Archive'}
                                {showArchive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                        </RevealItem>

                        <AnimatePresence>
                            {showArchive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {archiveEvents.map(event => (
                                            <PastEventCard key={event.id} event={event} />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </SectionReveal>
        </section>
    );
}
