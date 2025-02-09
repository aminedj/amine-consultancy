import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import FadeInUp from './animations/FadeInUp';
import StaggeredFadeInUp from './animations/StaggeredFadeInUp';

export default function ContactUs() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      text: t('contact.email')
    },
    {
      icon: Phone,
      text: t('contact.phone')
    },
    {
      icon: MapPin,
      text: t('contact.address')
    }
  ];

  return (
    <div id="contact-section" className="bg-white py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInUp>
            <div>
              <h2 className="text-5xl font-light tracking-tight text-gray-900 mb-6">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                {t('contact.subtitle')}
              </p>
              <div className="space-y-6">
                <StaggeredFadeInUp>
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 text-gray-600">
                      <item.icon className="w-6 h-6" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </StaggeredFadeInUp>
              </div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white rounded-md border border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white rounded-md border border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-white rounded-md border border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  ></textarea>
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 group transition-all">
                  {t('contact.form.submit')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
