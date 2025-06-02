import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Mojo-The 30 Second music player",
      description: "Full-stack application integrating NoCodeAPI for data integration with seamless music streaming capabilities and modern UI design.",
      tech: ["React", "Node.js", "Tailwind CSS", "API Integration"],
      gradient: "from-blue-500 to-purple-600",
      status: "Featured",
      github : "https://github.com/Radarshi/MoJo",
      preview : "https://mo-jo-my-music-app.vercel.app/"
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden" id="projects">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto animate-fade-in delay-200">
            Showcase of innovative solutions and creative implementations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-6 rounded-full animate-fade-in delay-300"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative bg-slate-900/40 border-slate-700/30 hover:bg-slate-800/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-md animate-fade-in overflow-hidden" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Floating Background Effect */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${project.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-all duration-500 group-hover:scale-150`}></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 text-xs font-medium px-3 py-1 shadow-lg`}>
                  {project.status}
                </Badge>
              </div>

              <CardContent className="p-6 sm:p-8 relative z-10">
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.name}
                  </h3>
                  <div className={`w-12 h-1 bg-gradient-to-r ${project.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>

                {/* Project Description */}
                <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-slate-600/50 bg-slate-800/50 text-slate-300 text-xs hover:border-slate-500 hover:bg-slate-700/70 hover:text-white transition-all duration-300 hover:scale-110 font-medium backdrop-blur-sm"
                      style={{
                        animationDelay: `${(index * 200) + (techIndex * 100)}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                  <a href={project.github} target="_blank"><button className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium border border-slate-600/30 hover:border-slate-500/50">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button></a>
                  <a href={project.preview} target="_blank"><button className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium opacity-90 hover:opacity-100`}>
                    <ExternalLink className="w-4 h-4" />
                    <span>Preview</span>
                  </button></a>
                </div>
              </CardContent>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16 animate-fade-in delay-700">
          <div className="inline-flex items-center space-x-4 text-slate-400">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">More projects coming soon</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;