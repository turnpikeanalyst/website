import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="First Name" className="h-12" />
          <Input placeholder="Last Name" className="h-12" />
        </div>
        <Input type="email" placeholder="Email Address" className="h-12" />
        <Input placeholder="Subject" className="h-12" />
        <Textarea
          placeholder="Your Message"
          className="min-h-[100px] resize-none"
        />
        <Button
          type="submit"
          size="lg"
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Submit Form
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
