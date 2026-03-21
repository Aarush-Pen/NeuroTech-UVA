'use client';

import React, { useState } from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { ChevronDown, ChevronUp, CalendarX, Clock, MapPin, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SanityEvent, SanityGeneralMeeting } from '@/sanity/types';

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getMonthDay = (dateString: string) => {
    const date = new Date(dateString);
    const month = MONTH_NAMES[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    return { month, day, year: date.getFullYear() };
};

function GeneralMeetingCard({ meeting }: { meeting: SanityGeneralMeeting | null }) {
    if (!meeting) return null;

    return (
        <div className="md:col-span-2">
            <div className="relative rounded-lg border-2 border-[var(--color-blue-primary)]/30 p-7 bg-[var(--color-surface)]" style={{ boxShadow: '0 0 30px rgba(37, 99, 235, 0.06)' }}>
                <div className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] tracking-wider uppercase font-medium bg-[var(--color-blue-primary)] text-white" style={{ fontFamily: 'var(--font-body)' }}>
                    <Star size={10} fill="currentColor" /> Weekly
                </div>

                <div className="mb-5 pt-2">
                    <h3 className="text-xl md:text-2xl mb-3 tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                        General Meeting
                    </h3>
                    <div className="flex flex-wrap gap-5">
                        <span className="text-sm font-medium flex items-center gap-2 text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            <Clock size={15} /> {meeting.dayTime}
                        </span>
                        <span className="text-sm font-medium flex items-center gap-2 text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            <MapPin size={15} /> {meeting.location}
                        </span>
                    </div>
                </div>

                <div className="border-t border-[var(--color-border)] pt-4">
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        {meeting.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function EventCard({ event, isPast = false }: { event: SanityEvent; isPast?: boolean }) {
    const { month, day } = getMonthDay(event.date);
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`group rounded-lg border border-[var(--color-border)] hover:border-[var(--color-blue-primary)]/20 bg-[var(--color-surface)] transition-all duration-300 ${isPast ? 'opacity-60 hover:opacity-100' : ''}`}>
            <button onClick={() => setExpanded(!expanded)} className="w-full text-left p-6">
                <div className="flex items-center gap-5">
                    {/* Date */}
                    <div className="flex-shrink-0 w-12 text-center">
                        <span className="block text-[10px] tracking-wider uppercase font-medium text-[var(--color-blue-primary)]">{month}</span>
                        <span className="block text-xl text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>{day}</span>
                    </div>

                    <div className="w-px h-8 bg-[var(--color-border)]" />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-base font-medium mb-1 group-hover:text-[var(--color-blue-primary)] transition-colors text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            {event.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="text-[11px] flex items-center gap-1.5 text-[var(--color-text-tertiary)]"><Clock size={11} /> {event.time}</span>
                            <span className="text-[11px] flex items-center gap-1.5 text-[var(--color-text-tertiary)]"><MapPin size={11} /> {event.location}</span>
                        </div>
                    </div>

                    {/* Type + expand */}
                    <div className="flex items-center gap-3">
                        <span className="hidden sm:inline-block px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium rounded-md border border-[var(--color-border)] text-[var(--color-text-tertiary)] bg-[var(--color-ink)]" style={{ fontFamily: 'var(--font-body)' }}>
                            {event.type}
                        </span>
                        <ChevronDown size={14} className={`text-[var(--color-text-tertiary)] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                    </div>
                </div>
            </button>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-0">
                            <div className="border-t border-[var(--color-border)] pt-4">
                                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function PastEventRow({ event }: { event: SanityEvent }) {
    const { month, day, year } = getMonthDay(event.date);

    return (
        <div className="group flex items-center gap-4 py-3 border-b border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors -mx-2 px-2 rounded-sm">
            <span className="text-[11px] font-mono text-[var(--color-text-tertiary)] w-24 flex-shrink-0">
                {month} {day}, {year}
            </span>
            <span className="text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-blue-primary)] transition-colors flex-1" style={{ fontFamily: 'var(--font-body)' }}>
                {event.title}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-[var(--color-text-tertiary)] hidden sm:inline" style={{ fontFamily: 'var(--font-body)' }}>
                {event.type}
            </span>
        </div>
    );
}

export default function EventsList({ initialEvents = [], generalMeeting }: { initialEvents?: SanityEvent[]; generalMeeting?: SanityGeneralMeeting }) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const thirtyDaysAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));

    const upcomingEvents = initialEvents
        .filter(e => !e.isArchived && new Date(e.date) >= today)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const recentPastEvents = initialEvents
        .filter(e => !e.isArchived && new Date(e.date) < today && new Date(e.date) >= thirtyDaysAgo)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const archiveEvents = initialEvents
        .filter(e => e.isArchived || new Date(e.date) < thirtyDaysAgo)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const mainList = [...upcomingEvents, ...recentPastEvents];
    const [showArchive, setShowArchive] = useState(false);

    return (
        <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-4xl mx-auto px-6 lg:px-10">
                {/* General Meeting */}
                <RevealItem className="mb-8">
                    <GeneralMeetingCard meeting={generalMeeting || null} />
                </RevealItem>

                {/* Events list */}
                <RevealItem>
                    <h2 className="text-lg font-medium mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        Upcoming & Recent
                    </h2>
                </RevealItem>

                <div className="flex flex-col gap-3">
                    {mainList.length > 0 ? (
                        mainList.map(event => (
                            <RevealItem key={event._id}>
                                <EventCard event={event} isPast={new Date(event.date) < today} />
                            </RevealItem>
                        ))
                    ) : (
                        <RevealItem>
                            <div className="py-16 text-center border border-dashed border-[var(--color-border)] rounded-lg bg-[var(--color-surface)]">
                                <CalendarX className="mx-auto mb-3 opacity-30" size={32} style={{ color: 'var(--color-text-secondary)' }} />
                                <h3 className="text-base font-medium mb-1 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                    No upcoming events
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                    Check back soon or join our GroupMe for updates.
                                </p>
                            </div>
                        </RevealItem>
                    )}
                </div>

                {/* Archive */}
                {archiveEvents.length > 0 && (
                    <div className="mt-14 pt-6 border-t border-[var(--color-border)]">
                        <RevealItem>
                            <button
                                onClick={() => setShowArchive(!showArchive)}
                                className="flex items-center gap-2 text-[12px] font-medium tracking-wide text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-6"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {showArchive ? 'Hide archive' : `View past events (${archiveEvents.length})`}
                                {showArchive ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
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
                                    <div className="border-t border-[var(--color-border)]">
                                        {archiveEvents.map(event => (
                                            <PastEventRow key={event._id} event={event} />
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
