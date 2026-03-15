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

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  major,
  bio,
  "photoUrl": photo.asset->url,
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

export const timelinePhasesQuery = `*[_type == "timelinePhase"] | order(phase asc) {
  _id,
  phase,
  title,
  year,
  description,
  status
}`;
