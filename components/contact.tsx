import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, Clock, Instagram, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20 px-4 gradient-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-3 sm:px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
            Let's Create Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8 animate-fade-scale">
              <Card className="gradient-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-white text-xl sm:text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      value: "s.aashifuddin@gmail.com",
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      icon: MessageCircle,
                      title: "Discord",
                      value: ".hyp3rrr.",
                      color: "from-indigo-500 to-indigo-600",
                    },
                    {
                      icon: Instagram,
                      title: "Instagram",
                      value: "@a4shif_sy3d",
                      color: "from-pink-500 to-pink-600",
                    },
                    {
                      icon: Send,
                      title: "Telegram",
                      value: "@a4shif",
                      color: "from-cyan-500 to-cyan-600",
                    },
                    {
                      icon: Clock,
                      title: "Response Time",
                      value: "Within 24 hours",
                      color: "from-green-500 to-green-600",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-800/30 rounded-lg sm:rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
                    >
                      <div
                        className={`p-2 sm:p-3 bg-gradient-to-r ${contact.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm sm:text-base">{contact.title}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="gradient-card hover-lift">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Why Choose Me?</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {[
                      "8+ years of professional experience",
                      "Fast turnaround times",
                      "Unlimited revisions",
                      "Competitive pricing",
                      "100% satisfaction guarantee",
                    ].map((item, index) => (
                      <li key={index} className="text-gray-300 flex items-center group text-sm sm:text-base">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 sm:mr-4 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-scale" style={{ animationDelay: "0.2s" }}>
              <Card className="gradient-card hover-lift h-full">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col justify-center">
                  <div className="text-center space-y-6 sm:space-y-8">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                      <ArrowRight className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to Start?</h3>
                      <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
                        Let's discuss your project and bring your creative vision to life with professional video
                        editing.
                      </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <Button
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-base sm:text-lg py-4 sm:py-6 rounded-xl shadow-xl transition-all duration-300"
                        asChild
                      >
                        <a href="mailto:s.aashifuddin@gmail.com?subject=Video Editing Project Inquiry&body=Hi Hyperr,%0D%0A%0D%0AI'm interested in your video editing services. Here are the details of my project:%0D%0A%0D%0AProject Type: %0D%0AVideo Length: %0D%0ABudget: %0D%0ADeadline: %0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!">
                          Send Email
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-2 border-gray-600 text-white hover:bg-white hover:text-black text-base sm:text-lg py-4 sm:py-6 bg-transparent rounded-xl backdrop-blur-sm transition-all duration-300"
                        asChild
                      >
                        <a href="https://www.instagram.com/a4shif_sy3d/" target="_blank" rel="noopener noreferrer">
                          Follow on Instagram
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
