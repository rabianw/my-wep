export interface Profile {
  name: string;
  title: string;
  position: string;
  institution: string;
  bio: string[];
  avatarUrl: string;
  socials: {
    scopus?: string;
    googleScholar?: string;
    mathGenealogy?: string;
    email?: string;
  };
  impactStats: {
    publications: number;
    yearsExperience: number;
    awards: number;
  };
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  topics: string[];
  iconName?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  date: string;
  doi?: string;
  link?: string;
  featured?: boolean;
}

export interface News {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  featuredImage: string;
  content: string;
  gallery?: string[];
  featured?: boolean;
}

export interface Seminar {
  id: string;
  title: string;
  location: string;
  date: string;
  host?: string;
}

export interface Conference {
  id: string;
  title: string;
  description: string;
  link?: string;
  date: string;
  location: string;
  featured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  level: string; // e.g., "Highest academic honor", "National", "University"
}

export interface GalleryAlbum {
  id: string;
  title: string;
  coverImage: string;
  images: string[];
  date?: string;
}

export interface Collaborator {
  id: string;
  name: string;
  institution: string;
  role: string;
  avatarUrl?: string;
}

export interface ContactInfo {
  address: string[];
  email: string;
  phone: string;
  journals: { name: string; url: string }[];
}
