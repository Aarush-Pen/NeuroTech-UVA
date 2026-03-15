'use client';

import React, { useState } from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { ChevronDown, ChevronUp, CalendarX, Clock, MapPin, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { SanityEvent, SanityGeneralMeeting } from '@/sanity/types';

const MONTH_NAMES = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const getMonthDay = (dateString: string) => {
    const date = new Date(dateString);
    const month = MONTH_NAMES[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    return { month, day, year: date.getFullYear(), dateObj: date };
};
function GeneralMeetingCard({ meeting }: { meeting: SanityGeneralMeeting | null }) {
    if (!meeting) return null;

    return (
        <div className="md:col-span-2">
            <div
                className="relative rounded-2xl border-2 p-7 transition-all duration-300"
                style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-blue-primary)',
                    boxShadow: '0 0 30px rgba(56, 189, 248, 0.08)',
                }}
            >
                {/* Pinned badge */}
                <div className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold"
                    style={{
                        fontFamily: 'var(--font-body)',
                        backgroundColor: 'var(--color-blue-primary)',
                        color: '#08090F',
                    }}>
                    <Star size={10} fill="currentColor" /> Weekly
                </div>

                <div className="mb-6 pt-2">
                    <h3
                        className="text-2xl md:text-3xl font-bold mb-3 tracking-tight"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        General Meeting
                    </h3>
                    <div className="flex flex-wrap gap-5">
                        <span className="text-sm font-semibold flex items-center gap-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}>
                            <Clock size={16} /> {meeting.dayTime}
                        </span>
                        <span className="text-sm font-semibold flex items-center gap-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}>
                            <MapPin size={16} /> {meeting.location}
                        </span>
                    </div>
                </div>

                <div className="border-t pt-5" style={{ borderColor: 'var(--color-border)' }}>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                        {meeting.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function EventCard({ event, isPast = false }: { event: SanityEvent, isPast?: boolean }) {
    const { month, day } = getMonthDay(event.date);
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`relative group rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-blue-primary)]/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.06)] ${isPast ? 'opacity-70 hover:opacity-100' : ''}`}
            style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
            }}>

            <AnimatePresence mode="wait">
                {expanded ? (
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setExpanded(false)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[var(--color-ink)] z-10"
                            style={{ color: 'var(--color-text-secondary)' }}
                            aria-label="Close"
                        >
                            <X size={16} />
                        </button>

                        {/* Enlarged header */}
                        <div className="mb-5">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold"
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        backgroundColor: 'var(--color-ink)',
                                        color: 'var(--color-text-secondary)',
                                        border: '1px solid var(--color-border)'
                                    }}>
                                    {event.type}
                                </span>
                            </div>
                            <h3
                                className="text-xl md:text-2xl font-bold mb-3 tracking-tight"
                                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                            >
                                {event.title}
                            </h3>
                            <div className="flex flex-wrap gap-5">
                                <span className="text-sm font-semibold flex items-center gap-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}>
                                    <Clock size={16} /> {event.time}
                                </span>
                                <span className="text-sm font-semibold flex items-center gap-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}>
                                    <MapPin size={16} /> {event.location}
                                </span>
                            </div>
                        </div>

                        <div className="border-t pt-5" style={{ borderColor: 'var(--color-border)' }}>
                            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                                {event.description}
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <span
                                    className="text-2xl font-bold"
                                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue-primary)' }}
                                >
                                    {day}
                                </span>
                                <span
                                    className="text-[10px] tracking-[0.12em] uppercase font-semibold"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                                >
                                    {month}
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    backgroundColor: 'var(--color-ink)',
                                    color: 'var(--color-text-secondary)',
                                    border: '1px solid var(--color-border)'
                                }}>
                                {event.type}
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

                        <div className="flex flex-wrap gap-4 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                            <span className="text-[11px] font-medium flex items-center gap-1.5" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                                <Clock size={12} className="opacity-50" /> {event.time}
                            </span>
                            <span className="text-[11px] font-medium flex items-center gap-1.5" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                                <MapPin size={12} className="opacity-50" /> {event.location}
                            </span>
                        </div>
                        <button
                            onClick={() => setExpanded(true)}
                            className="inline-block mt-4 px-5 py-2 rounded-full text-[11px] tracking-wide uppercase font-semibold transition-all border hover:bg-[var(--color-blue-primary)] hover:text-[#08090F] hover:border-[var(--color-blue-primary)]"
                            style={{
                                fontFamily: 'var(--font-body)',
                                color: 'var(--color-blue-primary)',
                                borderColor: 'rgba(56, 189, 248, 0.2)'
                            }}
                        >
                            Read More →
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function PastEventCard({ event }: { event: SanityEvent }) {
    const { month, day, year } = getMonthDay(event.date);
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="relative border rounded-2xl p-6 flex flex-col h-full transition-all opacity-70 hover:opacity-100 group hover:border-[var(--color-blue-primary)]/30"
            style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
            }}>

            <AnimatePresence mode="wait">
                {expanded ? (
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            onClick={() => setExpanded(false)}
                            className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[var(--color-ink)] z-10"
                            style={{ color: 'var(--color-text-secondary)' }}
                            aria-label="Close"
                        >
                            <X size={14} />
                        </button>

                        <div className="mb-3">
                            <span className="text-[10px] uppercase font-semibold tracking-wider" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}>{month} {day}, {year}</span>
                            <h4 className="text-base font-bold mt-1 mb-2 leading-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                                {event.title}
                            </h4>
                            <div className="flex flex-wrap gap-3 mb-3">
                                <span className="text-xs font-semibold flex items-center gap-1.5" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}>
                                    <Clock size={12} /> {event.time}
                                </span>
                                <span className="text-xs font-semibold flex items-center gap-1.5" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}>
                                    <MapPin size={12} /> {event.location}
                                </span>
                            </div>
                        </div>
                        <div className="border-t pt-3" style={{ borderColor: 'var(--color-border)' }}>
                            <p className="text-xs leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                                {event.description}
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-semibold tracking-wider" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}>{month} {day}, {year}</span>
                                <span className="text-[10px] uppercase font-semibold mt-0.5 tracking-wider" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>{event.type}</span>
                            </div>
                        </div>
                        <h4 className="text-base font-bold mb-2 group-hover:text-[var(--color-blue-primary)] transition-colors leading-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                            {event.title}
                        </h4>
                        <p className="text-xs mb-4 line-clamp-3 leading-relaxed flex-grow" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                            {event.description}
                        </p>
                        <div className="flex flex-col gap-1 mt-auto mb-3">
                            <span className="text-[10px] tracking-wide font-medium flex items-center gap-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                                <Clock size={10} className="opacity-50" /> {event.time}
                            </span>
                            <span className="text-[10px] tracking-wide font-medium flex items-center gap-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                                <MapPin size={10} className="opacity-50" /> {event.location}
                            </span>
                        </div>
                        <button
                            onClick={() => setExpanded(true)}
                            className="self-start px-4 py-1.5 rounded-full text-[10px] tracking-wide uppercase font-semibold transition-all border hover:bg-[var(--color-blue-primary)] hover:text-[#08090F] hover:border-[var(--color-blue-primary)]"
                            style={{
                                fontFamily: 'var(--font-body)',
                                color: 'var(--color-blue-primary)',
                                borderColor: 'rgba(56, 189, 248, 0.2)'
                            }}
                        >
                            Read More →
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function EventsList({ initialEvents = [], generalMeeting }: { initialEvents?: SanityEvent[], generalMeeting?: SanityGeneralMeeting }) {
    const today = new Date();
    // Start of current day
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
        <section className="py-28" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <RevealItem>
                    <h2
                        className="text-2xl font-bold mb-10"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Upcoming &amp; Recent
                    </h2>
                </RevealItem>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* General Meeting — always pinned at top, spans full width */}
                    <RevealItem className="md:col-span-2">
                        <GeneralMeetingCard meeting={generalMeeting || null} />
                    </RevealItem>

                    {mainList.length > 0 ? (
                        mainList.map(event => (
                            <RevealItem key={event._id}>
                                <EventCard event={event} isPast={new Date(event.date) < today} />
                            </RevealItem>
                        ))
                    ) : (
                        <RevealItem>
                            <div className="py-20 text-center border rounded-2xl border-dashed md:col-span-2"
                                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                                <CalendarX className="mx-auto mb-4 opacity-40" size={40} style={{ color: 'var(--color-text-secondary)' }} />
                                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                                    No upcoming events
                                </h3>
                                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                                    Check back soon or join our GroupMe for updates!
                                </p>
                            </div>
                        </RevealItem>
                    )}
                </div>

                {archiveEvents.length > 0 && (
                    <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
                        <RevealItem>
                            <button
                                onClick={() => setShowArchive(!showArchive)}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-semibold uppercase tracking-wide transition-all border hover:bg-[var(--color-surface)] mb-8"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    color: 'var(--color-text-secondary)',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                {showArchive ? 'Hide Past Events' : 'View Past Events Archive'}
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
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {archiveEvents.map(event => (
                                            <PastEventCard key={event._id} event={event} />
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
