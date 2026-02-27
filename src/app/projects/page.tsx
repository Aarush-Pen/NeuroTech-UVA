'use client';

import React from 'react';
import ProjectsHero from '@/components/Projects/ProjectsHero';
import ProjectsGrid from '@/components/Projects/ProjectsGrid';
import ContributeCTA from '@/components/Projects/ContributeCTA';

export default function ProjectsPage() {
    return (
        <>
            <ProjectsHero />
            <ProjectsGrid />
            <ContributeCTA />
        </>
    );
}
