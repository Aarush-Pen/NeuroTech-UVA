import React from 'react';
import ProjectsHero from '@/components/Projects/ProjectsHero';
import ProjectsGrid from '@/components/Projects/ProjectsGrid';
import ContributeCTA from '@/components/Projects/ContributeCTA';
import { sanityClient } from '@/sanity/client';
import { projectsQuery } from '@/sanity/queries';
import { SanityProject } from '@/sanity/types';

export const revalidate = 0; // Disable static caching for live CMS updates during dev

export default async function ProjectsPage() {
    const projects: SanityProject[] = await sanityClient.fetch(projectsQuery);

    return (
        <>
            <ProjectsHero />
            <ProjectsGrid projects={projects} />
            <ContributeCTA />
        </>
    );
}
