'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionReveal, { RevealItem } from './SectionReveal';
import { ArrowRight } from 'lucide-react';

interface Project {
    name: string;
    slug: string;
    description: string;
    tags: string[];
    status: string;
}

const projects: Project[] = [
    {
        name: 'Cortex BCI Pipeline',
        slug: 'cortex-bci',
        description:
            'Real-time brain-computer interface processing pipeline for motor imagery classification using EEG signals.',
        tags: ['α', 'EEG', 'Python', 'BCI'],
        status: 'Active Research',
    },
    {
        name: 'Neural Signal Decoder',
        slug: 'neural-decoder',
        description:
            'Deep learning model for decoding neural patterns from non-invasive EEG recordings with >85% classification accuracy.',
        tags: ['β', 'ML', 'PyTorch', 'Signal'],
        status: 'Active Research',
    },
    {
        name: 'OpenBCI Hardware Lab',
        slug: 'openbci-hardware',
        description:
            'Custom electrode array design and signal acquisition hardware for affordable neuroscience research.',
        tags: ['θ', 'Hardware', 'Arduino', 'PCB'],
        status: 'Active Research',
    },
];

function ProjectCard({ project }: { project: Project }) {
    return (
        <RevealItem>
            <Link href={`/projects#${project.slug}`}>
                <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="group relative rounded-2xl p-8 h-full cursor-pointer transition-all duration-300 border hover:border-[var(--color-blue-primary)]/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.06)]"
                    style={{
                        backgroundColor: 'var(--color-surface)',
                        borderColor: 'var(--color-border)'
                    }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-blue-primary)' }} />
                        <span
                            className="text-[10px] tracking-[0.12em] uppercase font-semibold"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                        >
                            {project.status}
                        </span>
                    </div>

                    <h3
                        className="text-xl font-bold mb-3 tracking-tight group-hover:text-[var(--color-blue-primary)] transition-colors"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        {project.name}
                    </h3>

                    <p
                        className="text-sm leading-relaxed mb-8"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    color: 'var(--color-accent)',
                                    backgroundColor: 'rgba(129, 140, 248, 0.08)',
                                    border: '1px solid rgba(129, 140, 248, 0.12)'
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </Link>
        </RevealItem>
    );
}

export default function ProjectsPreview() {
    return (
        <section className="relative py-28 md:py-36" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
                    <RevealItem>
                        <div>
                            <span
                                className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase mb-5 font-semibold"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    color: 'var(--color-blue-primary)',
                                    backgroundColor: 'rgba(56, 189, 248, 0.08)',
                                    border: '1px solid rgba(56, 189, 248, 0.15)'
                                }}
                            >
                                Research
                            </span>
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
                                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                            >
                                Active Projects
                            </h2>
                        </div>
                    </RevealItem>
                    <RevealItem>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wide border transition-all duration-300 hover:bg-[var(--color-surface)]"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-text-primary)',
                                borderColor: 'var(--color-border)'
                            }}
                        >
                            View All Projects <ArrowRight size={14} />
                        </Link>
                    </RevealItem>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
