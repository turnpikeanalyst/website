import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function Utilities() {
  return (
    <div>
         <div className="flex justify-between mt-10 pt-10">
      <div className="Utilities flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Utilities


        </h4>
        <p className="text-white text-lg ml-5 mt-5">
        Turnpike has strong presence in Utility industry starting from the whole infra management 
        till automation to some critical processes





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
        Utilities are at the vanguard of the energy revolution, which is driving major change in the business as people everywhere turn to more sustainable
         fuels and widespread electrification. More and more homeowners and businesses are opting for eco-friendly dwellings and workplaces, and they
          demand cutting-edge services from their energy suppliers.





        </p >
        <p className="mb-5">
        Customer’s attention is being drawn away from incumbent utilities and toward newcomers offering novel services as the energy sector decentralizes.
         Governments spend huge sums updating the grid and increasing energy independence, yet the aging infrastructure and the introduction of new 
         technology only make matters worse.






        </p >
        <p className="mb-5">
        Turnpyke is helping electric, gas, and water utilities adapt to the changing market by utilizing digital and data capabilities to modernize their 
        operations and provide better service to their customers. Turnpyke helps utilities create consistent business value by embracing digital transformation,
         allowing them to meet their duty to provide stable service while also adapting to the changing needs of the current energy market.




        </p>
        <p className="">
        Turnpyke helps utilities deal with the difficulties of a dynamic sector, speeding up the shift to a low-carbon, decentralized energy ecosystem. Turnpyke 
        aids utilities in streamlining operations, enhancing performance, and contributing to a future with sustainable energy by using the potential of digital
         technologies.





        </p>
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default Utilities
