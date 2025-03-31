import React, { useState } from 'react';

// Define types for our component props
interface ServicePageProps {
  // Header section
  title: string;
  description: string;
  
  // Expertise content
  expertise: {
    heading?: string;
    paragraphs: string[];
  };
  
  // Image for the page
  imageSrc?: string;
  imageAlt?: string;
  
  // Background image for header
  headerBgImage?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  expertise,
  imageSrc,
  imageAlt = 'Service illustration',
  headerBgImage = '/hd-wallpaper-1846865_1920.jpg'
}) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('${headerBgImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {title}
            </h2>
            <p className="text-lg text-gray-100">
              {description}
            </p>
          </div>
        </div>

        {/* Right Column - Contact Form (matching the image) */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md p-6 rounded-lg" style={{ 
            background: 'linear-gradient(to bottom, #0a4d7e, #0c71b9)', 
            border: '1px solid white' 
          }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white/50 rounded text-white placeholder-gray-300"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white/50 rounded text-white placeholder-gray-300"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone no"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white/50 rounded text-white placeholder-gray-300"
              />
              
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white/50 rounded text-white placeholder-gray-300 h-32"
              />
              
              <div className="flex">
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-500 text-white font-bold uppercase rounded hover:bg-green-600 transition"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Expertise Content Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">{expertise.heading || 'Our Expertise'}</h2>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            {expertise.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
            ))}
          </div>
          
          {/* Image for the expertise section */}
          {imageSrc && (
            <div className="md:w-1/4 flex justify-center items-start pt-6 md:pt-0">
              <div className="w-48 h-48">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;