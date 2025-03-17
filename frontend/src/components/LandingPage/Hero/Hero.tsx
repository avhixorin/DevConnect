import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-full flex flex-col items-center justify-center px-6 mt-28 font-poppins pt-3"
      id="hero"
    >
      <div className="flex flex-col items-center">
        <h1 className="border text-base border-[#242441] px-4 py-1 text-slate-500 transition duration-300 rounded-full">Announcing our new product</h1>
        
        <p className="text-center mt-2 text-xl md:text-7xl font-[550] leading-tight text-white flex flex-col gap-1 font-[Onest]">
          DevConnect is the new <br />
          <span className="bg-gradient-to-r from-blue-400 via-pink-500 via-yellow-500 to-slate-400 bg-clip-text text-transparent">
            standard for collaboration
          </span>
        </p>

        <div className="w-full text-center mt-2 p-4 shadow-md rounded-lg">
          <p className="text-lg text-slate-500">Chat, share, and connect</p>
        </div>

        <div className="w-[90%] md:w-[80%] z-20 h-96 bg-[#242441] mt-10 rounded-xl px-6 md:px-20"></div>
      </div>
    </section>
  );
};

export default Hero;
