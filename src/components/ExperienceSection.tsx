import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Inadev India",
      period: "Sept 2025 – Dec 2025",
      type: "Internship",
      location: "India",
      skills: ["RAG", "NLP", "JWT Authentication", "RBAC", "FlashRank", "Python"],
      description: "Developed a secure RAG-based chatbot indexing 6,000+ legal documents, improving top-3 retrieval precision by 25% using FlashRank re-ranking. Implemented JWT authentication and RBAC for role-based access control and enhanced accuracy using a Generative Self-Correction loop"
    },
    {
      title: "Software Developer Intern",
      company: "ARC Document Solutions India Private Ltd.",
      period: "Apr 2026 – Present",
      type: "Internship",
      location: "India",
      skills: ["Python", "React", "Pyside6", "SQL"],
      description: "Develop, maintain, and optimize core company products utilizing Python and JavaScript to deliver scalable software solutions"
    }
  ];

  return (
<section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
  <div className="max-w-5xl mx-auto">
    
    {/* Heading */}
    <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 sm:mb-12 animate-fade-in">
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Experience
      </span>
    </h2>

    <div className="space-y-5 sm:space-y-6">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="bg-slate-900/40 border border-slate-700/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm animate-fade-in"
        >
          <CardContent className="p-5 sm:p-6">

            {/* Header Row */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">

              {/* Left */}
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight mb-1 hover:text-blue-300 transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-blue-300 font-medium text-sm sm:text-base">
                  {exp.company}
                </p>
              </div>

              {/* Right */}
              <div className="text-left lg:text-right text-slate-400 text-xs sm:text-sm leading-relaxed">
                <p>{exp.period} • {exp.type}</p>
                <p>{exp.location}</p>
              </div>

            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed mb-4 text-left">
              {exp.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="outline"
                  className="border-slate-600/50 bg-slate-800/40 text-slate-300 text-[11px] px-2.5 py-1 rounded-md hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>

          </CardContent>
        </Card>
      ))}
    </div>

    <div className="text-center mt-12 animate-fade-in delay-700">
          <div className="inline-flex items-center space-x-4 text-slate-400">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Learning through experience, building what’s next</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
  </div>
</section>
  );
};

export default ExperienceSection;