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
        <section className="py-24 md:py-32 min-h-screen" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-4xl mx-auto px-6 lg:px-10">
                {/* Controls */}
                <RevealItem className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-3.5 py-2 rounded-md text-[11px] font-medium tracking-wide transition-all duration-200 border ${activeCategory === cat
                                    ? 'bg-[var(--color-blue-primary)] text-white border-[var(--color-blue-primary)]'
                                    : 'bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-text-tertiary)]'
                                    }`}
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-56">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]" size={14} />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-md py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:border-[var(--color-blue-primary)] transition-colors border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]"
                            style={{ fontFamily: 'var(--font-body)' }}
                        />
                    </div>
                </RevealItem>

                {/* Resource list */}
                <motion.div layout className="flex flex-col gap-2">
                    <AnimatePresence>
                        {filteredResources.map((res) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                                key={res._id}
                                onClick={() => {
                                    const link = res.externalLink || res.fileUrl || '#';
                                    window.open(link, '_blank');
                                }}
                                className="group flex items-center gap-5 p-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-blue-primary)]/20 transition-all cursor-pointer"
                            >
                                {/* Category */}
                                <span className="hidden md:inline-block text-[10px] tracking-wider uppercase font-medium text-[var(--color-blue-primary)] w-20 flex-shrink-0" style={{ fontFamily: 'var(--font-body)' }}>
                                    {res.category}
                                </span>

                                <div className="hidden md:block w-px h-6 bg-[var(--color-border)]" />

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-medium mb-0.5 group-hover:text-[var(--color-blue-primary)] transition-colors text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                        <span className="md:hidden text-[10px] tracking-wider uppercase text-[var(--color-blue-primary)] mr-2">{res.category}</span>
                                        {res.title}
                                    </h3>
                                    <p className="text-[13px] leading-relaxed text-[var(--color-text-secondary)] line-clamp-1" style={{ fontFamily: 'var(--font-body)' }}>
                                        {res.description}
                                    </p>
                                </div>

                                {/* Action */}
                                <div className="flex-shrink-0 w-8 h-8 rounded-md border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-tertiary)] group-hover:border-[var(--color-blue-primary)] group-hover:text-[var(--color-blue-primary)] transition-all">
                                    <ExternalLink size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredResources.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-sm text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            No resources found matching your criteria.
                        </p>
                    </div>
                )}
            </SectionReveal>
        </section>
    );
}
