import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Sitemap() {
  const { t } = useTranslation();

  const sitemapSections = [
    {
      title: t('footer.sections.solutions.title'),
      links: [
        { name: t('footer.sections.solutions.aiIntegration'), href: '/services/ai-integration' },
        { name: t('footer.sections.solutions.cloudArchitecture'), href: '/services/cloud-architecture' },
        { name: t('footer.sections.solutions.security'), href: '/services/security' },
        { name: t('footer.sections.solutions.analytics'), href: '/services/analytics' },
        { name: t('footer.sections.solutions.mlops'), href: '/services/mlops' }
      ]
    },
    {
      title: t('footer.sections.company.title'),
      links: [
        { name: t('footer.sections.company.about'), href: '/about' },
        { name: t('footer.sections.company.careers'), href: '/careers' },
        { name: t('footer.sections.company.blog'), href: '/blog' },
        { name: t('footer.sections.company.press'), href: '/press' },
        { name: t('footer.sections.company.partners'), href: '/partners' }
      ]
    },
    {
      title: t('footer.sections.resources.title'),
      links: [
        { name: t('footer.sections.resources.documentation'), href: '/docs' },
        { name: t('footer.sections.resources.caseStudies'), href: '/case-studies' },
        { name: t('footer.sections.resources.whitePapers'), href: '/resources/white-papers' },
        { name: t('footer.sections.resources.webinars'), href: '/resources/webinars' },
        { name: t('footer.sections.resources.api'), href: '/docs/api' }
      ]
    },
    {
      title: t('footer.sections.legal.title'),
      links: [
        { name: t('footer.sections.legal.privacy'), href: '/privacy' },
        { name: t('footer.sections.legal.terms'), href: '/terms' },
        { name: t('footer.sections.legal.cookies'), href: '/cookies' },
        { name: t('footer.sections.legal.security'), href: '/security' },
        { name: t('footer.sections.legal.compliance'), href: '/compliance' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-light mb-12">{t('footer.links.sitemap')}</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {sitemapSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-900" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
