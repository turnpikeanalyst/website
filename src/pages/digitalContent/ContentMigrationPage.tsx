

const DigitalContentMigration = () => {
  return (
    <div className="font-sans text-gray-800 mt-24">
      {/* Navbar */}
     
      {/* Hero Banner - Added top padding to account for fixed navbar */}
      <div className="max-w-6xl h-fit  mx-auto  text-white p-8 pt-24  relative overflow-hidden flex justify-center bg-contain repeat-0"
      style={{
        backgroundImage: `url('/digital.jpg')` ,
      }}>
        <div className="z-10 relative max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Digital Content Migration</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <p className="text-lg mb-8">
          Turnpike Analyst understands the challenges of migrating and consolidating 
          large volumes of documents from on-premise systems to the cloud. Whether you're looking 
          to replace an expensive, difficult-to-maintain legacy system or seeking a seamless 
          transition from on-premises solutions to the cloud, our migration platform streamlines 
          the entire process. With our comprehensive mechanism, we ensure the success of your 
          legacy modernization project at speed.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 mb-16">
        {/* Feature 1 */}
        <div className="bg-gray-800 text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Efficient and Secure Mass Migrations</h2>
          <p className="mb-6">
            Turnpike Analyst's migration solution enables you to quickly migrate and consolidate billions 
            of documents while significantly reducing processing times. Our platform ensures the security 
            and consistency of your data, without the risk of data loss. With our expertise, you can 
            seamlessly move content and data between a wide range of leading business applications and 
            ECM systems in a matter of days.
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
          <h2 className="text-2xl font-bold mb-4">Meet Complex Business Requirements with Ease</h2>
          <p className="mb-6">
            Choose from our catalog of over 100 tasks to easily map data, eliminating the need for heavy 
            coding or custom scripts. Our migration platform leverages a standard API, allowing for simple 
            configuration of custom tasks to meet even the most complex business requirements. With our 
            solution, you can accelerate your legacy transformation without compromising on quality or 
            precision.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-4">Streamline Legacy Transformation</h2>
          <p className="mb-6">
            Our migration platform simplifies the process by seamlessly managing the transfer of files, 
            metadata, version history, and permissions. We ensure that you get the most out of your new 
            cloud-based system. Built-in insights provide real-time optimization, minimizing the impact 
            on your business operations. With our solution, you can migrate millions of files per day, 
            migrate content, keywords, versions, permissions, users, and annotations, and convert large 
            volumes of files from one format to another.
          </p>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Support for Various Source Systems</h2>
            <p className="mb-6">
              Our migration solution offers flexibility by allowing you to migrate from any source system. 
              Whether it's content repositories, business applications, network drives, emails, or more, 
              our platform can handle it all. Choose from a catalog of pre-configured templates or build 
              your own connectors to ensure a seamless transition. You can also configure custom rules to 
              migrate content over time or as needed, giving you full control over the migration process.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Track Progress and Ensure Data Security</h2>
            <p className="mb-6">
              With our migration solution, you can easily track activity and monitor migration progress 
              with advanced reports. Our built-in insights provide intelligent assessments, enabling you 
              to make data-driven decisions throughout the migration process. We prioritize data security 
              and content integrity, ensuring that your valuable information is safeguarded throughout the 
              migration journey.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <p className="text-lg mb-8">
          Turnpike Analyst is committed to simplifying your legacy modernization journey. With our 
          migration platform, you can quickly and securely migrate and consolidate billions of documents 
          from on-premise to the cloud. Our comprehensive solution empowers your organization to embrace 
          modern technologies, optimize data management, and unlock the full potential of the cloud.
        </p>
      </div>
    </div>
  );
};

export default DigitalContentMigration;