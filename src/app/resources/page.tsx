'use client';

import React from 'react';
import ResourcesHero from '@/components/Resources/ResourcesHero';
import ResourceGrid from '@/components/Resources/ResourceGrid';
import Newsletter from '@/components/Newsletter';

export default function ResourcesPage() {
    return (
        <>
            <ResourcesHero />
            <ResourceGrid />
            <Newsletter />
        </>
    );
}
