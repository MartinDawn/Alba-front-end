import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../../assets/Logo.jpg';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  PlayCircleIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  PlusCircleIcon,
  Bars3Icon,
  UserIcon,
} from "@heroicons/react/24/solid";

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/user/home";
  const isMessenger = location.pathname === "/user/home/mess";
  const isExplore = location.pathname === "/user/home/explore";
  const isReels = location.pathname === "/user/home/reels";
  const isProfile = location.pathname === "/user/home/profile";
  
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [showCreatePanel, setShowCreatePanel] = useState(false);
  const [activeMore, setActiveMore] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar bên trái */}
      <div className="w-18 fixed left-0 top-0 h-screen p-4 border-r border-gray-800 hidden md:block">
        <div className="mb-8">
          {/* <h1 className="text-2xl font-semibold mb-6 mt-4">Instagram</h1>
          <img src={Logo} alt="Logo" className="h-12 w-auto mb-6" /> */}
          
          <nav className="space-y-4">
            <Link to="/user/home">
              <div className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
                <HomeIcon className={`h-6 w-6 ${isHome ? "text-blue-500" : ""}`} />
                {/* <span className="font-semibold">Home</span> */}
              </div>
            </Link>
            {/* Search button with panel */}
            <div className="relative">
              <div
                onClick={() => {
                  if (!showSearchPanel) {
                    setShowSearchPanel(true);
                    setShowNotificationPanel(false);
                    setShowCreatePanel(false);
                  } else {
                    setShowSearchPanel(false);
                  }
                }}
                className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer"
              >
                <MagnifyingGlassIcon className={`h-6 w-6 ${showSearchPanel ? "text-blue-500" : ""}`} />
                {/* <span className="font-semibold">Search</span> */}
              </div>
              {showSearchPanel && (
                <div className="absolute left-full top-0 ml-2 w-32 bg-white text-black p-2 rounded shadow-md">
                  {/* Nội dung bảng tìm kiếm */}
                  Search Panel
                </div>
              )}
            </div>
            <Link to="/user/home/explore" className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
              <Squares2X2Icon className={`h-6 w-6 ${isExplore ? "text-blue-500" : ""}`} />
              {/* <span className="font-semibold">Explore</span> */}
            </Link>
            <Link to="/user/home/reels" className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
              <PlayCircleIcon className={`h-6 w-6 ${isReels ? "text-blue-500" : ""}`} />
              {/* <span className="font-semibold">Reels</span> */}
            </Link>
            <Link to="/user/home/mess" className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
              <ChatBubbleLeftRightIcon className={`h-6 w-6 ${isMessenger ? "text-blue-500" : ""}`} />
              {/* <span className="font-semibold">Messages</span> */}
            </Link>
            {/* Notifications button with panel */}
            <div className="relative">
              <div
                onClick={() => {
                  if (!showNotificationPanel) {
                    setShowNotificationPanel(true);
                    setShowSearchPanel(false);
                    setShowCreatePanel(false);
                  } else {
                    setShowNotificationPanel(false);
                  }
                }}
                className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer"
              >
                <HeartIcon className={`h-6 w-6 ${showNotificationPanel ? "text-blue-500" : ""}`} />
                {/* <span className="font-semibold">Notifications</span> */}
              </div>
              {showNotificationPanel && (
                <div className="absolute left-full top-0 ml-2 bg-white text-black p-2 rounded shadow-md">
                  {/* Nội dung bảng thông báo */}
                  Notification Panel
                </div>
              )}
            </div>
            {/* Create button with panel */}
            <div className="relative">
              <div
                onClick={() => {
                  if (!showCreatePanel) {
                    setShowCreatePanel(true);
                    setShowSearchPanel(false);
                    setShowNotificationPanel(false);
                  } else {
                    setShowCreatePanel(false);
                  }
                }}
                className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer"
              >
                <PlusCircleIcon className={`h-6 w-6 ${showCreatePanel ? "text-blue-500" : ""}`} />
                {/* <span className="font-semibold">Create</span> */}
              </div>
              {showCreatePanel && (
                <div className="absolute left-full top-0 ml-2 bg-white text-black p-2 rounded shadow-md">
                  {/* Nội dung bảng tạo */}
                  Create Panel
                </div>
              )}
            </div>
            <Link to="/user/home/profile" className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
              <UserIcon className={`h-6 w-6 ${isProfile ? "text-blue-500" : ""}`} />
              {/* <span className="font-semibold">Profile</span> */}
            </Link>
          </nav>
        </div>

        <div className="absolute bottom-4">
          <div onClick={() => setActiveMore(prev => !prev)} className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
            <Bars3Icon className={`h-6 w-6 ${activeMore ? "text-blue-500" : ""}`} />
            {/* <span className="font-semibold">More</span> */}
          </div>
        </div>
      </div>

      {/* Phần chính giữa - Bài viết */}
      <main className={`md:ml-20 flex-1 ${isMessenger ? "" : "max-w-2xl mx-auto"} pt-4 pb-12 px-2 sm:px-0`}>
        {children}
      </main>
    </div>
  );
};

export default UserLayout;