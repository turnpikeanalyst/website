import asset10 from "@/assets/asset 10.png";
// import asset102 from "@/assets/asset 102.jpeg";
import asset11 from "@/assets/asset 11.png";
import asset12 from "@/assets/asset 12.png";
import asset13 from "@/assets/asset 13.png";
import asset14 from "@/assets/asset 14.png";
import asset15 from "@/assets/asset 15.png";
import asset16 from "@/assets/asset 16.png";
import asset17 from "@/assets/asset 17.png";
import asset18 from "@/assets/asset 18.png";
import asset19 from "@/assets/asset 19.png";
import asset2 from "@/assets/asset 2.png";
import asset20 from "@/assets/asset 20.png";
import asset21 from "@/assets/asset 21.png";
import asset22 from "@/assets/asset 22.png";
import asset23 from "@/assets/asset 23.png";
import asset24 from "@/assets/asset 24.png";
import asset26 from "@/assets/asset 25.png";
import asset27 from "@/assets/asset 26.png";
import asset28 from "@/assets/asset 27.png";
import asset29 from "@/assets/asset 28.png";
import asset30 from "@/assets/asset 29.png";
import asset3 from "@/assets/asset 3.png";
import asset31 from "@/assets/asset 30.webp";
import asset32 from "@/assets/asset 31.png";
import asset33 from "@/assets/asset 32.png";
import asset34 from "@/assets/asset 33.png";
import asset35 from "@/assets/asset 34.png";
import asset37 from "@/assets/asset 36.png";
import asset38 from "@/assets/asset 37.png";
import asset39 from "@/assets/asset 38.png";
import asset4 from "@/assets/asset 4.png";
import asset5 from "@/assets/asset 5.webp";
import asset6 from "@/assets/asset 6.png";
import asset7 from "@/assets/asset 7.png";
import asset8 from "@/assets/asset 8.png";
import asset9 from "@/assets/asset 9.png";
import AwardsSection from "@/components/AwardzSection";
import HomeContact from "@/components/HomeContact";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Check } from 'lucide-react';
import { useCallback, useEffect, useState } from "react";

// Define types for our content and images
interface CarouselContent {
  title: string;
  description: string;
}

const carouselContent: CarouselContent[] = [
  {
    title: "Global leader in ECM",
    description:
      "TurnPikeAnalyst is dedicated to helping you maximize the value of your data. When you work with us, you'll have access to highly trained analysts that use cutting-edge methods to glean actionable insights that will aid you in making strategic decisions and propelling rapid expansion. In order to take your company to new heights, we can help you release the data's hidden potential.",
  },
  {
    title: "The Global Leader in ECM and Data Migration",
    description:
      "TurnPikeAnalyst stands as the global leader in ECM (Enterprise Content Management), ETL (Extract, Transform, Load), and ESB (Enterprise Service Bus) solutions. Our state-of-the-art tools and knowledge help companies worldwide streamline their operations, integrate their data without a hitch, and maximize productivity. Work with us to take advantage of these game-changing tools and maintain your position at the forefront of the digital world.",
  },
  {
    title: "Best-in-Class Software",
    description:
      "TurnPikeAnalyst provides industry-leading software products for a wide range of company requirements. Our leading software blends state-of-the-art components with intuitive user interfaces and powerful capabilities to deliver outstanding functionality and results. Take your company to new heights of efficiency and productivity by utilizing top-tier software.",
  },
];

const images = [
  asset2,
  asset3,
  asset4,
  asset5,
  asset6,
  asset7,
  asset8,
  asset9,
  asset10,
  asset11,
  asset12,
  asset13,
  asset14,
  asset15,
  asset16,
  asset17,
  asset18,
  asset19,
  asset20,
  asset21,
  asset22,
  asset23,
  asset24,
  asset26,
  asset27,
  asset28,
  asset29,
  asset30,
  asset31,
  asset32,
  asset33,
  asset34,
  asset35,
  asset37,
  asset38,
  asset39,
];

interface AutoScrollingCarouselProps {
  images: string[];
}

const AutoScrollingCarousel = ({ images }: AutoScrollingCarouselProps) => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const itemWidth = 25;
    const totalWidth = images.length * itemWidth;
    const duration = 70000;
    let animationFrameId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const newPosition = (progress / duration) * totalWidth;
      setTranslateX(-newPosition % totalWidth);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [images.length]);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-[80%] mx-auto overflow-hidden py-8">
        <div
          className="flex"
          style={{
            transform: `translateX(${translateX}%)`,
            transition: "transform 0.1s linear",
          }}
        >
          {[...images, ...images].map((src, index) => (
            <div key={index} className="flex-none w-1/4 px-4">
              <div className="p-4 h-20 flex items-center justify-center">
                <img
                  src={src}
                  alt={`Client logo ${index + 1}`}
                  className="object-contain w-auto h-full"
                  loading={index < images.length ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-black">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10"
          style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'center' 
          }}
        ></div>

        <div className="relative z-20">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {carouselContent.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 h-[80vh] relative"
                  style={{ 
                    backgroundImage: `url('/home-background.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    backgroundBlendMode: 'multiply'
                  }}
                >
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-8 lg:px-16">
                      <div className="max-w-3xl">
                        <h1 
                          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                          style={{ opacity: current === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
                        >
                          {item.title}
                        </h1>
                        <p 
                          className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
                          style={{ opacity: current === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out', transitionDelay: '0.2s' }}
                        >
                          {item.description}
                        </p>
                        <div 
                          className="flex flex-col sm:flex-row gap-4"
                          style={{ opacity: current === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out', transitionDelay: '0.4s' }}
                        >
                          <Button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg transition-colors duration-300 font-medium"
                          >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <Button 
                            className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-6 rounded-md text-lg transition-colors duration-300 font-medium"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-0 right-0 z-30">
            <div className="container mx-auto px-4">
              <div className="flex justify-center space-x-2">
                {carouselContent.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === index ? "bg-blue-500 w-8" : "bg-white/50"
                    }`}
                    onClick={() => emblaApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 relative">
            Trusted by Leading Companies
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-4"></span>
          </h2>
          <AutoScrollingCarousel images={images} />
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Special Services */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Special Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide specialized services tailored to your industry needs,
              ensuring you get the best solutions for your business.
            </p>
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-6"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 border-0 shadow-md">
              <div className="p-6">
                <div className="bg-blue-500/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Content Management</h3>
                <p className="text-gray-600 mb-6">
                  Our ECM solutions help you organize, manage, and utilize all your content efficiently, enhancing productivity and collaboration.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">Document Management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">Content Collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">Records Management</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Learn More</Button>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 border-0 shadow-md">
              <div className="p-6">
                <div className="bg-blue-500/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Migration & Integration</h3>
                <p className="text-gray-600 mb-6">
                  Our data migration services ensure smooth transitions between systems with minimal disruption to your business operations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">Legacy System Migration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">ETL Processes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">Data Quality Assurance</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Learn More</Button>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 border-0 shadow-md">
              <div className="p-6">
                <div className="bg-blue-500/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Software Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Our custom software solutions are designed to meet your specific business needs and streamline your operations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">Custom Development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">API Integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">Maintenance & Support</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Learn More</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Contact Section */}
      <HomeContact />
    </div>
  );
}

