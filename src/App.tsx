import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CaseStudies from './pages/CaseStudies';
import CaseStudyPost from './pages/CaseStudyPost';
import About from './pages/About';
import ServicesPage from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';
import Security from './pages/legal/Security';
import Compliance from './pages/legal/Compliance';
import Careers from './pages/company/Careers';
import Press from './pages/company/Press';
import Partners from './pages/company/Partners';
import Documentation from './pages/resources/Documentation';
import WhitePapers from './pages/resources/WhitePapers';
import Webinars from './pages/resources/Webinars';
import ApiReference from './pages/resources/ApiReference';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <TechStack />
              <CaseStudies />
              <ContactUs />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-study/:slug" element={<CaseStudyPost />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Legal Routes */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/security" element={<Security />} />
          <Route path="/compliance" element={<Compliance />} />
          
          {/* Company Routes */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/partners" element={<Partners />} />
          
          {/* Resources Routes */}
          <Route path="/docs" element={<Documentation />} />
          <Route path="/resources/white-papers" element={<WhitePapers />} />
          <Route path="/resources/webinars" element={<Webinars />} />
          <Route path="/docs/api" element={<ApiReference />} />
          
          {/* Other Routes */}
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
