import React, { useEffect, useState } from 'react';
import ContentList from '../components/content/ContentList';
import { getContentList } from '../utils/content';
import { Post, ContentMeta } from '../types/content';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [meta, setMeta] = useState<ContentMeta>({
    total: 0,
    currentPage: 1,
    totalPages: 1,
    categories: [],
    tags: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const { posts, meta } = await getContentList('blog');
        setPosts(posts);
        setMeta(meta);
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Insights and updates from our team of experts
          </p>
        </div>
      </div>
      <ContentList posts={posts} meta={meta} type="blog" />
    </div>
  );
}
