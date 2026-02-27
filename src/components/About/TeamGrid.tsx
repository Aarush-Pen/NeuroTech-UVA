'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
    {
        name: 'Ani Chinthakindi',
        role: 'President/Founder',
        major: 'Neuroscience & CS',
        bio: 'Researching motor cortex signal decoding. Previously interned at Neuralink.',
    },
    {
        name: 'Arnav Bandam',
        role: 'Vice President',
        major: 'Electrical Engineering',
        bio: 'Designing low-noise amplifier circuits for custom EEG hardware.',
    },
    {
        name: 'Yogi Patel',
        role: 'Research Lead',
        major: 'Cognitive Science',
        bio: 'Focusing on P300 speller paradigms and signal processing algorithms.',
    },
    {
        name: 'Malav Shah',
        role: 'Events Chair',
        major: 'Biomedical Engineering',
        bio: 'Organizing workshops to bridge the gap between biology and tech.',
    },
    {
        name: 'Michael Patel',
        role: 'Treasurer',
        major: 'Commerce & CS',
        bio: 'Managing funding for hardware procurement and lab equipment.',
    },
    {
        name: 'Aarush Penamets',
        role: 'Technical Lead',
        major: 'Psychology',
        bio: 'Connecting with local schools to inspire the next generation of neurotech.',
    },
];

export default function TeamGrid() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal>
                <RevealItem className="mb-16 text-center">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Meet the Grid
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                        The minds behind the machines.
                    </p>
                </RevealItem>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <RevealItem key={member.name}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="group p-8 rounded-xl relative overflow-hidden transition-all border hover:shadow-lg"
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl transition-colors group-hover:scale-110 duration-300"
                                        style={{
                                            backgroundColor: 'var(--color-ink)',
                                            color: 'var(--color-blue-primary)',
                                            fontFamily: 'var(--font-heading)'
                                        }}>
                                        {member.name.charAt(0)}
                                    </div>
                                    <div className="flex gap-3 text-[var(--color-text-secondary)]">
                                        <a href="#" className="hover:text-[var(--color-blue-primary)] transition-colors"><Github size={18} /></a>
                                        <a href="#" className="hover:text-[var(--color-blue-primary)] transition-colors"><Linkedin size={18} /></a>
                                    </div>
                                </div>

                                <h3
                                    className="text-xl font-bold mb-1 group-hover:text-[var(--color-blue-primary)] transition-colors"
                                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                                >
                                    {member.name}
                                </h3>
                                <div
                                    className="text-xs tracking-wider uppercase mb-4 font-bold"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                                >
                                    {member.role}
                                </div>
                                <p
                                    className="text-sm leading-relaxed mb-4"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                >
                                    {member.bio}
                                </p>
                                <div
                                    className="inline-block px-2 py-1 rounded text-[10px] tracking-wider uppercase font-bold"
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        backgroundColor: 'var(--color-ink)',
                                        color: 'var(--color-text-secondary)'
                                    }}
                                >
                                    {member.major}
                                </div>
                            </motion.div>
                        </RevealItem>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
