import { useState } from "react";

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const posts = [
  {
    slug: "build-real-time-chat-app-websockets",
    title: "How I Built a Real-Time Chat App using WebSockets",
    description:
      "A complete guide to building a scalable real-time chat application using WebSockets, Node.js, and React.",
    tags: ["WebSockets", "Node.js", "Real-Time Systems"],

    content: {
      introduction:
        "Real-time communication is an important part of modern web applications. In this article, I explore how I built a real-time chat application using WebSockets, Node.js, and React.",
      architecture:
        "The application follows a client-server architecture where React handles the frontend interface, while Node.js manages WebSocket connections and real-time message delivery.",
      implementation:
        "WebSocket connections allow the server and clients to maintain an open communication channel. When a user sends a message, the server receives it and broadcasts the message to the appropriate connected clients.",
      conclusion:
        "Building this project helped me understand persistent connections, event-driven architectures, connection management, and the challenges involved in designing scalable real-time systems.",
    },
  },

  {
    slug: "medical-ecommerce-platform-architecture",
    title: "Designing a Medical E-Commerce Platform with Secure APIs",
    description:
      "Deep dive into building a scalable healthcare platform with secure backend architecture and PostgreSQL.",
    tags: ["System Design", "Node.js", "PostgreSQL"],

    content: {
      introduction:
        "Healthcare applications require more than a conventional e-commerce architecture. They need strong security, reliable data management, and carefully designed APIs.",
      architecture:
        "The platform uses a Node.js backend with REST APIs and PostgreSQL for structured data storage. The architecture separates authentication, users, products, orders, and other healthcare-related services into independent modules.",
      implementation:
        "Secure API design involves authentication, authorization, input validation, database constraints, and controlled access to sensitive information. PostgreSQL provides transactional consistency for orders and other critical operations.",
      conclusion:
        "This project provided practical experience in designing scalable backend systems while considering security, data integrity, and maintainability.",
    },
  },

  {
    slug: "federated-learning-research",
    title: "Exploring Federated Learning for Privacy-Preserving AI",
    description:
      "Researching how federated learning can enable collaborative machine learning while keeping sensitive data distributed across devices or organizations.",
    tags: ["Federated Learning", "Machine Learning", "Privacy"],

    content: {
      introduction:
        "Traditional machine learning systems typically require data to be collected and centralized before a model can be trained. While effective, this approach can introduce privacy, security, and data-sharing challenges. Federated learning provides an alternative by allowing models to be trained across distributed data sources without directly moving the underlying data to a central server.",

      architecture:
        "In a federated learning system, multiple clients independently train a shared model using their local datasets. Instead of sending their raw data to a central server, clients send model updates. A federated server then aggregates these updates to produce an improved global model, which can subsequently be distributed back to the participating clients.",

      implementation:
        "My research focuses on understanding the complete federated learning pipeline, including client-side training, model aggregation, communication between participants, and privacy considerations. Techniques such as Federated Averaging can be used to combine locally trained models while reducing the need for centralized data collection.",

      research:
        "An important aspect of the research is understanding the trade-offs between privacy, communication overhead, model performance, and system scalability. Federated learning can be particularly useful in domains where data is sensitive or distributed across multiple organizations, such as healthcare, finance, and mobile applications.",

      conclusion:
        "Federated learning represents an interesting direction for privacy-preserving machine learning. The research explores how distributed training can enable collaboration between data owners while maintaining greater control over the underlying datasets.",
    },
  },
];
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-10">
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
          Insights & Articles
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          I write about system design, web development, and building scalable
          applications.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <button
            key={index}
            onClick={() => setSelectedPost(post)}
            className="group relative p-6 rounded-2xl border border-slate-700/50 
            bg-slate-900/40 backdrop-blur hover:bg-slate-900/60 
            transition-all duration-300 hover:scale-[1.02] hover:shadow-xl 
            text-left cursor-pointer"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-1 rounded-md 
                  bg-purple-500/10 text-purple-400 
                  border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3
              className="text-lg sm:text-xl font-semibold text-white mb-2 
              leading-snug group-hover:text-transparent 
              group-hover:bg-gradient-to-r 
              group-hover:from-purple-400 group-hover:to-blue-400 
              group-hover:bg-clip-text transition-all duration-300"
            >
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {post.description}
            </p>

            <span className="text-sm text-purple-400">
              Read article →
            </span>
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto mt-10 text-center">
      <button
        onClick={() => setShowComingSoon(true)}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg 
        bg-gradient-to-r from-purple-500 to-blue-500 
        text-white text-sm font-medium hover:scale-105 
        transition-all duration-300"
      >
        View All Articles →
      </button>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center 
          bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto 
            rounded-2xl border border-slate-700/50 
            bg-slate-950 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full 
              bg-slate-800 text-slate-300 hover:text-white 
              hover:bg-slate-700 transition"
            >
              ✕
            </button>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5 pr-10">
              {selectedPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-md 
                  bg-purple-500/10 text-purple-400 
                  border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {selectedPost.title}
            </h2>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed mb-6">
              {selectedPost.description}
            </p>

            {/* Article Content */}
          <div className="space-y-5 text-slate-300 leading-7">
            {selectedPost.content.introduction && (
              <>
                <h3 className="text-xl font-semibold text-white">
                  Introduction
                </h3>

                <p>{selectedPost.content.introduction}</p>
              </>
            )}

            {selectedPost.content.architecture && (
              <>
                <h3 className="text-xl font-semibold text-white">
                  Architecture
                </h3>

                <p>{selectedPost.content.architecture}</p>
              </>
            )}

            {selectedPost.content.implementation && (
              <>
                <h3 className="text-xl font-semibold text-white">
                  Implementation
                </h3>

                <p>{selectedPost.content.implementation}</p>
              </>
            )}

            {selectedPost.content.research && (
              <>
                <h3 className="text-xl font-semibold text-white">
                  Research Focus
                </h3>

                <p>{selectedPost.content.research}</p>
              </>
            )}

            {selectedPost.content.conclusion && (
              <>
                <h3 className="text-xl font-semibold text-white">
                  Conclusion
                </h3>

                <p>{selectedPost.content.conclusion}</p>
              </>
            )}
          </div>

            {/* Close */}
            <div className="mt-8 pt-5 border-t border-slate-800">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 rounded-lg bg-slate-800 
                text-white hover:bg-slate-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showComingSoon && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center 
          bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setShowComingSoon(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl 
            border border-slate-700/50 bg-slate-950 
            p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowComingSoon(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full 
              bg-slate-800 text-slate-400 hover:text-white 
              hover:bg-slate-700 transition"
            >
              ✕
            </button>

            {/* Icon */}
            <div
              className="mx-auto mb-5 w-16 h-16 rounded-2xl 
              flex items-center justify-center 
              bg-gradient-to-br from-purple-500/20 to-blue-500/20 
              border border-purple-500/20"
            >
              <span className="text-3xl">🚀</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-white mb-3">
              More Articles Coming Soon
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              I'm currently working on more articles covering system design,
              backend engineering, AI, and scalable web applications.
              Stay tuned!
            </p>

            {/* Button */}
            <button
              onClick={() => setShowComingSoon(false)}
              className="px-5 py-2.5 rounded-lg 
              bg-gradient-to-r from-purple-500 to-blue-500 
              text-white text-sm font-medium 
              hover:scale-105 transition-all duration-300"
            >
              Got it
            </button>
          </div>
        </div>
)}
    </section>
    
    
  );
};

export default BlogSection;