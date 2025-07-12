import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube, Heart, Send } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50 py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-black gradient-text">Hyperr</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Professional video editor crafting compelling visual stories for brands and creators worldwide.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/a4shif_sy3d/", color: "hover:text-pink-400" },
                { icon: Send, href: "https://t.me/a4shif", color: "hover:text-cyan-400" },
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Youtube, href: "#", color: "hover:text-red-500" },
              ].map((social, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="ghost"
                  className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 p-2`}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {[
            {
              title: "Services",
              links: ["Video Editing", "Color Grading", "Motion Graphics", "Post-Production"],
            },
            {
              title: "Industries",
              links: ["Commercial", "Documentary", "Fashion", "Corporate"],
            },
            {
              title: "Contact",
              links: [
                "s.aashifuddin@gmail.com",
                "Discord: .hyp3rrr.",
                "Instagram: @a4shif_sy3d",
                "Telegram: @a4shif",
                "Available 24/7",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-6">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {section.title === "Contact" ? (
                      <span className="text-gray-400 text-xs sm:text-sm break-all">{link}</span>
                    ) : (
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                      >
                        {link}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800/50 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Hyperr. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm flex items-center">
              Crafted with <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 mx-1" /> for visual storytelling
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
