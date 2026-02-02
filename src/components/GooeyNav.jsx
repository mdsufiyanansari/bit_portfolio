import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function GooeyNav({ items = [] }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const containerRef = useRef(null);
  const indicatorRef = useRef(null);

  const activeIndex = items.findIndex(
    (item) => item.link === location.pathname
  );

  // Desktop gooey indicator movement
  useEffect(() => {
    if (!containerRef.current || !indicatorRef.current) return;
    const el = containerRef.current.children[activeIndex];
    if (!el) return;

    indicatorRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
    indicatorRef.current.style.width = `${el.offsetWidth}px`;
  }, [activeIndex]);

  return (
    <>
    <div className="relative">
     
      {/* ================= DESKTOP NAV ================= */}
    <nav className="hidden md:flex justify-evenly center fixed top-0 left-0 w-full bg-white z-50 shadow-md px-6">
  
  {/* LEFT : LOGO / NAME */}
  <h1 className="leading-none select-none">
    <span className="text-3xl font-extrabold tracking-[0.18em] text-gray-900">
      MD
    </span>

    <span className="ml-2 text-3xl font-light tracking-wide text-gray-800">
      SUFIYAN
    </span>

    <span className="block mt-1 text-[11px] tracking-[0.6em] font-medium text-red-500">
      ANSARI
    </span>
  </h1>

        <div className="relative  ">
          <span
            ref={indicatorRef}
            className="absolute inset-y-1 rounded-full bg-indigo-600 blur-lg transition-all duration-500"
          />
         

          <ul
            ref={containerRef}
            className="relative w-[600px] z-10 flex gap-6 px-2 py-2"
          >
            {items.map((item, index) => (
              <li
                key={item.label}
                onClick={() => navigate(item.link)}
                className={`px-5 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  index === activeIndex
                    ? "text-white text-xl font-bold"
                    : "text-black text-lg hover:scale-105 duration-500 ease-in-out"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-[#0b0f19] z-50 flex items-center justify-between px-4 shadow-lg">
        <span className="text-white font-bold text-lg tracking-wide">
          Md Sufiyan
        </span>

        {/* Burger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative w-10 h-10 flex items-center justify-center"
        >
          <span
            className={`absolute h-[3px] w-7 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-[3px] w-7 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-[3px] w-7 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-blue-800 opacity-25
          backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-xs bg-gradient-to-b from-gray-900 to-gray-800 transform transition-transform duration-500 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="pt-24 px-6 space-y-6 ">
            {items.map((item, index) => (
              <li
                key={item.label}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`text-white text-xl font-semibold -tracking-[-5px]
                  hover:-tracking-wide p-1 transform transition-all duration-500 border-b-2 border-gray-800  ${
                  mobileOpen
                    ? "opacity-100 translate-x-0 "
                    : "opacity-0 translate-x-6 "
                }`}
                onClick={() => {
                  navigate(item.link);
                  setMobileOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}
