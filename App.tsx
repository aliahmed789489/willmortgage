
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#':
      case '':
        return <Home />;
      case '#about':
        return <About />;
      case '#services':
        return <Services />;
      case '#calculator':
        return (
          <div className="py-24 bg-gray-50 min-h-screen">
             <div className="max-w-4xl mx-auto px-4">
               <h1 className="text-4xl font-bold text-navy text-center mb-12">Mortgage Payment Calculator</h1>
               <p className="text-center text-gray-600 mb-12">Plan your future home purchase or refinance with our precise Canadian mortgage tool.</p>
               <Home /> {/* In this single-page demo, Home contains the calculator section, but normally we'd isolate the component */}
             </div>
          </div>
        );
      case '#book':
        return <BookingPage />;
      case '#contact':
        return <ContactPage />;
      case '#legal':
        return <LegalPage />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
};

export default App;
