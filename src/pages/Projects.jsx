import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useScrollFade from "../hooks/useScrollFade";
import Footer from "../components/Footer";

/* =========================
   PROJECT DATA
========================= */

const projects = [
  {
    title: "E-Commerce Web App",
    description:
      "Full stack e-commerce platform with authentication, cart, payment integration and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/mdsufiyanansari/GMH_STORE",
    live: "https://gmh-store.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website with animations, responsive layout and modern UI/UX.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Food Ordering System",
    description:
      "Online food ordering system with user login, admin panel and real-time order tracking.",
    tech: ["React", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A full stack blog platform with authentication, CRUD features and comments.",
    tech: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "Responsive admin dashboard with charts, analytics and role-based access.",
    tech: ["React", "Tailwind", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#",
  },
];

/* =========================
   PROJECTS PAGE
========================= */

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  const header = useScrollFade();
  const cards = useScrollFade({ delay: 150 });
  const button = useScrollFade({ delay: 300 });

  return (
    <div className="">
    <section
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://novacentrix.com/wp-content/uploads/2021/04/plexus-curve-effect-3d-blue-background-scaled.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/95" />

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/25 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/25 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div
          ref={header.ref}
          style={header.style}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg">
            Some of my featured projects showcasing full stack development
            skills and modern UI design.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={cards.ref}
          style={cards.style}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => {
            const visible = expanded || index < 3;

            return (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out
                ${
                  visible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95 pointer-events-none h-0 overflow-hidden"
                }`}
              >
                {visible && <ProjectCard {...project} />}
              </div>
            );
          })}
        </div>

        {/* Toggle Button */}
        <div
          ref={button.ref}
          style={button.style}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="group relative px-10 py-4 rounded-xl
            bg-gradient-to-r from-indigo-600 to-purple-600
            text-white font-medium
            transition-all duration-300
            hover:from-indigo-500 hover:to-purple-500
            hover:-translate-y-1
            shadow-[0_15px_40px_rgba(99,102,241,0.45)]"
          >
            {expanded ? "View Less Projects" : "View More Projects"}
          </button>
        </div>
      </div>
    </section>
        </div>
  );
}

/* =========================
   PROJECT CARD
========================= */

function ProjectCard({ title, description, tech, image, github, live }) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden
      bg-white/5 backdrop-blur-xl
      border border-white/10
      transition-all duration-300 ease-out
      hover:-translate-y-3
      hover:shadow-[0_25px_70px_rgba(99,102,241,0.45)]"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-2xl font-semibold text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-400 mb-5 leading-relaxed text-sm">
          {description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs rounded-full
              bg-white/10 border border-white/10 text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
            bg-white/10 border border-white/10 text-gray-300
            hover:text-white hover:bg-white/20 transition"
          >
            <FaGithub /> Code
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
            bg-gradient-to-r from-indigo-600 to-purple-600 text-white
            hover:from-indigo-500 hover:to-purple-500 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </div>
  );
}
