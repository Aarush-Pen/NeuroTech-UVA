'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { SanityProject } from '@/sanity/types';

export default function ProjectsGrid({ projects = [] }: { projects?: SanityProject[] }) {
    return (
        <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, i) => (
                        <RevealItem key={project._id}>
                            <motion.div
                                whileHover={{ y: -3 }}
                                className="group relative rounded-lg p-7 h-full flex flex-col transition-all duration-300 border border-[var(--color-border)] hover:border-[var(--color-blue-primary)]/20 bg-[var(--color-surface)]"
                            >
                                <div className="flex justify-between items-start mb-5">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <span className={`w-1.5 h-1.5 rounded-full ${project.status.includes('Active') || project.status.includes('Development') ? 'animate-pulse' : ''}`}
                                                style={{ backgroundColor: project.status.includes('Completed') ? 'var(--color-secondary)' : 'var(--color-blue-primary)' }}
                                            />
                                            <span className="text-[10px] tracking-[0.1em] uppercase font-medium text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.repoUrl && (
                                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-blue-primary)] transition-all text-[var(--color-text-tertiary)]">
                                                <Github size={14} />
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-blue-primary)] transition-all text-[var(--color-text-tertiary)]">
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-lg mb-3 tracking-tight group-hover:text-[var(--color-blue-primary)] transition-colors text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                    {project.name}
                                </h3>

                                <p className="text-sm leading-relaxed mb-6 flex-grow text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium rounded-md border border-[var(--color-border)] bg-[var(--color-ink)] text-[var(--color-text-tertiary)]"
                                            style={{ fontFamily: 'var(--font-body)' }}
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
