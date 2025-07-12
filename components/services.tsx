import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Clock } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="relative py-12 sm:py-16 lg:py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-3 sm:px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
              Services & Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
            Professional Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Transparent pricing for professional video editing services that deliver results.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                title: "Per Minute Edit",
                price: "$3",
                image:
                  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
                description:
                  "Professional video editing charged per minute of final output. Perfect for longer content and detailed projects.",
                features: [
                  "Color correction & grading",
                  "Audio synchronization",
                  "Smooth transitions",
                  "Basic motion graphics",
                ],
                icon: Clock,
                popular: false,
              },
              {
                title: "Short Video Edit",
                price: "$3",
                image:
                  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
                description:
                  "Quick turnaround editing for short-form content. Ideal for social media posts, reels, and TikTok videos.",
                features: ["Fast-paced editing", "Trending effects", "Platform optimization", "Quick delivery"],
                icon: Zap,
                popular: true,
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`relative group animate-fade-scale`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="gradient-card rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover-lift group-hover:border-red-500/50 transition-all duration-500 h-full">
                  <div className="mb-6 sm:mb-8 relative overflow-hidden rounded-lg sm:rounded-xl">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-36 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <div className="bg-red-600/90 backdrop-blur-sm rounded-full p-2 sm:p-3">
                        <service.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
                  <div className="mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-5xl font-bold gradient-text">{service.price}</span>
                    <span className="text-gray-400 ml-2 text-sm sm:text-base">per project</span>
                  </div>

                  <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  <ul className="text-left space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm sm:text-base">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-base sm:text-lg py-4 sm:py-6 rounded-xl shadow-xl transition-all duration-300">
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-slide-up">
            <div className="gradient-card rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Additional Services</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-gray-300">
                {[
                  { text: "Rush delivery (+50%)", icon: "⚡" },
                  { text: "Advanced VFX (quoted separately)", icon: "✨" },
                  { text: "Custom thumbnails (+$5)", icon: "🎨" },
                  { text: "Multiple format exports (+$2)", icon: "📱" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg sm:rounded-xl hover:bg-gray-800/70 transition-colors"
                  >
                    <span className="text-xl sm:text-2xl mr-3">{item.icon}</span>
                    <span className="text-xs sm:text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
