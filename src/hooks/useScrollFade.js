import { useEffect, useRef, useState } from "react";

export default function useScrollFade({
  threshold = 0.25,
  delay = 0,
  y = 24,
  scale = 0.96,
} = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return {
    ref,
    style: {
      transitionProperty: "opacity, transform, filter",
      transitionDuration: "700ms",
      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)", // smooth spring-like
      transitionDelay: `${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible
        ? "translateY(0px) scale(1)"
        : `translateY(${y}px) scale(${scale})`,
      filter: visible ? "blur(0px)" : "blur(4px)",
      willChange: "opacity, transform",
    },
  };
}
