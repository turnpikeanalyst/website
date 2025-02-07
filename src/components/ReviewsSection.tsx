import { Card } from "@/components/ui/card"
import img1 from "@/assets/asset 112.png"

export default function ReviewsSection() {
  return (
    <div className="relative">
      {/* Reviews Section */}
      <section className="w-full py-12 bg-zinc-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Read More Reviews</h2>
            <p className="text-lg text-zinc-300">Driving technology for leading brands</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="bg-transparent border-none p-4 flex items-center justify-center">
                <img 
                  src={img1}
                  alt="G2 5-star review" 
                  className="h-12 object-contain"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-black text-white py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-zinc-800 transform translate-x-1/2 rotate-6 origin-bottom"></div>
        </div>
        <div className="container px-4 mx-auto relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me To Book Your Slot</h2>
            <p className="text-lg text-zinc-300">
              Ready to unlock the full potential of your data? Get in touch with us today and discover how TurnPikeAnalyst can help drive your business forward.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

