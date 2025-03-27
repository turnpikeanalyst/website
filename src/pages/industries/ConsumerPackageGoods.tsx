import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function ConsumerPackageGoods() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        {/* Left Column - Background Image with Text */}
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/fikri-rasyid-ezeC8-clZSs-unsplash (1).jpg')`, // Using .consumer from your CSS
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Consumer Packaged Goods
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst is specialized in your Consumer and Packaging
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
            Today’s consumer packaged goods (CPG) businesses rely heavily on
            their supply chains to thrive in this age of constant change. Brands
            can expand and prosper in the market thanks to the expert management
            of their supply chains. At TurnPikeAnalyst , we know that efficient
            supply chains are crucial to the growth of any company and the
            happiness of its clientele.
          </p>
          <p className="mb-5">
            Our specialized CPG expertise is meant to aid businesses in
            implementing digital changes tailored to their industry, hence
            resulting in more robust and efficient supply chains. We see supply
            chains as more than simply a necessary evil; they are a strategic
            tool for expanding revenue streams and retaining loyal patronage.
          </p>
          <p className="mb-5">
            Through our cutting-edge analytics solutions, we help businesses
            gain insights that improve their decision-making and allow them to
            focus more on their customers. Our customers may remain ahead of the
            competition and better serve their customers by leveraging data to
            obtain insight into consumer behavior and market dynamics.
          </p>
          <p className="mb-5">
            We provide end-to-end IT infrastructure and managed services that
            optimize supply chain operations, enhance product delivery, and
            ensure seamless integration of digital solutions tailored to the CPG
            industry’s unique needs.
          </p>
          <p className="">
            Working with TurnPikeAnalyst , you can turn your supply chain into a
            competitive advantage that positively impacts growth, efficiency,
            and customer satisfaction. By working together, we can find our way
            through the crowded consumer packaged products market, find untapped
            potential, and mold the future of your company.
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

export default ConsumerPackageGoods;
