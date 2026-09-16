import { ArrowUpRight, Github, Layers3 } from "lucide-react";

type FeaturedProject = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  accent: string;
};

const featuredProjects: FeaturedProject[] = [
{
    title: "VyperX - Growth Systems",
    eyebrow: "Digital Growth & Marketing Platform Portfolio",
    description:
    "A digital growth platform built to deliver end-to-end solutions across website development, social media management, UGC content, SEO, and performance marketing. VyperX combines modern web experiences with content and acquisition strategies to help businesses establish and scale their digital presence.",
    impact:
    "Developed a conversion-focused digital presence that brings web development, content strategy, SEO, and paid marketing into a unified growth workflow.",
    technologies: [
    "React",
    "Node.js",
    "Tailwind CSS",
    "SEO",
    "Meta Ads",
    "Analytics",
    ],
    liveUrl: "https://vyperx.in/",
    sourceUrl: "https://github.com/Radarshi",
    accent: "from-violet-400 to-fuchsia-500",
},
{
    title: "Devaki Memorial School",
    eyebrow: "School Web Platform",
    description:
    "A responsive educational website developed for D.M. School, Bhubaneswar, providing students, parents, and visitors with structured access to academic information, admissions, school activities, announcements, facilities, and other institutional resources.",
    impact:
    "Built a clean, responsive information architecture that makes school resources easier to navigate while providing a modern digital experience across desktop and mobile devices.",
    technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Design",
    "REST APIs",
    ],
    liveUrl: "https://devakischool.in/",
    sourceUrl: "https://github.com/Radarshi",
    accent: "from-emerald-400 to-cyan-500",
}
];

const FeaturedProjectsSection = () => (
  <section
    id="projects"
    className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    aria-labelledby="featured-projects-heading"
  >
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
            Selected work
          </p>
          <h2
            id="featured-projects-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Featured projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            A small selection of products and research projects that show how I
            approach user experience, backend systems, and real-world constraints.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition-transform duration-200 hover:-translate-y-1"
          >
            <div
              aria-hidden="true"
              className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${project.accent}`}
            />
            <div className="mb-8 flex items-start justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                0{index + 1} / {project.eyebrow}
              </p>
              <Layers3 className="h-5 w-5 text-slate-500" aria-hidden="true" />
            </div>

            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
            <p className="mt-4 text-sm font-medium text-sky-300">{project.impact}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                >
                  {technology}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-200"
                >
                  Live demo <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {/* {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-400 hover:bg-slate-800"
                >
                  <Github className="h-4 w-4" /> Source
                </a>
              )} */}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjectsSection;
