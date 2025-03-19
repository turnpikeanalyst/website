import ContactForm from '@/components/ContactForm'
import SpecialSevices from '@/components/SpecialServices'

function Medicaldevices() {
  return (
    <div>
       <div className="flex justify-between mt-10 pt-10">
      <div className="MediaInfo flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">
        Medical Devices



        </h4>
        <p className="text-white text-lg ml-5 mt-5">
        TurnPikeAnalyst works with medicine and medical and pharma companies to manage their
         infra as well as end to end software installations, upgrade, migration with managed 
         services






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
        Turnpyke is an industry leader in medical device technology, where we focus on fostering innovation and adding value. The healthcare business presents
         its own set of issues and opportunities, and we’re dedicated to assisting our clients in meeting those challenges and seizing those chances through the
          creation of innovative medical devices that improve patient care and increase patient convenience.







        </p >
        <p className="mb-5">
        We make healthcare easier for everyone involved by incorporating cutting-edge technologies into medical products. Real-time monitoring, remote 
        consultations, and individualized care are all made possible by the seamless connection, data collecting, and analysis enabled by our linked devices.
         This boosts patient outcomes and makes healthcare more accessible and convenient.








        </p >
        <p className="mb-5">
        Turnpyke understands the significance of following all applicable regulations in the medical device sector. Our services are tailored to conform to strict 
        regulatory standards, giving our customers faith in releasing new and innovative medical devices without compromising on quality or safety.




        </p>
        <p className="mb-5">
        Working with Turnpyke gives you access to our in-depth knowledge of medical device technology and our dedication to providing cutting-edge answers
         to your problems. We partner with our customers to identify their unique needs and problems, and then use our knowledge and experience to provide 
         value and facilitate ease of use through cutting-edge medical device technology.





        </p>

        <p className="">
        The healthcare system can be revolutionized, patient outcomes can be enhanced, and caregivers can be given access to cutting-edge resources if we 
        work together to develop next-generation medical equipment.



        </p>
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 

    </div>
  )
}

export default Medicaldevices
