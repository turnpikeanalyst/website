
const Faq = () => {

    const faqs = [
        {
          question: "What Is ECM (Enterprise Content Management)?",
          answer:
            "ECM, or Enterprise Content Management, organizes, stores, and manages an organization's documents, facilitating efficient collaboration and content control.",
        },
        {
          question: "How Does ECM Improve Workflow?",
          answer:
            "ECM streamlines processes, automates tasks, and ensures easy access to information, enhancing overall efficiency and productivity within an organization.",
        },
        {
          question: "What Security Features Does ECM Offer?",
          answer:
            "ECM provides robust security protocols, including access controls, encryption, and audit trails, safeguarding sensitive business information from unauthorized access or data breaches.",
        },
        {
          question: "Can ECM Integrate With Existing Systems?",
          answer:
            "Yes, ECM systems are designed to integrate seamlessly with various existing applications, ensuring a smooth transition and compatibility with an organization’s workflows.",
        },
        {
          question: "How Does ECM Support Compliance?",
          answer:
            "ECM assists in compliance by enforcing document retention policies, tracking changes, and providing audit trails, ensuring adherence to regulatory requirements and industry standards.",
        },
        {
          question: "What Is The Role Of Metadata In ECM?",
          answer:
            "Metadata in ECM categorizes and tags content, making it easily searchable and retrievable. It enhances organization and accessibility of documents within the system.",
        },
        {
          question: "Can ECM Be Accessed Remotely?",
          answer:
            "Yes, ECM systems often offer remote access capabilities, allowing users to retrieve, edit, and collaborate on documents from anywhere with an internet connection.",
        },
        {
          question: "How Scalable Is An ECM Solution?",
          answer:
            "ECM solutions are scalable and can grow with your organization. They accommodate increasing data volumes and evolving business needs efficiently.",
        },
      ];

  return (
    <section>
        <div className="flex flex-col justify-center items-center px-20 py-6 mt-14">
            <h1>
                FAQ
            </h1>
            <p>
                Answers to your Most Common Questions
            </p>

        </div>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
              index % 2 === 0 ? "bg-gradient-to-r from-yellow-100 to-orange-200" : "bg-gradient-to-r from-blue-100 to-blue-300"
            }`}
          >
            <h3 className="font-semibold text-xl mb-2 text-gray-900">{faq.question}</h3>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
        <div className="flex gap-9 justify-center">
            <div className="bg-neutral-500 p-5 px-20  "><p className="font-bold text-5xl justify-center text-white">17+</p>
            <p>HAPPY CUSTOMERS</p>
            </div>
            <div className="bg-neutral-500 p-5 px-20 ">

                <p className="font-bold text-5xl justify-center text-white">198+</p>
                <p>AVAILABALE RESOURCES</p>
            </div>
            <div className="bg-neutral-500 p-5 px-20 ">
                <p className="font-bold text-5xl justify-center text-white tracking-wide">23+</p>
                <p>PARTNERS</p>
            </div>

        </div>
        <div className="flex flex-col justify-center items-center px-20 py-14 ">
            <p className="font-bold text-6xl text-blue-950 max-w-[750px] text-center leading-tight pb-4">Tailored Solutions for
            Your specific needs
            </p>
            <p className="text-gray-600 max-w-[400px] leading-tight text-center pb-7">Reach out for inquiries, assistance, or collaboration. 
                We welcome your messages anytime</p>
            <button className="bg-blue-600 border rounded-full px-16 text-white font-semibold py-4">Contact Us</button>
        </div>
    </section>
  )
}

export default Faq
