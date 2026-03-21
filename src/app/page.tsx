import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutPreview from '@/components/AboutPreview';
import ResearchPillars from '@/components/ResearchPillars';
import ProjectsPreview from '@/components/ProjectsPreview';
import UpcomingEvents from '@/components/UpcomingEvents';
import Newsletter from '@/components/Newsletter';
import { sanityClient } from '@/sanity/client';
import { statsQuery, eventsQuery, projectsQuery } from '@/sanity/queries';
import { SanityStats, SanityEvent, SanityProject } from '@/sanity/types';

export const revalidate = 0;

export default async function Home() {
  const stats: SanityStats = await sanityClient.fetch(statsQuery);
  const allEvents: SanityEvent[] = await sanityClient.fetch(eventsQuery);
  const allProjects: SanityProject[] = await sanityClient.fetch(projectsQuery);

  return (
    <>
      <Hero />
      <StatsBar stats={stats} />
      <AboutPreview />
      <ResearchPillars />
      <ProjectsPreview projects={allProjects} />
      <UpcomingEvents events={allEvents} />
      <Newsletter />
    </>
  );
}
