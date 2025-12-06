import React from "react";
import { eventsDummyData } from "../assets/assets";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AllEvents = () => {
  return (
    <div className="bg-white py-10 relative">
      <div className="mx-4 sm:mx-[10%]">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold pt-7 sm:pt-10 text-black">
            All Events
          </h1>
          <p className="text-base text-gray-700 max-w-xl mx-auto mt-2">
            Explore our top-rated events, carefully selected to give you the
            best experience. Secure your tickets quickly and easily with just a
            few clicks.
          </p>
        </div>

        {/* Featured Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {eventsDummyData.map((event) => (
            <div key={event._id} className="block">
              <div className="shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
                <img
                  src={event.images[0]}
                  alt={event.roomType}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                <div className="flex justify-between items-center">
                        <div>
                        <h2 className="text-xl font-semibold text-black">
                    {event.name}
                  </h2>
                        </div>
                  
                  <div>
                  <h2 className="text-xl font-semibold  text-black">
                    {event.checkIn}
                  </h2>

                  <h2 className="text-xl font-semibold text-black">
                     {event.checkOut}
                  </h2>

                  </div>
                    </div>
                  <p className="text-sm text-gray-600">{event.address}</p>
                  <p className="text-md pt-2 text-black">{event.eventType}</p>

                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-800">₵{event.ticket} / night</p>

                    <Link to={`/events/${event._id}`}>
                      <button className="bg-red-500 cursor-pointer rounded-lg text-white font-semibold px-4 py-2 hover:bg-red-300 transition">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default AllEvents;
