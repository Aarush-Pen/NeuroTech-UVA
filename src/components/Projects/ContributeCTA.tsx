'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';
import { ArrowRight } from 'lucide-react';

export default function ContributeCTA() {
    return (
        <section className="py-24 md:py-32 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <SectionReveal className="max-w-3xl mx-auto px-6 text-center">
                <RevealItem>
                    <h2 className="text-3xl md:text-4xl mb-5 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Have a wild idea?
                    </h2>
                </RevealItem>
                <RevealItem>
                    <p className="text-base md:text-lg mb-10 max-w-xl mx-auto text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        Whether you want to lead a new research track or contribute to an existing one, we&rsquo;re always looking for fresh perspectives.
                    </p>
                </RevealItem>
                <RevealItem>
                    <div className="flex justify-center">
                        <a
                            href="https://groupme.com/join_group/113177848/ViLRyCBl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 px-7 py-3 text-[13px] font-medium transition-all duration-300 hover:shadow-[0_0_24px_var(--color-blue-glow)] bg-[var(--color-blue-primary)] text-white rounded-md"
                        >
                            Pitch a Project
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </RevealItem>
            </SectionReveal>
        </section>
    );
}
