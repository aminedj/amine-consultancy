import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface CaseStudyCardProps {
  icon: LucideIcon;
  title: string;
  client: string;
  result: string;
  image: string;
  slug: string;
}

export default function CaseStudyCard({ 
  icon: Icon, 
  title, 
  client, 
  result, 
  image,
  slug 
}: CaseStudyCardProps) {
  const { t } = useTranslation();

  return (
    <div className="card-interactive group">
      <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="icon-container">
            <Icon className="icon-base" />
          </div>
          <h3 className="text-title font-semibold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-2">{client}</p>
        <p className="font-medium text-gray-900 mb-6">{result}</p>
        
        <Link to={`/case-study/${slug}`} className="link-with-arrow">
          {t('common.buttons.viewCaseStudy')}
          <ArrowRight className="w-4 h-4 animate-arrow" />
        </Link>
      </div>
    </div>
  );
}
