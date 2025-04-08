import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-3">
          Get In Touch
        </h2>
        <p className="text-gray-600">
          We'd love to hear from you. Please fill out this form.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            placeholder="First Name" 
            className="h-12 border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300" 
          />
          <Input 
            placeholder="Last Name" 
            className="h-12 border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300" 
          />
        </div>
        <Input 
          type="email" 
          placeholder="Email Address" 
          className="h-12 border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300" 
        />
        <Input 
          placeholder="Subject" 
          className="h-12 border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300" 
        />
        <Textarea
          placeholder="Your Message"
          className="min-h-[120px] resize-none border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
        />
        <Button
          type="submit"
          size="lg"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] shadow-md hover:shadow-lg"
        >
          Send Message
        </Button>
      </form>
      <div className="text-center mt-6 text-sm text-gray-500">
        We respect your privacy. Your information is safe with us.
      </div>
    </div>
  );
}export default ContactForm;

