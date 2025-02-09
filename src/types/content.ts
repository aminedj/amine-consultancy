export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  content: string;
  slug: string;
  image?: string;
}

export interface ContentMeta {
  total: number;
  currentPage: number;
  totalPages: number;
  categories: string[];
  tags: string[];
}
