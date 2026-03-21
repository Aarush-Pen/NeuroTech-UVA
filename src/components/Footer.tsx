'use client';

import React from 'react';
import Link from 'next/link';
import EEGWaveform from './EEGWaveform';

const footerLinks = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Events', href: '/events' },
    { label: 'Resources', href: '/resources' },
    { label: 'GroupMe', href: 'https://groupme.com/join_group/113177848/ViLRyCBl', external: true },
];

function InstagramIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-label="Instagram">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    );
}

function GroupMeIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-label="GroupMe">
            <path d="M12 2C6.48 2 2 5.58 2 10c0 2.24 1.12 4.27 2.94 5.72-.16.94-.62 2.36-1.82 3.58a.5.5 0 00.36.85c2.09-.04 3.76-.74 4.88-1.4.54.1 1.07.17 1.64.21V19c0-3.87 3.58-7 8-7 .34 0 .67.02 1 .06C18.97 5.57 15.93 2 12 2zm-3 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="relative border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-ink-light)' }}>
            <EEGWaveform height={24} opacity={0.06} reverse />

            <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-2 mb-4">
                            <svg width="20" height="20" viewBox="0 0 36 36" fill="none" aria-label="NeuroTech monogram">
                                <circle cx="16" cy="18" r="3" fill="var(--color-blue-primary)" />
                                <circle cx="6" cy="18" r="2" fill="var(--color-blue-primary)" opacity="0.6" />
                                <circle cx="30" cy="10" r="1.5" fill="var(--color-blue-primary)" opacity="0.4" />
                                <circle cx="30" cy="26" r="1.5" fill="var(--color-blue-primary)" opacity="0.4" />
                                <line x1="6" y1="18" x2="16" y2="18" stroke="var(--color-blue-primary)" strokeWidth="0.8" opacity="0.4" />
                                <line x1="16" y1="18" x2="30" y2="10" stroke="var(--color-blue-primary)" strokeWidth="0.8" opacity="0.3" />
                                <line x1="16" y1="18" x2="30" y2="26" stroke="var(--color-blue-primary)" strokeWidth="0.8" opacity="0.3" />
                            </svg>
                            <span className="text-[12px] font-medium tracking-[0.12em] text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                NEUROTECH <span className="text-[var(--color-text-tertiary)]">@</span> UVA
                            </span>
                        </Link>
                        <p className="text-[13px] leading-relaxed max-w-xs text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            A research-forward student organization at the University of Virginia, exploring the intersection of neuroscience and engineering.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3">
                        <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase mb-5 text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Navigation
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {footerLinks.map((link) =>
                                link.external ? (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[13px] font-normal transition-colors duration-200 hover:text-[var(--color-blue-primary)] text-[var(--color-text-secondary)]"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-[13px] font-normal transition-colors duration-200 hover:text-[var(--color-text-primary)] text-[var(--color-text-secondary)]"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </nav>
                    </div>

                    {/* Connect */}
                    <div className="md:col-span-4">
                        <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase mb-5 text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            {[
                                { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/neurotechatuva?igsh=MTlrZWgwZ2hwNHk5MQ==' },
                                { Icon: GroupMeIcon, label: 'GroupMe', href: 'https://groupme.com/join_group/113177848/ViLRyCBl' },
                            ].map(({ Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-md border border-[var(--color-border)] flex items-center justify-center transition-all duration-200 hover:border-[var(--color-blue-primary)] hover:text-[var(--color-blue-primary)] text-[var(--color-text-secondary)]"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-14 pt-6 border-t border-[var(--color-border)]">
                    <p className="text-[11px] tracking-wide text-center text-[var(--color-text-tertiary)]" style={{ fontFamily: 'var(--font-body)' }}>
                        &copy; {new Date().getFullYear()} NeuroTech @ UVA. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
