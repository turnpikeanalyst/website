import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function ConsumerElectronics() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        {/* Left Column - Background Image with Text */}
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/sahand-babali-owjrvbyXYyc-unsplash.jpg')`, // Using .electronics from your CSS
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Consumer Electronics
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst is specialized in your Consumer Electronic
              Industry's end to end IT infrastructure and software
              installations, upgrade, migration with managed services for small
              medium and large scale organizations.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ContactForm />
        </div>
      </div>

      {/* Expertise Section */}
      <div className="mt-16">
        <p className="font-semibold text-4xl text-black">Our Expertise</p>
        <div className="gap-4 text-gray-600">
          <p className="mb-5 mt-4">
            In the ever-changing realm of consumer electronics (CE), we at
            TurnPikeAnalyst know how crucial it is to captivate consumers and
            provide them with unforgettable experiences. To assist our clients
            to thrive in this challenging environment, we offer cutting-edge
            knowledge and years of experience in the relevant fields.
          </p>
          <p className="mb-5">
            Across the globe, our devoted CE teams work tirelessly to spur
            innovation and anticipate consumer needs. We work hard to strike a
            balance between providing innovative experiences and remaining
            within our clients’ price range in a market where both are
            important. While keeping costs low and returns high, our team is
            experts at finding fresh and exciting methods to interact with
            clients.
          </p>
          <p className="mb-5">
            TurnPikeAnalyst helps consumer electronics companies reach their
            maximum potential, introduce ground-breaking goods to the market
            more quickly, and adapt to the needs of their diverse client base.
            To build compelling and differentiated customer experiences, our
            team of specialists is committed to combining technology, design
            thinking, and market data.
          </p>
          <p className="mb-5">
            We leverage our expertise in IT infrastructure, software solutions,
            and managed services to help our clients streamline operations,
            enhance product development cycles, and deliver innovative consumer
            electronics that stand out in a competitive market.
          </p>
          <p className="">
            Partner with TurnPikeAnalyst to unlock new opportunities, accelerate
            time-to-market, and create consumer electronics that resonate with
            today’s dynamic customer expectations.
          </p>
        </div>
      </div>

      {/* Special Services Section */}
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default ConsumerElectronics;
