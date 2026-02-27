'use client';

import React, { useState } from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, ExternalLink } from 'lucide-react';

const categories = ['All', 'Hardware', 'Software', 'Datasets', 'Tutorials'];

const resources = [
    {
        title: 'OpenBCI Cyton Guide',
        category: 'Hardware',
        description: 'Comprehensive setup and troubleshooting guide for the 8-channel Cyton biosensing board.',
        link: '#',
        type: 'guide'
    },
    {
        title: 'MNE-Python Cheatsheet',
        category: 'Software',
        description: 'Quick reference for common EEG processing pipelines: filtering, epoching, and ICA.',
        link: '#',
        type: 'repo'
    },
    {
        title: 'Motor Imagery Dataset',
        category: 'Datasets',
        description: 'Cleaned 64-channel EEG recordings from 20 subjects performing left/right hand motor imagery.',
        link: '#',
        type: 'download'
    },
    {
        title: 'Muse 2 Streaming Script',
        category: 'Software',
        description: 'Python script to stream raw EEG data from Muse 2 headsets via LSL.',
        link: '#',
        type: 'repo'
    },
    {
        title: 'Introduction to BCI',
        category: 'Tutorials',
        description: 'Slide deck from our Fall 2024 bootcamp covering BCI paradigms and signal acquisition.',
        link: '#',
        type: 'slides'
    },
    {
        title: 'PCB Design Guidelines',
        category: 'Hardware',
        description: 'Best practices for designing low-noise analog front-ends for biosignal acquisition.',
        link: '#',
        type: 'guide'
    }
];

export default function ResourceGrid() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredResources = resources.filter(res => {
        const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
        const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            res.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-24 min-h-screen" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Controls */}
                <RevealItem className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 border`}
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    backgroundColor: activeCategory === cat ? 'var(--color-blue-primary)' : 'transparent',
                                    color: activeCategory === cat ? '#0F1B2D' : 'var(--color-text-secondary)',
                                    borderColor: activeCategory === cat ? 'var(--color-blue-primary)' : 'var(--color-border)'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} style={{ color: 'var(--color-text-secondary)' }} />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[var(--color-blue-primary)] transition-colors border"
                            style={{
                                fontFamily: 'var(--font-body)',
                                backgroundColor: 'var(--color-surface)',
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-text-primary)'
                            }}
                        />
                    </div>
                </RevealItem>

                {/* List Layout */}
                <motion.div layout className="flex flex-col gap-4">
                    <AnimatePresence>
                        {filteredResources.map((res) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                                transition={{ duration: 0.2 }}
                                key={res.title}
                                onClick={() => window.open(res.link, '_blank')}
                                className="group border-[color:var(--color-border)] hover:border-[color:var(--color-blue-primary)] border p-5 md:p-6 rounded-lg transition-all hover:shadow-md flex flex-col md:flex-row md:items-center gap-4 md:gap-8 cursor-pointer"
                                style={{
                                    backgroundColor: 'var(--color-surface)'
                                }}
                            >
                                {/* Left Section: Category Icon/Badge */}
                                <div className="flex-shrink-0 w-32 hidden md:block">
                                    <span
                                        className="text-[10px] tracking-widest uppercase px-2.5 py-1.5 rounded font-bold"
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            backgroundColor: 'var(--color-ink)',
                                            color: 'var(--color-blue-primary)'
                                        }}
                                    >
                                        {res.category}
                                    </span>
                                </div>

                                {/* Middle Section: Content */}
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span
                                            className="md:hidden text-[10px] tracking-widest uppercase px-2 py-0.5 rounded font-bold"
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                backgroundColor: 'var(--color-ink)',
                                                color: 'var(--color-blue-primary)'
                                            }}
                                        >
                                            {res.category}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-bold group-hover:text-[var(--color-blue-primary)] transition-colors" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                                            {res.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                                        {res.description}
                                    </p>
                                </div>

                                {/* Right Section: Action */}
                                <div className="flex-shrink-0 flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                                    <span className="md:hidden text-xs font-bold uppercase tracking-wide group-hover:text-[var(--color-blue-primary)] transition-colors" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}>
                                        Access Resource
                                    </span>
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group-hover:bg-[var(--color-blue-primary)] group-hover:text-[#0F1B2D]"
                                        style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-text-secondary)' }}
                                    >
                                        <ExternalLink size={18} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredResources.length === 0 && (
                    <div className="text-center py-24">
                        <p className="italic" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>No resources found matching your criteria.</p>
                    </div>
                )}
            </SectionReveal>
        </section>
    );
}
