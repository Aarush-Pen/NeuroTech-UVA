import { NextRequest, NextResponse } from 'next/server';

// Module-level rate limiter — persists across warm serverless instances.
// Keyed by IP. Each entry tracks attempt count and the time the window resets.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getIp(req: NextRequest): string {
    return (
        req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
        req.headers.get('x-real-ip') ||
        'unknown'
    );
}

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
        return false;
    }

    if (entry.count >= MAX_REQUESTS) return true;

    entry.count += 1;
    return false;
}

export async function POST(req: NextRequest) {
    try {
        const ip = getIp(req);
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please wait a few minutes and try again.' },
                { status: 429 }
            );
        }

        const { email } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;

        if (!MAILERLITE_API_KEY) {
            // If no API key configured, succeed silently (dev mode)
            console.warn('MAILERLITE_API_KEY not set — skipping subscription');
            return NextResponse.json({ success: true });
        }

        const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
            },
            body: JSON.stringify({
                email,
            }),
        });

        if (!response.ok) {
            const data = await response.json();
            console.error('MailerLite error:', data);
            return NextResponse.json(
                { error: 'Failed to subscribe. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: 'An unexpected error occurred.' },
            { status: 500 }
        );
    }
}
