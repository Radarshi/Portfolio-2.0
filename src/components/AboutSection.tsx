import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, CheckCircle, Code, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-800/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-fade-in delay-200"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6 animate-fade-in delay-300">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed hover:text-slate-200 transition-all duration-500 p-6 bg-slate-900/40 rounded-xl border border-slate-700/30 backdrop-blur-sm hover:bg-slate-900/60 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 transform">
                I'm a passionate Full Stack Developer based in Kolkata, West Bengal, India. With expertise in modern web technologies, I strive to build innovative, user-centric web applications that deliver real impact.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 animate-fade-in delay-500">
              <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 text-blue-300 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 hover:scale-110 px-4 py-2 text-sm font-medium">
                <Code className="w-4 h-4 mr-2" />
                Full Stack Developer
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 text-purple-300 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 hover:scale-110 px-4 py-2 text-sm font-medium">
                <Briefcase className="w-4 h-4 mr-2" />
                1+ Years Experience
              </Badge>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-4 animate-fade-in delay-400">
            {[
              { 
                label: "Location", 
                value: "Kolkata, West Bengal, India", 
                icon: MapPin,
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                label: "Experience", 
                value: "1+ Years", 
                icon: Calendar,
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                label: "Specialization", 
                value: "Web Development", 
                icon: Code,
                gradient: "from-purple-500 to-violet-500"
              },
              { 
                label: "Open to Work", 
                value: "Yes", 
                icon: CheckCircle,
                gradient: "from-emerald-500 to-green-500",
                highlight: true 
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="group relative p-4 sm:p-6 bg-slate-900/40 rounded-xl backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 hover:scale-105 border border-slate-700/30 hover:border-slate-600/50 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Floating Icon Background */}
                  <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r ${item.gradient} opacity-5 rounded-full blur-xl group-hover:opacity-20 transition-all duration-500 group-hover:scale-150`}></div>
                  
                  <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-5 h-5 text-white`} />
                      </div>
                      <span className="text-slate-300 text-sm sm:text-base font-medium group-hover:text-white transition-colors duration-300">
                        {item.label}
                      </span>
                    </div>
                    <span className={`text-sm sm:text-base font-semibold ${
                      item.highlight 
                        ? 'text-emerald-300 group-hover:text-emerald-200' 
                        : 'text-white group-hover:text-slate-100'
                    } transition-colors duration-300`}>
                      {item.value}
                    </span>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;