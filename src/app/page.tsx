import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutPreview from '@/components/AboutPreview';
import ProjectsPreview from '@/components/ProjectsPreview';
import UpcomingEvents from '@/components/UpcomingEvents';
import Newsletter from '@/components/Newsletter';
import { sanityClient } from '@/sanity/client';
import { siteSettingsQuery, eventsQuery, projectsQuery } from '@/sanity/queries';
import { SanitySiteSettings, SanityEvent, SanityProject } from '@/sanity/types';

export const revalidate = 0; // Disable static caching for live CMS updates during dev

export default async function Home() {
  const settings: SanitySiteSettings = await sanityClient.fetch(siteSettingsQuery);
  const allEvents: SanityEvent[] = await sanityClient.fetch(eventsQuery);
  const allProjects: SanityProject[] = await sanityClient.fetch(projectsQuery);

  return (
    <>
      <Hero />
      <StatsBar settings={settings} />
      <AboutPreview />
      <ProjectsPreview projects={allProjects} />
      <UpcomingEvents events={allEvents} />
      <Newsletter />
    </>
  );
}
