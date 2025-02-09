import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentViewer from '../components/content/ContentViewer';
import { getContentList } from '../utils/content';
import { Post } from '../types/content';
import { useScrollTop } from '../hooks/useScrollTop';

export default function CaseStudyPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useScrollTop();

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const { posts } = await getContentList('case-study');
        const foundPost = posts.find(p => p.slug === slug);
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Case study not found');
        }
      } catch (err) {
        console.error('Error loading case study:', err);
        setError('Failed to load case study');
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">{error || 'Case study not found'}</div>
      </div>
    );
  }

  return <ContentViewer post={post} />;
}
