// import React from 'react'

import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function HealthCare() {
  return (
    <div>
       <div className="flex justify-between mt-10 pt-10">
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
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default HealthCare
