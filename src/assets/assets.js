import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import locationIcon from "./locationIcon.svg";

import image1 from "./image1.avif";
import image2 from "./image2.avif";
import image3 from "./image3.avif";
import image4 from "./image4.avif";
import image5 from "./image5.avif";
import image6 from "./image6.avif";
import image7 from "./image7.avif";
import image8 from "./image8.avif";
import image9 from "./image9.avif";
import image10 from "./image10.avif";
import image11 from "./image11.avif";
import image12 from "./image12.avif";
// import { v4 as uuidv4} from 'uuid';

export const assets = {
  mountainIcon,
  poolIcon,
  locationIcon,
};

export const cities = ["Dubai", "Singapore", "New York", "London"];

// Facility Icon
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Clean & Safe Stay",
    description: "A well-maintained and hygienic space just for you.",
  },
  {
    icon: assets.badgeIcon,
    title: "Enhanced Cleaning",
    description: "This host follows Staybnb's strict cleaning standards.",
  },
  {
    icon: assets.locationFilledIcon,
    title: "Excellent Location",
    description: "90% of guests rated the location 5 stars.",
  },
  {
    icon: assets.heartIcon,
    title: "Smooth Check-In",
    description: "100% of guests gave check-in a 5-star rating.",
  },
];

// User Dummy Data
export const userDummyData = {
  _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Great Stack",
  email: "user.greatstack@gmail.com",
  image:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
  role: "hotelOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  __v: 1,
  recentSearchedCities: ["New York"],
};

// Hotel Dummy Data
export const hotelDummyData = {
  _id: "67f76393197ac559e4089b72",
  name: "Urbanza Suites",
  address: "Main Road  123 Street , 23 Colony",
  contact: "+0123456789",
  owner: userDummyData,
  city: "New York",
  createdAt: "2025-04-10T06:22:11.663Z",
  updatedAt: "2025-04-10T06:22:11.663Z",
  __v: 0,
};

// Rooms Dummy Data
export const eventsDummyData = [
  {
    _id: " event1", // Unique ID
    eventType: "Conference",
    ticket: 399,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [image1, image2, image3],
    isAvailable: true,
    name: "Special Events",
    address: "Main Road Street ",
    checkIn: "Wed Dec 03 2025",
   
  },

  {
    _id: "event2", // Unique ID
    eventType: "Conference",
    ticket: 350,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [image4, image5, image6],
    isAvailable: true,
    name: "Special Gardens",
    address: "Main Road Street",
    checkIn: "Wed Dec 03 2025",
  
  },

  {
    _id: " event3", // Unique ID
    eventType: "Conference",
    ticket: 250,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [image7, image8, image9],
    isAvailable: true,
    name: "Special Gardens",
    address: "Main Road Street ",
    checkIn: "Wed Dec 05 2025",
   
  },

  {
    _id: "event4", // Unique ID
    eventType: "Conference",
    ticket: 400,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [image10, image11, image12],
    isAvailable: true,
    name: "Special Gardens",
    address: "Main Road Street",
    checkIn: "Wed Dec 07 2025",
   
  },

  {
    _id: "event5", // Unique ID
    eventType: "Conference",
    ticket: 400,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [image9, image4, image7],
    isAvailable: true,
    name: "Special Gardens",
    address: "Main Road Street",
    checkIn: "Wed Dec 10 2025",
   
  },
];
