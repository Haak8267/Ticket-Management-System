import React from 'react';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT SIDE (Your Content — unchanged) */}
        <div className="flex-1 space-y-6">
          <h3 className="text-xl font-semibold text-gray-600">
            Your vision, our expertise! ✨ 🎫
          </h3>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find, Create, and Manage Event <br />
            Ticketing with Confidence!
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            A comprehensive platform designed for events of every scale.
            Streamline your planning, connect with attendees, and handle
            ticket sales efficiently with our trusted solution.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold">
              Get Started
            </button>

            <button className="px-6 py-3 border border-gray-400 rounded-lg font-semibold">
              Explore Our Platform
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE (Fixed) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-[500px] rounded-xl object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
