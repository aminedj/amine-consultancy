import React, { ReactNode } from 'react';
import FadeInUp from './FadeInUp';

interface StaggeredFadeInUpProps {
  children: ReactNode[];
  baseDelay?: number;
  staggerDelay?: number;
  duration?: number;
  className?: string;
}

export default function StaggeredFadeInUp({
  children,
  baseDelay = 0,
  staggerDelay = 100,
  duration = 800,
  className = ''
}: StaggeredFadeInUpProps) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <FadeInUp
          delay={baseDelay + (index * staggerDelay)}
          duration={duration}
          className={className}
        >
          {child}
        </FadeInUp>
      ))}
    </>
  );
}
