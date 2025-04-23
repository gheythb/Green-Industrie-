import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Green Industries</h3>
            <p className="text-gray-400 mb-4">
              Your trusted source for industrial filtration solutions since 1985.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-400" />
                <span>(800) 555-1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-400" />
                <span>info@greenindustries.example.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-green-400 mt-1" />
                <span>123 Filtration Way<br />Industrial Park, CA 92101</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-gray-400 hover:text-white transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/industries" className="text-gray-400 hover:text-white transition">
                  Industries
                </a>
              </li>
              <li>
                <a href="/request-quote" className="text-gray-400 hover:text-white transition">
                  Request a Quote
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-400 hover:text-white transition">
                  Resources
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="/category/air" className="text-gray-400 hover:text-white transition">
                  Air Filters
                </a>
              </li>
              <li>
                <a href="/category/water" className="text-gray-400 hover:text-white transition">
                  Water Filters
                </a>
              </li>
              <li>
                <a href="/category/oil" className="text-gray-400 hover:text-white transition">
                  Oil Filters
                </a>
              </li>
              <li>
                <a href="/category/fuel" className="text-gray-400 hover:text-white transition">
                  Fuel Filters
                </a>
              </li>
              <li>
                <a href="/category/hydraulic" className="text-gray-400 hover:text-white transition">
                  Hydraulic Filters
                </a>
              </li>
              <li>
                <a href="/category/custom" className="text-gray-400 hover:text-white transition">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest product updates and industry news.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Green Industries. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;