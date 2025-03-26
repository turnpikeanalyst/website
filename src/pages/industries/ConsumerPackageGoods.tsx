// import React from 'react'

import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function ConsumerPackageGoods() {
  return (
    <div>
       <div className="flex justify-between mt-10 pt-10">
      <div className="Consumer flex flex-col justify-center ">
        <h4 className="text-white font-semibold text-4xl  mb-3 ml-5">Consumer Packaged Goods

        </h4>
        <p className="text-white text- ml-5">
        TurnPikeAnalyst is specialized in your Consumer and Packaging Industry's end to end IT
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
        <p className="mb-5 mt-4">
        Today’s consumer packaged goods (CPG) businesses rely heavily on their supply chains to thrive in this age of constant change. Brands can expand and
         prosper in the market thanks to the expert management of their supply chains. At Turnpyke, we know that efficient supply chains are crucial to the 
         growth of any company and the happiness of its clientele.



        </p >
        <p className="mb-5">
        Our specialized CPG expertise is meant to aid businesses in implementing digital changes tailored to their industry, hence resulting in more robust and
         efficient supply chains. We see supply chains as more than simply a necessary evil; they are a strategic tool for expanding revenue streams and
          retaining loyal patronage.



        </p >
        <p className="mb-5">
        Through our cutting-edge analytics solutions, we help businesses gain insights that improve their decision-making and allow them to focus more on
         their customers. Our customers may remain ahead of the competition and better serve their customers by leveraging data to obtain insight into 
         consumer behavior and market dynamics.


        </p>
        <p className="">
        Working with Turnpyke, you can turn your supply chain into a competitive advantage that positively impacts growth, efficiency, and customer
         satisfaction. By working together, we can find our way through the crowded consumer packaged products market, find untapped potential, and mold
          the future of your company.


        </p>
        
        </div>
        
      </div>


      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default ConsumerPackageGoods
