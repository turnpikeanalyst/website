import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function Semiconductor() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/closeup-electronic-circuit-board-with-cpu-microchip-electronic-components-background.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Semiconductors
            </h4>
            <p className="text-lg text-gray-100">
              Semiconductor is the core of today;s chip based technology,
              TurnPikeAnalyst manages software for couple of core tech based
              companies
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
            TurnPikeAnalyst understands the importance of keeping up with the
            ever-evolving demands of consumers and businesses in the
            semiconductor sector. Our innovative technologies and streamlined
            product development cycles provide semiconductor companies with a
            competitive edge.
          </p>
          <p className="mb-5">
            TurnPikeAnalyst offers a wide variety of services to the
            semiconductor sector and has clients in the top ten. Product
            development and engineering, IT infrastructure management and cloud
            transformation, business application modernization, IT mergers and
            acquisitions, support for research and development, digital back and
            front offices, and cutting-edge semiconductor technology are just
            some of the areas in which we specialize.
          </p>
          <p className="mb-5">
            Patient-centered care is prioritized at TurnPikeAnalyst . Business
            strategies are rethought to put patients’ wants and needs first
            through the use of patient- centric data and digital processes.
          </p>
          <p className="">
            Silicon, firmware, host software, drivers, board and system design,
            testing, and pre-certification are just some of the areas that our
            technical solutions extend to throughout the product development
            lifecycle. We have the knowledge and experience to meet the specific
            needs of the semiconductor business, as evidenced by our extensive
            work with IDMs, Fabless firms, OSATs, and EDA suppliers across the
            value chain.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default Semiconductor;
