import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  { text: "HELLO", style: "intro" },
  { text: "I’M MD SUFIYAN", style: "name" },
  { text: "FULL STACK DEVELOPER", style: "role" },
];

export default function Loader({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < texts.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 2200);
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => {
        onFinish();
      }, 2400);
      return () => clearTimeout(endTimer);
    }
  }, [index, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 7.2, duration: 1.8, ease: "easeInOut" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050505] to-black" />

      {/* Ambient glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[180px]" />

      {/* Text */}
      <div className="relative text-center flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex items-center gap-6"
          >
            {/* GIF — only for HELLO */}
            {index === 0 && (
              <motion.img
                src="https://a.storyblok.com/f/217839/1000x1000/851503b537/20240702_bruce-hello.gif"
                alt="hello gif"
                className="w-40 h-40 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
              />
            )}

            {/* TEXT */}
            <h1
              className={`
                ${
                  texts[index].style === "intro" &&
                  "text-6xl md:text-8xl tracking-[0.45em] font-light text-gray-300"
                }
                ${
                  texts[index].style === "name" &&
                  "text-7xl md:text-9xl font-semibold tracking-tight text-white"
                }
                ${
                  texts[index].style === "role" &&
                  "text-6xl md:text-8xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500"
                }
              `}
            >
              {texts[index].text}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Underline */}
        <motion.div
          key={`line-${index}`}
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
    </motion.div>
  );
}
