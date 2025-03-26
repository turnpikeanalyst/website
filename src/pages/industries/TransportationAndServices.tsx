import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function TransportationAndServices() {
  return (
    <div>
         <div className="flex justify-between mt-10 pt-10">
      <div className="ManWalking flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Transportation & Services



        </h4>
        <p className="text-white text-lg ml-5 mt-5">
        Turnpike has strong presence in transportation services. Turnpike manages software 
        required for building the tools, machine parts for auto companies, manages their ERP, raw 
        materials to sales completion of a truck or auto





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
        Turnpyke’s mission is to revolutionize the travel and transportation business by combining cutting-edge technology with unmatched knowledge to 
        provide cutting-edge, customer-centric solutions. In order to assist our clients succeed in this cutthroat industry, we employ cutting-edge technology
         that provides us a competitive edge.






        </p >
        <p className="mb-5">
        To help our clients stand out from the crowd, we take an integrated approach that incorporates design, business strategy, process management, and
         technology.







        </p >
        
        <p className="">
        By combining our in-depth expertise with cutting-edge technological capabilities, we assist our clients to modernize their operations and expand their
         product lines. We work hard to equip our clients to anticipate market shifts and provide outstanding value to their consumers through the use of 
         cutting-edge digital solutions, streamlined procedures, and improved customer journeys.




        </p>
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default TransportationAndServices
