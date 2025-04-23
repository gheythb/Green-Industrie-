import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600 mt-2">Our most popular industrial filtration solutions</p>
          </div>
          <a 
            href="/products" 
            className="hidden md:inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Products <ArrowRight className="ml-1 w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a 
            href="/products" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Products <ArrowRight className="ml-1 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;