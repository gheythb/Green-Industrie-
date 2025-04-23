import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/products';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { ChevronRight, Minus, Plus, Truck, Shield, Download, Info, Check } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const relatedProducts = product ? getRelatedProducts(product) : [];
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Button
              variant="primary"
              onClick={() => window.location.href = '/products'}
            >
              Browse Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <nav className="flex text-sm text-gray-500">
              <a href="/" className="hover:text-blue-600">Home</a>
              <ChevronRight className="mx-2 h-4 w-4" />
              <a href="/products" className="hover:text-blue-600">Products</a>
              <ChevronRight className="mx-2 h-4 w-4" />
              <a href={`/category/${product.category.toLowerCase()}`} className="hover:text-blue-600">
                {product.category}
              </a>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="text-gray-700">{product.name}</span>
            </nav>
          </div>

          {/* Product Detail Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Product Images */}
            <div>
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-4">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-80 md:h-96 object-contain p-4"
                />
              </div>
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 border ${
                      activeImage === index
                        ? 'border-blue-500'
                        : 'border-gray-200'
                    } rounded-md overflow-hidden`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-2">
                <Badge variant="info">{product.category}</Badge>
                {product.inStock ? (
                  <Badge variant="success" className="ml-2">In Stock</Badge>
                ) : (
                  <Badge variant="warning" className="ml-2">Made to Order</Badge>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                {product.minimumOrder > 1 && (
                  <span className="text-sm text-gray-500 ml-2">
                    Minimum order: {product.minimumOrder} units
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">{product.shortDescription}</p>
              
              {/* Key Features */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Add to Cart */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={decrementQuantity}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <Button 
                    variant="primary"
                    size="lg"
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="secondary"
                    size="lg"
                  >
                    Request Quote
                  </Button>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Truck className="h-4 w-4 mr-2 text-blue-600" />
                    <span>
                      Typically ships in <strong>{product.leadTime}</strong>
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Covered by our industrial quality guarantee</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Info className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Need help? Contact our technical support team</span>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              {product.certifications.length > 0 && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h2>
                  <div className="flex flex-wrap gap-3">
                    {product.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center bg-white px-3 py-2 rounded border border-gray-200">
                        <img
                          src={cert.logo}
                          alt={cert.name}
                          className="h-6 w-auto mr-2"
                        />
                        <span className="text-sm font-medium">{cert.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Technical Resources */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Technical Resources</h2>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Download className="h-4 w-4" />}
                  >
                    Spec Sheet
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Download className="h-4 w-4" />}
                  >
                    Installation Guide
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Download className="h-4 w-4" />}
                  >
                    CAD Drawings
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mb-16">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === 'description'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === 'specifications'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('compatibility')}
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === 'compatibility'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Compatibility
                </button>
                <button
                  onClick={() => setActiveTab('documentation')}
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === 'documentation'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Documentation
                </button>
              </nav>
            </div>

            <div className="py-6">
              {activeTab === 'description' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">{product.description}</p>
                    <h3 className="text-xl font-semibold mb-2">Features</h3>
                    <ul className="list-disc pl-5 mb-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="mb-1">{feature}</li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Applications</h3>
                    <p>
                      The {product.name} is designed for use in {product.industry.join(', ')} applications, 
                      providing reliable filtration performance in demanding industrial environments.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Specification
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {product.specifications.map((spec, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {spec.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {spec.value} {spec.unit && spec.unit}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'compatibility' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Compatibility Information</h2>
                  <p className="text-gray-600 mb-4">
                    The {product.name} is compatible with the following equipment and systems:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.compatibleWith.map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span className="font-medium">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-900">Compatibility Assistance</p>
                        <p className="text-blue-800 text-sm">
                          Not sure if this filter is compatible with your equipment?
                          Contact our technical support team for assistance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'documentation' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Documentation</h2>
                  <p className="text-gray-600 mb-6">
                    Download the following technical documents for the {product.name}:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Document className="h-8 w-8 text-red-500 mr-3" />
                        <div>
                          <h3 className="font-semibold">Product Specification Sheet</h3>
                          <p className="text-xs text-gray-500">PDF, 2.4MB</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<Download className="h-4 w-4" />}
                        fullWidth
                      >
                        Download
                      </Button>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Document className="h-8 w-8 text-blue-500 mr-3" />
                        <div>
                          <h3 className="font-semibold">Installation Manual</h3>
                          <p className="text-xs text-gray-500">PDF, 3.1MB</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<Download className="h-4 w-4" />}
                        fullWidth
                      >
                        Download
                      </Button>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Document className="h-8 w-8 text-green-500 mr-3" />
                        <div>
                          <h3 className="font-semibold">Maintenance Guide</h3>
                          <p className="text-xs text-gray-500">PDF, 1.8MB</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<Download className="h-4 w-4" />}
                        fullWidth
                      >
                        Download
                      </Button>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Document className="h-8 w-8 text-purple-500 mr-3" />
                        <div>
                          <h3 className="font-semibold">CAD Drawings</h3>
                          <p className="text-xs text-gray-500">ZIP, 5.2MB</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<Download className="h-4 w-4" />}
                        fullWidth
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
                <a
                  href={`/category/${product.category.toLowerCase()}`}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  View All <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Technical Support CTA */}
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Technical Support?</h2>
                <p className="text-gray-600 mb-6">
                  Our team of filtration experts is ready to help you with product selection,
                  installation guidance, or custom filtration solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                  >
                    Contact Technical Support
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                  >
                    Request Custom Solution
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Technical Support"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Import needed for tab icon
const Document = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
};

export default ProductPage;