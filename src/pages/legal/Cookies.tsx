import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie, Info, Settings, Shield, Clock, ToggleLeft } from 'lucide-react';
import FadeInUp from '../../components/animations/FadeInUp';

export default function Cookies() {
  const { t } = useTranslation();
  const lastUpdated = '2024-03-20';

  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  const cookieTypes = [
    {
      id: 'necessary',
      icon: Shield,
      title: t('cookies.types.necessary.title'),
      description: t('cookies.types.necessary.description'),
      required: true
    },
    {
      id: 'functional',
      icon: Settings,
      title: t('cookies.types.functional.title'),
      description: t('cookies.types.functional.description'),
      required: false
    },
    {
      id: 'analytics',
      icon: Info,
      title: t('cookies.types.analytics.title'),
      description: t('cookies.types.analytics.description'),
      required: false
    },
    {
      id: 'marketing',
      icon: ToggleLeft,
      title: t('cookies.types.marketing.title'),
      description: t('cookies.types.marketing.description'),
      required: false
    }
  ];

  const browserInstructions = [
    { name: 'Chrome', path: 'chrome://settings/cookies' },
    { name: 'Firefox', path: 'about:preferences#privacy' },
    { name: 'Safari', path: 'Safari > Preferences > Privacy' },
    { name: 'Edge', path: 'edge://settings/privacy' }
  ];

  const handlePreferenceChange = (cookieType: string) => {
    if (cookieType === 'necessary') return; // Cannot disable necessary cookies
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType as keyof typeof cookiePreferences]
    }));
  };

  const handleSavePreferences = () => {
    // Here you would implement the actual cookie preference saving logic
    console.log('Saving preferences:', cookiePreferences);
    // Show success message
    alert(t('cookies.preferences.saved'));
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="w-8 h-8 text-gray-600" />
              <h1 className="text-4xl font-light">
                {t('cookies.title')}
              </h1>
            </div>
            
            <p className="text-gray-600 mb-8">
              {t('cookies.lastUpdated', { date: lastUpdated })}
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-12">
                {t('cookies.introduction')}
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('cookies.whatAreCookies.title')}
                </h2>
                <p className="text-gray-600">
                  {t('cookies.whatAreCookies.content')}
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">
                  {t('cookies.preferences.title')}
                </h2>
                <div className="space-y-6">
                  {cookieTypes.map((cookieType) => (
                    <div
                      key={cookieType.id}
                      className="p-6 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-white rounded-lg">
                          <cookieType.icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">
                              {cookieType.title}
                            </h3>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={cookiePreferences[cookieType.id as keyof typeof cookiePreferences]}
                                onChange={() => handlePreferenceChange(cookieType.id)}
                                disabled={cookieType.required}
                              />
                              <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer ${cookiePreferences[cookieType.id as keyof typeof cookiePreferences] ? 'peer-checked:bg-gray-600' : ''} ${cookieType.required ? 'opacity-50 cursor-not-allowed' : 'peer-hover:bg-gray-300'}`}>
                                <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ease-in-out ${cookiePreferences[cookieType.id as keyof typeof cookiePreferences] ? 'translate-x-full' : 'translate-x-1'}`} />
                              </div>
                            </label>
                          </div>
                          <p className="text-gray-600">
                            {cookieType.description}
                          </p>
                          {cookieType.required && (
                            <span className="inline-block mt-2 text-sm text-gray-500">
                              {t('cookies.preferences.required')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                    {t('cookies.preferences.save')}
                  </button>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('cookies.howToManage.title')}
                </h2>
                <p className="text-gray-600">
                  {t('cookies.howToManage.content')}
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('cookies.howToManage.browsers')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {browserInstructions.map((browser) => (
                      <li key={browser.name}>
                        {browser.name}: {browser.path}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('cookies.contact.title')}
                </h2>
                <p className="text-gray-600">
                  {t('cookies.contact.content')}
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    {t('cookies.contact.email')}: privacy@youragency.com<br />
                    {t('cookies.contact.address')}: 123 Privacy Street, Tech City, TC 12345
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
