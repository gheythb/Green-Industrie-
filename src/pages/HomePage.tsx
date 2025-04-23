import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryShowcase from '../components/home/CategoryShowcase';
import IndustrySection from '../components/home/IndustrySection';
import RequestQuote from '../components/home/RequestQuote';
import Testimonials from '../components/home/Testimonials';
import FilterSelector from '../components/home/FilterSelector';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <CategoryShowcase />
        <FilterSelector />
        <IndustrySection />
        <RequestQuote />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;