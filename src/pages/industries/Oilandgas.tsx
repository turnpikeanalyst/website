import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function Oilandgas() {
  return (
    <div className="container mx-auto px-32 py-5">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/closeup-view-cylindrical-grinder-industrial-concept.jpg')`, // Replace with actual image path
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Oil & Gas
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst supports oil and gas companies with IT
              infrastructure, software upgrades, migrations, and managed
              services to optimize operations and drive sustainability.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ContactForm />
        </div>
      </div>

      {/* Expertise Section */}
      <div className="mt-16">
        <p className="font-semibold text-4xl text-gray-900">Our Expertise</p>
        <div className="gap-4 text-gray-700 leading-relaxed">
          <p className="mb-5 mt-4">
            TurnPikeAnalyst provides tailored solutions that help energy firms
            navigate industry challenges and seize new opportunities. By
            leveraging data, embracing innovation, and adopting modern business
            models, we enable energy companies to transform operations and stay
            resilient in a shifting market.
          </p>
          <p className="mb-5">
            Our team specializes in digital transformation, data integration,
            and cloud-native capabilities. We implement agile product and
            service models that enhance efficiency, boost productivity, and
            improve operational reliability.
          </p>
          <p className="mb-5">
            By consolidating data, extracting actionable insights, and managing
            complex technology environments, we help energy companies optimize
            operations, improve customer service, and drive sustainability.
          </p>
          <p className="mb-5">
            Utilizing advanced analytics, IoT, and automation, we optimize oil
            and gas exploration, production, and distribution. Our solutions
            enhance safety, reduce downtime, and ensure regulatory compliance,
            driving operational excellence.
          </p>
          <p>
            Our comprehensive oil and gas IT solutions help businesses overcome
            industry challenges while embracing new opportunities.
            TurnPikeAnalyst remains committed to supporting the energy sector’s
            digital transformation and ensuring success in an evolving
            landscape.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default Oilandgas;
