import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import FadeInUp from '../components/animations/FadeInUp';

export default function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              {t('contact.subtitle')}
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <FadeInUp>
              <div>
                <h2 className="text-3xl font-light mb-8">Get in Touch</h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-gray-600">{t('contact.email')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-gray-600">{t('contact.phone')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Address</h3>
                      <p className="text-gray-600">{t('contact.address')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Contact Form */}
            <FadeInUp delay={200}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  {t('contact.form.submit')}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}
