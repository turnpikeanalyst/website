import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function Oilandgas() {
  return (
    <div>
      
      <div className="flex justify-between mt-10 pt-10">
      <div className="Oil flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Oil & Gas


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
        Turnpyke delivers customized solutions to help energy firms master industry obstacles and exploit emerging possibilities in the dynamic oil and gas
         market. To help businesses thrive in the face of market uncertainty, technological upheaval, and economic change, we provide cutting-edge oil and gas 
         industry solutions. We enable energy firms to transform their operations and adapt to the shifting sector by liberating data, leveraging innovation, and 
         unleashing new business models.





        </p >
        <p className="mb-5">
        Digital transformations, data integration, and the adoption of cloud platforms and cloud-native capabilities are areas of expertise for our team of
         business and IT professionals. Business value is delivered more quickly, operations are streamlined, efficiency is increased, productivity is boosted, and
          dependability is increased all thanks to agile product and service models. Turnpyke helps energy companies stay competitive and resilient by 
          consolidating data, gleaning actionable insights, and overseeing intricate technology environments.






        </p >
        <p className="mb-5">
        Our oil and gas consulting services help to streamline operations, improve customer service, and create a more sustainable future. Our all-
        encompassing oil and gas IT solutions can help your business overcome the problems you face and embrace the chances you have for growth and
         success in this dynamic industry. Turnpyke is dedicated to assisting the energy industry’s digital transition and ensuring its clients’ success in the face of
          constant change.





        </p>
       
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default Oilandgas
