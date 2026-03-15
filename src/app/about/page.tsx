import React from 'react';
import MissionHero from '@/components/About/MissionHero';
import Timeline from '@/components/About/Timeline';
import TeamGrid from '@/components/About/TeamGrid';
import Values from '@/components/About/Values';
import Newsletter from '@/components/Newsletter';
import { sanityClient } from '@/sanity/client';
import { teamMembersQuery, timelinePhasesQuery } from '@/sanity/queries';
import { SanityTeamMember, SanityTimelinePhase } from '@/sanity/types';

export const revalidate = 0; // Disable static caching for live CMS updates during dev

export default async function AboutPage() {
    const team: SanityTeamMember[] = await sanityClient.fetch(teamMembersQuery);
    const phases: SanityTimelinePhase[] = await sanityClient.fetch(timelinePhasesQuery);

    return (
        <>
            <MissionHero />
            <Timeline phases={phases} />
            <TeamGrid team={team} />
            <Values />
            <Newsletter />
        </>
    );
}
