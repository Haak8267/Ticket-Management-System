import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AllEvents from "./Pages/AllEvents";
import EventsDetails from "./Pages/EventsDetails";
import Footer from "./Components/Footer";
import MyBookings from "./Pages/MyBookings";
import Payments from "./Pages/Payments";

const App = () => {
  const location = useLocation();

  // Show Navbar only on home page
  const showNavbar = location.pathname === "/";

  // Show Footer on all pages except home page
  const showFooter = location.pathname === "/";
  return (
    <div>
      {showFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:id" element={<EventsDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/payment" element={<Payments />} />
      </Routes>

      {showFooter && <Footer />}
    </div>
  );
};

export default App;
