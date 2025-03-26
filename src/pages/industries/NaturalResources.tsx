import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function NaturalResources() {
  return (
    <div>
         <div className="flex justify-between mt-10 pt-10">
      <div className="Natural flex flex-col  justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Natural Resources


        </h4>
        <p className="text-white text-lg ml-5 mt-5">
        TurnPikeAnalyst supports all companies and their on going system. Natural resources
         should be preserved for future generation





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
        Turnpyke is familiar with the difficulties inherent in the mining industry, including the need for resource maximization, increased productivity, and long-
        term viability. To realize the maximum potential for efficiency increase in the mining industry, we employ digital technology, analytics, automation, and
         process re-engineering.






        </p >
        <p className="mb-5">
       
        Many challenges, including declining commodity prices, low-grade ore, increased haul distances, and blocked capital projects, are being experienced by
         the mining industry. Our industry knowledge and adaptable as-a-service models help our clients overcome these obstacles by maximizing the value of
          their resources and improving operational efficiency.







        </p >
        <p className="mb-5">
        We help mining firms use data to guide their decisions, digitize their operations, and allocate their resources more effectively. For proactive decision-
        making and higher operational performance in mining, our cutting-edge analytics skills are invaluable.





        </p>
        <p className="mb-5">
        The mining industry’s productivity has benefited greatly from the widespread adoption of automation technology. From exploration and extraction 
        through logistics and maintenance, we find places in the mining process that could benefit from being automated. Increasing productivity, decreasing
         expenses, and decreasing the amount of time spent on routine chores are all possible thanks to automation.






        </p>
        <p>
        Together, we can harness the power of digital tools like data analytics, robotic process automation, and process re-engineering to boost mining 
        operations’ efficiency and competitiveness in a dynamic market.


        </p>
        
        </div>
        
      </div>




      <div>
        <SpecialSevices/>
        
      </div> 
      
    </div>
  )
}

export default NaturalResources
