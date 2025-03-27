import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function TransportationAndServices() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/full-shot-man-walking-by-trucks-fleet.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Transportation & Services
            </h4>
            <p className="text-lg text-gray-100">
              Turnpike has strong presence in transportation services. Turnpike
              manages software required for building the tools, machine parts
              for auto companies, manages their ERP, raw materials to sales
              completion of a truck or auto
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
            TurnPikeAnalyst ’s mission is to revolutionize the travel and
            transportation business by combining cutting-edge technology with
            unmatched knowledge to provide cutting-edge, customer-centric
            solutions. In order to assist our clients succeed in this cutthroat
            industry, we employ cutting-edge technology that provides us a
            competitive edge.
          </p>
          <p className="mb-5">
            To help our clients stand out from the crowd, we take an integrated
            approach that incorporates design, business strategy, process
            management, and technology.
          </p>
          <p className="">
            By combining our in-depth expertise with cutting-edge technological
            capabilities, we assist our clients to modernize their operations
            and expand their product lines. We work hard to equip our clients to
            anticipate market shifts and provide outstanding value to their
            consumers through the use of cutting-edge digital solutions,
            streamlined procedures, and improved customer journeys.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default TransportationAndServices;
