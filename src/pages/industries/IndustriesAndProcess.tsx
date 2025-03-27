import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function IndustriesAndProcess() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/mech-mind-Xl_l8laGNs0-unsplash.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Industrial & Process Manufacturing
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst is specialized in your Industrial and Process
              Manufacturing end to end IT infrastructure and software
              installations, upgrade, migration with managed services for small
              medium and large scale organizations.
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
            TurnPikeAnalyst ’s primary mission is to facilitate digital
            transformation for the purpose of providing an exceptional customer
            experience. Working directly with our clients, we help them overcome
            the specific issues they confront in Industrial and Process
            Manufacturing on their path to operational excellence and increased
            customer satisfaction across the board.
          </p>
          <p className="mb-5">
            We provide end-to-end IT infrastructure and software solutions
            tailored to the industrial and process manufacturing sector. Our
            services enhance production efficiency, improve supply chain
            management, and integrate advanced automation technologies to meet
            industry demands.
          </p>
          <p className="mb-5">
            Our team leverages cutting-edge platforms, proprietary IPs, and a
            wide network of collaborators to drive innovation. We focus on
            streamlining processes, reducing operational costs, and enabling
            manufacturers to adapt quickly to market changes and customer needs.
          </p>
          <p className="mb-5">
            TurnPikeAnalyst helps industrial clients achieve operational
            excellence by implementing digital innovations such as IoT,
            real-time analytics, and predictive maintenance solutions. These
            tools empower manufacturers to optimize performance and deliver
            high-quality products consistently.
          </p>
          <p className="">
            Partner with TurnPikeAnalyst to transform your manufacturing
            operations, capitalize on digital advancements, and build a
            competitive edge in the industrial and process manufacturing
            landscape, delivering long-term value to your customers.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default IndustriesAndProcess;
