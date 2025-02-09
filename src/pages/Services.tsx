import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Cloud, Shield, Gauge, ArrowRight } from 'lucide-react';
import FadeInUp from '../components/animations/FadeInUp';
import StaggeredFadeInUp from '../components/animations/StaggeredFadeInUp';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Brain,
      title: t('services.aiIntegration.title'),
      description: t('services.aiIntegration.description'),
      features: [
        'Natural Language Processing',
        'Machine Learning Models',
        'Computer Vision',
        'Predictive Analytics'
      ]
    },
    {
      icon: Cloud,
      title: t('services.cloudArchitecture.title'),
      description: t('services.cloudArchitecture.description'),
      features: [
        'Cloud Migration',
        'Infrastructure Optimization',
        'Serverless Architecture',
        'Multi-Cloud Strategy'
      ]
    },
    {
      icon: Shield,
      title: t('services.securityFirst.title'),
      description: t('services.securityFirst.description'),
      features: [
        'Threat Detection',
        'Security Audits',
        'Compliance Management',
        'Identity Protection'
      ]
    },
    {
      icon: Gauge,
      title: t('services.performanceOptimization.title'),
      description: t('services.performanceOptimization.description'),
      features: [
        'Performance Monitoring',
        'Load Balancing',
        'Cache Optimization',
        'Database Tuning'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              {t('services.hero.subtitle')}
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <StaggeredFadeInUp>
              {services.map((service, index) => (
                <div key={index} className="card-interactive p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="icon-container">
                      <service.icon className="icon-base" />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#" className="link-with-arrow">
                    Learn more
                    <ArrowRight className="w-4 h-4 animate-arrow" />
                  </a>
                </div>
              ))}
            </StaggeredFadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}
