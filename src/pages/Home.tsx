import asset10 from "@/assets/asset 10.png";
import asset102 from "@/assets/asset 102.jpeg";
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
    Autoplay({ delay: 3000 }),
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
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Improved vertical alignment and responsive padding */}
      <div
        className="min-h-[90vh] bg-cover bg-center text-white relative"
        style={{
          backgroundImage:
            "url('/home-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <main className="relative flex items-center justify-center py-12 md:py-20 min-h-[90vh]">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {carouselContent.map((item, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                      <div className="text-start max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                          {item.title}
                        </h2>
                        <p className="text-base md:text-lg text-gray-200">{item.description}</p>
                        <Button
                          variant="outline"
                          className="bg-transparent text-white border-teal-500 hover:bg-teal-500 hover:text-white transition-colors duration-300"
                        >
                          Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {carouselContent.map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`w-2 h-2 p-0 rounded-full ${
                      index === current ? "bg-teal-500" : "bg-gray-400"
                    }`}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Clients Section - Improved spacing and responsive design */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our clients include 150 Global Brands, Silicon Valley Founders
          </h2>
          <AutoScrollingCarousel images={images} />
        </div>
      </section>

      {/* What Makes Us Different Section - Improved grid layout and spacing */}
      <section className="py-20 bg-[#2d2d2d]">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <img
                src={asset102}
                alt="Technology illustration"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="space-y-6 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                What Makes Us Different?
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Since 2005, We Have Consistently Provided You With First-Rate
                Services For Nail Cores. We Take Additional Measures To Ensure
                Your Safety And Comfort. We Use High-Quality Components To Ensure
                You Receive The Best Service Possible. Just Call Us And We'll Set
                You Up With An Appointment For Nail Shine Shots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* About Us Section - Improved spacing and text alignment */}
      <section className="py-20 bg-[#001a2c]">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-yellow-400 font-semibold text-lg block">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
              Seamless Data Migration Service
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              TurnPikeAnalyst offers a faultless data migration solution, transferring your important information without a hitch from antiquated systems to cutting-edge ones. During the data migration procedure, our seasoned staff will guarantee the data's accuracy and integrity to keep disruptions to a minimum.
            </p>
            <Button 
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-8 py-3 text-lg"
            >
              View Price Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Improved card layout and spacing */}
      <section className="py-20 bg-black text-white">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "20", label: "Years Experience", color: "bg-[#ffecd9]" },
                { number: "10", label: "Area Coverage", color: "bg-[#e6f4ff]" },
                { number: "150", label: "Recent Projects", color: "bg-[#e6f4ff]" },
                { number: "10K", label: "Succeeded Projects", color: "bg-[#ffecd9]" },
              ].map((stat, index) => (
                <Card key={index} className={`p-6 ${stat.color} text-black`}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-blue-500 block">Why Choose</span>
                <h2 className="text-3xl font-bold">Hi, I'm James Webb,</h2>
                <p className="text-lg">
                  I AM YOUR HUMAN INTERFACE MEDIA TO INTERACT WITH{" "}
                  <span className="text-orange-500">TURNPIKEANALYST</span>
                </p>
                <p className="text-gray-400">
                  We use custom teams to help businesses scale their development, design &
                  digital marketing capabilities
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Solar powered equipment",
                  "Energy saving tools",
                  "Remodeling equipment from abroad",
                  "Insulated tools",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Make An Appointment
                </Button>
                <Button variant="link" className="text-green-500">
                  +1 (484) 747-9294
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewsSection/>
      <HomeContact/>
      <AwardsSection/>
    </div>
  );
}

