import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function MedicalDevices() {
  return (
    <div className="container mx-auto px-32 py-5">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(/smart-agriculture-iot-with-hand-planting-tree-background.jpg)`, // Replace with actual image path
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Medical Devices
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst partners with medical and pharmaceutical companies
              to manage their infrastructure, software installations, upgrades,
              and migrations with managed services.
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
            TurnPikeAnalyst is an industry leader in medical device technology,
            focusing on fostering innovation and delivering value. The
            healthcare industry presents unique challenges, and we assist our
            clients in overcoming them by developing innovative medical devices
            that enhance patient care and convenience.
          </p>
          <p className="mb-5">
            We simplify healthcare by integrating cutting-edge technologies into
            medical products. Our smart medical devices enable real-time
            monitoring, remote consultations, and personalized care through
            seamless connectivity, data collection, and AI-driven analysis,
            improving patient outcomes and making healthcare more accessible.
          </p>
          <p className="mb-5">
            Regulatory compliance is critical in the medical device sector.
            TurnPikeAnalyst ensures that all our solutions adhere to strict
            industry regulations, allowing businesses to confidently introduce
            new medical devices while maintaining the highest standards of
            quality and safety.
          </p>
          <p className="mb-5">
            By partnering with TurnPike, companies gain access to our expertise
            in medical device technology and our commitment to delivering
            cutting-edge solutions. We collaborate closely with clients to
            identify challenges and provide innovative, user-friendly medical
            technology solutions.
          </p>
          <p>
            Together, we can revolutionize healthcare, improve patient outcomes,
            and empower caregivers with next-generation medical devices.
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

export default MedicalDevices;
