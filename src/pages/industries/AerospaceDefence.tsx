// import React from 'react'
import ContactForm from "@/components/ContactForm";
import SpecialServices from "@/components/SpecialServices";

// import ServicesSection from "@/components/ServicesSection"

function AerospaceDefence() {
  return (
    <div className="">
      <div className="flex justify-between mt-10 pt-10 sm:w-1/5">
      <div className="bg  flex flex-col items-center justify-center ">
        <h4 className="text-white font-bold text-4xl ">Aerospace & Defense
        </h4>
        <p className="text-white text-lg">
        TurnPikeAnalyst has experienced resources to work on your Aerospace and Defense sector.
         We would take care of employees back ground check to work on that sector.


        </p>

      </div>
      <div className="px-56 py-11 bg-blue-600"> 
      <div className=" bg-white p-5 py-6 px-7">
        <ContactForm/>
       </div> 
      </div>
      </div>

      <div>
        <SpecialServices/>
        
      </div> 

      


    </div>
  )
}

export default AerospaceDefence
