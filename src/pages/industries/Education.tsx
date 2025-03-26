// import React from 'react'

import ContactForm from "@/components/ContactForm"
import SpecialSevices from "@/components/SpecialServices"

function Education() {
  return (
    <div>
       <div className="flex justify-between mt-10 pt-10">
      <div className="Education flex flex-col justify-center ">
        <h4 className="text-white font-semibold text-4xl ml-5 ">Education

        </h4>
        <p className="text-white text-lg ml-5">
        TurnPikeAnalyst is specialized in your Education sector end to end IT infrastructure and
         software installations, upgrade, migration with managed services for small medium and 
         large scale organizations.



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
        Keeping up with the times and embracing digital transformation is a challenge for educational institutions of all stripes in today’s quickly shifting 
        educational landscape. Fundamental changes are occurring in all levels of education, from preschool to graduate school to vocational programs. 
        Because of the widespread use of hybrid and flexible learning models, school administrators now need to rethink how they conduct day-to-day 
        business and provide resources to teachers and students.



        </p >
        <p className="mb-5">
        We at Turnpyke are aware of the critical need for immediate digital transformation in the academic community. We acknowledge the importance of
         boosting service efficiency, enhancing student performance, and providing an amazing overall experience at educational institutions. To achieve these 
         goals and shape a future where institutions provide value in teaching, research, and the overall student experience, technology is vital.




        </p >
        <p className="mb-5">
        In order to create strategies and solutions that are in line with your institution’s unique goals and challenges, our team of professionals combines in
        -depth industry experience with cutting-edge technologies. We collaborate with you to simplify administrative tasks, improve classroom instruction, and
         increase student-teacher interaction.



        </p>
        <p className="">
        It’s no secret that the world is becoming more and more technologically advanced at a rapid rate. Together, we can open doors, improve workflow, and
         give today’s youth the kind of education that will prepare them for tomorrow’s world. Allow us to serve as your reliable companion as you make the 
         transition to a more digitally-enhanced educational future.


        </p>
        
        </div>
        
      </div>

      <div>
        <SpecialSevices/>
        
      </div> 
      
    </div>
  )
}

export default Education
