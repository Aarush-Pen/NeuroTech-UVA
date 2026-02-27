'use client';

import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutPreview from '@/components/AboutPreview';
import ProjectsPreview from '@/components/ProjectsPreview';
import UpcomingEvents from '@/components/UpcomingEvents';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ProjectsPreview />
      <UpcomingEvents />
      <Newsletter />
    </>
  );
}
