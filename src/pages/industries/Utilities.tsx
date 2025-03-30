import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function Utilities() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/sun-setting-silhouette-electricity-pylons.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Utilities
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst has strong presence in Utility industry starting
              from the whole infra management till automation to some critical
              processes
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
            Utilities are at the vanguard of the energy revolution, which is
            driving major change in the business as people everywhere turn to
            more sustainable fuels and widespread electrification. More and more
            homeowners and businesses are opting for eco-friendly dwellings and
            workplaces, and they demand cutting-edge services from their energy
            suppliers.
          </p>
          <p className="mb-5">
            Customer’s attention is being drawn away from incumbent utilities
            and toward newcomers offering novel services as the energy sector
            decentralizes. Governments spend huge sums updating the grid and
            increasing energy independence, yet the aging infrastructure and the
            introduction of new technology only make matters worse.
          </p>
          <p className="mb-5">
            TurnPikeAnalyst is helping electric, gas, and water utilities adapt
            to the changing market by utilizing digital and data capabilities to
            modernize their operations and provide better service to their
            customers. TurnPikeAnalyst helps utilities create consistent
            business value by embracing digital transformation, allowing them to
            meet their duty to provide stable service while also adapting to the
            changing needs of the current energy market.
          </p>
          <p className="">
            TurnPikeAnalyst helps utilities deal with the difficulties of a
            dynamic sector, speeding up the shift to a low-carbon, decentralized
            energy ecosystem. TurnPikeAnalyst aids utilities in streamlining
            operations, enhancing performance, and contributing to a future with
            sustainable energy by using the potential of digital technologies.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default Utilities;
