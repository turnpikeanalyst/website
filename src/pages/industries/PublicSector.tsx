import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function PublicSector() {
  return (
    <div>
         <div className="flex justify-between mt-10 pt-10">
      <div className="PublicSector flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Public Sector


        </h4>
        <p className="text-white text-lg ml-5 mt-5">
        Public sector has a big opportunity and we are doing well serving their IT





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
        Turnpyke is committed to making governance in all its forms more interactive and empowering for all its constituents. The goal of our Public Sector 
        practice is to help governments save money while providing quality services to the public, private sector, and non-profit organizations.






        </p >
        <p className="mb-5 mt-4">
        To facilitate the development of cutting-edge e-governance models, we draw on our many collaborations and deep knowledge of digital technology to
         streamline essential infrastructure and applications. Governments throughout the world have successfully implemented our solutions in critical sectors 
         including public security, transportation, smart cities, and digital governance. Using our expertise, we assist government agencies in becoming more 
         cost-effective, scalable, and capable of providing better services to their constituents.







        </p >
       
        <p className="">
        We founded Turnpyke with the goal of helping governments better communicate with and serve their constituents. Governments can benefit from our
         knowledge, technology solutions, and best practices by working with us to improve the lives of their citizens and the quality of government overall. If 
         we work together, we can create a government that is better able to adapt to the changing requirements of the public.




        </p>
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default PublicSector
