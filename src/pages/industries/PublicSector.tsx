import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function PublicSector() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/business-people-board-room-meeting.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Public Sector
            </h4>
            <p className="text-lg text-gray-100">
              Public sector has a big opportunity and we are doing well serving
              their IT
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
            TurnPikeAnalyst is committed to making governance in all its forms
            more interactive and empowering for all its constituents. The goal
            of our Public Sector practice is to help governments save money
            while providing quality services to the public, private sector, and
            non-profit organizations.
          </p>
          <p className="mb-5 mt-4">
            To facilitate the development of cutting-edge e-governance models,
            we draw on our many collaborations and deep knowledge of digital
            technology to streamline essential infrastructure and applications.
            Governments throughout the world have successfully implemented our
            solutions in critical sectors including public security,
            transportation, smart cities, and digital governance. Using our
            expertise, we assist government agencies in becoming more
            cost-effective, scalable, and capable of providing better services
            to their constituents.
          </p>
          <p className="">
            We founded TurnPikeAnalyst with the goal of helping governments
            better communicate with and serve their constituents. Governments
            can benefit from our knowledge, technology solutions, and best
            practices by working with us to improve the lives of their citizens
            and the quality of government overall. If we work together, we can
            create a government that is better able to adapt to the changing
            requirements of the public.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default PublicSector;
