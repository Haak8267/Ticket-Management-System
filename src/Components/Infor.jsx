import React from 'react'
import image from '../assets/image11.avif'

const Infor = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-6 md:px-20 py-10">
      
      {/* right side */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
          Discover Events with Ease & Convenience
        </h2>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Explore a seamless way to find concerts, conferences, festivals, sports events, and more — 
          all in one place. Our platform makes event discovery simple, fast, and enjoyable, ensuring 
          you never miss out on what's happening around you.
        </p>

        <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
          Whether you're searching for the next big show or looking to buy tickets instantly, we give 
          you a smooth and secure booking experience designed to match your interests and schedule.
        </p>
      </div>

      {/* left side */}
      <div className="md:w-1/2 w-full">
        <img 
          src={image} 
          alt="Event Crowd" 
          className="rounded-lg w-full h-auto" 
        />
      </div>

    </div>
  )
}

export default Infor
