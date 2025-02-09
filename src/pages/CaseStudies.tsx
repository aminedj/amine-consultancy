import React, { useEffect, useState } from 'react';
import ContentList from '../components/content/ContentList';
import { getContentList } from '../utils/content';
import { Post, ContentMeta } from '../types/content';

export default function CaseStudies() {
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
        const { posts, meta } = await getContentList('case-study');
        setPosts(posts);
        setMeta(meta);
      } catch (err) {
        console.error('Error loading case studies:', err);
        setError('Failed to load case studies');
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
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-8">
          <h2 className="heading-2 mb-4">Case Studies</h2>
          <p className="subtitle-large">
            Real-world success stories from our enterprise clients
          </p>
        </div>
        <ContentList posts={posts} meta={meta} type="case-study" />
      </div>
    </div>
  );
}
