'use client';

import React from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';

export default function Newsletter() {
    return (
        <section className="py-24" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-xl mx-auto px-6">
                <RevealItem>
                    <div className="p-8 rounded-2xl border flex flex-col items-center text-center relative overflow-hidden transition-all hover:shadow-lg"
                        style={{
                            backgroundColor: 'var(--color-ink-light)',
                            borderColor: 'var(--color-border)'
                        }}>

                        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-blue-primary)]" />

                        <h3
                            className="text-2xl font-bold mb-3"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                        >
                            Stay Connected
                        </h3>
                        <p
                            className="text-sm mb-8 leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                        >
                            Join our mailing list for updates on workshops, research opportunities, and events.
                        </p>

                        <div className="w-full flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-lg px-4 py-3 text-sm transition-colors focus:outline-none focus:border-[var(--color-blue-primary)] border"
                                style={{
                                    backgroundColor: 'var(--color-ink)',
                                    borderColor: 'var(--color-border)',
                                    color: 'var(--color-text-primary)'
                                }}
                            />
                            <button
                                className="px-6 py-3 rounded-lg text-sm font-bold transition-all hover:opacity-90 hover:scale-105"
                                style={{
                                    backgroundColor: 'var(--color-blue-primary)',
                                    color: '#0F1B2D'
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </RevealItem>
            </SectionReveal>
        </section>
    );
}
