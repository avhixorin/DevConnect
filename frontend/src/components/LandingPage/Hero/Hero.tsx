
import React from "react";
import ShinyText from "../../Bits/ShinyText/ShinyText";
import Threads from "../../Bits/HyperSpeed/Threads";


const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center px-6 mt-20 pt-20 font-poppins overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 z-0 mb-56">
        <Threads />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <ShinyText
          text="Announcing our new product"
          disabled={false}
          speed={3}
          className="border text-base border-[#242441] px-4 py-1 text-slate-500 transition duration-300 rounded-full"
        />

        <h1 className="text-center text-7xl md:text-8xl font-medium leading-tight text-white flex flex-col gap-4 mt-6">
          DevConnect is the new <br />
          <span className="bg-gradient-to-r from-blue-400 via-pink-500 via-yellow-500 to-slate-400 bg-clip-text text-transparent">
            standard for collaboration
          </span>
        </h1>

        <div className="w-full text-center mt-4 p-4 shadow-md rounded-lg">
          <p className="text-lg text-slate-500">Chat, share, and connect</p>
        </div>

        <div className="w-[90%] md:w-[80%] h-96 bg-borderColor mt-10 rounded-lg px-6 md:px-20"></div>
      </div>
    </section>
  );
};

export default Hero;
