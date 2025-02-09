import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Award, Target, Rocket } from 'lucide-react';
import FadeInUp from '../components/animations/FadeInUp';
import StaggeredFadeInUp from '../components/animations/StaggeredFadeInUp';

export default function About() {
  const { t } = useTranslation();

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: t('about.team.sarah')
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      bio: t('about.team.michael')
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      bio: t('about.team.emily')
    }
  ];

  const values = [
    {
      icon: Target,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    },
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: Rocket,
      title: t('about.values.impact.title'),
      description: t('about.values.impact.description')
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              {t('about.hero.subtitle')}
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              {t('about.values.title')}
            </h2>
          </FadeInUp>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggeredFadeInUp>
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6">
                    <value.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </StaggeredFadeInUp>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              {t('about.team.title')}
            </h2>
          </FadeInUp>
          
          <div className="grid md:grid-cols-3 gap-12">
            <StaggeredFadeInUp>
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </StaggeredFadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}
