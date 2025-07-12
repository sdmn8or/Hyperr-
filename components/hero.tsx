import { Button } from "@/components/ui/button"
import { Play, Award, Users, Clock, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Animated background particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

      <div className="container mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-slide-up text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block">
                <span className="px-3 sm:px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
                  ✨ Video Editor's Brand
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                <span className="block text-white">Creative</span>
                <span className="block gradient-text">Video Editor</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transforming raw footage into compelling visual stories. Specializing in commercial, documentary, and
                social media content with <span className="text-red-400 font-semibold">8+ years</span> of experience for
                your brand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl transition-all duration-300 group w-full sm:w-auto"
                asChild
              >
                <a href="#services" className="flex items-center justify-center">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 text-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent rounded-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <a href="#contact">Hire Me</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 max-w-md mx-auto lg:max-w-none">
              {[
                { icon: Award, number: "150+", label: "Projects", delay: "0s" },
                { icon: Users, number: "50+", label: "Clients", delay: "0.2s" },
                { icon: Clock, number: "8+", label: "Years", delay: "0.4s" },
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-scale" style={{ animationDelay: stat.delay }}>
                  <div className="flex items-center justify-center mb-2 sm:mb-3 p-2 sm:p-3 bg-red-600/20 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto backdrop-blur-sm border border-red-600/30">
                    <stat.icon className="h-5 w-5 sm:h-8 sm:w-8 text-red-400" />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float order-first lg:order-last">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl hover-lift">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Professional Video Editing Workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full p-6 sm:p-8 shadow-2xl">
                  <Play className="h-6 w-6 sm:h-10 sm:w-10 ml-1" />
                </Button>
              </div>
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                <div className="glass-effect rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <p className="text-white font-semibold text-sm sm:text-base">Watch Demo Reel</p>
                  <p className="text-gray-300 text-xs sm:text-sm">See my latest work in action</p>
                </div>
              </div>
            </div>

            {/* Floating elements - hidden on mobile for performance */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-20 h-20 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
            <div
              className="hidden sm:block absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/20 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
