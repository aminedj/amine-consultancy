import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import AnimatedGrid from './hero/AnimatedGrid';
import AnimatedText from './hero/AnimatedText';

export default function Hero() {
  const { t } = useTranslation();

  const businessTypes = [
    'transform enterprises',
    'empower startups',
    'scale businesses',
    'revolutionize commerce',
    'advance healthcare',
    'accelerate innovation',
    'drive growth',
    'enable success'
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative min-h-[700px] flex items-center border-b border-gray-200 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatedGrid />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-white/5 before:to-transparent before:backdrop-blur-[1px] before:-z-10 after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/5 after:via-white/2.5 after:to-transparent after:backdrop-blur-[8px] after:-z-20 rounded-lg p-8">
          <h1 className="text-6xl font-light tracking-tight text-gray-900">
            <div className="flex items-baseline gap-2 mb-4">
              We <AnimatedText words={businessTypes} interval={1900} />
            </div>
            <div className="mt-4">
              with AI & Cloud
            </div>
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl">
            {t('hero.subtitle')}
          </p>
        </div>
        <button 
          onClick={scrollToContact}
          className="group inline-flex items-center gap-2 text-lg font-medium bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all mt-8 ml-8 cursor-pointer"
        >
          {t('common.buttons.scheduleConsultation')}
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
}
