import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "../../Bits/ShinyText/ShinyText";
import { CircleX, Menu } from "lucide-react";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = ["About", "How It Works", "Testimonials", "FAQ", "Contact"];
  const navLinksMobile = ["About", "How It Works", "Testimonials", "FAQ", "Contact", "Join Now"];
  const showJoinNow = isScrolled ? [...navLinks, "Join Now"] : navLinks;
  const handleScrollToSection = (section: string) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full px-6 lg:px-16 py-4 fixed top-0 left-0 flex items-center z-50 font-light transition-all duration-500 ${
        isScrolled
          ? "md:justify-center bg-transparent justify-end"
          : "justify-between bg-[#0e0e1e] shadow-lg"
      }`}
      id="top"
    >
      {!isScrolled && (
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-3xl tracking-wide"
        >
          DC
        </motion.h1>
      )}

      <motion.ul
        layout
        className="hidden md:flex bg-[#0c0c19] space-x-4 text-sm tracking-wide border text-slate-400 border-[#242441] rounded-full px-4 py-2"
      >
        <AnimatePresence>
          {showJoinNow.map((item) => (
            <motion.li
              key={item}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1 }}
              className={`px-3 py-1 rounded-full transition ${
                item === "Join Now"
                  ? "bg-gradient-to-r from-[#ff00a2] to-[#ff7e00] text-slate-200"
                  : ""
              }`}
            >
              <button
                onClick={() => handleScrollToSection(item)}
                className={`hover:text-slate-300 transition duration-300 ${
                  item === "Join Now" ? "hover:text-white" : "hover:text-slate-300"
                }`}
              >
                {item}
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {!isScrolled && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex space-x-4"
        >
          <ShinyText
            text="Join Now"
            disabled={false}
            speed={3}
            className="border border-[#242441] px-4 py-1 rounded-lg text-slate-400 cursor-pointer hover:text-slate-300 transition duration-300"
          />
        </motion.div>
      )}

      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        aria-label="Open Menu"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setIsOpen(false)}
            ></motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="h-full w-3/4 sm:w-1/2 bg-[#0c0c19] fixed top-0 right-0 z-40 flex flex-col items-center justify-center shadow-lg"
            >
              <button
                className="absolute top-5 right-5 text-white text-2xl focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <CircleX />
              </button>

              <ul className="flex flex-col space-y-6 text-white text-lg">
                {navLinksMobile.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className={`px-6 py-2 rounded-lg transition ${
                      item === "Join Now"
                        ? "bg-gradient-to-r from-[#ff00a2] to-[#ff7e00] text-white font-semibold"
                        : "hover:text-gray-300"
                    }`}
                  >
                    <button 
                      onClick={() => {
                        handleScrollToSection(item)
                        setIsOpen(false)
                      }}
                    >{item}</button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
