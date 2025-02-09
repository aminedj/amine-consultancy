import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  Lock, 
  Server, 
  Key, 
  Eye, 
  AlertTriangle, 
  FileCheck,
  RefreshCw,
  UserCheck,
  Network
} from 'lucide-react';
import FadeInUp from '../../components/animations/FadeInUp';

export default function Security() {
  const { t } = useTranslation();
  const lastUpdated = '2024-03-20';

  const securityMeasures = [
    {
      icon: Lock,
      title: t('security.measures.encryption.title'),
      description: t('security.measures.encryption.description')
    },
    {
      icon: Server,
      title: t('security.measures.infrastructure.title'),
      description: t('security.measures.infrastructure.description')
    },
    {
      icon: Key,
      title: t('security.measures.access.title'),
      description: t('security.measures.access.description')
    },
    {
      icon: Eye,
      title: t('security.measures.monitoring.title'),
      description: t('security.measures.monitoring.description')
    }
  ];

  const certifications = [
    {
      icon: FileCheck,
      name: 'ISO 27001',
      description: t('security.certifications.iso')
    },
    {
      icon: Shield,
      name: 'SOC 2 Type II',
      description: t('security.certifications.soc2')
    },
    {
      icon: Network,
      name: 'GDPR',
      description: t('security.certifications.gdpr')
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-gray-600" />
              <h1 className="text-4xl font-light">
                {t('security.title')}
              </h1>
            </div>
            
            <p className="text-gray-600 mb-8">
              {t('security.lastUpdated', { date: lastUpdated })}
            </p>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-12">
                {t('security.introduction')}
              </p>

              {/* Security Measures */}
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-8">
                  {t('security.measures.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {securityMeasures.map((measure, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-white rounded-lg">
                          <measure.icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            {measure.title}
                          </h3>
                          <p className="text-gray-600">
                            {measure.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-8">
                  {t('security.certifications.title')}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg text-center"
                    >
                      <div className="inline-flex p-3 bg-white rounded-lg mb-4">
                        <cert.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Incident Response */}
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('security.incident.title')}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4">
                        {t('security.incident.description')}
                      </p>
                      <div className="flex items-center gap-2 text-gray-700">
                        <RefreshCw className="w-5 h-5" />
                        <span>{t('security.incident.response')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security Team */}
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('security.team.title')}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg">
                      <UserCheck className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4">
                        {t('security.team.description')}
                      </p>
                      <a 
                        href="mailto:security@youragency.com"
                        className="text-gray-900 hover:text-gray-700 font-medium"
                      >
                        security@youragency.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('security.contact.title')}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    {t('security.contact.content')}
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>{t('security.contact.email')}:</strong> security@youragency.com
                    </p>
                    <p>
                      <strong>{t('security.contact.emergency')}:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                      <strong>{t('security.contact.address')}:</strong> 123 Security Ave, Tech City, TC 12345
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
