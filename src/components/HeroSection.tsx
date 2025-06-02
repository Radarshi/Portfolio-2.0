import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Server } from "lucide-react";
import { useEffect } from "react";
import logo from "../../Assests/Dp.jpg";

const HeroSection = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 200, behavior: "smooth" });
    }, 2000); // delay in milliseconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center relative z-10 scroll-smooth">
      <img src={logo} alt="Me" className=" border-0 absolute inset-0  h-full w-full bg-cover bg-center object-cover opacity-100 brightness-[0.3] z-0 animate-fade-in"/>
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <br /><br /><br /><br /><br /><br /><br /><br />
          <Badge className="mb-4 sm:mb-6 bg-blue-600/20 border-blue-500/30 text-blue-300 hover:bg-blue-600/30 transition-all duration-500 hover:scale-105">
            Available for opportunities
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Radarshi Mukherjee
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8 font-medium hover:text-slate-200 transition-colors duration-300">
            Full Stack Developer
          </p>
          <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed hover:text-slate-300 transition-colors duration-300">
            Passionate about building innovative web solutions using modern technologies and scalable cloud infrastructure.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in delay-200">
          {[
            { icon: Code, label: "Frontend", color: "blue" },
            { icon: Server, label: "Backend", color: "green" },
            { icon: Database, label: "Database", color: "purple" },
          ].map((item, index) => (
            <div key={index} className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-slate-900/40 border border-slate-700/50 text-slate-300 hover:scale-105 transition-all duration-300 backdrop-blur-sm hover:bg-slate-900/60`}>
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in delay-400">
          <a href="#projects"><Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base font-medium w-full sm:w-auto transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
            View My Work
          </Button></a>
          <a href="https://drive.google.com/file/d/1F0DTISZlIZiBmqxaN-dgqkFizz_g0wXG/view?usp=sharing" target="_blank"><Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-6 sm:px-8 py-3 text-base font-medium w-full sm:w-auto transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            Download CV
          </Button></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
