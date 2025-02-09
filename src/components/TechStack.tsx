import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FadeInUp from './animations/FadeInUp';

export default function TechStack() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const technologies = [
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    {
      name: 'Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg'
    },
    {
      name: 'Google Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
    },
    {
      name: 'OpenAI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'
    },
    {
      name: 'TensorFlow',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg'
    },
    {
      name: 'PyTorch',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg'
    },
    {
      name: 'Kubernetes',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg'
    }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track') as HTMLElement;
    if (!track) return;

    // Clone items for infinite scroll
    const items = track.children;
    const itemWidth = items[0].getBoundingClientRect().width;
    const totalWidth = itemWidth * items.length;

    // Clone items and append to track
    [...items].forEach(item => {
      const clone = item.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });

    let currentTranslate = 0;
    let isTransitioning = true;

    const animate = () => {
      if (!isTransitioning) return;

      currentTranslate -= 0.5;
      
      // Reset position when reaching half of the track
      if (Math.abs(currentTranslate) >= totalWidth) {
        currentTranslate = 0;
      }

      track.style.transform = `translateX(${currentTranslate}px)`;
      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Pause on hover
    track.addEventListener('mouseenter', () => {
      isTransitioning = false;
    });

    track.addEventListener('mouseleave', () => {
      isTransitioning = true;
      animate();
    });

    return () => {
      isTransitioning = false;
    };
  }, [technologies.length]);

  return (
    <div className="border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="max-w-4xl mb-8">
            <h2 className="heading-2 mb-4">{t('techStack.title')}</h2>
            <p className="subtitle-large">{t('techStack.subtitle')}</p>
          </div>
          
          <div className="relative w-full">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Carousel container */}
            <div ref={carouselRef} className="carousel-container h-48">
              <div className="carousel-track">
                {technologies.map((tech, index) => (
                  <div key={`tech-${index}`} className="carousel-card">
                    <div className="flex flex-col items-center px-8">
                      <img 
                        src={tech.logo} 
                        alt={`${tech.name} logo`}
                        className="tech-logo"
                      />
                      <span className="mt-4 text-sm font-medium text-gray-600">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
