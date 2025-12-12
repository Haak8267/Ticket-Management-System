import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../firebase/Authcontext";
import { getUserBookings, deleteBooking } from "../firebase/firestoreservice";
import toast, { Toaster } from "react-hot-toast";

const MyBookings = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      toast.error("Please sign in to view your bookings");
      navigate("/signin");
      return;
    }

    loadBookings();
  }, [currentUser, navigate]);

  const loadBookings = async () => {
    try {
      setLoading(true);
      const userBookings = await getUserBookings(currentUser.uid);
      setBookings(userBookings);
    } catch (error) {
      console.error("Error loading bookings:", error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) {
      return;
    }

    try {
      await deleteBooking(bookingId);
      setBookings(bookings.filter(booking => booking.id !== bookingId));
      toast.success("Booking deleted successfully");
    } catch (error) {
      console.error("Error deleting booking:", error);
      toast.error("Failed to delete booking");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 pt-28 pb-20 space-y-8">
      <Toaster />
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/events")}
        className="text-black hover:text-gray-700 mb-4 cursor-pointer flex items-center gap-2"
      >
        ← Back
      </button>

      <div className="space-y-3">
        <h1 className="text-4xl text-red-500 font-semibold">My Bookings</h1>
        <p className="text-gray-500 text-lg mt-2">
          Easily manage your event ticket bookings in one place.
        </p>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No bookings yet</p>
          <Link
            to="/events"
            className="inline-block mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Browse Events
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_0.5fr] gap-4 text-gray-600 font-medium border-b pb-2">
            <p>Events</p>
            <p>Date</p>
            <p>Payment</p>
            <p>Actions</p>
          </div>

          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_0.5fr] gap-4 items-center border-b border-gray-200 pb-6"
            >
              
              {/* Event Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={booking.image}
                  alt={booking.name}
                  className="w-32 h-24 object-cover rounded-lg shadow-sm"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    {booking.name}{" "}
                    {booking.eventType && (
                      <span className="text-gray-500 text-sm">({booking.eventType})</span>
                    )}
                  </h3>

                  <p className="text-gray-500 text-sm flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {booking.address}
                  </p>

                  <p className="text-gray-700 font-medium mt-1">Total: ₵{booking.total}</p>
                </div>
              </div>

              {/* Event Date */}
              <div className="text-gray-700 text-sm space-y-1">
                <p>
                  <span className="text-gray-600 font-medium">Event Date:</span>{" "}
                  {booking.date ? new Date(booking.date).toDateString() : 'N/A'}
                </p>
              </div>

              {/* Payment Status */}
              <div className="flex items-center justify-between md:justify-start gap-4">
                <span
                  className={`text-sm font-semibold flex items-center ${
                    booking.status === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full mr-2 ${
                      booking.status === "Paid" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {booking.status}
                </span>

                {booking.status === "Unpaid" && (
                  <Link
                    to="/payment"
                    state={{ booking }}
                    className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition"
                  >
                    Pay Now
                  </Link>
                )}
              </div>

              {/* Delete Button */}
              <div>
                <button
                  onClick={() => handleDeleteBooking(booking.id)}
                  className="text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                >
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;