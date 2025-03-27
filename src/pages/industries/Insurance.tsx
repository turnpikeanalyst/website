import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function Insurance() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/real-estate-g3201fb00d_640.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Insurance
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst is specialized in your Insurance sector's
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
            TurnPikeAnalyst is an industry leader in digital transformation
            projects that harness the potential of big data and analytical
            insights to improve the customer experience. Since we have extensive
            experience in a wide range of fields, we are able to help insurance
            and reinsurance firms with the specific problems they confront in
            today’s ever-changing market.
          </p>
          <p className="mb-5">
            Sales and distribution, new business and underwriting, policy
            administration, claims management, billing and accounting, risk and
            compliance, brokerage, and third-party administration are just some
            of the many services we provide. We are prepared to meet the
            insurance industry’s complicated demands thanks to our extensive
            knowledge of design and engineering.
          </p>
          <p className="mb-5">
            We at TurnPikeAnalyst are confident in the revolutionary power of
            cutting-edge technologies. To allow digitally-enabled business
            processes and deliver domain-centric solutions, we leverage
            cognitive systems, robotics, HMIs, smart connected devices,
            next-generation application architectures, and software-defined
            everything. Our clients are able to optimize their operations,
            increase efficiency, and keep up with the ever-changing competitive
            landscape thanks to our use of state-of-the-art technologies.
          </p>
          <p className="mb-5">
            Our end-to-end IT solutions support insurance providers in
            streamlining claims processing, enhancing risk assessment, and
            improving customer engagement through secure, scalable platforms
            tailored to the industry’s unique regulatory and operational needs.
          </p>
          <p className="">
            When it comes to digital transformation, insurance, and reinsurance
            firms can rely on us as a reliable partner because of our dedication
            to excellence and deep knowledge of the sector and cutting-edge
            technology. By working together in the digital age, we can seize new
            possibilities, streamline processes, and provide outstanding
            experiences for customers.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default Insurance;
