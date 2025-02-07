import { FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function SoftwareSupport() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const data: FormData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    console.log('Form data:', data);
  };

  return (
    <div className="min-h-screen bg-[#010b1a]">
      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center text-white mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Say hello, on our support
            </h1>
            <p className="text-lg text-gray-400">
              Business is the activity of making one living or making money by
              producing or buying and selling products.
              <br />
              Simply put it is any activity or enterprise entered into for profit.
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="bg-[#323456] border-none"
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="bg-[#323456] border-none"
                required
              />
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-[#323456] border-none"
              required
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-[#323456] border-none"
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              className="bg-[#323456] border-none h-32"
              required
            />
            <div className="flex justify-center">
              <Button 
                type="submit"
                className="bg-[#3b5de7] hover:bg-[#2e4cc5] px-8"
              >
                SUBMIT FORM
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}