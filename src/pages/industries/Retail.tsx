import ContactForm from "@/components/ContactForm";
import SpecialSevices from "@/components/SpecialServices";

function Retail() {
  return (
    <div className="container mx-auto px-32 py-5">
      <div className="grid md:grid-cols-2 mt-10 pt-10">
        <div
          className="relative min-h-[500px] flex flex-col justify-center p-6 bg-cover bg-center text-white rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/family-shopping-with-face-mask.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Retail
            </h4>
            <p className="text-lg text-gray-100">
              TurnPikeAnalyst is also into retails customers system maintenance
              and enhancement projects
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
            TurnPikeAnalyst understands the gravity of the shifting retail
            landscape and the imperative for companies to adjust to meet the
            needs of their target demographic. To help our clients accelerate
            their digital business transformations and capitalize on the newest
            technological breakthroughs, we have accumulated considerable
            expertise working with prominent retailers throughout the world.
          </p>
          <p className="mb-5">
            The store layout, omnichannel customer experiences, merchandising,
            and supply chain optimization are just some of the areas in which
            our retail IT solutions excel. We help businesses implement AI/ML
            systems at the center of their retail operations, boosting
            productivity and allowing for data- driven decisions. We also
            spearhead technological modernization projects, such as speedy moves
            to the cloud and the replacement of antiquated infrastructure with
            cutting-edge tools and open-source software.
          </p>
          <p className="">
            We know the difficulties that the retail sector will face as it
            adapts to the “new normal,” including changes in customer
            expectations and spending habits as well as difficulties with
            last-mile deliveries and personnel retraining. TurnPikeAnalyst ’s
            retail customer experience solutions equip organizations to meet
            these issues and prosper in a wide range of retail settings. We help
            retailers adapt quickly to new market conditions and technological
            advances by leveraging our expertise, resources, platforms, and
            strategic connections.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <SpecialSevices />
      </div>
    </div>
  );
}

export default Retail;
