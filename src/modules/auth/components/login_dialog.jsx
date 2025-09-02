import React, { useState } from 'react';
import Logo from '../../../assets/Logo.jpg';
import Google from '../../../assets/Google.png';
import { XMarkIcon } from "@heroicons/react/24/outline";
import RegisterDialog from './register_dialog';

const LoginDialog = ({ isOpen, onClose }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-black text-white rounded-lg shadow-lg relative w-4/5 max-w-4xl flex overflow-hidden">
        {/* Nút đóng */}
        <button
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-800 transition-colors"
          onClick={onClose}
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>

        {/* Bên trái: Logo */}
        <div className="w-1/3 bg-black flex items-center justify-center p-6">
          <img src={Logo} alt="Logo" className="w-32 h-32 object-contain" />
        </div>

        {/* Bên phải: Form */}
        <div className="w-2/3 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-8 text-center">Đăng nhập</h2>

          <form className="flex flex-col space-y-6">
            {/* Username */}
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setUsernameFocused(true)}
                onBlur={() => setUsernameFocused(false)}
                className={`w-full pt-5 pb-2 px-4 bg-gray-900 text-white rounded-lg border ${
                  usernameFocused ? 'border-white' : 'border-gray-700'
                } focus:outline-none peer transition-colors`}
              />
              <label
                className={`absolute left-4 ${
                  username || usernameFocused
                    ? 'top-2 text-xs text-gray-400'
                    : 'top-1/2 -translate-y-1/2 text-gray-500'
                } transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400`}
              >
                Tên đăng nhập
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                className={`w-full pt-5 pb-2 px-4 bg-gray-900 text-white rounded-lg border ${
                  passwordFocused ? 'border-white' : 'border-gray-700'
                } focus:outline-none peer transition-colors`}
              />
              <label
                className={`absolute left-4 ${
                  password || passwordFocused
                    ? 'top-2 text-xs text-gray-400'
                    : 'top-1/2 -translate-y-1/2 text-gray-500'
                } transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-400`}
              >
                Mật khẩu
              </label>
            </div>

            <button
              type="submit"
              className="bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              Đăng nhập
            </button>
          {/* Dòng đăng nhập */}
          <p className="mt-6 text-right text-gray-400 text-sm">

            <span 
              className="text-white font-semibold cursor-pointer hover:underline"
            >
              Quên mật khẩu?
            </span>
          </p>
            {/* Google login */}
            <button
              type="button"
              className="flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-lg hover:bg-gray-900 transition-colors mt-4"
            >
              <img src={Google} alt="Google" className="w-5 h-5" />
              Đăng nhập với Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
