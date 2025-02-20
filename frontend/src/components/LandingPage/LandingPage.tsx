import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import HowItWorks from "./HowItWorks/HowItWorks";
import Testimonials from "./Testimonials/Testimonials";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { ChevronUp } from "lucide-react";

const LandingPage: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-center relative">
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 bg-slate-800 text-white px-2 py-2 rounded-full shadow-lg hover:bg-black transition duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <NavBar />
      <Hero />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
