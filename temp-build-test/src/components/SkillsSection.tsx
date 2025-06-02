import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Frontend Development",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JSON", "CORS"],
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Database & Tools",
      skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Database Design"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code", "NPM", "Webpack", "Vite"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "Version Control"],
      color: "from-cyan-500 to-teal-600"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden" id="skills">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto animate-fade-in delay-200">
            A comprehensive toolkit of modern technologies and programming languages
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full animate-fade-in delay-300"></div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group bg-slate-900/30 border-slate-700/30 hover:bg-slate-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-md animate-fade-in hover:border-slate-500/50 relative overflow-hidden" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Floating Icon Effect */}
              <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r ${category.color} opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              <CardContent className="p-6 sm:p-8 relative z-10">
                <div className="mb-6">
                  <h3 className={`text-xl sm:text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:${category.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {category.title}
                  </h3>
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${category.color} group-hover:w-full transition-all duration-500`}></div>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-slate-800/60 border-slate-600/40 text-slate-300 text-sm px-3 py-1.5 hover:bg-slate-700/80 hover:border-slate-500/60 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer font-medium"
                      style={{ 
                        animationDelay: `${(index * 150) + (skillIndex * 50)}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
          
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-16 animate-fade-in delay-700">
          <div className="inline-flex items-center space-x-2 text-slate-400">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Continuously learning and growing</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;