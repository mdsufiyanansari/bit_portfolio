import { useState } from "react";
import emailjs from "@emailjs/browser";
import useScrollFade from "../hooks/useScrollFade";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const header = useScrollFade();
  const formAnim = useScrollFade({ delay: 150, y: 40 });
  const cards = useScrollFade({ delay: 300, y: 40 });
  const social = useScrollFade({ delay: 450, y: 40 });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

     setSuccess(true);

setTimeout(() => {
  setSuccess(false);
}, 3000); // 3 seconds
      e.target.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Email send nahi ho paya 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1b1d3a] via-[#252763] to-[#1b1d3a]">
      
      {/* BACKGROUND SHAPES */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/30 rounded-full blur-[160px]" />
      <div className="absolute top-40 right-0 w-[420px] h-[220px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl blur-[120px] opacity-80" />
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-yellow-400 rounded-full opacity-80" />
      <div className="absolute bottom-40 right-40 w-6 h-6 border-2 border-pink-400 rotate-45" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div ref={header.ref} style={header.style} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Contact Us
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
            Say hello to our support team. We are always ready to help.
          </p>
        </div>

        {/* FORM */}
        <div
          ref={formAnim.ref}
          style={formAnim.style}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl
          border border-white/10 rounded-3xl p-10 shadow-xl"
        >
          <h3 className="text-white text-2xl font-semibold mb-8">
            Say hello, on our support
          </h3>

          <form onSubmit={sendEmail} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                required
                placeholder="Name"
                className="h-12 px-4 rounded-xl bg-white/10 border border-white/10
                text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="h-12 px-4 rounded-xl bg-white/10 border border-white/10
                text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Message"
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/10
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-48 h-12 rounded-full
              bg-gradient-to-r from-purple-500 to-pink-500
              text-white font-medium
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_10px_40px_rgba(236,72,153,0.45)]
              disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Now →"}
            </button>

            {success && (
              <p className="text-green-400 text-sm mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>

        {/* CONTACT INFO */}
        <div
          ref={cards.ref}
          style={cards.style}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <InfoCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            text="Bhagalpur, Bihar, India"
            link="https://www.google.com/maps/search/bhagalpur, +bihar, +india"
          />
          <InfoCard
            icon={<FaPhoneAlt />}
            title="Phone"
            text="+91 9155348207"
            link="tel:+919155348207"
          />
          <InfoCard
            icon={<FaEnvelope />}
            title="Email"
            text="mdsufiyanansari812002@gmail.com"
            link="mailto:mdsufiyanansari812002@gmail.com"
          />
        </div>

        {/* SOCIAL LINKS */}
        <div
          ref={social.ref}
          style={social.style}
          className="mt-16 flex justify-center gap-6"
        >
          <SocialCard
            icon={<FaLinkedin />}
            title="LinkedIn"
            link="https://www.linkedin.com/in/md-sufiyan-ansari-66746a344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <SocialCard
            icon={<FaGithub />}
            title="GitHub"
            link="https://github.com/mdsufiyanansari"
          />
        </div>

      </div>
    </section>
  );
}

/* =========================
   SMALL COMPONENTS
========================= */

function InfoCard({ icon, title, text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 p-6 rounded-2xl
      bg-white/5 backdrop-blur-xl border border-white/10
      transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-xl
        bg-gradient-to-br from-purple-500 to-pink-500
        text-white text-2xl shadow-lg">
        {icon}
      </div>

      <div className="text-left">
        <h4 className="text-lg font-semibold text-white">
          {title}
        </h4>
        <p className="text-gray-300 text-sm group-hover:underline">
          {text}
        </p>
      </div>
    </a>
  );
}

function SocialCard({ icon, title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 px-8 py-5 rounded-2xl
      bg-white/5 backdrop-blur-xl border border-white/10
      transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl
        bg-gradient-to-br from-indigo-500 to-purple-600
        text-white text-xl">
        {icon}
      </div>

      <span className="text-white font-medium group-hover:underline">
        {title}
      </span>
    </a>
  );
}
