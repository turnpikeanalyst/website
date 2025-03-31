
import { careeImg, procesImg1, processImg2, processImg3, processImg4 } from "@/assets"
const Career = () => {


  const process = [
    {
      slno:"1",
      image: procesImg1,
      heading: "CV Submission",
      subHeading: "Submit your CV or resume through our online portal if you meet our requirements.",

    },
    {
      slno:"2",
      image: processImg2,
      heading: "Phone Screening",
      subHeading: "After looking at your CV you will be invited for a telephone interview at a time of your choosing.",


    },
    {
      slno:"3",
      image: processImg3,
      heading: "Skill Assessment",
      subHeading: "You will be invited at our head office to take a skills and knowledge assessment.",


    
  },
  
  {
    slno:"4",
    image: processImg4,
    heading: "Final Interview",
    subHeading: "If you can pass all stages we will invite you for a final interview with our CEO and HR executive.",


  
},


    
  ]
  return (
    <div className="mt-20">
     <div className="flex  justify-around p-5">
      <div>
        <p className="font-bold text-6xl mt-5">Join Our Team At </p>
      <p className="font-bold text-6xl text-orange-500 mt-5 ">TurnpikeAnalyst</p>
      <p className="text-gray-500 mt-6">Work at the most dynamic and successful agency</p>
      <button className="bg-orange-500 border rounded-full font-semibold text-white px-10 py-4 mt-16"> Contacts</button>
      
      </div>
      <div className="mt-4 p-5">
        <img src={careeImg} alt="" />
      </div>
     </div>

     <div className="flex justify-center">
     <div className="bg-orange-500 flex px-12 py-5 boarder rounded-xl gap-5 text-white font-semibold">
      <div className="p-2"><p>45+</p>
      <p>TEAM MEMBERS</p></div>
      <div className="p-2">
        <p>25+</p>
        <p>TOTAL PRODUCTS</p>
      </div>
      <div className="p-2">
        <p>571+</p>
        <p>HAPPY USERS</p>
      </div>
      <div className="p-2">
        <p>24K</p>
        <p>HAPPY MOMENT</p>
      </div>
      
     </div>
     </div>

     <div className="mt-5">
      <div className="flex justify-center items-center p-5">
        <p className="text-6xl font-semibold ">Learn Our Recruitment <span className="text-orange-500">Process</span></p>
      </div>
     </div>


     <div className="p-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {process.map((step) => (
          <div key={step.slno} className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200">
            <img src={step.image} alt={step.heading} className="w-16 h-16 mx-auto mb-4 rounded-full" />
            <h3 className="text-lg font-bold text-gray-800">{step.heading}</h3>
            <p className="text-gray-600 text-sm mt-2">{step.subHeading}</p>
          </div>
        ))}
      </div> 
    </div>
    </div> 
  )
}

export default Career
