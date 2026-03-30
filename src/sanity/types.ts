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

export interface SanityImageCrop {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface SanityImageHotspot {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface SanityImageField {
  asset: { _id: string; url: string };
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
}

export interface SanityTeamMember {
  _id: string;
  name: string;
  role: string;
  major: string;
  bio: string;
  photo?: SanityImageField;
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
  foundedYear: number;
}

// Stats shown on the homepage — activeMembers and foundedYear come from
// siteSettings; rdProjects and eventsHosted are computed live from Sanity.
export interface SanityStats {
  activeMembers: number;
  foundedYear: number;
  rdProjects: number;
  eventsHosted: number;
}

export interface SanityTimelinePhase {
  _id: string;
  phase: string;
  title: string;
  year: string;
  description: string;
  status: 'active' | 'completed' | 'future';
}
