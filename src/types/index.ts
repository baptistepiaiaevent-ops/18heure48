export type ReleaseType = "single" | "ep" | "album";

export interface SocialLinks {
  spotify?: string;
  appleMusic?: string;
  bandcamp?: string;
  soundcloud?: string;
  youtube?: string;
  deezer?: string;
  instagram?: string;
  tiktok?: string;
  website?: string;
}

export interface Artist {
  id: string;
  name: string;
  photo: string;
  bio: string;
  links: SocialLinks;
}

export interface Release {
  id: string;
  title: string;
  artistIds: string[];
  cover: string;
  date: string; // ISO 8601 : "2024-03-15"
  type: ReleaseType;
  description: string;
  links: SocialLinks;
}
