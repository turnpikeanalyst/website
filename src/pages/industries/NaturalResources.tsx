import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function NaturalResources() {
  return (
    <div className="container mx-auto px-32 py-5">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/smart-agriculture-iot-with-hand-planting-tree-background.jpg')`, // Replace with actual image path
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Natural Resources
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst supports natural resource companies with IT
              infrastructure, software upgrades, migrations, and managed
              services, ensuring sustainable operations for future generations.
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
            The mining industry faces challenges such as resource maximization,
            productivity enhancement, and long-term sustainability.
            TurnPikeAnalyst employs digital technology, analytics, automation,
            and process re-engineering to drive efficiency and optimize
            operations.
          </p>
          <p className="mb-5">
            Mining companies encounter declining commodity prices, low-grade
            ores, and increasing haul distances. Our industry expertise and
            flexible service models help clients overcome these obstacles by
            improving resource utilization and operational efficiency.
          </p>
          <p className="mb-5">
            We enable mining firms to make data-driven decisions, digitize
            workflows, and allocate resources efficiently. Our advanced
            analytics enhance operational performance and support proactive
            decision-making.
          </p>
          <p className="mb-5">
            Automation technology has revolutionized mining productivity. From
            exploration and extraction to logistics and maintenance, we identify
            areas where automation can boost efficiency, reduce costs, and
            minimize manual effort.
          </p>
          <p>
            By leveraging digital tools like AI-driven analytics, robotic
            process automation, and process re-engineering, we help mining
            operations stay competitive in a dynamic market.
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

export default NaturalResources;
