import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function Communications() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        {/* Left Column - Background Image with Text */}
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/skyscrapers-ge9fc59c2c_640.jpg')`, // Using .communication from your CSS
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Communications
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst is specialized in your Communicational Industry's
              end-to-end IT infrastructure and software installations, upgrades,
              migration with managed services for small, medium, and large scale
              organizations.
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
            Here at TurnPikeAnalyst , we know that in order to succeed in the
            competitive telecom business, we need to constantly innovate and
            adopt new, game-changing technology. To help our clients adapt to
            the ever-changing marketplace, the Communications Business Unit is
            committed to developing innovative technology solutions that improve
            the customer service they provide.
          </p>
          <p className="mb-5">
            We provide a whole spectrum of services and products designed with
            the telecommunications sector in mind. Clients benefit from our
            expertise in a wide range of areas, including but not limited to
            digital transformation strategies, advanced analytics, cloud
            computing, the Internet of Things (IoT), and next-generation
            networking technologies, allowing them to maximize their company’s
            potential and maintain a competitive edge.
          </p>
          <p className="mb-5">
            TurnPikeAnalyst helps telecommunications firms improve customer
            service, streamline operations, and discover untapped markets. The
            particular issues faced by our clients are met by our team of
            professionals because of their extensive understanding of the sector
            and technical competence. We assist our clients in navigating the
            ever-changing telecom industry by optimizing their operations,
            launching new services, and gaining actionable insights from their
            data.
          </p>
          <p className="mb-5">
            We are dedicated to equipping our customers with the resources and
            knowledge they need to succeed in the digital era, as disruptive
            technologies continue to transform the industry. Telecom firms can
            increase customer satisfaction, reduce costs, and open up new
            revenue streams all thanks to our knowledge and their openness to
            new ideas.
          </p>
          <p className="">
            Join up with TurnPikeAnalyst and we’ll assist you in adapting to the
            ever-shifting telecom industry, realizing the full potential of
            innovation, and achieving long-term success.
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

export default Communications;
