import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: t('common.navigation.about'), href: '/about' },
    { name: t('common.navigation.services'), href: '/services' },
    { name: t('common.navigation.caseStudies'), href: '/case-studies' },
    { name: t('common.navigation.blog'), href: '/blog' },
    { name: t('common.navigation.contact'), href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-semibold">
              {t('footer.companyName')}
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${
                    isActive(item.href)
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label={t('common.buttons.search')}
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <Link 
              to="/contact"
              className="hidden md:block px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              {t('common.buttons.getStarted')}
            </Link>
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t(isMenuOpen ? 'common.buttons.close' : 'common.buttons.menu')}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md ${
                  isActive(item.href)
                    ? 'bg-gray-50 text-gray-900 font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
