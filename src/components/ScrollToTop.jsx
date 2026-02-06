import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full
      bg-gradient-to-r from-purple-500 to-pink-500
      text-white flex items-center justify-center
      shadow-lg transition-all duration-300
      hover:scale-110 hover:shadow-pink-500/40
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <FaArrowUp />
    </button>
  );
}
