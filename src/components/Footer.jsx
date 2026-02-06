import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bottom-0 bg-gradient-to-br from-[#1b1d3a] via-[#252763] to-[#1b1d3a] overflow-hidden">
      
      {/* glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/30 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-10">
          
          {/* LOGO / NAME */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold tracking-wide">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Md Sufiyan
              </span>
              <span className="text-white ml-2">Ansari</span>
            </h3>

            <p className="mt-3 text-gray-400 text-sm max-w-sm leading-relaxed">
              Full Stack Web Developer crafting modern, scalable and
              high-performance digital experiences.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-6">
            <SocialIcon
              href="https://github.com/mdsufiyanansari"
              label="GitHub"
            >
              <FaGithub />
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/in/your-linkedin-username"
              label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIcon>

            <SocialIcon
              href="mailto:mdsufiyanansari@gmail.com"
              label="Email"
            >
              <FaEnvelope />
            </SocialIcon>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Md Sufiyan Ansari. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with
            <FaHeart className="text-pink-500 animate-pulse" />
            using React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}

/* =========================
   SMALL COMPONENT
========================= */

function SocialIcon({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 flex items-center justify-center rounded-xl
      bg-white/5 backdrop-blur-xl border border-white/10
      text-white text-xl transition-all duration-300
      hover:-translate-y-1 hover:bg-white/10
      hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
      hover:ring-1 hover:ring-purple-400/50"
    >
      {children}
    </a>
  );
}
