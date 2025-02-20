import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-full flex flex-col items-center justify-center px-6 mt-28 font-poppins"
      id="hero"
    >
      {/* <div className="absolute inset-0 z-0 mb-60">
        <Threads />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="border text-base border-[#242441] px-4 py-1 text-slate-500 transition duration-300 rounded-full">Announcing our new product</h1>
        
        <h1 className="text-center text-7xl md:text-8xl font-medium leading-tight text-white flex flex-col gap-1">
          DevConnect is the new <br />
          <span className="bg-gradient-to-r from-blue-400 via-pink-500 via-yellow-500 to-slate-400 bg-clip-text text-transparent">
            standard for collaboration
          </span>
        </h1>

        <div className="w-full text-center mt-2 p-4 shadow-md rounded-lg">
          <p className="text-lg text-slate-500">Chat, share, and connect</p>
        </div>

        <div className="w-[90%] md:w-[80%] z-20 h-96 bg-[#242441] mt-10 rounded-xl px-6 md:px-20"></div>
      </div>
    </section>
  );
};

export default Hero;
