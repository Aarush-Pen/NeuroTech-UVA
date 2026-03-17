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
                                <div className="relative w-full aspect-square mb-5 rounded-xl overflow-hidden shadow-sm group-hover:shadow-[0_4px_20px_rgba(56,189,248,0.15)] transition-all duration-500"
                                    style={{
                                        backgroundColor: 'var(--color-ink)',
                                        border: '1px solid var(--color-border)'
                                    }}>
                                    {member.photoUrl ? (
                                        <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center font-bold text-5xl"
                                            style={{
                                                color: 'var(--color-blue-primary)',
                                                fontFamily: 'var(--font-heading)'
                                            }}>
                                            {member.name.charAt(0)}
                                        </div>
                                    )}

                                    {/* Bottom-left contrast gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5 pb-3 transition-opacity duration-300">
                                        <h3
                                            className="text-lg sm:text-xl font-bold text-white mb-0.5"
                                            style={{ fontFamily: 'var(--font-heading)' }}
                                        >
                                            {member.name}
                                        </h3>
                                        <div
                                            className="text-[11px] tracking-[0.15em] uppercase font-semibold text-blue-400 opacity-90"
                                            style={{ fontFamily: 'var(--font-body)' }}
                                        >
                                            {member.role}
                                        </div>
                                    </div>

                                    {/* Top-right Social Links Overlay */}
                                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-5px] group-hover:translate-y-0">
                                        {member.githubUrl && (
                                            <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-white hover:bg-[var(--color-blue-primary)] transition-all shadow-md">
                                                <Github size={15} />
                                            </a>
                                        )}
                                        {member.linkedinUrl && (
                                            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-white hover:bg-[var(--color-blue-primary)] transition-all shadow-md">
                                                <Linkedin size={15} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <div className="mb-3">
                                        <span
                                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] tracking-widest uppercase font-semibold"
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                backgroundColor: 'var(--color-ink)',
                                                color: 'var(--color-text-secondary)',
                                                border: '1px solid var(--color-border)'
                                            }}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue-primary)]/70"></span>
                                            {member.major}
                                        </span>
                                    </div>

                                    <p
                                        className="text-[14px] leading-relaxed mt-1"
                                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                                    >
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
