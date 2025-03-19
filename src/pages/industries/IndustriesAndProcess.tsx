// import React from 'react'

import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function IndustriesAndProcess() {
  return (
    <div>
       <div className="flex justify-between mt-10 pt-10">
      <div className="Industries flex flex-col items-center justify-center ">
        <h4 className="text-white font-semibold text-4xl ">Industrial & Process Manufacturing

        </h4>
        <p className="text-white text-lg">
        TurnPikeAnalyst is specialized in your Industrial and Process Manufacturing end to end IT
         infrastructure and software installations, upgrade, migration with managed services for
          small medium and large scale organizations.


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
        <p className=" mt-4">
        Turnpyke’s primary mission is to facilitate digital transformation for the purpose of providing an exceptional customer experience. Working directly with
         our clients, we help them overcome the specific issues they confront in Industrial and Process Manufacturing on their path to operational excellence 
         and increased customer satisfaction across the board. To effect positive change and provide long-term value for our customers, we constantly innovate
          by drawing on our own IPs and platforms as well as those of a wide network of collaborators. Our knowledge and individualized approaches help 
          companies take advantage of digital innovations and streamline their processes, allowing them to better serve their customers and compete in a 
          dynamic marketplace.






        </p >
       
        
        </div>
        
      </div>


      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default IndustriesAndProcess
