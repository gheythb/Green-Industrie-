import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  industry: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The custom hydraulic filters designed for our manufacturing plant exceeded our expectations. We've seen a 30% reduction in equipment downtime since installation.",
      author: "Michael Reynolds",
      position: "Operations Director",
      company: "Precision Manufacturing Inc.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      industry: "Manufacturing"
    },
    {
      id: 2,
      quote: "FilterPro's water filtration systems have been crucial for our pharmaceutical production. Their technical support team provided excellent guidance through the selection and installation process.",
      author: "Sarah Johnson",
      position: "Facilities Manager",
      company: "MediPharm Solutions",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      industry: "Pharmaceutical"
    },
    {
      id: 3,
      quote: "We've been using FilterPro's industrial air filters in our food processing facility for over 5 years. Their products consistently meet our strict quality standards and regulatory requirements.",
      author: "David Martinez",
      position: "Quality Control Manager",
      company: "Fresh Foods Processing",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
      industry: "Food Processing"
    }
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-blue-200">
            See what our clients have to say about our industrial filtration solutions
            and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-blue-800 rounded-lg p-6 shadow-lg relative"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-4 right-4 text-blue-700 text-6xl font-serif opacity-30">
                "
              </div>
              
              {/* Rating stars */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                  />
                ))}
              </div>

              <p className="text-blue-100 mb-6 relative z-10">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-blue-300">{testimonial.position}</p>
                  <p className="text-sm text-blue-300">{testimonial.company}</p>
                </div>
              </div>
              
              {/* Industry badge */}
              <div className="absolute top-6 left-6 bg-blue-900/50 text-xs py-1 px-2 rounded-full">
                {testimonial.industry}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/case-studies" 
            className="inline-block bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            View Customer Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;