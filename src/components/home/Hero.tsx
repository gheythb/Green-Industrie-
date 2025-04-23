import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  // Industry categories for quick links
  const industries = [
    { name: "Manufacturing", path: "/industry/manufacturing" },
    { name: "Automotive", path: "/industry/automotive" },
    { name: "HVAC", path: "/industry/hvac" },
    { name: "Oil & Gas", path: "/industry/oil-gas" },
    { name: "Pharmaceutical", path: "/industry/pharmaceutical" },
    { name: "Food Processing", path: "/industry/food-processing" },
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Industrial Filtration <span className="text-teal-400">Solutions</span> for Every Application
            </h1>
            <p className="text-xl text-blue-100">
              Your trusted source for high-performance industrial filters, technical expertise, and custom solutions.
            </p>
            
            {/* Search Bar */}
            <div className="relative mt-8 max-w-xl">
              <input
                type="text"
                placeholder="Search for filters, parts, or specifications..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-blue-200"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-blue-200" />
              <button className="absolute right-2 top-2 bg-teal-500 hover:bg-teal-600 text-white p-1.5 rounded-md transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                variant="secondary"
                size="lg"
              >
                Browse Products
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-800"
              >
                Request a Quote
              </Button>
            </div>
            
            {/* Industry quick links */}
            <div className="mt-8">
              <p className="text-blue-200 mb-2">Popular Industries:</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <a
                    key={industry.name}
                    href={industry.path}
                    className="inline-flex items-center px-3 py-1.5 bg-blue-800 bg-opacity-50 hover:bg-opacity-70 rounded-full text-sm transition-colors"
                  >
                    {industry.name}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Industrial Filtration" 
                className="rounded-lg shadow-2xl object-cover h-[500px] w-full"
              />
              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-lg shadow-xl">
                <p className="text-sm text-gray-600">Trusted By</p>
                <p className="text-2xl font-bold">500+ Industries</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-white text-gray-800 p-4 rounded-lg shadow-xl">
                <p className="text-sm text-gray-600">Filter Options</p>
                <p className="text-2xl font-bold">10,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
          <path d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;