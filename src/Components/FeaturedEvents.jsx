import React from 'react';
import { eventsDummyData } from '../assets/assets';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedEvents = () => {
  return (
    <div className="bg-white py-10 relative">
      <div className="mx-4 sm:mx-[10%]">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold pt-7 sm:pt-10 text-black">Our Featured Rooms</h1>
          <p className="text-base text-gray-700 max-w-xl mx-auto mt-2">
            Explore our top rated rooms carefully selected for comfort, style, and convenience.
            Book your stay with just a few clicks.
          </p>
        </div>

        {/* Featured Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {eventsDummyData.slice(0, 3).map((event) => (
            <div key={event._id} className="block">
              <div className="shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                <img
                  src={event.images[0]}
                  alt={event.roomType}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-black">{event.name}</h2>
                  <p className="text-sm text-gray-600">{event.address}</p>
                  <p className="text-md pt-2 text-black">{event.eventType}</p>

                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-800">₵{event.ticket} / night</p>

                    <Link to={`/events/${event._id}`}>
                      <button
                        className="bg-white cursor-pointer text-black font-semibold border border-black px-4 py-2 hover:bg-gray-100 transition"
                      >
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="flex justify-center mt-10 pb-10">
          <Link to="/events">
            <button
              className="flex items-center cursor-pointer gap-2 bg-white text-black font-semibold border border-black px-4 py-2 hover:bg-gray-100 transition"
            >
              View All Events <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
