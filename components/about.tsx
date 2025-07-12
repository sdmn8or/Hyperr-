import { Card, CardContent } from "@/components/ui/card"
import { Camera, Film, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-20 px-4 gradient-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-3 sm:px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
            My Story
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            I'm a passionate video editor with over 8 years of experience crafting compelling visual stories. From
            corporate videos to creative documentaries, I bring technical expertise and artistic vision to every
            project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-white text-center lg:text-left">
              My Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: Film,
                  title: "Post-Production",
                  desc: "Expert in Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve",
                  color: "from-red-500 to-pink-500",
                },
                {
                  icon: Palette,
                  title: "Color Grading",
                  desc: "Professional color correction and cinematic grading",
                  color: "from-purple-500 to-indigo-500",
                },
                {
                  icon: Zap,
                  title: "Motion Graphics",
                  desc: "After Effects animations and visual effects",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: Camera,
                  title: "Storytelling",
                  desc: "Crafting narratives that engage and inspire",
                  color: "from-green-500 to-teal-500",
                },
              ].map((item, index) => (
                <Card key={index} className="gradient-card hover-lift group transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div
                      className={`p-2 sm:p-3 bg-gradient-to-r ${item.color} rounded-lg w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 animate-fade-scale order-first lg:order-last">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1200&q=80"
                alt="Professional Video Editing Setup"
                className="w-full rounded-xl sm:rounded-2xl object-cover shadow-2xl group-hover:shadow-red-500/20 transition-all duration-500 aspect-square sm:aspect-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl"></div>
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                <div className="glass-effect rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <p className="text-white font-semibold text-sm sm:text-base">Professional Setup</p>
                  <p className="text-gray-300 text-xs sm:text-sm">State-of-the-art editing equipment</p>
                </div>
              </div>
            </div>

            <div className="gradient-card p-6 sm:p-8 rounded-xl sm:rounded-2xl">
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">Technical Skills</h4>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { name: "Adobe Premiere Pro", level: 95, color: "from-purple-500 to-purple-600" },
                  { name: "After Effects", level: 90, color: "from-blue-500 to-blue-600" },
                  { name: "DaVinci Resolve", level: 85, color: "from-orange-500 to-orange-600" },
                  { name: "Final Cut Pro", level: 80, color: "from-green-500 to-green-600" },
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-red-400 font-semibold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
