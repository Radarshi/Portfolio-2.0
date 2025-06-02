import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";

const CertificationSection = () => {
  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2023",
      status: "Verified",
      skills: ["Front-End Development","HTML","CSS","JS"],
      gradient: "from-cyan-200 to-teal-600",
      credentialUrl: "https://www.freecodecamp.org/certification/fcc6e0036a3-d94d-41e9-bc0a-6436a558e506/responsive-web-design"
    },
    {
      name: "React Development",
      issuer: "HackerRank",
      date: "2024",
      status: "Verified",
      skills: ["React", "JSX", "Hooks", "State Management"],
      gradient: "from-blue-500 to-cyan-600",
      credentialUrl: "https://drive.google.com/file/d/1MDZSdg2SpAPUuJoaFFFk0uy_N9GJ-C9x/view?usp=sharing"
    },
    {
      name: "SIT ICOE Hackathon",
      issuer: "Alien Brains",
      date: "2024",
      status: "Completed",
      skills: ["Hackathon", "Machine Learning", "Data Structures"],
      gradient: "from-purple-500 to-violet-600",
      credentialUrl: "https://drive.google.com/file/d/1Iv4H0n66SpvY0kJR3rMY7FFX1aDww36c/view?usp=sharing"
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      date: "2024",
      status: "Verified",
      skills: ["Cloud Computing","Software Development"],
      gradient: "from-green-500 to-emerald-600",
      credentialUrl: "https://drive.google.com/file/d/1K1ZwmJ4HQ8aq9RpSW0p9Dtm483YUdaAB/view?usp=sharing"
    },
    {
      name: "Web Designing",
      issuer: "Campus Technology",
      date: "2024",
      status: "Verified",
      skills: ["Responsive Web Design","HTML","CSS","JS"],
      gradient: "from-[#9d174d] to-[#f0abfc]",
      credentialUrl: "https://drive.google.com/file/d/1dXtmEGCcOBndvG_Q3pzeT3sbM0WleN2h/view?usp=sharing"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto animate-fade-in delay-200">
            Validated skills and continuous learning achievements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto mt-6 rounded-full animate-fade-in delay-300"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group relative bg-slate-900/40 border-slate-700/30 hover:bg-slate-800/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-md animate-fade-in overflow-hidden" 
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Floating Background Effect */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${cert.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-all duration-500 group-hover:scale-150`}></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <Badge className={`bg-gradient-to-r ${cert.gradient} text-white border-0 text-xs font-medium px-3 py-1 shadow-lg flex items-center gap-1`}>
                  <CheckCircle className="w-3 h-3" />
                </Badge>
              </div>

              <CardContent className="p-6 sm:p-8 relative z-10">
                {/* Certification Header */}
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                        {cert.name}
                      </h3>
                      <div className={`w-16 h-1 bg-gradient-to-r ${cert.gradient} group-hover:w-full transition-all duration-500 rounded-full mb-3`}></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm mb-4">
                    <div className="flex items-center gap-2 text-orange-300 hover:text-orange-200 transition-colors duration-300">
                      <Award className="w-4 h-4" />
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors duration-300">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-slate-600/50 bg-slate-800/50 text-slate-300 text-xs hover:border-slate-500 hover:bg-slate-700/70 hover:text-white transition-all duration-300 hover:scale-110 font-medium backdrop-blur-sm"
                      style={{
                        animationDelay: `${(index * 200) + (skillIndex * 100) + 600}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-slate-700/50">
                  <a href={cert.credentialUrl}><button className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${cert.gradient} text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium opacity-90 hover:opacity-100`}>
                    <ExternalLink className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button></a>
                </div>

                {/* Achievement Progress Bar */}
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Credential Status</span>
                    <span className="text-emerald-300 font-medium">{cert.status}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${cert.gradient} transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ width: cert.status === "Verified" ? "100%" : "85%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16 animate-fade-in delay-700">
          <div className="inline-flex items-center space-x-4 text-slate-400">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Continuously expanding knowledge and skills</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
