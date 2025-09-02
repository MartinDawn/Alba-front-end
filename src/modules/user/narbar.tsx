import React from 'react';
import { FaHome, FaBell, FaEnvelope, FaSearch } from 'react-icons/fa'; // Added react-icons import for icons
import Logo from '../../assets/Logo.jpg'; // fixed import path to match available asset

const Narbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-50 transition-colors duration-300 bg-black bg-opacity-100 shadow-md text-white">
      <div className="flex items-center space-x-3">
        <img
          src={Logo} // use Logo from assets
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-xl font-bold">Alba</h1>
      </div>
      {/* Updated search bar with inner magnifying glass icon */}
      <div className="relative">
        <input
          type="text"
          placeholder="Tìm kiếm trên Alba..."
          className="px-4 py-2 bg-gray-800 text-white rounded-full pl-4 pr-10 focus:outline-none focus:border-blue-500"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      {/* Updated navigation icons: removed duplicate search icon */}
      <div className="flex items-center space-x-4">
        <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
          <FaHome />
        </button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
          <FaBell />
        </button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
          <FaEnvelope />
        </button>
      </div>
    </nav>
  );
};

export default Narbar;
