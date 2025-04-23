import React from 'react';
import { ArrowRight, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact' | 'featured';
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  variant = 'default' 
}) => {
  const {
    id,
    name,
    shortDescription,
    price,
    images,
    category,
    inStock,
    certifications
  } = product;

  if (variant === 'compact') {
    return (
      <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <a href={`/product/${id}`}>
          <div className="relative h-48 overflow-hidden">
            <img
              src={images[0]}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-base font-semibold text-gray-800 mb-1 truncate">{name}</h3>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{shortDescription}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-bold">${price.toFixed(2)}</span>
              {inStock ? (
                <Badge variant="success" size="sm">In Stock</Badge>
              ) : (
                <Badge variant="warning" size="sm">Made to Order</Badge>
              )}
            </div>
          </div>
        </a>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src={images[0]}
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge variant="info" size="md">{category}</Badge>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
            <p className="text-gray-600 mb-4">{shortDescription}</p>
            
            <div className="mb-4">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600">Premium filtration technology</span>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600">Industry-leading performance</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600">Extended service life</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              {certifications.slice(0, 3).map((cert, index) => (
                <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded">
                  <span className="text-xs font-medium">{cert.name}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">${price.toFixed(2)}</span>
              <a 
                href={`/product/${id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View Details <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <a href={`/product/${id}`}>
          <div className="h-56 overflow-hidden">
            <img
              src={images[0]}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute top-2 left-2">
            <Badge variant="info">{category}</Badge>
          </div>
        </a>

        {/* Quick action buttons that appear on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="primary"
            size="sm"
            icon={<Eye className="w-4 h-4" />}
            onClick={() => window.location.href = `/product/${id}`}
          >
            Quick View
          </Button>
          <Button
            variant="secondary"
            size="sm"
            icon={<ShoppingCart className="w-4 h-4" />}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex mb-2">
          {certifications.slice(0, 3).map((cert, index) => (
            <div key={index} className="mr-1">
              <img
                src={cert.logo}
                alt={cert.name}
                title={cert.name}
                className="h-5 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <a href={`/product/${id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors">
            {name}
          </h3>
        </a>
        
        <p className="text-gray-600 mb-3 line-clamp-2">{shortDescription}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">${price.toFixed(2)}</span>
          <div>
            {inStock ? (
              <Badge variant="success">In Stock</Badge>
            ) : (
              <Badge variant="warning">Made to Order</Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;