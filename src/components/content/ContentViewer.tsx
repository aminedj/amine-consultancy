import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { Post } from '../../types/content';
import { Tag, Calendar, User } from 'lucide-react';

interface ContentViewerProps {
  post: Post;
}

export default function ContentViewer({ post }: ContentViewerProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {post.image && (
        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          className="prose prose-gray prose-lg max-w-none"
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2 mb-4">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside space-y-2 mb-4">{children}</ol>
            ),
            a: ({ href, children }) => (
              <a href={href} className="text-blue-600 hover:underline">
                {children}
              </a>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
