import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function EngineeringConstruction() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/josue-isai-ramos-figueroa-qvBYnMuNJ9A-unsplash (1).jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Engineering Construction & Operations
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst is specialized in your Engineering and
              Construction end to end IT infrastructure and software
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
            At TurnPikeAnalyst , we understand that the engineering and
            construction industry faces unique challenges in today’s fast-paced
            environment. Our expertise helps clients streamline complex
            projects, improve operational efficiency, and deliver high-quality
            infrastructure solutions on time and within budget.
          </p>
          <p className="mb-5">
            We provide end-to-end IT infrastructure and software solutions
            tailored to the engineering and construction sector. From project
            management tools to advanced design software, our services support
            every phase of the construction lifecycle, ensuring seamless
            collaboration and data integration across teams.
          </p>
          <p className="mb-5">
            Our team leverages cutting-edge technologies like Building
            Information Modeling (BIM), cloud computing, and real-time analytics
            to help clients optimize resource allocation, reduce downtime, and
            enhance safety standards on construction sites.
          </p>
          <p className="mb-5">
            TurnPikeAnalyst partners with engineering and construction firms to
            modernize operations, implement digital transformation strategies,
            and manage large-scale projects with precision. We focus on
            delivering scalable solutions that adapt to the evolving needs of
            the industry.
          </p>
          <p className="">
            Collaborate with TurnPikeAnalyst to transform your engineering and
            construction operations, improve project outcomes, and build a
            foundation for long-term success in a competitive market.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default EngineeringConstruction;
