import React from "react";
import ShinyText from "../../Bits/ShinyText/ShinyText";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full px-6 lg:px-16 py-4 bg-[#0e0e1e] backdrop-blur-xl shadow-lg flex justify-between items-center z-50 font-light">
      <h1 className="text-white text-3xl tracking-wide">DC</h1>
      <ul className="hidden md:flex bg-[#0c0c19] space-x-4 text-sm tracking-wide border text-slate-400 border-[#242441] rounded-full px-4 py-2">
        {["About", "How It Works", "Testimonials", "FAQ", "Contact"].map(
          (item) => (
            <li key={item} className="px-3 py-1 rounded-full transition">
              <a href="#" className="hover:text-slate-300 transition duration-300">
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Auth Links */}
      <div className="hidden md:flex space-x-4">
        <ShinyText text="Join Now" disabled={false} speed={3} className='border border-[#242441] px-4 py-1 rounded-lg text-slate-400 cursor-pointer hover:text-slate-300 transition duration-300'/>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl focus:outline-none" aria-label="Open Menu">
        ☰
      </button>
    </nav>
  );
};

export default NavBar;
