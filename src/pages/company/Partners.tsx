import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Users, 
  Handshake, 
  Award, 
  ArrowRight,
  Building2,
  Puzzle,
  Zap,
  Globe,
  MessageSquare,
  BarChart,
  Shield,
  Cloud
} from 'lucide-react';
import FadeInUp from '../../components/animations/FadeInUp';
import StaggeredFadeInUp from '../../components/animations/StaggeredFadeInUp';

export default function Partners() {
  const { t } = useTranslation();

  const strategicPartners = [
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80",
      description: "Strategic cloud and AI partnership delivering enterprise solutions.",
      type: "Technology Partner"
    },
    {
      name: "Amazon Web Services",
      logo: "https://images.unsplash.com/photo-1649735112593-1cdf68634c84?auto=format&fit=crop&q=80",
      description: "Premier consulting partner for cloud infrastructure.",
      type: "Cloud Partner"
    },
    {
      name: "Google Cloud",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80",
      description: "AI and machine learning solutions partnership.",
      type: "Technology Partner"
    }
  ];

  const benefits = [
    {
      icon: Building2,
      title: "Market Expansion",
      description: "Access new markets and customers through our global network."
    },
    {
      icon: Puzzle,
      title: "Technical Integration",
      description: "Seamless integration with our enterprise AI platform."
    },
    {
      icon: Award,
      title: "Certification Program",
      description: "Comprehensive training and certification programs."
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 partner support and resources worldwide."
    }
  ];

  const partnerTypes = [
    {
      icon: Cloud,
      title: "Technology Partners",
      description: "Partner with us to integrate your technology with our AI platform.",
      benefits: [
        "API access and documentation",
        "Technical support and resources",
        "Joint marketing opportunities"
      ]
    },
    {
      icon: Shield,
      title: "Solution Partners",
      description: "Deliver complete AI solutions to your enterprise customers.",
      benefits: [
        "Sales enablement",
        "Implementation support",
        "Revenue sharing"
      ]
    },
    {
      icon: BarChart,
      title: "Consulting Partners",
      description: "Provide strategic consulting services using our platform.",
      benefits: [
        "Training and certification",
        "Project support",
        "Lead sharing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <div className="max-w-4xl">
              <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-6">
                Partner with Us
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our partner ecosystem and help enterprises transform with AI. Together, we'll create innovative solutions and drive growth.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#become-partner" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#partner-program" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Strategic Partners */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="text-3xl font-light mb-12">Strategic Partners</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <StaggeredFadeInUp>
                {strategicPartners.map((partner, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gray-100 flex items-center justify-center p-8">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-gray-500">{partner.type}</span>
                      <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                      <p className="text-gray-600">{partner.description}</p>
                    </div>
                  </div>
                ))}
              </StaggeredFadeInUp>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Partner Benefits */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-light mb-4">Partner Benefits</h2>
              <p className="text-xl text-gray-600">
                Join our partner ecosystem and unlock exclusive benefits and opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <StaggeredFadeInUp>
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
                      <benefit.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </StaggeredFadeInUp>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Partner Types */}
      <div id="partner-program" className="py-24">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="text-3xl font-light mb-12">Partner Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <StaggeredFadeInUp>
                {partnerTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6">
                      <type.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <ul className="space-y-3">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-gray-600">
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </StaggeredFadeInUp>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Become a Partner */}
      <div id="become-partner" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="bg-white rounded-lg p-8 md:p-12">
                <h2 className="text-3xl font-light mb-6">Become a Partner</h2>
                <p className="text-gray-600 mb-8">
                  Take the first step towards a rewarding partnership. Fill out the form below and our partnership team will contact you.
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Partnership Type
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent">
                      <option value="">Select a partnership type</option>
                      <option value="technology">Technology Partner</option>
                      <option value="solution">Solution Partner</option>
                      <option value="consulting">Consulting Partner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      placeholder="Tell us about your company and partnership goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}
