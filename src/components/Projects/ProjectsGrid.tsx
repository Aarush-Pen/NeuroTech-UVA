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
        <section className="py-24" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project) => (
                        <RevealItem key={project.name}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="group relative rounded-xl p-8 h-full flex flex-col transition-all duration-300 border border-[color:var(--color-border)] hover:border-[color:var(--color-blue-primary)] hover:shadow-lg hover:-translate-y-1"
                                style={{
                                    backgroundColor: 'var(--color-surface)'
                                }}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`w-2 h-2 rounded-full ${project.status.includes('Active') || project.status.includes('Development') ? 'animate-pulse' : ''}`}
                                            style={{ backgroundColor: project.status.includes('Completed') ? 'var(--color-secondary)' : 'var(--color-blue-primary)' }}
                                        />
                                        <span
                                            className="text-[10px] tracking-widest uppercase font-bold"
                                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--color-text-secondary)]">
                                        <a href={project.repo} className="hover:text-[var(--color-blue-primary)]"><Github size={18} /></a>
                                        <a href={project.demo} className="hover:text-[var(--color-blue-primary)]"><ExternalLink size={18} /></a>
                                    </div>
                                </div>

                                <h3
                                    className="text-2xl font-bold mb-3 tracking-tight group-hover:text-[var(--color-blue-primary)] transition-colors"
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
                                            className="px-2.5 py-1 text-[10px] tracking-wider uppercase rounded font-bold"
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                backgroundColor: 'var(--color-ink)',
                                                color: 'var(--color-text-secondary)'
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
