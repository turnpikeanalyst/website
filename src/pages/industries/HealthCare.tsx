import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function HealthCare() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/female-scientist-typing-her-computer-data-from-last-scientific-tests-chemistry-lab.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              HealthCare
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst is specialized in your HealthCare sector's
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
      <div className="mt-16">
        <p className="font-semibold text-4xl text-black">Our Expertise</p>
        <div className="gap-4 text-gray-600">
          <p className="mb-5 mt-4">
            At TurnPikeAnalyst , we recognize that the healthcare industry
            demands innovative IT solutions to improve patient care, streamline
            operations, and ensure regulatory compliance. Our expertise supports
            healthcare organizations in navigating the complexities of digital
            transformation in a highly sensitive field.
          </p>
          <p className="mb-5">
            We provide comprehensive IT infrastructure and software services
            tailored to healthcare needs, including electronic health record
            (EHR) systems, telemedicine platforms, and secure data management
            solutions that enhance operational efficiency and patient outcomes.
          </p>
          <p className="mb-5">
            Our team leverages advanced technologies such as cloud computing,
            AI-driven analytics, and cybersecurity measures to help healthcare
            providers deliver personalized care, protect sensitive patient data,
            and adapt to evolving industry standards.
          </p>
          <p className="mb-5">
            TurnPikeAnalyst partners with healthcare organizations to optimize
            workflows, reduce costs, and improve accessibility to critical
            services. We focus on delivering scalable, compliant solutions that
            meet the unique challenges of the healthcare sector.
          </p>
          <p className="">
            Collaborate with TurnPikeAnalyst to enhance your healthcare
            operations, improve patient experiences, and build a future-ready
            infrastructure that supports the well-being of your community.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default HealthCare;
