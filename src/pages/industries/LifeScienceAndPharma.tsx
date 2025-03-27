import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function LifeScienceAndPharma() {
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
              Life Sciences & Pharma
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst is specialized in your Life Sciences and Pharma
              sector's end-to-end IT infrastructure and software installations,
              upgrades, migration with managed services for small, medium, and
              large-scale organizations.
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
            To advance accountable, cost-effective, and easily accessible
            healthcare, TurnPikeAnalyst partners with pharmaceutical industry
            pioneers and leaders to innovate and transform business. Using
            automation, cognitive learning, and business model innovation, our
            team of healthcare professionals and consultants is focused on
            releasing value from the company’s foundation.
          </p>
          <p className="mb-5">
            We think it’s important to lay a solid groundwork for healthcare’s
            future. We help our customers respond quickly to shifting market
            conditions by providing as-a-service for infrastructure and systems
            of record, as well as systems of engagement. In addition to
            streamlining and saving money, our novel ideas assist lower the cost
            of compliance and security.
          </p>
          <p className="mb-5">
            Patient-centered care is prioritized at TurnPikeAnalyst . Business
            strategies are rethought to put patients’ wants and needs first
            through the use of patient-centric data and digital processes.
          </p>
          <p className="mb-5">
            Our expertise includes delivering IT solutions that enhance drug
            development, optimize clinical trials, and ensure regulatory
            compliance through secure, scalable platforms tailored to the life
            sciences and pharma industry’s unique requirements.
          </p>
          <p>
            By working with TurnPikeAnalyst , the pharmaceutical industry can
            adopt game-changing technologies, streamline its processes, and pave
            the way for a more transparent, equitable, and economical healthcare
            system. If we work together, we can change the face of medicine
            forever and improve the lives of people everywhere.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default LifeScienceAndPharma;
