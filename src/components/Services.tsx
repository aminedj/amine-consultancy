import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Cloud, Shield, Gauge } from 'lucide-react';
import ServiceCard from './services/ServiceCard';
import FadeInUp from './animations/FadeInUp';
import StaggeredFadeInUp from './animations/StaggeredFadeInUp';
import {
  AIIntegrationChart,
  CloudArchitectureGraph,
  SecurityShieldAnimation,
  PerformanceGraph
} from './services/ServiceIllustrations';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Brain,
      title: t('services.services.aiIntegration.title'),
      description: t('services.services.aiIntegration.description'),
      illustration: <AIIntegrationChart />,
      slug: 'ai-integration'
    },
    {
      icon: Cloud,
      title: t('services.services.cloudArchitecture.title'),
      description: t('services.services.cloudArchitecture.description'),
      illustration: <CloudArchitectureGraph />,
      slug: 'cloud-architecture'
    },
    {
      icon: Shield,
      title: t('services.services.securityFirst.title'),
      description: t('services.services.securityFirst.description'),
      illustration: <SecurityShieldAnimation />,
      slug: 'security'
    },
    {
      icon: Gauge,
      title: t('services.services.performanceOptimization.title'),
      description: t('services.services.performanceOptimization.description'),
      illustration: <PerformanceGraph />,
      slug: 'performance'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="max-w-4xl mb-8">
            <h2 className="heading-2 mb-4">{t('services.services.title')}</h2>
            <p className="subtitle-large">
              {t('services.services.subtitle')}
            </p>
          </div>
        </FadeInUp>
        
        <div className="grid md:grid-cols-2 gap-8">
          <StaggeredFadeInUp>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </StaggeredFadeInUp>
        </div>
      </div>
    </div>
  );
}
