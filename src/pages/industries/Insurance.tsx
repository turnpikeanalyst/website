// import React from 'react'

import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function Insurance() {
  return (
    <div>
       <div className="flex justify-between mt-10 pt-10">
      <div className="Insurance  flex flex-col justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-4 ">Insurance
        </h4>
        <p className="text-white text-lg ml-4">
        A small river named Duden flows by their place and supplies it with the necessary 
        regelialia. It is a paradise




        </p>

      </div>
      <div className="px-56 py-11 bg-blue-600">
      <div className=" bg-white p-5 py-6 px-7">
        <ContactForm/>
       </div> 
      </div>
      </div>
        
      <div className=" px-60 py-10">
        <p className="font-semibold text-4xl "> Our Expertise
        </p>
        <div className="gap-4 text-gray-600">
        <p className="mb-5 mt-4">
        Turnpyke is an industry leader in digital transformation projects that harness the potential of big data and analytical insights to improve the customer
         experience. Since we have extensive experience in a wide range of fields, we are able to help insurance and reinsurance firms with the specific problems
          they confront in today’s ever-changing market.




        </p >
        <p className="mb-5">
        Sales and distribution, new business and underwriting, policy administration, claims management, billing and accounting, risk and compliance,
         brokerage, and third-party administration are just some of the many services we provide. We are prepared to meet the insurance industry’s 
         complicated demands thanks to our extensive knowledge of design and engineering.






        </p >
        <p className="mb-5">
        We at Turnpyke are confident in the revolutionary power of cutting-edge technologies. To allow digitally-enabled business processes and deliver 
        domain-centric solutions, we leverage cognitive systems, robotics, HMIs, smart connected devices, next-generation application architectures, and 
        software-defined everything. Our clients are able to optimize their operations, increase efficiency, and keep up with the ever-changing competitive 
        landscape thanks to our use of state-of-the-art technologies.





        </p>
        <p className="">
        When it comes to digital transformation, insurance, and reinsurance firms can rely on us as a reliable partner because of our dedication to excellence 
        and deep knowledge of the sector and cutting-edge technology. By working together in the digital age, we can seize new possibilities, streamline 
        processes, and provide outstanding experiences for customers.



        </p>
        
        </div>
        
      </div>


      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default Insurance
