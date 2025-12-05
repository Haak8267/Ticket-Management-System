// import logo from './logo.svg'
// import searchIcon from './searchIcon.svg'
// import userIcon from './userIcon.svg'
// import calenderIcon from './calenderIcon.svg'
// import locationIcon from './locationIcon.svg'
// import starIconFilled from './starIconFilled.svg'
// import arrowIcon from './arrowIcon.svg'
// import starIconOutlined from './starIconOutlined.svg'
// import instagramIcon from './instagramIcon.svg'
// import facebookIcon from './facebookIcon.svg'
// import twitterIcon from './twitterIcon.svg'
// import linkendinIcon from './linkendinIcon.svg'
// import freeWifiIcon from './freeWifiIcon.svg'
// import freeBreakfastIcon from './freeBreakfastIcon.svg'
// import roomServiceIcon from './roomServiceIcon.svg'
// import mountainIcon from './mountainIcon.svg'
// import poolIcon from './poolIcon.svg'
// import homeIcon from './homeIcon.svg'
// import closeIcon from './closeIcon.svg'
// import locationFilledIcon from './locationFilledIcon.svg'
// import heartIcon from './heartIcon.svg'
// import badgeIcon from './badgeIcon.svg'
// import menuIcon from './menuIcon.svg'
// import closeMenu from './closeMenu.svg'
// import guestsIcon from './guestsIcon.svg'

// Only images you use
import image1 from './image1.avif'
import image2 from './image2.avif'
import image3 from './image3.avif'
import image4 from './image4.avif'
import image5 from './image5.avif'
import image6 from './image6.avif'
import image7 from './image7.avif'
import image8 from './image8.avif'
import image9 from './image9.avif'
import image10 from './image10.avif'
import image11 from './image11.avif'
import image12 from './image12.avif'

// Unused (commented)
// import roomImg from './roomImg.jpg'
// import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
// import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
// import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
// import addIcon from "./addIcon.svg";
// import dashboardIcon from "./dashboardIcon.svg";
// import listIcon from "./listIcon.svg";
// import uploadArea from "./uploadArea.svg";
// import totalBookingIcon from "./totalBookingIcon.svg";
// import totalRevenueIcon from "./totalRevenueIcon.svg";
// import { v4 as uuidv4} from 'uuid';


export const assets = {
    // logo,
    // searchIcon,
    // userIcon,
    // calenderIcon,
    // locationIcon,
    // starIconFilled,
    // arrowIcon,
    // starIconOutlined,
    // instagramIcon,
    // facebookIcon,
    // twitterIcon,
    // linkendinIcon,
    // freeWifiIcon,
    // freeBreakfastIcon,
    // roomServiceIcon,
    // mountainIcon,
    // poolIcon,
    // closeIcon,
    // homeIcon,
    // locationFilledIcon,
    // heartIcon,
    // badgeIcon,
    // menuIcon,
    // closeMenu,
    // guestsIcon,
    // addIcon,
    // dashboardIcon,
    // listIcon,
    // uploadArea,
    // totalBookingIcon,
    // totalRevenueIcon,
}

export const cities = [
    "Accra",
    "Kumasi",
    "Suyani",
    "Tamale",
]

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "August 31", image: image5 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: image2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: image8 },
]

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review:
      "Booking through this platform made my trip stress free. I found great hotels at fair prices, and everything was confirmed instantly!",
  },
  {
    id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review:
      "The system is really easy to use I could compare rooms, check amenities, and make reservations in just a few minutes. Highly reliable!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review:
      "Excellent service and user friendly interface. I booked my family vacation smoothly, and the support team was very responsive!",
  },
  {
    id: 4,
    name: "David Chen",
    address: "Singapore",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200",
    rating: 5,
    review:
      "Everything went perfectly! The hotel matched the photos and description exactly. I’ll definitely use this booking system again.",
  },
  {
    id: 5,
    name: "Isabella Rossi",
    address: "Rome, Italy",
    image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=200",
    rating: 4,
    review:
      "I loved how easy it was to find available rooms. The filters made it simple to choose the perfect stay within my budget.",
  },
]

// Facility Icons (THESE WILL BE EMPTY because icons are commented above)
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
}

// Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
]
