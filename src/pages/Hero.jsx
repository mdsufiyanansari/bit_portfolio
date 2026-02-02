import { Link } from "react-router-dom";
import useScrollFade from "../hooks/useScrollFade";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { HiArrowDownTray } from "react-icons/hi2";

export default function Hero() {
  const left = useScrollFade({ delay: 0, y: 40 });
  const right = useScrollFade({ delay: 150, y: 40 });

  return (
    <section
      className="relative min-h-[calc(100vh-64px)] flex items-center bg-cover bg-center h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://novacentrix.com/wp-content/uploads/2021/04/plexus-curve-effect-3d-blue-background-scaled.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-black/95 " />

      {/* Glow */}
      <div className="absolute  -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">

        {/* IMAGE */}
        <div
          ref={right.ref}
          style={right.style}
          className="flex justify-center order-1 md:order-2 "
        >
          <div className="relative">
            {/* glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 blur-2xl" />

            <div
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72
              rounded-full bg-white/10 backdrop-blur-xl border border-white/20
              shadow-[0_0_80px_rgba(99,102,241,0.35)]
              flex items-center justify-center"
            >
              <img
                src="https://i.pravatar.cc/400"
                alt="Md Sufiyan Ansari"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover"
              />
            </div>

            {/* Tech icons */}
            <span className="absolute -top-4 left-6 flex items-center gap-2 px-3 py-1 text-[11px]
              rounded-full bg-white/10 backdrop-blur border border-white/20 text-gray-200">
              <FaReact className="text-cyan-400" /> React
            </span>

            <span className="absolute top-20 -right-10 flex items-center gap-2 px-3 py-1 text-[11px]
              rounded-full bg-white/10 backdrop-blur border border-white/20 text-gray-200">
              <FaNodeJs className="text-green-400" /> Node.js
            </span>

            <span className="absolute -bottom-5 right-10 flex items-center gap-2 px-3 py-1 text-[11px]
              rounded-full bg-white/10 backdrop-blur border border-white/20 text-gray-200">
              <FaDatabase className="text-purple-400" /> MongoDB
            </span>
          </div>
        </div>

        {/* TEXT */}
        <div
          ref={left.ref}
          style={left.style}
          className="text-white order-2 md:order-1 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Md{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sufiyan Ansari
            </span>
          </h1>

          <h2
            className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold
            bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent"
          >
            Full Stack Web Developer
          </h2>

          <p
            className="mt-5 text-sm sm:text-base md:text-lg text-gray-300
            max-w-md md:max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            I design and develop{" "}
            <span className="text-white font-medium">scalable</span>,{" "}
            <span className="text-white font-medium">secure</span> &{" "}
            <span className="text-white font-medium">
              high-performance
            </span>{" "}
            digital products for the modern web.
          </p>

          {/* Skill icons row */}
          <div className="mt-6 flex justify-center md:justify-start gap-6 text-gray-300">
            <FaReact className="text-2xl hover:text-cyan-400 transition" />
            <FaNodeJs className="text-2xl hover:text-green-400 transition" />
            <FaDatabase className="text-2xl hover:text-purple-400 transition" />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row center md:items-start gap-5">
           <Link
  to="/projects"
  className="group relative inline-flex items-center justify-center
  px-10 py-4 rounded-xl font-medium text-white
  bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
  bg-[length:200%_200%]
  transition-all duration-500 ease-out
  hover:bg-[position:100%_0]
  hover:-translate-y-1
  hover:shadow-[0_20px_50px_rgba(99,102,241,0.55)]
  ring-1 ring-white/10 overflow-hidden"
>
  {/* shine effect */}
  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%]
  transition-transform duration-700 bg-gradient-to-r
  from-transparent via-white/30 to-transparent skew-x-12" />

  <span className="relative z-10">View Projects</span>
</Link>

<a
  href="/resume.pdf"
  className="group relative inline-flex items-center gap-3
  px-5 py-3 rounded-xl
  text-gray-200 hover:text-white
  bg-white/5 backdrop-blur-md
  border border-white/10
  transition-all duration-300 ease-out
  hover:-translate-y-1
  hover:bg-white/10
  hover:shadow-[0_12px_35px_rgba(99,102,241,0.35)]
  overflow-hidden"
>
  {/* glow slide */}
  <span
    className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%]
    transition-transform duration-700
    bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
  />

  {/* icon bubble */}
  <span
    className="relative z-10 flex items-center justify-center
    w-9 h-9 rounded-lg
    bg-gradient-to-br from-indigo-500 to-purple-600
    shadow-md group-hover:scale-105 transition"
  >
    <HiArrowDownTray className="text-white text-lg" />
  </span>

  {/* text */}
  <span className="relative z-10 font-medium tracking-wide">
    Download Resume
  </span>
</a>


          </div>
        </div>
      </div>
    </section>
  );
}
