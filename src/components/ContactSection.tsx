import { ExternalLink, Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import Collaboration from './CollaborationForm.tsx';

const ContactSection = () => {
const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  const contactMethods = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/radarshi-mukherjee",
      icon: Linkedin,
      gradient: "from-blue-600 to-blue-700",
      hoverGradient: "from-blue-700 to-blue-800",
      description: "Professional networking"
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/u/0/?hl=en/#inbox?compose=radarshim04@gmail.com",
      icon: Mail,
      gradient: "from-emerald-600 to-emerald-700",
      hoverGradient: "from-emerald-700 to-emerald-800",
      description: "radarshim04@gmail.com",
      isOutline: true
    },
    {
      name: "GitHub",
      url: "https://github.com/Radarshi",
      icon: Github,
      gradient: "from-slate-700 to-slate-800",
      hoverGradient: "from-slate-800 to-slate-900",
      description: "Code repositories",
      isOutline: true
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-fade-in delay-200 mb-6"></div>
          
          <p className="text-slate-300 text-lg sm:text-xl mb-4 max-w-3xl mx-auto animate-fade-in delay-300 leading-relaxed">
            I'm always interested in new opportunities and collaborations.
          </p>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto animate-fade-in delay-400 hover:text-slate-300 transition-colors duration-300">
            Feel free to reach out if you'd like to work together or just have a chat!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 animate-fade-in delay-500">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a 
                key={index} 
                href={method.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block animate-fade-in"
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <div className="relative p-6 bg-slate-900/40 border border-slate-700/30 rounded-xl backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}></div>
                  
                  {/* Floating Icon Background */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${method.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-30 transition-all duration-500 group-hover:scale-150`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${method.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {method.name}
                    </h3>
                    
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                      {method.description}
                    </p>

                    {/* Action Indicator */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                      <ExternalLink className="w-3 h-3" />
                      <span>Click to connect</span>
                    </div>

                    {/* Progress Bar Animation */}
                    <div className="mt-4 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${method.gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out`}></div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="animate-fade-in delay-1000"
        onClick={() => setIsOpen(true)}>
          <div className="inline-flex items-center gap-4 p-6 bg-slate-900/40 border border-slate-700/30 rounded-xl backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left cursor-pointer">
                <p className="text-white font-semibold text-sm">Ready to collaborate?</p>
                <p className="text-slate-400 text-xs">Let's build something amazing together</p>
              </div>
            </div>
            <Send className="w-5 h-5 text-blue-400 animate-bounce" />
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 animate-fade-in delay-1200">
          <div className="inline-flex items-center space-x-4 text-slate-400">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Open to opportunities</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
      <Collaboration
        isOpen={isOpen}
        onClose={handleCloseForm}
      />
    </section>
  );
};

export default ContactSection;