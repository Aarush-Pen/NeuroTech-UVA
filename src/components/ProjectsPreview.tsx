'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionReveal, { RevealItem } from './SectionReveal';

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
                    className="group relative rounded-xl p-8 h-full cursor-pointer transition-all duration-300 border hover:shadow-lg"
                    style={{
                        backgroundColor: 'var(--color-surface)',
                        borderColor: 'transparent' // 'var(--color-border)', but let's make it cleaner
                    }}
                >
                    <div className="absolute inset-0 rounded-xl border border-[var(--color-border)] group-hover:border-[var(--color-blue-primary)] transition-colors opacity-50" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-blue-primary)' }} />
                            <span
                                className="text-[11px] tracking-widest uppercase font-bold"
                                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                            >
                                {project.status}
                            </span>
                        </div>

                        <h3
                            className="text-2xl font-bold mb-3 tracking-tight group-hover:text-[var(--color-blue-primary)] transition-colors"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                        >
                            {project.name}
                        </h3>

                        <p
                            className="text-base leading-relaxed mb-8"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                        >
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-[11px] font-bold tracking-wide uppercase rounded-md bg-[var(--color-ink)]"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Link>
        </RevealItem>
    );
}

export default function ProjectsPreview() {
    return (
        <section className="relative py-24 md:py-32" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-6xl mx-auto px-6 lg:px-12">
                <RevealItem>
                    <span
                        className="text-xs tracking-[0.2em] uppercase mb-4 block font-bold"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                    >
                        Research
                    </span>
                </RevealItem>

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <RevealItem>
                        <h2
                            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                        >
                            Active Projects
                        </h2>
                    </RevealItem>
                    <RevealItem>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase hover:gap-3 transition-all duration-200"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue-primary)' }}
                        >
                            View All Projects <span>→</span>
                        </Link>
                    </RevealItem>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
