'use client';

import React from 'react';
import SectionReveal, { RevealItem } from '@/components/SectionReveal';

export default function ContributeCTA() {
    return (
        <section className="py-24 bg-[#0D1421] border-t border-[#1E2D45]">
            <SectionReveal className="max-w-4xl mx-auto px-6 text-center">
                <RevealItem>
                    <h2 className="text-[#E8EDF5] text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-cabinet)' }}>
                        Have a wild idea?
                    </h2>
                </RevealItem>
                <RevealItem>
                    <p className="text-[#6B7A99] text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lora)' }}>
                        Whether you want to lead a new research track or contribute to an existing one, we're always looking for fresh perspectives.
                    </p>
                </RevealItem>
                <RevealItem>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#" className="px-8 py-3.5 rounded-full bg-[#00E5C8] text-[#080C14] text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#00E5C8]/90 transition-all hover:shadow-[0_0_20px_rgba(0,229,200,0.3)]">
                            Pitch a Project
                        </a>
                        <a href="#" className="px-8 py-3.5 rounded-full border border-[#1E2D45] text-[#E8EDF5] text-sm font-semibold tracking-[0.15em] uppercase hover:border-[#00E5C8]/50 hover:text-[#00E5C8] transition-all">
                            Join Discord
                        </a>
                    </div>
                </RevealItem>
            </SectionReveal>
        </section>
    );
}
