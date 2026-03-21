'use client';

import React, { useState, useEffect } from 'react';
import SectionReveal, { RevealItem } from './SectionReveal';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

const LS_KEY = 'nt_newsletter_subscribed_at';
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'already_subscribed'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // On mount, check if this browser already subscribed within the cooldown window.
    useEffect(() => {
        try {
            const ts = localStorage.getItem(LS_KEY);
            if (ts && Date.now() - Number(ts) < COOLDOWN_MS) {
                setStatus('already_subscribed');
            }
        } catch {
            // localStorage unavailable (SSR / private browsing) — allow submission
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            try {
                localStorage.setItem(LS_KEY, String(Date.now()));
            } catch { /* ignore */ }

            setStatus('success');
            setEmail('');
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
        }
    };

    const isBlocked = status === 'loading' || status === 'success' || status === 'already_subscribed';

    return (
        <section className="py-24 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-ink)' }}>
            <SectionReveal className="max-w-xl mx-auto px-6">
                <RevealItem>
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl mb-3 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                            Stay in the loop
                        </h3>
                        <p className="text-sm mb-8 leading-relaxed text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                            Join our mailing list for updates on workshops, research opportunities, and events.
                        </p>

                        {status === 'already_subscribed' ? (
                            <div className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-secondary)]" style={{ fontFamily: 'var(--font-body)' }}>
                                <Check size={14} className="text-[var(--color-blue-primary)]" />
                                You&rsquo;re already subscribed.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-1 rounded-md px-4 py-3 text-sm transition-colors focus:outline-none focus:border-[var(--color-blue-primary)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                    disabled={isBlocked}
                                />
                                <button
                                    type="submit"
                                    disabled={isBlocked}
                                    className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all hover:shadow-[0_0_20px_var(--color-blue-glow)] bg-[var(--color-blue-primary)] text-white disabled:opacity-60"
                                >
                                    {status === 'loading' && <Loader2 size={14} className="animate-spin" />}
                                    {status === 'success' && <Check size={14} />}
                                    {status === 'success' ? 'Subscribed' : 'Subscribe'}
                                    {status === 'idle' && <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />}
                                </button>
                            </form>
                        )}

                        {status === 'error' && (
                            <p className="mt-3 text-xs text-red-400" style={{ fontFamily: 'var(--font-body)' }}>
                                {errorMessage}
                            </p>
                        )}
                    </div>
                </RevealItem>
            </SectionReveal>
        </section>
    );
}
