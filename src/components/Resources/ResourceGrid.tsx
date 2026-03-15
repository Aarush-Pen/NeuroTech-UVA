'use client';

import React, { useState } from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';

import { SanityResource } from '@/sanity/types';

const categories = ['All', 'Hardware', 'Software', 'Datasets', 'Tutorials'];

export default function ResourceGrid({ resources = [] }: { resources?: SanityResource[] }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredResources = resources.filter(res => {
        const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
        const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            res.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-28 min-h-screen" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">

                {/* Controls */}
                <RevealItem className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="px-4 py-2 rounded-full text-[11px] font-semibold tracking-wide uppercase transition-all duration-200 border"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    backgroundColor: activeCategory === cat ? 'var(--color-blue-primary)' : 'transparent',
                                    color: activeCategory === cat ? '#08090F' : 'var(--color-text-secondary)',
                                    borderColor: activeCategory === cat ? 'var(--color-blue-primary)' : 'var(--color-border)'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={15} style={{ color: 'var(--color-text-secondary)' }} />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[var(--color-blue-primary)] transition-colors border"
                            style={{
                                fontFamily: 'var(--font-body)',
                                backgroundColor: 'var(--color-surface)',
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-text-primary)'
                            }}
                        />
                    </div>
                </RevealItem>

                {/* Resource Cards */}
                <motion.div layout className="flex flex-col gap-4">
                    <AnimatePresence>
                        {filteredResources.map((res) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                key={res._id}
                                onClick={() => {
                                    const link = res.externalLink || res.fileUrl || '#';
                                    window.open(link, '_blank');
                                }}
                                className="group border rounded-2xl p-6 md:p-7 transition-all hover:border-[var(--color-blue-primary)]/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.06)] flex flex-col md:flex-row md:items-center gap-4 md:gap-8 cursor-pointer"
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                {/* Category Badge */}
                                <div className="flex-shrink-0 w-28 hidden md:block">
                                    <span
                                        className="px-3 py-1 rounded-full text-[10px] tracking-[0.12em] uppercase font-semibold"
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            backgroundColor: 'rgba(56, 189, 248, 0.08)',
                                            color: 'var(--color-blue-primary)',
                                            border: '1px solid rgba(56, 189, 248, 0.15)'
                                        }}
                                    >
                                        {res.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span
                                            className="md:hidden px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold"
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                                                color: 'var(--color-blue-primary)',
                                                border: '1px solid rgba(56, 189, 248, 0.15)'
                                            }}
                                        >
                                            {res.category}
                                        </span>
                                        <h3 className="text-base md:text-lg font-bold group-hover:text-[var(--color-blue-primary)] transition-colors" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                                            {res.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                                        {res.description}
                                    </p>
                                </div>

                                {/* Action */}
                                <div className="flex-shrink-0 flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                                    <span className="md:hidden text-xs font-semibold uppercase tracking-wide group-hover:text-[var(--color-blue-primary)] transition-colors" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}>
                                        Access Resource
                                    </span>
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:bg-[var(--color-blue-primary)] group-hover:text-[#08090F]"
                                        style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}
                                    >
                                        <ExternalLink size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredResources.length === 0 && (
                    <div className="text-center py-24">
                        <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>No resources found matching your criteria.</p>
                    </div>
                )}
            </SectionReveal>
        </section>
    );
}
