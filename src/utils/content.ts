import { Post, ContentMeta } from '../types/content';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for browser environment
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

export async function getContentList(type: 'blog' | 'case-study'): Promise<{ posts: Post[], meta: ContentMeta }> {
  const contentFiles = import.meta.glob('../content/**/*.md', { 
    eager: true,
    as: 'raw'
  });
  
  const posts: Post[] = [];
  const categories = new Set<string>();
  const tags = new Set<string>();

  for (const path in contentFiles) {
    // Check if the file is in the correct directory
    // if (!path.includes(`/${type}s/`)) continue;
    
    const content = contentFiles[path] as string;
    const { data: frontmatter, content: markdownContent } = matter(content);
    
    // Extract slug from filename
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    if (frontmatter.category) {
      categories.add(frontmatter.category);
    }
    
    if (frontmatter.tags) {
      frontmatter.tags.forEach((tag: string) => tags.add(tag));
    }

    posts.push({
      id: slug,
      title: frontmatter.title || '',
      description: frontmatter.description || '',
      date: frontmatter.date || '',
      author: frontmatter.author || '',
      category: frontmatter.category || '',
      tags: frontmatter.tags || [],
      content: markdownContent,
      slug,
      image: frontmatter.image || ''
    });
  }

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const meta: ContentMeta = {
    total: posts.length,
    currentPage: 1,
    totalPages: 1,
    categories: Array.from(categories),
    tags: Array.from(tags)
  };

  return { posts, meta };
}
