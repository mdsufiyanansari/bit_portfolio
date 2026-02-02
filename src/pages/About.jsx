import useScrollFade from "../hooks/useScrollFade";

export default function About() {
  const header = useScrollFade();
  const front = useScrollFade({ delay: 100 });
  const back = useScrollFade({ delay: 200 });
  const db = useScrollFade({ delay: 300 });
  const image = useScrollFade({ delay: 150, y: 40 });

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div
          ref={header.ref}
          style={header.style}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            About Me
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-xl leading-relaxed">
            A passionate{" "}
            <span className="text-indigo-600 font-semibold">
              Full Stack Developer
            </span>{" "}
            focused on building clean, scalable and user-friendly web
            applications using modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div className="space-y-12">

            <div ref={front.ref} style={front.style} className="flex gap-6">
              <IconBox icon="💻" color="indigo" />
              <Content
                title="Frontend Development"
                text="I build modern, responsive and interactive user interfaces using React, JavaScript, HTML, CSS and Tailwind CSS, focusing on performance and clean UI design."
              />
            </div>

            <div ref={back.ref} style={back.style} className="flex gap-6">
              <IconBox icon="⚙️" color="emerald" />
              <Content
                title="Backend Development"
                text="I develop secure and scalable REST APIs using Node.js and Express, implementing authentication and clean backend architecture."
              />
            </div>

            <div ref={db.ref} style={db.style} className="flex gap-6">
              <IconBox icon="🗄️" color="sky" />
              <Content
                title="Database Management"
                text="I work with MySQL and MongoDB to design efficient data models and ensure smooth application performance."
              />
            </div>

          </div>

          {/* IMAGE */}
          <div
            ref={image.ref}
            style={image.style}
            className="relative flex justify-center"
          >
            <div className="absolute -top-12 -left-12 w-56 h-56 bg-indigo-200 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-200 rounded-full blur-3xl opacity-60"></div>

            <img
              src="https://freepngimg.com/save/19585-web-development-picture/338x246"
              alt="Developer Illustration"
              className="relative z-10 h-[26rem] object-contain drop-shadow-xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function IconBox({ icon, color }) {
  const colors = {
    indigo: "bg-indigo-100 text-indigo-600",
    emerald: "bg-emerald-100 text-emerald-600",
    sky: "bg-sky-100 text-sky-600",
  };

  return (
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-2xl text-2xl shadow-sm ${colors[color]}`}
    >
      {icon}
    </div>
  );
}

function Content({ title, text }) {
  return (
    <div>
      <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
      <p className="mt-3 text-gray-600 text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
}
