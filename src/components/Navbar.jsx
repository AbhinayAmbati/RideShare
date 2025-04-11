import React, { useState } from 'react'
import { Navigation, UserCircle, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);

  const toggleAuthDropdown = () => {
    setShowAuthDropdown(!showAuthDropdown);
  };

  return (
    <div className='fixed top-0 left-0 w-full z-50'>
        <nav className="bg-yellow-500 text-black shadow-md p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/">
            <div className="flex items-center space-x-2">
              <Navigation size={28} />
              <span className="font-bold text-xl">RideShare</span>
            </div>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <button className="font-medium hover:text-white">Home</button>
              <button className="font-medium hover:text-white">Services</button>
              <button className="font-medium hover:text-white">About</button>
              <button className="font-medium hover:text-white">Contact</button>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 hover:text-white"
                  onClick={toggleAuthDropdown}
                >
                  <UserCircle size={20} />
                  <span>Account</span>
                  <ChevronDown size={16} />
                </button>
                
                {showAuthDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link to="/signin"><button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      Sign In
                    </button>
                    </Link>
                    <Link to="/signup">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      Sign Up
                    </button>
                    </Link>
                  </div>
                )}
              </div>
              
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Book Now
              </button>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar