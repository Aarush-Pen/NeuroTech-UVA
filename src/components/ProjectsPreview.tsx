'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionReveal, { RevealItem } from './SectionReveal';
import { ArrowRight } from 'lucide-react';
import { SanityProject } from '@/sanity/types';

function ProjectCard({ project, index }: { project: SanityProject; index: number }) {
    return (
        <RevealItem>
            <Link href={`/projects#${project.slug}`}>
                <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="group relative p-7 h-full cursor-pointer transition-all duration-300 border border-[var(--color-border)] hover:border-[var(--color-blue-primary)]/30 bg-[var(--color-surface)] rounded-lg"
                >
                    {/* Number */}
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-[11px] tracking-[0.15em] font-mono text-[var(--color-text-tertiary)]">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${project.status.includes('Active') || project.status.includes('Development') ? 'animate-pulse' : ''}`}
                                style={{ backgroundColor: 'var(--color-blue-primary)' }} />
                            <span className="text-[10px] tracking-[0.1em] uppercase font-medium text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                {project.status}
                            </span>
                        </div>
                    </div>

                    <h3 className="text-xl mb-3 tracking-tight group-hover:text-[var(--color-blue-primary)] transition-colors text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                        {project.name}
                    </h3>

                    <p className="text-sm leading-relaxed mb-6 text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase rounded-md border border-[var(--color-border)] text-[var(--color-text-tertiary)] bg-[var(--color-ink)]"
                                style={{ fontFamily: 'var(--font-body)' }}
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

export default function ProjectsPreview({ projects = [] }: { projects?: SanityProject[] }) {
    const topProjects = projects.slice(0, 3);

    return (
        <section className="relative py-28 md:py-36" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-14">
                    <RevealItem className="md:col-span-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Research
                        </span>
                        <div className="w-8 h-px bg-[var(--color-blue-primary)] mt-4 opacity-40" />
                    </RevealItem>
                    <div className="md:col-span-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <RevealItem>
                            <h2 className="text-3xl md:text-4xl tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                Active projects
                            </h2>
                        </RevealItem>
                        <RevealItem>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-blue-primary)] hover:text-[var(--color-blue-hover)] transition-colors group"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                View all
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </RevealItem>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {topProjects.map((project, i) => (
                        <ProjectCard key={project._id} project={project} index={i} />
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
