export const eventsQuery = `*[_type == "event"] | order(date asc) {
  _id,
  title,
  date,
  time,
  location,
  description,
  type,
  isArchived
}`;

export const generalMeetingQuery = `*[_type == "generalMeeting"][0]`;

export const projectsQuery = `*[_type == "project"] | order(name asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  tags,
  status,
  repoUrl,
  demoUrl
}`;

export const teamMembersQuery = `*[_type == "teamMember"] | order(orderRank asc) {
  _id,
  name,
  role,
  major,
  bio,
  photo {
    asset->{_id, url},
    crop,
    hotspot
  },
  githubUrl,
  linkedinUrl
}`;

export const resourcesQuery = `*[_type == "resource"] | order(title asc) {
  _id,
  title,
  category,
  description,
  type,
  "fileUrl": file.asset->url,
  externalLink
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;

// Combines manual siteSettings fields with counts computed live from Sanity data.
// rdProjects = total project documents
// eventsHosted = events that are not "Gen Bod" or "Social" (workshops, speakers, etc.)
export const statsQuery = `{
  "activeMembers": *[_type == "siteSettings"][0].activeMembers,
  "foundedYear": *[_type == "siteSettings"][0].foundedYear,
  "rdProjects": count(*[_type == "project"]),
  "eventsHosted": count(*[_type == "event" && type != "Gen Bod" && type != "Social"])
}`;

export const timelinePhasesQuery = `*[_type == "timelinePhase"] | order(phase asc) {
  _id,
  phase,
  title,
  year,
  description,
  status
}`;
