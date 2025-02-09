import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Newspaper, 
  Calendar, 
  Download, 
  Link2, 
  Search,
  ArrowRight,
  Building2,
  Award,
  TrendingUp
} from 'lucide-react';
import FadeInUp from '../../components/animations/FadeInUp';
import StaggeredFadeInUp from '../../components/animations/StaggeredFadeInUp';

export default function Press() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const pressReleases = [
    {
      id: 1,
      title: "Your Agency Announces Revolutionary AI Platform for Enterprise",
      date: "2024-03-15",
      category: "Product Launch",
      description: "Leading AI consultancy launches groundbreaking enterprise solution that promises to transform business operations.",
      link: "/press/ai-platform-launch",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Your Agency Named Leader in Gartner Magic Quadrant",
      date: "2024-02-20",
      category: "Recognition",
      description: "Recognized for completeness of vision and ability to execute in AI consulting services.",
      link: "/press/gartner-recognition",
      image: "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Your Agency Expands Global Operations",
      date: "2024-01-10",
      category: "Company News",
      description: "Opening new offices in Asia and Europe to better serve international clients.",
      link: "/press/global-expansion",
      image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80"
    }
  ];

  const mediaHighlights = [
    {
      id: 1,
      outlet: "TechCrunch",
      title: "Your Agency Leads the AI Revolution in Enterprise",
      date: "2024-03-10",
      link: "https://techcrunch.com",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      outlet: "Forbes",
      title: "How Your Agency is Transforming Enterprise AI",
      date: "2024-02-15",
      link: "https://forbes.com",
      logo: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      outlet: "Bloomberg",
      title: "Your Agency's Growth Story",
      date: "2024-01-20",
      link: "https://bloomberg.com",
      logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80"
    }
  ];

  const companyFacts = [
    {
      icon: Building2,
      title: "Founded",
      value: "2018"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      value: "15+ Awards"
    },
    {
      icon: TrendingUp,
      title: "YoY Growth",
      value: "200%"
    }
  ];

  const filteredReleases = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || release.date.includes(selectedYear);
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Get the latest news, press releases, and media coverage about Your Agency's innovations in enterprise AI solutions.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Company Facts */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <StaggeredFadeInUp>
              {companyFacts.map((fact, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
                    <fact.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{fact.title}</h3>
                  <p className="text-2xl font-semibold text-gray-900">{fact.value}</p>
                </div>
              ))}
            </StaggeredFadeInUp>
          </div>
        </div>
      </div>

      {/* Press Releases Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-light mb-8">Press Releases</h2>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search press releases..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
              >
                <option value="all">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>

            {/* Press Releases Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StaggeredFadeInUp>
                {filteredReleases.map((release) => (
                  <div key={release.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={release.image}
                        alt={release.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{release.date}</span>
                        <span className="text-gray-300">•</span>
                        <span>{release.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                      <p className="text-gray-600 mb-4">{release.description}</p>
                      <a
                        href={release.link}
                        className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </StaggeredFadeInUp>
            </div>
          </div>
        </div>
      </div>

      {/* Media Coverage Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Media Coverage</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StaggeredFadeInUp>
              {mediaHighlights.map((media) => (
                <a
                  key={media.id}
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <div className="w-16 h-16 mb-4">
                      <img
                        src={media.logo}
                        alt={media.outlet}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                      {media.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{media.date}</span>
                      <span className="text-gray-300">•</span>
                      <span>{media.outlet}</span>
                    </div>
                  </div>
                </a>
              ))}
            </StaggeredFadeInUp>
          </div>
        </div>
      </div>

      {/* Media Resources */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-8">Media Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Press Kit</h3>
              <p className="text-gray-600 mb-6">
                Download our press kit containing logos, executive photos, and company information.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                <Download className="w-5 h-5" />
                Download Press Kit
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Media Contact</h3>
              <p className="text-gray-600 mb-6">
                For press inquiries, please contact our media relations team.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-gray-400" />
                  <span>press@youragency.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Link2 className="w-5 h-5 text-gray-400" />
                  <a href="#" className="hover:text-gray-600">Media Relations</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
