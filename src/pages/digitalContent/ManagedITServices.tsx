const ManagedITServices = () => {
    return (
      <div className="font-sans text-gray-800 mt-24">
        {/* Hero Banner - Added top padding to account for fixed navbar */}
        <div className="max-w-6xl h-fit mx-auto text-white p-8 pt-24 relative overflow-hidden flex justify-center bg-contain repeat-0"
        style={{
          backgroundImage: `url('/digital.jpg')` ,
        }}>
          <div className="z-10 relative max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Managed IT Services</h1>
          </div>
        </div>
  
        {/* Introduction Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <p className="text-lg mb-8">
            Companies in today's fast-paced corporate environment are increasingly relying on Managed IT Services 
            to boost productivity and efficiency. Turnpike Analyst goes above and beyond the call of duty when it 
            comes to providing Managed Services for our clients. We provide IT services to our clients as a 
            Managed Service Provider (MSP), but we also help them make important strategic decisions and explain 
            them clearly.
          </p>
        </div>
  
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 mb-16">
          {/* Feature 1 */}
          <div className="bg-gray-800 text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Evolution of Managed IT Services</h2>
            <p className="mb-6">
              Traditionally, MSPs have centered their service delivery models around either infrastructure or 
              individual devices. With the advent of new technologies, however, MSPs' responsibilities have grown 
              to encompass providing ongoing administration, upkeep, and support for all manner of IT services. 
              Turnpike Analyst is an example of a modern MSP that offers a full suite of services, such as those 
              for managing networks, applications, and infrastructures, as well as providing security services. 
              Whether these services are housed in our data center or a trusted third-party facility, we actively 
              manage them for our customers on-premises, offering round-the-clock support and proactive monitoring.
            </p>
          </div>
  
          {/* Feature 2 - Image */}
          <div className="bg-gray-200 p-8 flex items-center justify-center">
            <div className="w-full h-64 bg-white shadow-md">
              <img src="/style_2_left1.jpeg" alt="" />
            </div>
          </div>
  
          {/* Feature 3 */}
          <div className="bg-gray-700 text-white p-8">
            <h2 className="text-2xl font-bold mb-4">What's Included in Managed IT Services?</h2>
            <p className="mb-6">
              We offer a full spectrum of hybrid IT infrastructure solutions as part of our Managed IT Services. 
              We have the ability to react immediately and handle all aspects of IT operations and installations. 
              Companies can cut down on the amount of work their own IT departments have to do by working with us, 
              or we can help fill in the gaps that exist. Our services allow companies to concentrate on what they 
              do best while we take care of their IT infrastructure.
            </p>
          </div>
  
          {/* Feature 4 */}
          <div className="bg-gray-100 p-8">
            <h2 className="text-2xl font-bold mb-4">Tips for Choosing the Best IT Managed Service Provider</h2>
            <p className="mb-6">
              When selecting a Managed IT Service Provider (MSP) for your business, it is crucial to consider 
              several factors that ensure a service provider meets your specific needs. Clearly define your 
              business goals and understand the infrastructure and workflows that need to be managed. Consider 
              your existing IT resources and determine the budget you are willing to invest in Managed Services. 
              Allow the shortlisted MSPs to conduct an audit of your existing IT system to provide insights into 
              their ability to handle and manage your assets effectively.
            </p>
          </div>
        </div>
  
        {/* Additional Features Section */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Benefits of Managed IT Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Save Money</h3>
              <p>
                By not having to hire and train an in-house IT team, consumers can save money by using a managed 
                service provider to maintain their cloud infrastructure. This allows firms to use their financial 
                resources more efficiently, focusing on core operations rather than cloud infrastructure management.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Efficiency Increased</h3>
              <p>
                Managed service providers efficiently manage and maintain cloud infrastructure and applications. 
                By outsourcing these tasks, firms can improve application performance and availability. Resource 
                optimization and productivity are maximized with this streamlined method.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Security Improved</h3>
              <p>
                Cloud infrastructure and applications are more secure and compliant when managed service providers 
                are involved. These providers keep firms compliant by knowing the appropriate legislation and 
                requirements. Managed service providers protect important data and provide peace of mind with robust 
                security and monitoring solutions.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Gaining Expertise</h3>
              <p>
                Having access to experts is a major benefit of working with managed service providers. Cloud technology 
                is their specialty. Businesses may make smart cloud strategy selections by consulting them. In an 
                ever-changing technology context, this collaboration stimulates innovation and helps organizations stay ahead.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Scalability</h3>
              <p>
                Businesses experiencing growth or demand changes benefit from managed service providers' flexibility. 
                Customers can easily increase their cloud infrastructure with their help. This optimizes resource use, 
                reducing waste during low demand and enabling rapid development during high demand.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p>
                A customer's cloud infrastructure is maintained by managed service providers. They monitor and maintain 
                the infrastructure to prevent problems. This thorough approach minimizes downtime and maximizes user 
                happiness by ensuring apps perform smoothly and dependably.
              </p>
            </div>
          </div>
        </div>
  
        {/* Conclusion Section */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <p className="text-lg mb-8">
            Turnpike Analyst is committed to helping your company maximize the benefits of Managed Services. 
            We are able to provide first-rate IT support, management, and strategic advice thanks to our extensive 
            service offerings, in-depth industry knowledge, and dedication to quality. Work with us to improve the 
            effectiveness of your IT functions and move closer to your organizational objectives.
          </p>
        </div>
      </div>
    );
  };
  
  export default ManagedITServices;