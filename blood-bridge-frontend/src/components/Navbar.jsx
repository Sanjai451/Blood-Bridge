import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="bg-red-500 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to='/home' className="text-white text-xl font-bold">Blood Bridge</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/home" className="text-white hover:text-red-200">Home</Link>
          <Link to="/requestBlood" className="text-white hover:text-red-200">Request Blood</Link>
          <Link to="/donateBlood" className="text-white hover:text-red-200">Donate Blood</Link>
          <Link to="/viewBlood" className="text-white hover:text-red-200">Requests</Link>
          <Link to="/camps" className="text-white hover:text-red-200">Camps</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? '✖' : '☰'} {/* Display X when menu is open, hamburger when closed */}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile View */}
      {isOpen && (
        <div className="md:hidden bg-red-600 p-4 space-y-2">
          <Link to="/home" className="block text-white hover:text-red-200">Home</Link>
          <Link to="/requestBlood" className="block text-white hover:text-red-200">Request Blood</Link>
          <Link to="/donateBlood" className="block text-white hover:text-red-200">Donate Blood</Link>
          <Link to="/viewBlood" className="block text-white hover:text-red-200">Requests</Link>
          <Link to="/camps" className="block text-white hover:text-red-200">Camps</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
