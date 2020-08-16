export type JobOffer = {
  id: number;
  company: string;
  logo: string;

  new: boolean;
  featured: boolean;

  position: string;
  role: string;
  level: string;

  postedAt: string;
  contract: string;
  location: string;

  languages: string[];
  tools: string[];
};

export type Flags = {
  isNew: boolean;
  isFeatured: boolean;
};
