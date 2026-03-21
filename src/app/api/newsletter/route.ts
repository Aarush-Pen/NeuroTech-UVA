import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
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
