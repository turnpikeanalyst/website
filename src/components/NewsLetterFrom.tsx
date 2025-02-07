import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
function NewsLetterFrom() {
    const [email, setEmail] = useState("");

  

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
  };
  return (
    <div>
      <form onSubmit={handleSubscribe} className="flex gap-3 max-w-lg">
        <Input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 flex-1"
        />
        <Button
          type="submit"
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}

export default NewsLetterFrom;
