import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { eventsDummyData, facilityIcons } from "../assets/assets";
import { useAuth } from "../firebase/Authcontext";
import { createBooking } from "../firebase/firestoreservice";

const EventsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const event = eventsDummyData.find((event) => event._id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div className="text-center py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <p className="text-gray-500 text-lg">Event not found</p>
        <Link to="/events" className="text-blue-600 hover:underline">
          Back to All Events
        </Link>
      </div>
    );
  }

  const handleBookNow = async () => {
    if (!currentUser) {
      toast.error("Please sign in to book this event");
      setTimeout(() => {
        navigate("/signin");
      }, 1500);
      return;
    }

    setLoading(true);
    
    try {
      const bookingData = {
        eventId: event._id,
        name: event.name,
        address: event.address,
        city: event.city || "New York",
        ticket: event.ticket,
        total: event.ticket,
        eventType: event.eventType,
        image: event.images[0],
        date: event.checkIn,
        status: "Unpaid",
        bookingDate: new Date().toISOString(),
      };

      const createdBooking = await createBooking(bookingData, currentUser.uid);
      
      toast.success("Event booked successfully!", {
        duration: 4000,
        position: "top-center",
        icon: "✔️",
      });

      setTimeout(() => {
        navigate("/my-bookings");
      }, 2000);
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to book event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 pt-28 pb-20">
      <Toaster />
      <h1 className="text-3xl font-bold">{event.name}</h1>
      <p className="text-gray-500 text-sm">{event.address}</p>
      <p className="text-gray-500 text-sm">{event.city || "New York"}</p>

      <div className="mt-4">
        <div className="w-full">
          <img
            src={event.images[selectedImage]}
            alt={`${event.eventType} large`}
            className="w-full h-90 sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4 overflow-x-auto">
          {event.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === index
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`${event.eventType} thumbnail ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xl font-semibold">₵{event.ticket}</p>
        <p className="text-gray-600 text-md mt-2">{event.eventType}</p>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Amenities</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {event.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                <img
                  src={facilityIcons[amenity]}
                  alt={amenity}
                  className="w-4 h-4"
                />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Date Section */}
      <div className="mt-6 flex flex-wrap gap-4 items-end">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-black">
              {event.checkIn} 
            </h2>
          </div>
        </div>

        <button
          onClick={handleBookNow}
          disabled={loading}
          className="bg-red-500 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </div>

      <div className="mt-6">
        <Link
          to="/my-bookings"
          className="text-red-500 hover:underline inline-flex items-center gap-2"
        >
          View My Bookings →
        </Link>
      </div>
    </div>
  );
};

export default EventsDetails;