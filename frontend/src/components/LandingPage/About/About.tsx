import React from "react";

const About: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center px-6 md:px-20 font-poppins overflow-hidden"
      id="about"
    >

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl">
        {/* Left: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-semibold text-white">
            About DevConnect
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            DevConnect is revolutionizing developer collaboration. Our platform
            enables seamless communication, code sharing, and networking like
            never before.
          </p>
          <p className="mt-2 text-lg text-gray-400">
            Whether you're an individual developer, a startup, or an enterprise
            team, DevConnect provides the perfect ecosystem for innovation.
          </p>
        </div>

        {/* Right: Visual Representation */}
        <div className="flex justify-center">
          <div className="w-[80%] md:w-[60%] h-64 bg-[#242441] rounded-lg shadow-lg flex items-center justify-center">
            {/* Placeholder for an image, animation, or illustration */}
            <span className="text-gray-500">🚀 Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
