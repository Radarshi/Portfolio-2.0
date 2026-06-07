import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      slug: "real-time-music-player-react-nodejs",
      
      title: "Real-Time Music Player Web App using React & Node.js | Mojo",
      
      shortTitle: "Mojo Music Player",

      description: "Mojo is a real-time music streaming web application built using React and Node.js, enabling users to play music instantly with a modern UI and seamless API integration.",

      longDescription: `
    Mojo is a full-stack music streaming application designed for fast and seamless playback. 
    The platform integrates external APIs using NoCodeAPI to fetch and stream music efficiently.

    Key highlights include:
    - Instant music playback with minimal latency
    - Responsive UI built with Tailwind CSS
    - Scalable backend using Node.js
    - API-driven architecture for dynamic content

    This project demonstrates real-time data handling, API integration, and performance-focused frontend design.
      `,

      keywords: [
        "music player web app",
        "react music player project",
        "node.js streaming app",
        "real-time music app",
        "full stack music player",
        "web audio application"
      ],

      techStack: [
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "NoCodeAPI",
        "REST APIs"
      ],

      category: "Full Stack Web Application",

      features: [
        "Real-time music playback",
        "API-based music streaming",
        "Responsive modern UI",
        "Fast loading and optimized performance"
      ],

      useCase: "Demonstrates building a scalable real-time music streaming platform using modern web technologies.",

      challenges: [
        "Handling real-time playback synchronization",
        "Integrating third-party APIs efficiently",
        "Optimizing frontend performance"
      ],

      gradient: "from-blue-500 to-purple-600",

      status: "Featured",

      github: "https://github.com/Radarshi/MoJo",

      liveDemo: "https://mo-jo-my-music-app.vercel.app/"
    },
    {
      slug: "medical-ecommerce-platform-react-nodejs-postgresql",

      title: "Medical E-Commerce Platform with Secure APIs | MediPlus",

      shortTitle: "MediPlus",

      description: "MediPlus is a full-stack medical e-commerce platform built using React and Node.js, enabling users to purchase medicines, book consultations, and manage pharmacy inventory securely.",

      longDescription: `
    MediPlus is a scalable healthcare-focused e-commerce platform designed to streamline online medicine purchases and consultations.

    The system includes:
    - Secure RESTful APIs for managing users and transactions
    - Pharmacy inventory management system
    - Consultation booking features
    - Optimized database design using PostgreSQL

    This project demonstrates backend architecture, API security, and full-stack system design in a real-world healthcare domain.
      `,

      keywords: [
        "medical ecommerce platform",
        "healthcare web app react node",
        "pharmacy management system",
        "full stack ecommerce project",
        "secure rest api nodejs",
        "postgresql ecommerce backend"
      ],

      techStack: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS"
      ],

      category: "Full Stack Web Application",

      features: [
        "Online medicine ordering system",
        "Secure REST API for user & order management",
        "Pharmacy inventory management",
        "Consultation booking system"
      ],

      useCase: "Demonstrates building a scalable healthcare e-commerce platform with secure backend APIs and structured database design.",

      challenges: [
        "Designing secure API endpoints for sensitive healthcare data",
        "Managing relational data efficiently with PostgreSQL",
        "Handling multiple modules (orders, users, consultations)"
      ],

      gradient: "from-green-500 to-teal-600",

      status: "Production-Grade Project",

      github: "https://github.com/Radarshi/MediPlus-Frontend",

      liveDemo: "https://medi-plus-ten.vercel.app/"
    },
    {
      slug: "federated-learning-legal-document-classification",

      title: "Federated Learning for Privacy-Preserving Legal Document Classification",

      shortTitle: "Federated Learning NLP",

      description: "A federated learning-based NLP system for legal document classification that enables collaborative model training without sharing sensitive data, achieving 88% accuracy.",

      longDescription: `
    This project implements a federated learning framework for legal document classification, ensuring data privacy across institutions.

    Key aspects:
    - Distributed model training without sharing raw data
    - NLP-based classification of legal documents
    - Improved robustness through collaborative learning
    - Achieved ~88% classification accuracy

    This project highlights expertise in machine learning, privacy-preserving systems, and NLP model development.
      `,

      keywords: [
        "federated learning project",
        "privacy preserving machine learning",
        "legal document classification NLP",
        "pytorch NLP project",
        "distributed machine learning system",
        "machine learning research project"
      ],

      techStack: [
        "Python",
        "PyTorch",
        "Scikit-learn",
        "Natural Language Processing",
        "Federated Learning"
      ],

      category: "Machine Learning / Research",

      features: [
        "Privacy-preserving distributed training",
        "NLP-based document classification",
        "Multi-node collaborative learning",
        "88% classification accuracy"
      ],

      useCase: "Demonstrates building secure and distributed machine learning systems for sensitive data environments.",

      challenges: [
        "Synchronizing model updates across nodes",
        "Maintaining accuracy without centralized data",
        "Handling NLP preprocessing for legal datasets"
      ],

      gradient: "from-orange-500 to-red-600",

      status: "Research Project",

      github: "",

      liveDemo: ""
    }
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
                <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 text-xs font-medium px-2.5 py-1 shadow-lg`}>
                  {project.status}
                </Badge>
              </div>

             <CardContent className="p-6 sm:p-8 h-full flex flex-col justify-between relative z-10">

        {/* Top Section */}
        <div>
          {/* Project Header */}
          <div className="mb-5">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 py-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>

            {/* Category */}
            <p className="text-xs text-purple-400 font-medium uppercase tracking-wide mb-2">
              {project.category}
            </p>
            <div className={`w-10 h-[3px] bg-gradient-to-r ${project.gradient} group-hover:w-20 transition-all duration-500 rounded-full`} />
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed mb-4 line-clamp-3 group-hover:text-slate-200 transition-colors duration-300">
            {project.description}
          </p>

          {/* Use Case (NEW - recruiter focused) */}
          {project.useCase && (
            <p className="text-slate-400 text-xs sm:text-sm mb-4 italic">
              {project.useCase}
            </p>
          )}

          {/* Features (NEW - high impact) */}
          {project.features && (
            <ul className="text-slate-400 text-xs sm:text-sm mb-4 space-y-1 list-disc list-inside">
              {project.features.slice(0, 2).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="outline"
                className="border-slate-600/40 bg-slate-800/40 text-slate-300 text-[11px] px-2.5 py-1 rounded-md hover:border-slate-500 hover:bg-slate-700/60 hover:text-white transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex gap-3 pt-4 mt-4 border-t border-slate-700/50">

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium border border-slate-600/30 hover:border-slate-500/50">
                <Github className="w-4 h-4" />
                <span>Code</span>
              </button>
            </a>
          )}

          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <button className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium opacity-90 hover:opacity-100`}>
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </button>
            </a>
          )}

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