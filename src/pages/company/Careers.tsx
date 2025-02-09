import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Briefcase, 
  Users, 
  Star, 
  Heart,
  Globe,
  Zap,
  Coffee,
  BookOpen,
  Search,
  MapPin,
  Clock,
  Code,
  Database,
  Shield,
  Cpu
} from 'lucide-react';
import FadeInUp from '../../components/animations/FadeInUp';
import StaggeredFadeInUp from '../../components/animations/StaggeredFadeInUp';

export default function Careers() {
  const { t } = useTranslation();
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = [
    { id: 'all', name: t('careers.departments.all') },
    { id: 'engineering', name: t('careers.departments.engineering') },
    { id: 'data', name: t('careers.departments.data') },
    { id: 'security', name: t('careers.departments.security') },
    { id: 'product', name: t('careers.departments.product') }
  ];

  const benefits = [
    {
      icon: Globe,
      title: t('careers.benefits.remote.title'),
      description: t('careers.benefits.remote.description')
    },
    {
      icon: Heart,
      title: t('careers.benefits.health.title'),
      description: t('careers.benefits.health.description')
    },
    {
      icon: Coffee,
      title: t('careers.benefits.balance.title'),
      description: t('careers.benefits.balance.description')
    },
    {
      icon: BookOpen,
      title: t('careers.benefits.learning.title'),
      description: t('careers.benefits.learning.description')
    }
  ];

  const values = [
    {
      icon: Star,
      title: t('careers.values.innovation.title'),
      description: t('careers.values.innovation.description')
    },
    {
      icon: Users,
      title: t('careers.values.collaboration.title'),
      description: t('careers.values.collaboration.description')
    },
    {
      icon: Zap,
      title: t('careers.values.impact.title'),
      description: t('careers.values.impact.description')
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      icon: Code
    },
    {
      id: 2,
      title: 'Data Scientist',
      department: 'data',
      location: 'Hybrid',
      type: 'Full-time',
      icon: Database
    },
    {
      id: 3,
      title: 'Security Engineer',
      department: 'security',
      location: 'Remote',
      type: 'Full-time',
      icon: Shield
    },
    {
      id: 4,
      title: 'ML Platform Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      icon: Cpu
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-6">
              {t('careers.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              {t('careers.hero.subtitle')}
            </p>
            <div className="flex gap-4">
              <a href="#openings" className="btn-primary">
                {t('careers.hero.viewJobs')}
              </a>
              <a href="#culture" className="btn-secondary">
                {t('careers.hero.learnMore')}
              </a>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Values Section */}
      <section id="culture" className="py-24">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="text-3xl font-light text-center mb-16">
              {t('careers.values.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6">
                    <value.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="text-3xl font-light text-center mb-16">
              {t('careers.benefits.title')}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="inline-flex p-2 bg-gray-50 rounded-lg mb-4">
                    <benefit.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-24">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="text-3xl font-light mb-12">
              {t('careers.openings.title')}
            </h2>

            {/* Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('careers.openings.search')}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedDepartment === dept.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedDepartment(dept.id)}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              <StaggeredFadeInUp>
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white rounded-lg">
                          <job.icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {t(`careers.departments.${job.department}`)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <a
                        href={`/careers/${job.id}`}
                        className="px-6 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {t('careers.openings.apply')}
                      </a>
                    </div>
                  </div>
                ))}
              </StaggeredFadeInUp>
              
              {filteredJobs.length === 0 && (
                <div className="text-center py-12 text-gray-600">
                  {t('careers.openings.noResults')}
                </div>
              )}
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
