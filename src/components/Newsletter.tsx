'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
    return (
        <section className="py-28" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <SectionReveal className="max-w-2xl mx-auto px-6">
                <RevealItem>
                    <div className="rounded-2xl border p-10 md:p-12 flex flex-col items-center text-center relative overflow-hidden transition-all"
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            borderColor: 'var(--color-border)'
                        }}>

                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 w-full h-[2px]"
                            style={{ background: 'linear-gradient(90deg, transparent, var(--color-blue-primary), transparent)' }} />

                        <h3
                            className="text-2xl md:text-3xl font-bold mb-3"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                        >
                            Stay Connected
                        </h3>
                        <p
                            className="text-sm mb-8 leading-relaxed max-w-md"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                        >
                            Join our mailing list for updates on workshops, research opportunities, and events.
                        </p>

                        <div className="w-full flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-full px-5 py-3 text-sm transition-colors focus:outline-none focus:border-[var(--color-blue-primary)] border"
                                style={{
                                    backgroundColor: 'var(--color-ink)',
                                    borderColor: 'var(--color-border)',
                                    color: 'var(--color-text-primary)'
                                }}
                            />
                            <button
                                className="group flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_var(--color-blue-glow)]"
                                style={{
                                    backgroundColor: 'var(--color-blue-primary)',
                                    color: '#08090F'
                                }}
                            >
                                Subscribe
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>
                </RevealItem>
            </SectionReveal>
        </section>
    );
}
