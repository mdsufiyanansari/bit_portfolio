// CREDIT
// Electric border inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN

import ElectricBorder from "../animation/ElectricBorder";
import Footer from "../components/Footer";
import useScrollFade from "../hooks/useScrollFade";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const header = useScrollFade();
  const front = useScrollFade({ delay: 100 });
  const back = useScrollFade({ delay: 200 });
  const tools = useScrollFade({ delay: 300 });

  return (
    <div>
    <section
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://novacentrix.com/wp-content/uploads/2021/04/plexus-curve-effect-3d-blue-background-scaled.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/95" />

      {/* Ambient glow */}
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
              Skills & Technologies
            </span>
          </h1>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg">
            Tools and technologies I use to build modern, scalable and
            high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div ref={front.ref} style={front.style}>
            <SkillCard
              title="Frontend"
              skills={[
                { name: "React", icon: <FaReact className="text-cyan-400" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
                {
                  name: "Tailwind CSS",
                  icon: <SiTailwindcss className="text-sky-400" />,
                },
              ]}
            />
          </div>

          <div ref={back.ref} style={back.style}>
            <SkillCard
              title="Backend"
              skills={[
                { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "REST APIs", icon: <FaDatabase className="text-purple-400" /> },
              ]}
            />
          </div>

          <div ref={tools.ref} style={tools.style}>
            <SkillCard
              title="Tools & Workflow"
              skills={[
                { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
                { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
                { name: "Deployment", icon: <FaDatabase className="text-indigo-400" /> },
              ]}
            />
          </div>

        </div>
      </div>
    </section>
   
    </div>
  );
}

/* =========================
   Skill Card Component
========================= */

function SkillCard({ title, skills }) {
  return (
    <ElectricBorder
      color="#7df9ff"
      speed={1}
      chaos={0.12}
      thickness={2}
      style={{ borderRadius: 20 }}
    >
      <div
        className="group relative rounded-2xl p-8 md:h-96
        transition-all duration-300 ease-out
        hover:-translate-y-3"
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0
          group-hover:opacity-100 transition 
          bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl"
        />

        <h3 className="relative text-3xl font-semibold text-white border-b-2 border-white/30 p-3 mb-8">
          {title}
        </h3>

        <ul className="relative space-y-5">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex items-center gap-4 text-gray-300
              group-hover:text-white transition"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="font-medium tracking-wide">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ElectricBorder>
  );
}
