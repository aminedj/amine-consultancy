import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 800,
  className = '' 
}: FadeInUpProps) {
  const { ref, style, isVisible } = useScrollAnimation({ delay, duration });

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
