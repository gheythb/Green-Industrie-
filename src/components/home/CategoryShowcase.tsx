import React from 'react';
import { Category } from '../../types';

const CategoryShowcase: React.FC = () => {
  const categories = [
    {
      name: Category.AIR,
      icon: "https://images.pexels.com/photos/4489743/pexels-photo-4489743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Complete range of air filtration solutions for industrial applications",
      count: 120,
      path: "/category/air"
    },
    {
      name: Category.WATER,
      icon: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Industrial water filters for manufacturing and processing",
      count: 85,
      path: "/category/water"
    },
    {
      name: Category.OIL,
      icon: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Oil filtration systems for hydraulic and lubrication systems",
      count: 94,
      path: "/category/oil"
    },
    {
      name: Category.FUEL,
      icon: "https://images.pexels.com/photos/162568/oil-industry-power-radio-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Fuel filters for engines, generators and industrial equipment",
      count: 77,
      path: "/category/fuel"
    },
    {
      name: Category.HYDRAULIC,
      icon: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "High-pressure hydraulic filtration for industrial machinery",
      count: 112,
      path: "/category/hydraulic"
    },
    {
      name: Category.CUSTOM,
      icon: "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Custom-engineered filtration solutions for specific applications",
      count: 58,
      path: "/category/custom"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find the Right Filter Solution</h2>
          <p className="text-gray-600">
            Browse our comprehensive selection of industrial filters categorized by application type.
            From air and water to specialized custom solutions, we have the right filter for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.path}
              className="group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{category.count} products</span>
                  <span className="text-blue-600 group-hover:text-blue-800 font-medium transition-colors">
                    Explore →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;