import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ShoppingCart, User, Phone } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Categories for the dropdown
  const categories = [
    { name: "Air Filters", path: "/category/air" },
    { name: "Water Filters", path: "/category/water" },
    { name: "Oil Filters", path: "/category/oil" },
    { name: "Fuel Filters", path: "/category/fuel" },
    { name: "Hydraulic Filters", path: "/category/hydraulic" },
    { name: "Custom Filters", path: "/category/custom" },
    { name: "HEPA Filters", path: "/category/hepa" },
  ];

  // Industries for the dropdown
  const industries = [
    { name: "Manufacturing", path: "/industry/manufacturing" },
    { name: "Automotive", path: "/industry/automotive" },
    { name: "HVAC", path: "/industry/hvac" },
    { name: "Oil & Gas", path: "/industry/oil-gas" },
    { name: "Pharmaceutical", path: "/industry/pharmaceutical" },
    { name: "Food Processing", path: "/industry/food-processing" },
  ];

  // Check if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top Bar with Contact Info */}
      <div className="hidden lg:block bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="h-4 w-4 mr-2" />
            <span>Sales Support: (800) 555-1234</span>
          </div>
          <div className="flex space-x-4">
            <a href="/login" className="text-sm text-gray-600 hover:text-green-600">Login</a>
            <a href="/register" className="text-sm text-gray-600 hover:text-green-600">Register</a>
            <a href="/support" className="text-sm text-gray-600 hover:text-green-600">Technical Support</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`container mx-auto px-4 py-4 transition-all ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-800">Green</span>
              <span className="text-teal-600 font-bold">Industries</span>
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search for filters, parts, or manufacturers..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <a href="/products" className="text-gray-700 hover:text-green-600 font-medium">Products</a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <a href="/industries" className="text-gray-700 hover:text-green-600 font-medium">Industries</a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {industries.map((industry) => (
                    <a
                      key={industry.name}
                      href={industry.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {industry.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="/resources" className="text-gray-700 hover:text-green-600 font-medium">Resources</a>
            <a href="/request-quote" className="text-gray-700 hover:text-green-600 font-medium">Request Quote</a>
            <a href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-green-600" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </a>
            <a href="/account">
              <User className="h-6 w-6 text-gray-700 hover:text-green-600" />
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center lg:hidden">
            <a href="/cart" className="mr-4 relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search filters..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <a href="/login" className="block py-2 text-gray-700">Login</a>
              </li>
              <li>
                <a href="/register" className="block py-2 text-gray-700">Register</a>
              </li>
              <li>
                <a href="/products" className="block py-2 text-gray-700 font-medium">Products</a>
                <ul className="pl-4 mt-2 space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <a
                        href={category.path}
                        className="block py-1 text-sm text-gray-600 hover:text-green-600"
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a href="/industries" className="block py-2 text-gray-700 font-medium">Industries</a>
                <ul className="pl-4 mt-2 space-y-2">
                  {industries.map((industry) => (
                    <li key={industry.name}>
                      <a
                        href={industry.path}
                        className="block py-1 text-sm text-gray-600 hover:text-green-600"
                      >
                        {industry.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a href="/resources" className="block py-2 text-gray-700">Resources</a>
              </li>
              <li>
                <a href="/request-quote" className="block py-2 text-gray-700">Request Quote</a>
              </li>
              <li>
                <a href="/support" className="block py-2 text-gray-700">Technical Support</a>
              </li>
              <li>
                <a href="/account" className="block py-2 text-gray-700">My Account</a>
              </li>
            </ul>
            <div className="mt-6">
              <Button 
                variant="primary" 
                fullWidth
              >
                Contact Sales Team
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;