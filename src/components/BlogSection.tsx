const BlogSection = () => {

  const posts = [
    {
      slug: "build-real-time-chat-app-websockets",
      title: "How I Built a Real-Time Chat App using WebSockets",
      description: "A complete guide to building a scalable real-time chat application using WebSockets, Node.js, and React.",
      tags: ["WebSockets", "Node.js", "Real-Time Systems"]
    },
    {
      slug: "medical-ecommerce-platform-architecture",
      title: "Designing a Medical E-Commerce Platform with Secure APIs",
      description: "Deep dive into building a scalable healthcare platform with secure backend architecture and PostgreSQL.",
      tags: ["System Design", "Node.js", "PostgreSQL"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-10">

      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
          Insights & Articles
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          I write about system design, web development, and building scalable applications.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {posts.map((post, index) => (
          <a
            key={index}
            href={`/blog/${post.slug}`}
            className="group relative p-6 rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur hover:bg-slate-900/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {post.description}
            </p>
          </a>
        ))}

      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto mt-10 text-center">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium hover:scale-105 transition-all duration-300"
        >
          View All Articles →
        </a>
      </div>

    </section>
  );
};

export default BlogSection;