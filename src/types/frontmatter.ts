type BaseFM = {
  title: string;
  description: string;
  publishedAt: string;
  minutesRead: string;
  slug?: string;
};
export type ProjectsFM = BaseFM & {
  cover: string;
  techs: string[];
  github: string;
  liveSite: string;
  demo?: string;
  featured: boolean;
};

export type BlogFM = BaseFM & {};
