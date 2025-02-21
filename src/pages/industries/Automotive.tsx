import ContactForm from "@/components/ContactForm"
import ServicesSection from "@/components/ServicesSection"

function Automotive() {
  return (
    <div>
      <div>
      <div>
      <p>nmncneunucnunvun</p>
      </div>
      <div className="mt-7">

        <ContactForm/>
      </div>
      </div>

      <div className=" py-16 px-6 max-w-5xl mx-auto">
        <h2 className="font-bold text-3xl mb-4">Our Expertise </h2>
        <p className="text-gray-700 leading-relaxed">Here at Turnpyke, we advise businesses on how to make use of cutting-edge innovation to better serve their customers’ requirements 
          for improved safety, convenience, and other amenities. We work with our clients to help them adapt to the fast-evolving Automotive 
          Industry, which is being propelled by digital transformation and connectivity. We collaborate closely with car manufacturers, original
           equipment manufacturers (OEMs), and the extended supply chain to develop vehicles that are not only safer but also provide a more 
           pleasurable driving experience by combining traditional solutions with the disruptive potential of Industry 4.0 technol</p>


      </div>

      

      <div className="text-center py-12">
  <h2 className="text-3xl font-bold mb-2">Our Social Services</h2>
  <p className="text-gray-700 text-lg">Business is the activity of making one living or making money by producing or buying and selling products. 
    Simply put it is any activity or enterprise entered into for profit.</p>
</div>

<div className="text-center mb-12">
          <h2 className="text-3xl  font-normal mb-4 text-[#1e1b4b]">Our special services</h2>
          <p className="text-[#64748b] max-w-3xl mx-auto font-medium">
            Business is the activity of making one living or making money by producing or buying and selling products.
            Simply put it is any activity or enterprise entered into for profit.
          </p>
        </div>

<div>
  <ServicesSection/>
</div>
    

    </div>
  )
}

export default Automotive
