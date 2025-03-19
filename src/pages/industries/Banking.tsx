import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"


function Banking() {
  return (
    <div>
     
     <div className="flex justify-between mt-10 pt-10">
      <div className="banking flex flex-col justify-center">
        <h4 className="text-white font-bold text-4xl ">Banking
        </h4>
        <p className="text-white text-lg">
        TurnPikeAnalyst is specialized in your Banking and Finance, Insurance and Security Industry's 
        end to end IT infrastructure and software installations, upgrade, migration with managed services
         for small medium and large scale organizations.

 
        </p>

      </div>
      <div className="px-56 py-11 bg-blue-600">
      <div className=" bg-white p-5 py-6 px-7">

        <ContactForm/>
       </div>  
      </div>
      </div>
      <div className="px-60 py-10">
        <div>
          <p className="font-semibold text-4xl">Our Expertise
          </p>
        </div>
        <div className="gap-4 text-gray-600">
          <p className="mb-5 mt-4">
          Businesses are seizing new possibilities to transform their offerings and capabilities with the help of Turnpyke’s deep knowledge of banking and 
          technology, and are making the transition from standardized products to customized services. One important part of this change is adopting cloud computing.
          </p>
          <p className="mb-5">
          Successful executives in the financial services industry may open up new revenue streams, propel innovation, and scale their businesses significantly by 
          utilizing the cloud as a game-changing platform. Cloud systems have consistent processes and controls, making them resistant to extraordinary 
          occurrences like capacity strain, remote working difficulties, cyber-attacks, and volume spikes, in contrast to traditional, decentralized systems.


          </p>

          <p className="mb-5">
          Turnpyke is a reliable partner because of the strong relationships it has forged with industry-leading cloud service providers. Analysts have taken
           notice of the many awards, certifications, and satisfied customers that have used our FullStride Cloud Services.


          </p>
          <p className="mb-5">
          Banks need to use cloud computing and a robust partner ecosystem to survive in a rapidly changing business environment and take advantage of
           technological advances to create novel business models. With Turnpyke, customers can improve the efficacy and efficiency of their banking value
            proposition through a network of collaborative relationships and data-powered insights. Our global network of innovation laboratories, strategic 
            relationships with leading fintech companies, and investments in cutting-edge software products and crowdsourcing sites like TopCoder have allowed 
            us to develop formidable capabilities. Payments, digital channels, credit services, digital core, and commercial and corporate banking are just some of 
            the areas where our consulting team helps banks create the future. Our artificial intelligence platform that helps financial institutions improve the 
            effectiveness of processes including application management, infrastructure management, and testing.


          </p>

          <p>
          For transformation journeys to be fruitful, the complicated cloud partner ecosystem must be effectively orchestrated, integrated, and simplified.
           Turnpyke is ready to serve as your trusted partner and show you how to maximize the benefits of cloud computing for your financial institution.
           </p>
        </div>
      </div>

      

      <div>
        <SpecialSevices/>
        
      </div> 

    </div>
  )
}

export default Banking
