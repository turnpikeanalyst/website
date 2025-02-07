import ContactForm from "@/components/ContactForm";
import NewsLetterFrom from "@/components/NewsLetterFrom";
import { Facebook, Linkedin, Rss, Twitter } from "lucide-react";


export default function ContactUs() {
  

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl px-4 flex justify-center">
        <div className="grid gap-28 ">
          <div className="space-y-8  flex">
            <div className="space-y-4 max-w-lg flex flex-col  justify-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Say Hello! On Our Support.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Connect effortlessly through our Contacts page. Swift responses,
                dedicated support. Your inquiries matter—reach out for seamless
                assistance and solutions.
              </p>
              <div className="flex gap-4">
                <SocialLink icon={<Linkedin />} href="#" />
                <SocialLink icon={<Twitter />} href="#" />
                <SocialLink icon={<Facebook />} href="#" />
                <SocialLink icon={<Rss />} href="#" />
              </div>
            </div>
            <ContactForm/>
          </div>

          <div className="space-y-8 flex justify-center flex-col text-center items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Getting Connected With Us!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Stay updated with our latest news, updates, and exclusive offers
                by subscribing to our newsletter.
              </p>
            </div>
           <NewsLetterFrom/>
          </div>
        </div>
      </div>
    </section>
  );
}

const SocialLink = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="w-5 h-5 text-blue-600">{icon}</div>
  </a>
);
