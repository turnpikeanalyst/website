import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import logo from "@/assets/asset 0.png"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        {/* Top Section with Logo and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="TurnPikeAnalyst Logo"
                width={150}
                height={80}
                className="mb-5 transition-transform hover:scale-105 duration-300"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed font-abeezee">
              TurnPikeAnalyst is a global leader in ECM, ETL, and ESB solutions, helping businesses worldwide streamline operations and maximize productivity.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-5 relative inline-block font-abeezee">
              Quick Links
              <span className="absolute bottom-0 left-0 w-2/3 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3 font-abeezee">
              <li>
                <Link to="/services/applications" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">›</span> Applications
                </Link>
              </li>
              <li>
                <Link to="/services/ai" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">›</span> AI & Augmented Intelligence
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">›</span> Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/cloud" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">›</span> Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">›</span> Blog
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                  <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-5 relative inline-block font-abeezee">
              Contact Info
              <span className="absolute bottom-0 left-0 w-2/3 h-0.5 bg-blue-500"></span>
            </h3>
            <div className="space-y-5 font-abeezee">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-sm">Hamilton Business Center (328)</p>
                  <p className="text-gray-400 text-sm">1101 Hamilton St, Allentown, PA 18101 USA</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="flex-shrink-0">
                  <Phone className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 text-sm">Mobile:</p>
                  <a href="tel:+14847479294" className="text-sm hover:text-blue-400 transition-colors font-medium">+1 484.747.9294</a>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 text-sm">Email:</p>
                  <a
                    href="mailto:contact@turnpikeanalyst.com"
                    className="text-sm hover:text-blue-400 transition-colors font-medium">
                    contact@turnpikeanalyst.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-5 relative inline-block font-abeezee">
              Newsletter
              <span className="absolute bottom-0 left-0 w-2/3 h-0.5 bg-blue-500"></span>
            </h3>
            <p className="text-gray-300 text-sm font-abeezee">
              Subscribe to our newsletter for the latest updates, industry insights, and exclusive offers.
            </p>
            <div className="space-y-4 pt-1">
              <div className="flex items-stretch shadow-md">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-800/50 border-gray-700 rounded-r-none focus:ring-blue-500 focus:border-blue-500 h-11"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-l-none px-4 font-abeezee">
                  Subscribe
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="terms" className="text-blue-500 focus:ring-blue-500 h-4 w-4" />
                <label htmlFor="terms" className="text-xs text-gray-300 font-abeezee">
                  I agree to receive email newsletters
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm font-abeezee">© 2025 TurnPikeAnalyst. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}