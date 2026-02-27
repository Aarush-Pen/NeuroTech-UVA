'use client';

import React from 'react';
import EventsHero from '@/components/Events/EventsHero';
import EventsList from '@/components/Events/EventsList';
import Newsletter from '@/components/Newsletter';

export default function EventsPage() {
    return (
        <>
            <EventsHero />
            <EventsList />
            <Newsletter />
        </>
    );
}
