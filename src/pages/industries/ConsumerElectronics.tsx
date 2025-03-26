// import React from 'react'

import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function ConsumerElectronics() {
  return (
    <div>
       <div className="flex justify-between mt-10 pt-10">
      <div className="Electronics flex flex-col justify-center   ">
        <h4 className="text-white font-semibold text-4xl ml-5">Consumer Electronics
        </h4>
        <p className="text-white text-lg mt-3 ml-5">
        TurnPikeAnalyst is specialized in your Consumer Electronic Industry's end to end IT infrastructure and software installations, upgrade, migration with managed services for small medium and large scale organizations.
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
        In the ever-changing realm of consumer electronics (CE), we at Turnpyke know how crucial it is to captivate consumers and provide them with
         unforgettable experiences. To assist our clients to thrive in this challenging environment, we offer cutting-edge knowledge and years of experience in 
         the relevant fields.


        </p >
        <p className="mb-5">
        Across the globe, our devoted CE teams work tirelessly to spur innovation and anticipate consumer needs. We work hard to strike a balance between
         providing innovative experiences and remaining within our clients’ price range in a market where both are important. While keeping costs low and
         returns high, our team is experts at finding fresh and exciting methods to interact with clients.


        </p >
        <p className="">
        Turnpyke helps consumer electronics companies reach their maximum potential, introduce ground-breaking goods to the market more quickly, and
         adapt to the needs of their diverse client base. To build compelling and differentiated customer experiences, our team of specialists is committed to
          combining technology, design thinking, and market data.


        </p>
        
        </div>
        
      </div>

      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default ConsumerElectronics
