import React from 'react';
import ResourcesHero from '@/components/Resources/ResourcesHero';
import ResourceGrid from '@/components/Resources/ResourceGrid';
import Newsletter from '@/components/Newsletter';
import { sanityClient } from '@/sanity/client';
import { resourcesQuery } from '@/sanity/queries';
import { SanityResource } from '@/sanity/types';

export const revalidate = 0; // Disable static caching for live CMS updates during dev

export default async function ResourcesPage() {
    const resources: SanityResource[] = await sanityClient.fetch(resourcesQuery);

    return (
        <>
            <ResourcesHero />
            <ResourceGrid resources={resources} />
            <Newsletter />
        </>
    );
}
