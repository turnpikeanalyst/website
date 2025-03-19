import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function Professional() {
  return (
    <div>
         <div className="flex justify-between mt-10 pt-10">
      <div className="Profession flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Professional Services


        </h4>
        <p className="text-white text-lg ml-5 mt-5">
        Please try our professional services to help your system issue less and bug free, high end to 
        the edge




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
        Turnpyke’s mission is to help healthcare clients improve their service delivery, focus on their customers more, and set themselves apart from the 
        competition. We are aware of the critical importance of enhancing customer satisfaction, streamlining operations, and optimizing costs in this fast-
        paced industry.



        </p >
        <p className="mb-5">
        Our team of experts is here to help you every step of the way. We know how important it is to have a team of dedicated professionals on your side that
         aren’t afraid to roll up their sleeves and get the job done. We use cutting-edge business platforms, SLA-driven IT service delivery, risk assessments, and 
         a variety of other tactics to entice and keep the best employees.






        </p >
        <p className="mb-5">
        The results of using our products and services are noticeable and consequential. The results we’ve achieved for our customers include better 
        performance, cheaper costs, faster time to market, and happier customers. Together, we will help healthcare businesses face new challenges, respond 
        to shifting market conditions, and seize exciting new opportunities.




        </p>
        <p className="">
        When you make Turnpyke your go-to partner, you can count on cutting-edge ideas, top-notch service, and a focus on your patients that will make you
         stand out in the healthcare sector. We are committed to assisting you in reaching your objectives and producing outstanding achievements that provide 
         long-term business success.






        </p>
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 
    </div>
  )
}

export default Professional
