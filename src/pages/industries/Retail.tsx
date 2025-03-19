import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function Retail() {
  return (
    <div>
         <div className="flex justify-between mt-10 pt-10">
      <div className=" Retail flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Retail

        </h4>
        <p className="text-white text-lg ml-5 mt-5">
        Turnpike is also into retails customers system maintenance and
         enhancement projects





        </p>

      </div>
      <div className="px-56 py-11 bg-blue-600">
      <div className=" bg-white p-5 py-6 px-7">
        <ContactForm/>
       </div> 
      </div>
      </div>

      <div className=" px-60 py-10">
        <p className="font-semibold text-4xl  "> Our Expertise
        </p>
        <div className="gap-4 text-gray-600">
        <p className="mb-5 mt-4">
        Turnpyke understands the gravity of the shifting retail landscape and the imperative for companies to adjust to meet the needs of their target
         demographic. To help our clients accelerate their digital business transformations and capitalize on the newest technological breakthroughs, we have 
         accumulated considerable expertise working with prominent retailers throughout the world.






        </p >
        <p className="mb-5">
        The store layout, omnichannel customer experiences, merchandising, and supply chain optimization are just some of the areas in which our retail IT
         solutions excel. We help businesses implement AI/ML systems at the center of their retail operations, boosting productivity and allowing for data-
         driven decisions. We also spearhead technological modernization projects, such as speedy moves to the cloud and the replacement of antiquated
          infrastructure with cutting-edge tools and open-source software.







        </p >
        <p className="">
        We know the difficulties that the retail sector will face as it adapts to the “new normal,” including changes in customer expectations and spending 
        habits as well as difficulties with last-mile deliveries and personnel retraining. Turnpyke’s retail customer experience solutions equip organizations to
         meet these issues and prosper in a wide range of retail settings. We help retailers adapt quickly to new market conditions and technological advances
          by leveraging our expertise, resources, platforms, and strategic connections.





        </p>
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default Retail
