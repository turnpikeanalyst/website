// import React from 'react'

import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function LifeScienceAndPharma() {
  return (
    <div>
       <div className="flex justify-between mt-10 pt-10">
      <div className="LifeScience flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Life Sciences & Pharma

        </h4>
        <p className="text-white text-lg ml-5 mt-5">
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
        <p className="font-semibold text-4xl  "> Our Expertise
        </p>
        <div className="gap-4 text-gray-600">
        <p className="mb-5 mt-4">
        To advance accountable, cost-effective, and easily accessible healthcare, Turnpyke partners with pharmaceutical industry pioneers and leaders to 
        innovate and transform business. Using automation, cognitive learning, and business model innovation, our team of healthcare professionals and
         consultants is focused to releasing value from the company’s foundation.




        </p >
        <p className="mb-5">
        We think it’s important to lay a solid groundwork for healthcare’s future. We help our customers respond quickly to shifting market conditions by 
        providing as-a-service for infrastructure and systems of record, as well as systems of engagement. In addition to streamlining and saving money, our 
        novel ideas assist lower the cost of compliance and security.





        </p >
        <p className="mb-5">
        Patient-centered care is prioritized at Turnpyke. Business strategies are rethought to put patients’ wants and needs first through the use of patient-
        centric data and digital processes. 



        </p>
        <p className="">
        By working with Turnpyke, the pharmaceutical industry can adopt game-changing technologies, streamline its processes, and pave the way for a more
         transparent, equitable, and economical healthcare system. If we work together, we can change the face of medicine forever and improve the lives of 
         people everywhere.




        </p>
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default LifeScienceAndPharma
