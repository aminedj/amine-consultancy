import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle, 
  FileCheck, 
  Shield, 
  Book, 
  Globe, 
  Clock,
  Users,
  FileText,
  AlertCircle,
  Scale
} from 'lucide-react';
import FadeInUp from '../../components/animations/FadeInUp';

export default function Compliance() {
  const { t } = useTranslation();
  const lastUpdated = '2024-03-20';

  const frameworks = [
    {
      icon: Shield,
      name: 'ISO 27001',
      status: t('compliance.frameworks.iso.status'),
      description: t('compliance.frameworks.iso.description'),
      lastAudit: '2024-01',
      nextAudit: '2025-01'
    },
    {
      icon: FileCheck,
      name: 'SOC 2 Type II',
      status: t('compliance.frameworks.soc2.status'),
      description: t('compliance.frameworks.soc2.description'),
      lastAudit: '2023-12',
      nextAudit: '2024-12'
    },
    {
      icon: Globe,
      name: 'GDPR',
      status: t('compliance.frameworks.gdpr.status'),
      description: t('compliance.frameworks.gdpr.description'),
      lastAudit: '2024-02',
      nextAudit: '2024-08'
    },
    {
      icon: Scale,
      name: 'HIPAA',
      status: t('compliance.frameworks.hipaa.status'),
      description: t('compliance.frameworks.hipaa.description'),
      lastAudit: '2024-01',
      nextAudit: '2025-01'
    }
  ];

  const practices = [
    {
      icon: Users,
      title: t('compliance.practices.training.title'),
      description: t('compliance.practices.training.description')
    },
    {
      icon: FileText,
      title: t('compliance.practices.documentation.title'),
      description: t('compliance.practices.documentation.description')
    },
    {
      icon: Clock,
      title: t('compliance.practices.monitoring.title'),
      description: t('compliance.practices.monitoring.description')
    },
    {
      icon: AlertCircle,
      title: t('compliance.practices.incident.title'),
      description: t('compliance.practices.incident.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Book className="w-8 h-8 text-gray-600" />
              <h1 className="text-4xl font-light">
                {t('compliance.title')}
              </h1>
            </div>
            
            <p className="text-gray-600 mb-8">
              {t('compliance.lastUpdated', { date: lastUpdated })}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-12">
                {t('compliance.introduction')}
              </p>

              {/* Compliance Frameworks */}
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-8">
                  {t('compliance.frameworks.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {frameworks.map((framework, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-white rounded-lg">
                          <framework.icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">
                              {framework.name}
                            </h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {framework.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {framework.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{t('compliance.frameworks.lastAudit')}: {framework.lastAudit}</span>
                            <span>{t('compliance.frameworks.nextAudit')}: {framework.nextAudit}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Compliance Practices */}
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-8">
                  {t('compliance.practices.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {practices.map((practice, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-white rounded-lg">
                          <practice.icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            {practice.title}
                          </h3>
                          <p className="text-gray-600">
                            {practice.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Compliance Documentation */}
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('compliance.documentation.title')}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-6">
                    {t('compliance.documentation.description')}
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="#"
                      className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium"
                    >
                      <FileText className="w-5 h-5" />
                      {t('compliance.documentation.certifications')}
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium"
                    >
                      <FileText className="w-5 h-5" />
                      {t('compliance.documentation.policies')}
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium"
                    >
                      <FileText className="w-5 h-5" />
                      {t('compliance.documentation.reports')}
                    </a>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('compliance.contact.title')}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    {t('compliance.contact.content')}
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>{t('compliance.contact.email')}:</strong> compliance@youragency.com
                    </p>
                    <p>
                      <strong>{t('compliance.contact.phone')}:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                      <strong>{t('compliance.contact.address')}:</strong> 123 Compliance Ave, Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
