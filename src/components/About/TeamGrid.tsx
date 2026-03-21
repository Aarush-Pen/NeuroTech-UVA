'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { SanityTeamMember } from '@/sanity/types';

export default function TeamGrid({ team = [] }: { team?: SanityTeamMember[] }) {
    return (
        <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-14">
                    <RevealItem className="md:col-span-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Team
                        </span>
                        <div className="w-8 h-px bg-[var(--color-blue-primary)] mt-4 opacity-40" />
                    </RevealItem>
                    <div className="md:col-span-8">
                        <RevealItem>
                            <h2 className="text-3xl md:text-4xl tracking-tight mb-2 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                Meet the team
                            </h2>
                        </RevealItem>
                        <RevealItem>
                            <p className="text-sm text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                The minds behind the machines.
                            </p>
                        </RevealItem>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {team.map((member) => (
                        <RevealItem key={member._id} className="h-full">
                            <motion.div
                                whileHover={{ y: -3 }}
                                className="group p-5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-blue-primary)]/20 bg-[var(--color-surface)] h-full flex flex-col transition-all duration-300"
                            >
                                {/* Photo */}
                                <div className="relative w-full aspect-[4/5] mb-4 rounded-md overflow-hidden bg-[var(--color-ink)] border border-[var(--color-border)]">
                                    {member.photoUrl ? (
                                        <img
                                            src={member.photoUrl}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-4xl text-[var(--color-blue-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                                            {member.name.charAt(0)}
                                        </div>
                                    )}

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                                        <h3 className="text-base font-medium text-white mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                                            {member.name}
                                        </h3>
                                        <span className="text-[11px] tracking-wide text-blue-300 opacity-90" style={{ fontFamily: 'var(--font-body)' }}>
                                            {member.role}
                                        </span>
                                    </div>

                                    {/* Social links overlay */}
                                    <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                                        {member.githubUrl && (
                                            <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-[var(--color-blue-primary)] transition-all">
                                                <Github size={14} />
                                            </a>
                                        )}
                                        {member.linkedinUrl && (
                                            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-[var(--color-blue-primary)] transition-all">
                                                <Linkedin size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex flex-col flex-grow">
                                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] tracking-wider uppercase font-medium bg-[var(--color-ink)] text-[var(--color-text-tertiary)] border border-[var(--color-border)] w-fit mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                                        {member.major}
                                    </span>
                                    <p className="text-[13px] leading-relaxed text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        </RevealItem>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
