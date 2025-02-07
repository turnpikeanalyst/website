import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"


// Import placeholder image
import logo from "@/assets/asset 0.png"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 relative">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img 
            src={logo}
            alt="TurnPikeAnalyst Logo"
            width={150}
            height={80}
            className="mb-4"
          />
          <p className="text-gray-300">TurnPikeAnalyst, The future of IT.</p>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-6">Contact Info</h2>
          <p className="text-gray-300">
            TurnPikeAnalyst, The future of IT. Please reach for software development, support and Training.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg mt-1">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Hamilton Business Center (328)</p>
                <p className="text-gray-400">1101 Hamilton St, Allentown, PA 18101 USA</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400">Mobile:</p>
                <p>+1 484.747.9294</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400">Email:</p>
                <button onClick={()=>{
                    window.location.href = "mailto:contact@turnpikeanalyst.com";
                }}>contact@turnpikeanalyst.com</button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Newsletter</h2>
          <p className="text-gray-300 mb-6">
            Get all latest content delivered to your email a few times a month. Updates and news about all categories will send to you.
          </p>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/10 border-gray-700"
              />
              <Button className="bg-blue-500 hover:bg-blue-600">
                GO
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-gray-300">
                Accept Our Terms
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */} 
      <div className="border-t border-gray-800 py-5">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">Copyright 2025 - TurnPikeAnalyst</p>
        </div>
      </div>
    </footer>
  )
}