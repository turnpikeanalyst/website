import ContactForm from "@/components/ContactForm";
import ServicesSection from "@/components/ServicesSection";

function Automotive() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        {/* Left Column - Background Image with Text */}
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/full-shot-man-walking-by-trucks-fleet.jpg')`, // Using .manwalking from your CSS
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Automotive
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst specializes in helping automotive businesses
              leverage cutting-edge innovation to enhance safety, convenience,
              and customer satisfaction.
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
            Here at TurnPikeAnalyst , we advise businesses on how to make use of
            cutting-edge innovation to better serve their customers’
            requirements for improved safety, convenience, and other amenities.
            We work with our clients to help them adapt to the fast-evolving
            Automotive Industry, which is being propelled by digital
            transformation and connectivity.
          </p>
          <p className="mb-5">
            We collaborate closely with car manufacturers, original equipment
            manufacturers (OEMs), and the extended supply chain to develop
            vehicles that are not only safer but also provide a more pleasurable
            driving experience by combining traditional solutions with the
            disruptive potential of Industry 4.0 technology.
          </p>
          <p className="mb-5">
            Our expertise spans digital transformation, smart manufacturing, and
            connected vehicle solutions, enabling our clients to stay ahead in a
            competitive market while meeting evolving customer expectations.
          </p>
          <p className="mb-5">
            We provide tailored solutions that enhance vehicle safety, optimize
            production processes, and integrate advanced connectivity features,
            ensuring our automotive partners thrive in the era of Industry 4.0.
          </p>
          <p className="">
            Partner with TurnPikeAnalyst to drive innovation, improve customer
            experiences, and achieve sustainable success in the rapidly
            transforming automotive sector.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-16">
        <ServicesSection />
      </div>
    </div>
  );
}

export default Automotive;
