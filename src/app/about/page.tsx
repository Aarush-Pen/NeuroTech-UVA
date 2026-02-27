'use client';

import React from 'react';
import MissionHero from '@/components/About/MissionHero';
import Timeline from '@/components/About/Timeline';
import TeamGrid from '@/components/About/TeamGrid';
import Values from '@/components/About/Values';
import Newsletter from '@/components/Newsletter';

export default function AboutPage() {
    return (
        <>
            <MissionHero />
            <Timeline />
            <TeamGrid />
            <Values />
            <Newsletter />
        </>
    );
}
