import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Shield, Scale, AlertCircle, Settings, HelpCircle } from 'lucide-react';
import FadeInUp from '../../components/animations/FadeInUp';

export default function Terms() {
  const { t } = useTranslation();
  const lastUpdated = '2024-03-20';

  const sections = [
    {
      icon: FileText,
      title: t('terms.agreement.title'),
      content: t('terms.agreement.content')
    },
    {
      icon: Shield,
      title: t('terms.services.title'),
      content: t('terms.services.content')
    },
    {
      icon: Scale,
      title: t('terms.intellectual.title'),
      content: t('terms.intellectual.content')
    },
    {
      icon: AlertCircle,
      title: t('terms.liability.title'),
      content: t('terms.liability.content')
    },
    {
      icon: Settings,
      title: t('terms.usage.title'),
      content: t('terms.usage.content')
    },
    {
      icon: HelpCircle,
      title: t('terms.support.title'),
      content: t('terms.support.content')
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-light mb-4">
              {t('terms.title')}
            </h1>
            <p className="text-gray-600 mb-8">
              {t('terms.lastUpdated', { date: lastUpdated })}
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-12">
                {t('terms.introduction')}
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
                  {t('terms.contact.title')}
                </h2>
                <p className="text-gray-600">
                  {t('terms.contact.content')}
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    {t('terms.contact.email')}: legal@youragency.com<br />
                    {t('terms.contact.address')}: 123 Legal Avenue, Tech City, TC 12345
                  </p>
                </div>
              </section>

              <section className="mb-12 p-4 border border-gray-200 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                  {t('terms.acceptance.title')}
                </h2>
                <p className="text-gray-600">
                  {t('terms.acceptance.content')}
                </p>
              </section>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
