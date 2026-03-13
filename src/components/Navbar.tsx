'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Events', href: '/events' },
    { label: 'Resources', href: '/resources' },
];

function NTMonogram() {
    return (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-label="NeuroTech monogram">
            <circle cx="6" cy="18" r="2.5" fill="var(--color-blue-primary)" opacity="0.8" />
            <circle cx="16" cy="6" r="2" fill="var(--color-blue-primary)" opacity="0.6" />
            <circle cx="16" cy="30" r="2" fill="var(--color-blue-primary)" opacity="0.6" />
            <circle cx="16" cy="18" r="3" fill="var(--color-blue-primary)" />
            <circle cx="30" cy="10" r="2" fill="var(--color-blue-primary)" opacity="0.6" />
            <circle cx="30" cy="26" r="2" fill="var(--color-blue-primary)" opacity="0.6" />
            <line x1="6" y1="18" x2="16" y2="6" stroke="var(--color-blue-primary)" strokeWidth="1" opacity="0.4" />
            <line x1="6" y1="18" x2="16" y2="30" stroke="var(--color-blue-primary)" strokeWidth="1" opacity="0.4" />
            <line x1="6" y1="18" x2="16" y2="18" stroke="var(--color-blue-primary)" strokeWidth="1.2" opacity="0.6" />
            <line x1="16" y1="6" x2="30" y2="10" stroke="var(--color-blue-primary)" strokeWidth="1" opacity="0.4" />
            <line x1="16" y1="18" x2="30" y2="10" stroke="var(--color-blue-primary)" strokeWidth="1" opacity="0.4" />
            <line x1="16" y1="18" x2="30" y2="26" stroke="var(--color-blue-primary)" strokeWidth="1" opacity="0.4" />
            <line x1="16" y1="30" x2="30" y2="26" stroke="var(--color-blue-primary)" strokeWidth="1" opacity="0.4" />
        </svg>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'backdrop-blur-xl border-b'
                    : 'bg-transparent border-transparent'
                    }`}
                style={{
                    backgroundColor: scrolled ? 'rgba(8, 9, 15, 0.85)' : 'transparent',
                    borderColor: scrolled ? 'var(--color-border)' : 'transparent'
                }}
            >
                <div className="max-w-6xl mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between h-16 lg:h-[72px]">
                        <Link href="/" className="flex items-center gap-3 group">
                            <NTMonogram />
                            <span
                                className="text-sm tracking-[0.08em] font-semibold hidden sm:block"
                                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                            >
                                NEUROTECH <span className="opacity-40">@</span> UVA
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-[13px] font-medium transition-colors duration-200 relative py-1"
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                                        }}
                                    >
                                        <span className="hover:text-[var(--color-text-primary)] transition-colors">{link.label}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="desktop-nav-active"
                                                className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                                                style={{ backgroundColor: 'var(--color-blue-primary)' }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                            <a
                                href="https://groupme.com/join_group/113177848/ViLRyCBl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_24px_var(--color-blue-glow)] hover:scale-[1.02]"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    backgroundColor: 'var(--color-blue-primary)',
                                    color: '#08090F'
                                }}
                            >
                                Join GroupMe
                            </a>
                        </div>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-lg transition-colors hover:bg-[var(--color-surface)]"
                            style={{ color: 'var(--color-text-primary)' }}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 backdrop-blur-2xl flex flex-col items-center justify-center"
                        style={{ backgroundColor: 'rgba(8, 9, 15, 0.97)' }}
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.4 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-2xl font-semibold tracking-tight hover:text-[var(--color-blue-primary)] transition-colors"
                                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                            >
                                <a
                                    href="https://groupme.com/join_group/113177848/ViLRyCBl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 px-8 py-3.5 rounded-full text-base font-semibold tracking-wide inline-block"
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        backgroundColor: 'var(--color-blue-primary)',
                                        color: '#08090F'
                                    }}
                                >
                                    Join GroupMe
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
