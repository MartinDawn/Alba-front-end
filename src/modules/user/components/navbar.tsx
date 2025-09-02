import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-300 bg-black text-white">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="flex gap-4">
        <Link to="/user/home" className="hover:underline">Home</Link>
        <Link to="/user/profile" className="hover:underline">Profile</Link>
        <Link to="/user/settings" className="hover:underline">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
