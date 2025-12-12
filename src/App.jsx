import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AllEvents from "./Pages/AllEvents";
import EventsDetails from "./Pages/EventsDetails";
import Footer from "./Components/Footer";
import MyBookings from "./Pages/MyBookings";
import Payments from "./Pages/Payments";
import UserSignup from "./Pages/UserSignup";
import OrganizerSignup from "./Pages/OrganizerSignUp";
import SignIn from "./Pages/SignIn";
import { AuthProvider } from "./firebase/Authcontext";
import NewEvents from "./Pages/NewEvents";



const App = () => {
  const location = useLocation();

  // Show Navbar only on home page
  const showNavbar = location.pathname === "/";

  // Show Footer on home page
  const showFooter = location.pathname === "/";
  
  return (
    <AuthProvider>
      <div>
        {showFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/events/:id" element={<EventsDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/osignup" element={<OrganizerSignup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/newevents" element={<NewEvents />} />

        </Routes>

        {showFooter && <Footer />}
      </div>
    </AuthProvider>
  );
};

export default App;