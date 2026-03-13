'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const allProjects = [
    {
        name: 'Cortex BCI Pipeline',
        description: 'Real-time brain-computer interface processing pipeline for motor imagery classification using EEG signals.',
        tags: ['α', 'EEG', 'Python', 'BCI'],
        status: 'Active Research',
        repo: '#',
        demo: '#'
    },
    {
        name: 'Neural Signal Decoder',
        description: 'Deep learning model for decoding neural patterns from non-invasive EEG recordings with >85% classification accuracy.',
        tags: ['β', 'ML', 'PyTorch', 'Signal'],
        status: 'Active Research',
        repo: '#',
        demo: '#'
    },
    {
        name: 'OpenBCI Hardware Lab',
        description: 'Custom electrode array design and signal acquisition hardware for affordable neuroscience research.',
        tags: ['θ', 'Hardware', 'Arduino', 'PCB'],
        status: 'Hardware',
        repo: '#',
        demo: '#'
    },
    {
        name: 'Sleep Spindle Detector',
        description: 'Automated algorithm to detect sleep spindles in NREM sleep stages using time-frequency analysis.',
        tags: ['δ', 'Signal', 'Matlab', 'Sleep'],
        status: 'Completed',
        repo: '#',
        demo: '#'
    },
    {
        name: 'NeuroFeedback Game',
        description: 'Unity-based game controlled by concentration levels measured via a single-channel EEG headset.',
        tags: ['γ', 'Unity', 'C#', 'GameDev'],
        status: 'Demo Ready',
        repo: '#',
        demo: '#'
    },
    {
        name: 'Eye-Tracking Assistive Tech',
        description: 'Low-cost eye tracking system for ALS patients to communicate using gaze estimation.',
        tags: ['CV', 'Python', 'OpenCV'],
        status: 'In Development',
        repo: '#',
        demo: '#'
    }
];

export default function ProjectsGrid() {
    return (
        <section className="py-28" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {allProjects.map((project) => (
                        <RevealItem key={project.name}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="group relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 border hover:border-[var(--color-blue-primary)]/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.06)]"
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`w-2 h-2 rounded-full ${project.status.includes('Active') || project.status.includes('Development') ? 'animate-pulse' : ''}`}
                                            style={{ backgroundColor: project.status.includes('Completed') ? 'var(--color-secondary)' : 'var(--color-blue-primary)' }}
                                        />
                                        <span
                                            className="text-[10px] tracking-[0.12em] uppercase font-semibold"
                                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: 'var(--color-text-secondary)' }}>
                                        <a href={project.repo} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-blue-primary)] transition-all"><Github size={15} /></a>
                                        <a href={project.demo} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-blue-primary)] transition-all"><ExternalLink size={15} /></a>
                                    </div>
                                </div>

                                <h3
                                    className="text-xl font-bold mb-3 tracking-tight group-hover:text-[var(--color-blue-primary)] transition-colors"
                                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                                >
                                    {project.name}
                                </h3>

                                <p
                                    className="text-sm leading-relaxed mb-6 flex-grow"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                >
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-[10px] tracking-wider uppercase rounded-full font-semibold"
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                backgroundColor: 'var(--color-ink)',
                                                color: 'var(--color-text-secondary)',
                                                border: '1px solid var(--color-border)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </RevealItem>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
