import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Eye, Database, Clock, Globe } from 'lucide-react';
import FadeInUp from '../../components/animations/FadeInUp';

export default function Privacy() {
  const { t } = useTranslation();
  const lastUpdated = '2024-03-20';

  const sections = [
    {
      icon: Database,
      title: t('privacy.dataCollection.title'),
      content: t('privacy.dataCollection.content')
    },
    {
      icon: Eye,
      title: t('privacy.dataUsage.title'),
      content: t('privacy.dataUsage.content')
    },
    {
      icon: Lock,
      title: t('privacy.dataSecurity.title'),
      content: t('privacy.dataSecurity.content')
    },
    {
      icon: Globe,
      title: t('privacy.dataTransfer.title'),
      content: t('privacy.dataTransfer.content')
    },
    {
      icon: Clock,
      title: t('privacy.dataRetention.title'),
      content: t('privacy.dataRetention.content')
    },
    {
      icon: Shield,
      title: t('privacy.yourRights.title'),
      content: t('privacy.yourRights.content')
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-light mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-gray-600 mb-8">
              {t('privacy.lastUpdated', { date: lastUpdated })}
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-12">
                {t('privacy.introduction')}
              </p>

              {sections.map((section, index) => (
                <section key={index} className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <section.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                  <p className="text-gray-600">{section.content}</p>
                </section>
              ))}

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('privacy.contact.title')}
                </h2>
                <p className="text-gray-600">
                  {t('privacy.contact.content')}
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    {t('privacy.contact.email')}: privacy@youragency.com<br />
                    {t('privacy.contact.address')}: 123 Privacy Street, Tech City, TC 12345
                  </p>
                </div>
              </section>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
