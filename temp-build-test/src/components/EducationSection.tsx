import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      school: "North Point Senior Secondary Boarding School",
      degree: "Higher Secondary, Science",
      period: "Jun 2022",
      grade: "82%",
      gradient: "from-blue-500 to-purple-600",
      status : "Completed"
    },
    {
      school: "Devaki Memorial School",
      degree: "Secondary, Science",
      period: "May 2020",
      grade: "80%",
      gradient: "from-purple-500 to-pink-600",
      status : "Completed"
    },
    {
      school: "Techno India University",
      degree: "B.Tech in Computer Science & Engineering",
      period: "Sep 2022 - Jul 2026",
      grade: "8.14",
      gradient: "from-blue-800 to-purple-600",
      status : "Pursuing"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-800/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto animate-fade-in delay-200 mb-6">
            Academic foundation building the path to success
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full animate-fade-in delay-300"></div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="group relative bg-slate-900/40 border-slate-700/30 hover:bg-slate-800/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-md animate-fade-in overflow-hidden" 
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Floating Background Effect */}
              <div className={`absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r ${edu.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-all duration-500 group-hover:scale-150`}></div>

              <CardContent className="p-6 sm:p-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Left Section - Main Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {edu.school}
                        </h3>
                        <div className={`w-16 h-1 bg-gradient-to-r ${edu.gradient} group-hover:w-full transition-all duration-500 rounded-full mb-3`}></div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                          <div className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors duration-300">
                            <Award className="w-4 h-4" />
                            <span className="font-medium">{edu.degree}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors duration-300">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Grade Badge */}
                  <div className="flex flex-col items-end gap-3">
                    <Badge className={`bg-gradient-to-r ${edu.gradient} text-white border-0 text-sm font-bold px-4 py-2 shadow-lg hover:scale-110 transition-all duration-300`}>
                      <Award className="w-4 h-4 mr-2" />
                      Grade: {edu.grade}
                    </Badge>
                    
                    {/* Achievement Indicator */}
                    <div className="flex items-center gap-2 text-emerald-300 text-sm">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="font-medium">{edu.status}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Achievement Bar */}
                <div className="mt-6 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Academic Achievement</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${edu.gradient} transition-all duration-1000 group-hover:animate-pulse`}
                          style={{ width: edu.grade }}
                        ></div>
                      </div>
                      <span className="text-white font-medium">{edu.grade}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-12 animate-fade-in delay-700">
          <div className="inline-flex items-center space-x-4 text-slate-400">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Building knowledge, shaping the future</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;