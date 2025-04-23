import React from 'react';
import { Industry } from '../../types';

interface IndustryCaseProps {
  industry: {
    name: Industry;
    image: string;
    description: string;
    path: string;
  };
}

const IndustryCase: React.FC<IndustryCaseProps> = ({ industry }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-md">
      <div className="h-72 overflow-hidden">
        <img 
          src={industry.image} 
          alt={industry.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-0 translate-y-6">
        <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
        <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {industry.description}
        </p>
        <a 
          href={industry.path} 
          className="inline-block bg-white text-blue-800 px-4 py-2 rounded-md font-medium transform -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        >
          View Solutions
        </a>
      </div>
    </div>
  );
};

const IndustrySection: React.FC = () => {
  const industries = [
    {
      name: Industry.MANUFACTURING,
      image: "https://images.pexels.com/photos/175418/pexels-photo-175418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Specialized filtration solutions for manufacturing facilities to ensure product quality and equipment protection.",
      path: "/industry/manufacturing"
    },
    {
      name: Industry.OIL_GAS,
      image: "https://images.pexels.com/photos/262537/pexels-photo-262537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Heavy-duty filtration systems designed for the extreme demands of oil and gas operations.",
      path: "/industry/oil-gas"
    },
    {
      name: Industry.PHARMACEUTICAL,
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Ultra-pure filtration solutions meeting strict regulatory requirements for pharmaceutical production.",
      path: "/industry/pharmaceutical"
    },
    {
      name: Industry.FOOD_PROCESSING,
      image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Food-grade filtration systems to maintain safety, quality and compliance in food processing.",
      path: "/industry/food-processing"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
          <p className="text-gray-600">
            We provide specialized filtration solutions tailored to the unique requirements of various industries.
            Browse our industry-specific offerings to find the perfect fit for your operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <IndustryCase key={industry.name} industry={industry} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/industries" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Industries
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;