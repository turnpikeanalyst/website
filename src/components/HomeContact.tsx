import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Award, Users, Building2, Star } from "lucide-react";

export default function HomeContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto lg:px-32 py-8">
        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          Let&apos;s embark on a data-driven journey together. Reach out to our
          expert team and start transforming your business today.
        </p>

        <div className="grid md:grid-cols-2 gap-6 rounded-lg overflow-hidden shadow-xl">
          {/* Left Section */}
          <div className="bg-black text-white p-8">
            <h1 className="text-3xl font-bold mb-4">
              What can we help you with?
            </h1>
            <p className="text-gray-300 mb-8">
              Our Consultants Will Reply Back To You Within 8 Hours Or Less
            </p>

            <div className="flex flex-wrap gap-4 mb-8 bg-black text-xl font-mono">
              <div>Technical Team</div>
              <div>Management Team</div>
              <div>Help Desk</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className="bg-white/5 rounded-lg p-6 w-60">
                <Building2 className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">700+</div>
                <div className="text-gray-300">In-House Experts</div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 w-60">
                <Award className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">25+</div>
                <div className="text-gray-300">Awards in the last 9 Years</div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 w-60">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">237+</div>
                <div className="text-gray-300">Clients Worldwide</div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 w-60">
                <Star className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">150+ Five Star</div>
                <div className="text-gray-300">Reviews</div>
                <div className="text-sm text-gray-400 mt-1">
                  On G2, Clutch, Google and GoodFirms
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-blue-700 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white text-sm mb-2">
                  Your name
                </label>
                <Input required className="bg-white" />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Your email
                </label>
                <Input type="email" required className="bg-white" />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Mobile Number
                </label>
                <Input type="tel" required className="bg-white" />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Company</label>
                <Input required className="bg-white" />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Subject</label>
                <Input required className="bg-white" />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Your message (optional)
                </label>
                <Textarea className="bg-white" rows={4} />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold"
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
