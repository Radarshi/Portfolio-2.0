import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title : "None at the Moment",
      company : "Open for Work",
      period :  "Anytime",
      type : "Aap bataiye",
      location : "DIL SE",
      skills : ["sikh lenge"],
      description : "Mauka Mauka!"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center animate-fade-in bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</h2>
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-900/40 border-slate-700/50 hover:bg-slate-900/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm animate-fade-in">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4">
                  <div className="mb-2 lg:mb-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 hover:text-blue-300 transition-colors duration-300">{exp.title}</h3>
                    <p className="text-blue-300 font-medium text-sm sm:text-base hover:text-blue-200 transition-colors duration-300">{exp.company}</p>
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm lg:text-right">
                    <p>{exp.period} • {exp.type}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm sm:text-base mb-3 sm:mb-4 hover:text-slate-200 transition-colors duration-300">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="border-slate-600 text-slate-300 text-xs hover:border-slate-500 hover:text-slate-200 transition-all duration-300 hover:scale-105">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;