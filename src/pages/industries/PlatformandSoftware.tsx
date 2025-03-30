import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function PlatformandSoftware() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/standard-quality-control-concept-m-1.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Platforms & Software Products
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst support all platform and software, reach us for
              more detail.
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
            TurnPikeAnalyst's all-inclusive software development and maintenance
            services aim to cut down on software suppliers’ development and
            maintenance costs while speeding up their time to market. We are
            well-equipped to meet the varying needs of software vendors across
            industries thanks to our in-depth knowledge of product engineering,
            business processes, and IT services.
          </p>
          <p className="mb-5">
            Game art, localization, customization, verification, and platform
            migration are just some of the game engineering services we offer.
            Our team is committed to providing innovative solutions that are at
            the forefront of the gaming industry and can satisfy the needs of
            today’s players.
          </p>
          <p className="mb-5">
            At TurnPikeAnalyst , we know that dynamic business models are the
            key to sustained growth. We collaborate closely with software
            providers to help them save development time, speed up product
            release, and save money. By prioritizing effectiveness and
            creativity, we help our customers maintain a competitive edge and
            realize their organizational objectives.
          </p>
          <p className="">
            TurnPikeAnalyst is dedicated to providing high-quality solutions to
            our clients through our software development and maintenance
            services, which include game engineering. Our team is dedicated to
            assisting software companies in meeting their objectives and
            reaching their full potential in today’s competitive industry.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default PlatformandSoftware;
