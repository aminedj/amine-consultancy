import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, LineChart, Zap } from 'lucide-react';
import CaseStudyCard from './case-studies/CaseStudyCard';
import FadeInUp from './animations/FadeInUp';
import StaggeredFadeInUp from './animations/StaggeredFadeInUp';

export default function CaseStudies() {
  const { t } = useTranslation();

  const caseStudies = [
    {
      icon: Building2,
      title: "AI-Driven Analytics Platform",
      client: "Fortune 500 Financial Institution",
      result: "150% increase in prediction accuracy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      icon: LineChart,
      title: "Cloud Migration & Optimization",
      client: "Global Retail Chain",
      result: "40% reduction in operational costs",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      icon: Zap,
      title: "Intelligent Automation Suite",
      client: "Healthcare Provider Network",
      result: "85% faster processing time",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="max-w-4xl mb-8">
            <h2 className="heading-2 mb-4">{t('caseStudies.title')}</h2>
            <p className="subtitle-large">
              Real-world success stories from our enterprise clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StaggeredFadeInUp>
              {caseStudies.map((study, index) => (
                <CaseStudyCard
                  key={index}
                  icon={study.icon}
                  title={study.title}
                  client={study.client}
                  result={study.result}
                  image={study.image}
                />
              ))}
            </StaggeredFadeInUp>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
