import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function PlatformandSoftware() {
  return (
    <div>
         <div className="flex justify-between mt-10 pt-10">
      <div className="Products flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Platforms & Software Products


        </h4>
        <p className="text-white text-lg ml-5 mt-5">
        Turnpikeanalyst support all platform and software, reach us for more detail.





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
        Turnpyke’s all-inclusive software development and maintenance services aim to cut down on software suppliers’ development and maintenance costs
         while speeding up their time to market. We are well-equipped to meet the varying needs of software vendors across industries thanks to our in-depth 
         knowledge of product engineering, business processes, and IT services.






        </p >
        <p className="mb-5">
        Game art, localization, customization, verification, and platform migration are just some of the game engineering services we offer. Our team is
         committed to providing innovative solutions that are at the forefront of the gaming industry and can satisfy the needs of today’s players.







        </p >
        <p className="mb-5">
        At Turnpyke, we know that dynamic business models are the key to sustained growth. We collaborate closely with software providers to help them save
         development time, speed up product release, and save money. By prioritizing effectiveness and creativity, we help our customers maintain a 
         competitive edge and realize their organizational objectives.

 



        </p>
        <p className="">
        Turnpyke is dedicated to providing high-quality solutions to our clients through our software development and maintenance services, which include
         game engineering. Our team is dedicated to assisting software companies in meeting their objectives and reaching their full potential in today’s 
         competitive industry.



        </p>
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default PlatformandSoftware
