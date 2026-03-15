'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

import { SanityTeamMember } from '@/sanity/types';

export default function TeamGrid({ team = [] }: { team?: SanityTeamMember[] }) {
    return (
        <section className="py-28 md:py-32" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-4xl mx-auto px-6 lg:px-10">
                <RevealItem className="mb-12 text-center">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-[11px] tracking-[0.15em] uppercase mb-4 font-semibold"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-blue-primary)',
                            backgroundColor: 'rgba(56, 189, 248, 0.08)',
                            border: '1px solid rgba(56, 189, 248, 0.15)'
                        }}
                    >
                        Team
                    </span>
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-2"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                        Meet the Grid
                    </h2>
                    <p
                        className="text-sm max-w-sm mx-auto"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                        The minds behind the machines.
                    </p>
                </RevealItem>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {team.map((member) => (
                        <RevealItem key={member._id} className="h-full">
                            <motion.div
                                whileHover={{ y: -3 }}
                                className="group p-6 rounded-2xl relative overflow-hidden transition-all border hover:border-[var(--color-blue-primary)]/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.06)] h-full flex flex-col"
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            backgroundColor: 'var(--color-ink)',
                                            color: 'var(--color-blue-primary)',
                                            fontFamily: 'var(--font-heading)',
                                            border: '1px solid var(--color-border)'
                                        }}>
                                        {member.photoUrl ? (
                                            <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover rounded-full" />
                                        ) : (
                                            member.name.charAt(0)
                                        )}
                                    </div>
                                    <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: 'var(--color-text-secondary)' }}>
                                        {member.githubUrl && <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-blue-primary)] transition-all"><Github size={13} /></a>}
                                        {member.linkedinUrl && <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-blue-primary)] transition-all"><Linkedin size={13} /></a>}
                                    </div>
                                </div>

                                <h3
                                    className="text-base font-bold mb-0.5 group-hover:text-[var(--color-blue-primary)] transition-colors"
                                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                                >
                                    {member.name}
                                </h3>
                                <div
                                    className="text-[10px] tracking-[0.12em] uppercase mb-3 font-semibold"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-blue-primary)' }}
                                >
                                    {member.role}
                                </div>
                                <p
                                    className="text-[13px] leading-relaxed mb-3 flex-grow"
                                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                >
                                    {member.bio}
                                </p>
                                <span
                                    className="inline-block px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-semibold"
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        backgroundColor: 'var(--color-ink)',
                                        color: 'var(--color-text-secondary)',
                                        border: '1px solid var(--color-border)'
                                    }}
                                >
                                    {member.major}
                                </span>
                            </motion.div>
                        </RevealItem>
                    ))}
                </div>
            </SectionReveal>
        </section>
    );
}
