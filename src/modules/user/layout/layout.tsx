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

  // Added state for panels
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [showCreatePanel, setShowCreatePanel] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar bên trái */}
      <div className="w-1/5 fixed left-0 top-0 h-screen p-4 border-r border-gray-800 hidden md:block">
        <div className="mb-8">
          {/* <h1 className="text-2xl font-semibold mb-6 mt-4">Instagram</h1>
          <img src={Logo} alt="Logo" className="h-12 w-auto mb-6" /> */}
          
          <nav className="space-y-4">
            <div className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
              <HomeIcon className={`h-6 w-6 ${isHome ? "text-blue-500" : ""}`} />
              <span className="font-semibold">Home</span>
            </div>
            {/* Search button with panel */}
            <div className="relative">
              <div
                onClick={() => setShowSearchPanel(prev => !prev)}
                className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer"
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
                <span className="font-semibold">Search</span>
              </div>
              {showSearchPanel && (
                <div className="absolute left-full top-0 ml-2 bg-white text-black p-2 rounded shadow-md">
                  {/* Nội dung bảng tìm kiếm */}
                  Search Panel
                </div>
              )}
            </div>
            <Link to="/user/home/explore" className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
              <Squares2X2Icon className="h-6 w-6" />
              <span className="font-semibold">Explore</span>
            </Link>
            <Link to="/user/home/reels" className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
              <PlayCircleIcon className="h-6 w-6" />
              <span className="font-semibold">Reels</span>
            </Link>
            <Link to="/user/home/mess" className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
              <ChatBubbleLeftRightIcon className={`h-6 w-6 ${isMessenger ? "text-blue-500" : ""}`} />
              <span className="font-semibold">Messages</span>
            </Link>
            {/* Notifications button with panel */}
            <div className="relative">
              <div
                onClick={() => setShowNotificationPanel(prev => !prev)}
                className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer"
              >
                <HeartIcon className="h-6 w-6" />
                <span className="font-semibold">Notifications</span>
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
                onClick={() => setShowCreatePanel(prev => !prev)}
                className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer"
              >
                <PlusCircleIcon className="h-6 w-6" />
                <span className="font-semibold">Create</span>
              </div>
              {showCreatePanel && (
                <div className="absolute left-full top-0 ml-2 bg-white text-black p-2 rounded shadow-md">
                  {/* Nội dung bảng tạo */}
                  Create Panel
                </div>
              )}
            </div>
            <Link to="/user/home/profile" className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
              <UserIcon className="h-6 w-6" />
              <span className="font-semibold">Profile</span>
            </Link>
          </nav>
        </div>

        <div className="absolute bottom-4">
          <div className="flex items-center space-x-3 hover:bg-gray-900 p-2 rounded cursor-pointer">
            <Bars3Icon className="h-6 w-6" />
            <span className="font-semibold">More</span>
          </div>
        </div>
      </div>

      {/* Phần chính giữa - Bài viết */}
      <main className="md:ml-[23%] flex-1 max-w-2xl mx-auto pt-4 pb-12 px-2 sm:px-0">
        {children}
      </main>

      {/* Sidebar bên phải - Gợi ý follow */}
      <div className="w-1/4 fixed right-0 top-0 h-screen p-4 hidden lg:block">
        <div className="mt-4">
          {/* Profile của user */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">your_username</div>
                <div className="text-gray-400">Your Name</div>
              </div>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Switch</button>
          </div>

          {/* Suggested for you */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-gray-400 font-semibold">Suggested for you</div>
              <button className="text-xs font-semibold">See All</button>
            </div>

            {/* List of suggested profiles */}
            <div className="space-y-4">
              {[
                { username: "myhearagent", name: "My Hear Agent" },
                { username: "my_duyenm", name: "My Duyen" },
                { username: "jenaichba", name: "Jenai Chba" },
                { username: "u.t.hanhime", name: "Han Hime" },
                { username: "bernibabba", name: "Berni Babba" },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://images.unsplash.com/photo-${150+i}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80`}
                      alt={user.username}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold">{user.username}</div>
                      <div className="text-xs text-gray-400">Suggested for you</div>
                    </div>
                  </div>
                  <button className="text-blue-400 text-xs font-semibold">Follow</button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="text-xs text-gray-400 space-y-2 mt-8">
            <div>About • Help • Press • API • Jobs</div>
            <div>Privacy • Terms • Locations • Language</div>
            <div className="pt-4">© 2025 ALBA FOR EVERY ONE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;