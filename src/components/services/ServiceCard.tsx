import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  illustration: React.ReactNode;
  slug: string;
}

export default function ServiceCard({ icon: Icon, title, description, illustration, slug }: ServiceCardProps) {
  const { t } = useTranslation();
  
  return (
    <div className="card-interactive p-8 group">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="icon-container">
            <Icon className="icon-base" />
          </div>
          <h3 className="text-title font-semibold text-gray-900">{title}</h3>
        </div>
        
        <p className="body-text mb-6">{description}</p>
        
        <div className="mt-auto">
          <div className="mb-6 h-48 bg-gray-50 rounded-lg overflow-hidden">
            {illustration}
          </div>
          
          <Link to={`/services/${slug}`} className="link-with-arrow">
            {t('common.buttons.learnMore')}
            <ArrowRight className="w-4 h-4 animate-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
