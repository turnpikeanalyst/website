import ContactForm from "@/components/ContactForm";
import SpecialServices from "@/components/SpecialServices";

function AerospaceDefence() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2  mt-10 pt-10">
        {/* Left Column - Background Image with Text */}
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/terence-burke-ianPiLGoZBM-unsplash.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Aerospace & Defense
            </h2>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst has experienced resources to work on your
              Aerospace and Defense sector. We would take care of employees'
              background checks to work in that sector.
            </p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        {/* <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div> */}
        <div className="flex items-center justify-center">
          <ContactForm />
        </div>
      </div>

      {/* Special Services Section */}
      <div className="mt-16">
        <SpecialServices />
      </div>
    </div>
  );
}

export default AerospaceDefence;
