const DigitalContentCapture = () => {
    return (
      <div className="font-sans text-gray-800 mt-24">
        {/* Hero Banner - Added top padding to account for fixed navbar */}
        <div className="max-w-6xl h-fit mx-auto text-white p-8 pt-24 relative overflow-hidden flex justify-center bg-contain repeat-0"
        style={{
          backgroundImage: `url('/digital.jpg')` ,
        }}>
          <div className="z-10 relative max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Digital Content Capture</h1>
          </div>
        </div>
  
        {/* Introduction Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <p className="text-lg mb-8">
            Turnpike Analyst appreciates the significance of efficient digital content capture in the modern corporate world. 
            Capturing and processing incoming content has become a crucial part of effective information management techniques 
            in light of the ever-increasing volume of data that must be managed effectively. With our all-inclusive solutions, 
            your business can tap into the potential of digital content capture and turn unstructured and semi-structured 
            material into actionable data.
          </p>
        </div>
  
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 mb-16">
          {/* Feature 1 */}
          <div className="bg-gray-800 text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Streamline Your Information Management Journey</h2>
            <p className="mb-6">
              The first and most important step in increasing the value of your company's information is capture. 
              Employees and subsequent processes can benefit from faster efficiency if incoming information and data can 
              be quickly ingested into your essential systems. No matter how automated your processes are, they cannot 
              begin until the necessary data is in place. Turnpike Analyst provides services to assist you manage papers 
              as they enter your company and automatically extract the data you need.
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
            <h2 className="text-2xl font-bold mb-4">Intelligent Document Processing (IDP) for the Modern Workplace</h2>
            <p className="mb-6">
              Intelligent Document Processing (IDP) represents the next generation of automation, revolutionizing the way 
              data is captured, extracted, and processed from various document formats. By harnessing the power of 
              Artificial Intelligence (AI) and deep learning technologies through low-code tooling, IDP eliminates manual 
              document processing and empowers you to classify and extract information from your business documents more 
              quickly, easily, and accurately.
            </p>
          </div>
  
          {/* Feature 4 */}
          <div className="bg-gray-100 p-8">
            <h2 className="text-2xl font-bold mb-4">Empowering Your Business with AI-led Automation</h2>
            <p className="mb-6">
              With our AI-led automation tools, Turnpike Analyst enables your organization to adapt quickly and stay ahead 
              in a rapidly evolving business landscape. Our deep learning and AI capabilities allow you to model and process 
              new documents rapidly, ensuring seamless integration into transformative applications. By delivering more data 
              faster to digital transformation projects, you gain a competitive edge and drive business growth.
            </p>
          </div>
        </div>
  
        {/* Additional Features Section */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Traditional Solutions vs. Modern Approaches</h2>
              <p className="mb-6">
                Traditional document capture solutions are ill-suited for the demands of today's digital world. They fail to 
                meet the processing requirements of large volumes of unstructured data, burdening employees with slow, 
                error-prone manual work. At Turnpike Analyst, we leverage IDP to save your organization time, improve data 
                accuracy, respond swiftly to new opportunities without expanding your workforce, enhance compliance transparency, 
                and fuel automated workflows with valuable data, resulting in a faster return on investment (ROI).
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Unlocking Opportunities Across Industries</h2>
              <p className="mb-6">
                Turnpike Analyst's Digital Content Capture solutions cater to diverse industries, empowering them to thrive 
                in a digital era. We serve Banking, Insurance, Mortgage, and Accounting sectors by automating workflows, 
                streamlining document processing, managing critical documents, facilitating fast retrieval, expediting approval 
                processes, and ensuring improved customer experiences across all these industries.
              </p>
            </div>
          </div>
        </div>
  
        {/* Industry Sections */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">BANKING</h3>
              <p>Automate workflows to capture, extract, and securely store key data, optimizing the customer experience, retention, and overall profitability.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">INSURANCE</h3>
              <p>Streamline document processing, achieve consistent compliance, enhance security measures, and elevate customer service levels.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">MORTGAGE</h3>
              <p>Manage critical documents, facilitate fast and easy retrieval, expedite the approval process, and ensure an improved customer experience.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">ACCOUNTING</h3>
              <p>Manage critical documents, facilitate fast and easy retrieval, expedite the approval process, and ensure an improved customer experience.</p>
            </div>
          </div>
        </div>
  
        {/* Conclusion Section */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <p className="text-lg mb-8">
            Turnpike Analyst's mission is to assist your company in realizing the maximum benefits of digital content capture. 
            You may improve information management, increase productivity, and fuel long-term growth with the help of our 
            individualized solutions and state-of-the-art technologies. Get started on the path to seamless digital content 
            capture with a consultation from our specialists today.
          </p>
        </div>
      </div>
    );
  };
  
  export default DigitalContentCapture;