import React, { useState, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  words: string[];
  interval?: number;
}

export default function AnimatedText({ words, interval = 2000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldTransition, setShouldTransition] = useState(true);
  const containerRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Find the longest word to set the container width
  const longestWord = words.reduce((longest, current) => 
    current.length > longest.length ? current : longest
  , '');

  useEffect(() => {
    const animate = () => {
      setIsAnimating(true);
      setShouldTransition(true);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % words.length);
        setIsAnimating(false);
        // Disable transition for reset
        setShouldTransition(false);
      }, 500);
    };

    const intervalId = setInterval(animate, interval);

    return () => {
      clearInterval(intervalId);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [words.length, interval, nextIndex]);

  return (
    <span 
      ref={containerRef}
      className="inline-flex relative overflow-hidden"
      style={{
        width: `${longestWord.length}ch`,
        height: '1.1em',
        verticalAlign: 'baseline'
      }}
    >
      {/* Static underline */}
      <span className="absolute bottom-0 left-1/10 w-2/3 h-0.5 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900" />
      
      {/* Current word */}
      <span
        className="absolute left-0 whitespace-nowrap"
        style={{ 
          transform: `translateY(${isAnimating ? '100%' : '0'})`,
          opacity: isAnimating ? 0 : 1,
          transition: shouldTransition ? 'all 500ms ease-in-out' : 'none',
          willChange: 'transform, opacity',
          lineHeight: 'inherit'
        }}
      >
        {words[currentIndex]}
      </span>

      {/* Next word */}
      <span
        className="absolute left-0 whitespace-nowrap"
        style={{ 
          transform: `translateY(${isAnimating ? '0' : '-100%'})`,
          opacity: isAnimating ? 1 : 0,
          transition: shouldTransition ? 'all 500ms ease-in-out' : 'none',
          willChange: 'transform, opacity',
          lineHeight: 'inherit'
        }}
      >
        {words[nextIndex]}
      </span>

      {/* Invisible span for maintaining space */}
      <span className="invisible" style={{ lineHeight: 'inherit' }}>
        {longestWord}
      </span>
    </span>
  );
}
