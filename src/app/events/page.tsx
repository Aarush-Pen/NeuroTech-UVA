import React from 'react';
import EventsHero from '@/components/Events/EventsHero';
import EventsList from '@/components/Events/EventsList';
import Newsletter from '@/components/Newsletter';
import { sanityClient } from '@/sanity/client';
import { eventsQuery, generalMeetingQuery } from '@/sanity/queries';
import { SanityEvent, SanityGeneralMeeting } from '@/sanity/types';

export const revalidate = 0; // Disable static caching for live CMS updates during dev

export default async function EventsPage() {
    const events: SanityEvent[] = await sanityClient.fetch(eventsQuery);
    const generalMeeting: SanityGeneralMeeting = await sanityClient.fetch(generalMeetingQuery);

    return (
        <>
            <EventsHero />
            <EventsList initialEvents={events} generalMeeting={generalMeeting} />
            <Newsletter />
        </>
    );
}
