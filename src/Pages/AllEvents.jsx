// import React from "react";
// import { eventsDummyData } from "../assets/assets";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const AllEvents = () => {
//   return (
//     <div className="bg-white py-10 relative">
//       <div className="mx-4 sm:mx-[10%]">
//         {/* Header */}
//         <div className="text-center">
//           <h1 className="text-3xl font-bold pt-7 sm:pt-10 text-black">
//             All Events
//           </h1>
//           <p className="text-base text-gray-700 max-w-xl mx-auto mt-2">
//             Explore our top-rated events, carefully selected to give you the
//             best experience. Secure your tickets quickly and easily with just a
//             few clicks.
//           </p>
//         </div>

//         {/* Featured Events Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
//           {eventsDummyData.map((event) => (
//             <div key={event._id} className="block">
//               <div className="shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
//                 <img
//                   src={event.images[0]}
//                   alt={event.roomType}
//                   className="w-full h-60 object-cover"
//                 />
//                 <div className="p-4">
//                 <div className="flex justify-between items-center">
//                         <div>
//                         <h2 className="text-xl font-semibold text-black">
//                     {event.name}
//                   </h2>
//                         </div>
                  
//                   {/* <div> */}
//                   <h2 className="text-sm text-black">
//                     {event.checkIn}
//                   </h2>

//                   {/* </div> */}
//                     </div>
//                   <p className="text-sm text-gray-600">{event.address}</p>
//                   <p className="text-md pt-2 text-black">{event.eventType}</p>

//                   <div className="flex justify-between items-center mt-4">
//                     <p className="text-gray-800">₵{event.ticket}</p>

//                     <Link to={`/events/${event._id}`}>
//                       <button className="bg-red-500 cursor-pointer rounded-lg text-white font-semibold px-4 py-2 hover:bg-red-300 transition">
//                         Book Now
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

      
//       </div>
//     </div>
//   );
// };

// export default AllEvents;

// import React, { useState, useEffect } from "react";
// import { eventsDummyData } from "../assets/assets";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { getAllEvents } from "../firebase/firestoreservice";

// const AllEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadEvents();
//   }, []);

//   const loadEvents = async () => {
//     try {
//       setLoading(true);
//       const firebaseEvents = await getAllEvents();
      
//       // Combine Firebase events with dummy data
//       // Firebase events will appear first
//       const allEvents = [...firebaseEvents, ...eventsDummyData];
      
//       setEvents(allEvents);
//     } catch (error) {
//       console.error("Error loading events:", error);
//       // Fallback to dummy data if Firebase fails
//       setEvents(eventsDummyData);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="bg-white py-10 relative min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading events...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white py-10 relative">
//       <div className="mx-4 sm:mx-[10%]">
//         {/* Header */}
//         <div className="text-center">
//           <h1 className="text-3xl font-bold pt-7 sm:pt-10 text-black">
//             All Events
//           </h1>
//           <p className="text-base text-gray-700 max-w-xl mx-auto mt-2">
//             Explore our top-rated events, carefully selected to give you the
//             best experience. Secure your tickets quickly and easily with just a
//             few clicks.
//           </p>
//         </div>

//         {/* Featured Events Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
//           {events.map((event) => (
//             <div key={event._id || event.id} className="block">
//               <div className="shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition">
//                 <img
//                   src={event.images[0]}
//                   alt={event.roomType}
//                   className="w-full h-60 object-cover"
//                 />
//                 <div className="p-4">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <h2 className="text-xl font-semibold text-black">
//                         {event.name}
//                       </h2>
//                     </div>

//                     <h2 className="text-sm text-black">
//                       {event.checkIn}
//                     </h2>
//                   </div>
//                   <p className="text-sm text-gray-600">{event.address}</p>
//                   <p className="text-md pt-2 text-black">{event.eventType}</p>

//                   <div className="flex justify-between items-center mt-4">
//                     <p className="text-gray-800">₵{event.ticket}</p>

//                     <Link to={`/events/${event._id || event.id}`}>
//                       <button className="bg-red-500 cursor-pointer rounded-lg text-white font-semibold px-4 py-2 hover:bg-red-300 transition">
//                         Book Now
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllEvents;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllEvents } from "../firebase/database";
import { Calendar, MapPin } from "lucide-react";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all events
  const fetchEvents = async () => {
    try {
      setLoading(true);

      const data = await getAllEvents(); 
      // data should return an array of objects: { id, ...eventData }

      // Sort newest first (if createdAt exists)
      const sorted = data.sort(
        (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
      );

      setEvents(sorted);
    } catch (error) {
      console.error("Error loading events:", error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  // Run on mount
  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading amazing events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">All Events</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover upcoming events in Ghana. Book your tickets now!
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No events yet. Be the first to create one!</p>
            <Link
              to="/new-event"
              className="mt-6 inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700"
            >
              Create First Event
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {events.map((event) => {
              const id = event._id || event.id; 
              const img =
                event.images?.[0] ||
                "https://via.placeholder.com/400x300/fee2e2/000000?text=No+Image";

              return (
                <Link
                  key={id}
                  to={`/events/${id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={img}
                      alt={event.name}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300/fee2e2/000000?text=No+Image";
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ₵{event.ticket}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 line-clamp-2 mb-2">
                      {event.name}
                    </h3>

                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>

                      <p className="flex items-center gap-2 truncate">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        {event.address}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                        {event.eventType}
                      </span>
                      <span className="text-red-600 font-bold">Book Now →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
