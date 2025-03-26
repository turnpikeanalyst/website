import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function Semiconductor() {
  return (
    <div>
         <div className="flex justify-between mt-10 pt-10">
      <div className="Semiconductor flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Semiconductors


        </h4>
        <p className="text-white text-lg ml-5 mt-5">
        Semiconductor is the core of today;s chip based technology, TurnPike
         manages software for couple of core tech based companies





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
        Turnpyke understands the importance of keeping up with the ever-evolving demands of consumers and businesses in the semiconductor sector. Our 
        innovative technologies and streamlined product development cycles provide semiconductor companies with a competitive edge.






        </p >
        <p className="mb-5">
        Turnpyke offers a wide variety of services to the semiconductor sector and has clients in the top ten. Product development and engineering, IT
         infrastructure management and cloud transformation, business application modernization, IT mergers and acquisitions, support for research and
          development, digital back and front offices, and cutting-edge semiconductor technology are just some of the areas in which we specialize.







        </p >
        <p className="mb-5">
        Patient-centered care is prioritized at Turnpyke. Business strategies are rethought to put patients’ wants and needs first through the use of patient-
        centric data and digital processes. 



        </p>
        <p className="">
        Silicon, firmware, host software, drivers, board and system design, testing, and pre-certification are just some of the areas that our technical solutions
         extend to throughout the product development lifecycle. We have the knowledge and experience to meet the specific needs of the semiconductor 
         business, as evidenced by our extensive work with IDMs, Fabless firms, OSATs, and EDA suppliers across the value chain.






        </p>
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default Semiconductor
