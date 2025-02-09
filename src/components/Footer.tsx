import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    twitter: 'https://twitter.com/youragency',
    linkedin: 'https://linkedin.com/company/youragency',
    github: 'https://github.com/youragency'
  };

  const footerSections = [
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
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="text-gray-900 text-xl font-semibold mb-4 block">
              {t('footer.companyName')}
            </Link>
            <p className="mb-6 max-w-md text-gray-600">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label={t('footer.social.twitter')}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label={t('footer.social.linkedin')}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label={t('footer.social.github')}
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-gray-900 text-sm font-semibold mb-4 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t('footer.links.privacy')}
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t('footer.links.terms')}
              </Link>
              <Link to="/sitemap" className="text-gray-600 hover:text-gray-900 transition-colors">
                {t('footer.links.sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
