import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function MediaandInfo() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className=" relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(/corporate-management-strategy-solution-branding-concept.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Media & Info Services
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst works with Media and Information Services
              Companies to manage their infra as well as end-to-end software
              installations, upgrades, and migration with managed services.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ContactForm />
        </div>
      </div>

      <div className="mt-16">
        <p className="font-semibold text-4xl text-gray-900">Our Expertise</p>
        <div className="gap-4 text-gray-700 leading-relaxed">
          <p className="mb-5 mt-4">
            TurnPikeAnalyst recognizes the value of staying ahead of the curve
            in the dynamic media industry. Our Media Group’s mission is to aid
            businesses in the fields of Internet, publishing, broadcasting,
            entertainment, sports, advertising, education, and information in
            adapting to the digital age and achieving sustainable growth.
          </p>
          <p className="mb-5">
            Our end-to-end offerings are tailored to the specific requirements
            of the media industry, with an emphasis on delivering streamlined,
            scalable solutions that improve the user experience while minimizing
            operational expenses. Next-generation digital solutions that impress
            audiences and boost growth for your organization are what our team
            of specialists specializes in.
          </p>
          <p className="mb-5">
            We aid businesses in embracing digital transformation, streamlining
            processes, and optimizing costs with our comprehensive set of
            services. To ensure that our solutions are just what our customers
            need, we collaborate closely with them to identify their unique
            problems and objectives. We’re dedicated to ensuring that our
            clients are always at the forefront of the user experience by
            providing them with the tools they need to adopt cutting-edge
            digital platforms, optimize content distribution, and make use of
            data analytics to create truly unique and tailored interactions.
          </p>
          <p className="mb-5">
            TurnPikeAnalyst understands the significance of media business model
            innovation. We assist businesses in identifying untapped markets,
            developing strategies to monetize content, and adjusting to the
            ever-evolving nature of the industry. Our products and services give
            businesses the confidence they need to successfully navigate the
            digital landscape, expanding their opportunities for engaging with
            customers and fueling long-term expansion.
          </p>
          <p>
            Working with TurnPikeAnalyst means teaming up with a reliable
            partner who knows their way around the media business and can
            provide cutting-edge digital solutions. By working together, we can
            design groundbreaking user experiences, streamline operations, and
            catapult your company to new heights in the ever-evolving media
            landscape.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default MediaandInfo;
