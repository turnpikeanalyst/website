import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

interface Review {
  content: string
  author: string
  position: string
  company: string
  rating: number
}

const reviews: Review[] = [
  {
    content: "TurnPikeAnalyst transformed our data migration process. Their team's expertise helped us transition smoothly with minimal disruption. They truly understand enterprise data management.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "Global Tech Solutions",
    rating: 5,
  },
  {
    content: "We've been working with TurnPikeAnalyst for our ECM needs for over 3 years now. Their attention to detail and customer service is exceptional. Highly recommended!",
    author: "Michael Chen",
    position: "IT Director",
    company: "Healthcare Innovations",
    rating: 5,
  },
  {
    content: "The software development team at TurnPikeAnalyst delivered our custom solution ahead of schedule and under budget. Their agile approach kept us involved throughout the project.",
    author: "Emily Rodriguez",
    position: "Operations Manager",
    company: "Retail Dynamics",
    rating: 5,
  },
  {
    content: "Their cybersecurity solutions have given us peace of mind. The team is responsive, knowledgeable, and always up-to-date with the latest threats and countermeasures.",
    author: "David Kim",
    position: "Security Officer",
    company: "Financial Partners",
    rating: 5,
  },
]

export default function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
  }, [Autoplay({ delay: 6000 })]);
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our client relationships and the results we deliver. 
            Here's what some of our valued clients have to say about working with us.
          </p>
          <span className="block w-20 h-1 bg-blue-500 mx-auto mt-6"></span>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <Card className="h-full bg-white border-0 shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <Quote className="h-10 w-10 text-blue-500/20" />
                    </div>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 flex-grow">"{review.content}"</p>
                    
                    <div className="mt-auto">
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-500">{review.position}, {review.company}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-blue-500 w-8" : "bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

