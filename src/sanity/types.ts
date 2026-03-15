export interface SanityEvent {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
  isArchived: boolean;
}

export interface SanityGeneralMeeting {
  _id?: string;
  dayTime: string;
  location: string;
  description: string;
}

export interface SanityProject {
  _id: string;
  name: string;
  slug: string;
  description: string;
  tags: string[];
  status: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface SanityTeamMember {
  _id: string;
  name: string;
  role: string;
  major: string;
  bio: string;
  photoUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface SanityResource {
  _id: string;
  title: string;
  category: string;
  description: string;
  type: string;
  fileUrl?: string;
  externalLink?: string;
}

export interface SanitySiteSettings {
  _id?: string;
  activeMembers: number;
  rdProjects: number;
  eventsHosted: number;
  foundedYear: number;
}

export interface SanityTimelinePhase {
  _id: string;
  phase: string;
  title: string;
  year: string;
  description: string;
  status: 'active' | 'completed' | 'future';
}
