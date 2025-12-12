import React from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navLinks = [
    { name: 'Discover', path: '#' },
    { name: 'Find Events', path: '#' },
    { name: 'Featured Cities', path: '#', hasDropdown: true },
    { name: 'Sell Tickets', path: '#' },
    { name: 'Help Center', path: '#' },
    { name: 'Premium Events', path: '#' },
    { name: 'Partner Program', path: '#' },
  ];

  // Define the sign-in and sign-up paths for clean use
  const SIGN_IN_PATH = '/signin';
  const SIGN_UP_PATH = '/signup';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const handleMobileLinkClick = () => {
      // Closes the menu when a link is clicked
      setIsMenuOpen(false);
  };

  return (
    <div className="">
      {/* Sticky Top Header */}
      <div className={`sticky top-0 bg-white border-b border-gray-200 px-4 md:px-8 lg:px-16 py-3 transition-shadow duration-300 z-40 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <svg width="180" height="40" viewBox="0 0 180 40" fill="none" className="h-8">
                <text x="0" y="30" fontSize="32" fontWeight="bold" fill="#000000">Eventix</text>
              </svg>
            </a>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2.5 w-96">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for events"
                className="bg-transparent border-none outline-none ml-2 flex-1 text-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {/* 1. DESKTOP SIGN IN - Changed <button> to <Link> and added 'to' prop */}
            <Link 
              to={SIGN_IN_PATH} // LINKED HERE
              className="text-gray-700 text-sm font-medium hover:text-gray-900"
            >
              Sign In
            </Link>
            
            {/* 2. DESKTOP SIGN UP - Changed <button> to <Link> and added 'to' prop */}
            <Link 
              to={SIGN_UP_PATH} // LINKED HERE
              className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              Sign up
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-between gap-6 border-t border-gray-200 pt-3">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className="text-gray-700 text-sm font-medium hover:text-black transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </div>

        {/* Mobile Search */}
        <div className="md:hidden flex items-center bg-gray-100 rounded-lg px-4 py-2.5 mt-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for events"
            className="bg-transparent border-none outline-none ml-2 flex-1 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 md:hidden transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <svg width="180" height="40" viewBox="0 0 180 40" fill="none" className="h-8">
              <text x="0" y="30" fontSize="32" fontWeight="bold" fill="#000000">Eventix</text>
            </svg>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link, i) => (
              <Link // Changed <a> to <Link>
                key={i}
                to={link.path} // LINKED HERE
                onClick={handleMobileLinkClick} 
                className="text-gray-700 text-base font-medium py-2 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4 mt-4 flex flex-col gap-3">
                
              {/* 3. MOBILE SIGN IN - Changed <button> to <Link> and added 'to' prop */}
              <Link 
                to={SIGN_IN_PATH} // LINKED HERE
                onClick={handleMobileLinkClick} 
                className="text-gray-700 text-base font-medium py-2 text-left"
              >
                Sign In
              </Link>
              
              {/* 4. MOBILE SIGN UP - Changed <button> to <Link> and added 'to' prop */}
              <Link 
                to={SIGN_UP_PATH} // LINKED HERE
                onClick={handleMobileLinkClick}
                className="bg-black text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors text-center"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
