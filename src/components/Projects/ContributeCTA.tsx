'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { ArrowRight } from 'lucide-react';

export default function ContributeCTA() {
    return (
        <section className="py-28 border-t" style={{ backgroundColor: 'var(--color-ink-light)', borderColor: 'var(--color-border)' }}>
            <SectionReveal className="max-w-3xl mx-auto px-6 text-center">
                <RevealItem>
                    <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                        Have a wild idea?
                    </h2>
                </RevealItem>
                <RevealItem>
                    <p className="text-base md:text-lg mb-10 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}>
                        Whether you want to lead a new research track or contribute to an existing one, we&rsquo;re always looking for fresh perspectives.
                    </p>
                </RevealItem>
                <RevealItem>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#" className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_var(--color-blue-glow)]"
                            style={{
                                backgroundColor: 'var(--color-blue-primary)',
                                color: '#08090F'
                            }}>
                            Pitch a Project <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <a href="https://groupme.com/join_group/113177848/ViLRyCBl" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-semibold border transition-all duration-300 hover:bg-[var(--color-surface)] hover:border-[var(--color-blue-primary)]/30"
                            style={{
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-text-primary)'
                            }}>
                            Join GroupMe
                        </a>
                    </div>
                </RevealItem>
            </SectionReveal>
        </section>
    );
}
