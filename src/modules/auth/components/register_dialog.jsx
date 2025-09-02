import React, { useState } from 'react';
import Logo from '../../../assets/Logo.jpg';
import Google from '../../../assets/Google.png';
import { XMarkIcon } from "@heroicons/react/24/outline";

const RegisterDialog = ({ isOpen, onClose}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [focusedFields, setFocusedFields] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleFocus = (field) => {
    setFocusedFields(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusedFields(prev => ({ ...prev, [field]: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-black text-white rounded-lg shadow-lg relative w-4/5 max-w-4xl flex overflow-hidden">
        {/* Nút đóng với icon XMark */}
        <button
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-800 transition-colors z-10"
          onClick={onClose}
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>

        {/* Bên trái: Logo */}
        <div className="w-1/3 bg-black flex items-center justify-center p-6">
          <img src={Logo} alt="Logo" className="w-32 h-32 object-contain" />
        </div>

        {/* Bên phải: Form đăng ký */}
        <div className="w-2/3 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-8 text-center">Đăng ký</h2>

          <form className="flex flex-col space-y-6">
            {/* Floating label cho Họ và tên */}
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onFocus={() => handleFocus('fullName')}
                onBlur={() => handleBlur('fullName')}
                className={`w-full pt-5 pb-2 px-4 bg-gray-900 text-white rounded-lg border ${
                  focusedFields.fullName ? 'border-white' : 'border-gray-700'
                } focus:outline-none peer transition-colors`}
              />
              <label
                className={`absolute left-4 ${
                  formData.fullName || focusedFields.fullName
                    ? 'top-2 text-xs text-white'
                    : 'top-1/2 -translate-y-1/2 text-gray-400'
                } transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-white`}
              >
                Họ và tên
              </label>
            </div>

            {/* Floating label cho Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className={`w-full pt-5 pb-2 px-4 bg-gray-900 text-white rounded-lg border ${
                  focusedFields.email ? 'border-white' : 'border-gray-700'
                } focus:outline-none peer transition-colors`}
              />
              <label
                className={`absolute left-4 ${
                  formData.email || focusedFields.email
                    ? 'top-2 text-xs text-white'
                    : 'top-1/2 -translate-y-1/2 text-gray-400'
                } transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-white`}
              >
                Email
              </label>
            </div>

            {/* Floating label cho Mật khẩu */}
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                className={`w-full pt-5 pb-2 px-4 bg-gray-900 text-white rounded-lg border ${
                  focusedFields.password ? 'border-white' : 'border-gray-700'
                } focus:outline-none peer transition-colors`}
              />
              <label
                className={`absolute left-4 ${
                  formData.password || focusedFields.password
                    ? 'top-2 text-xs text-white'
                    : 'top-1/2 -translate-y-1/2 text-gray-400'
                } transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-white`}
              >
                Mật khẩu
              </label>
            </div>

            {/* Floating label cho Xác nhận mật khẩu */}
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => handleFocus('confirmPassword')}
                onBlur={() => handleBlur('confirmPassword')}
                className={`w-full pt-5 pb-2 px-4 bg-gray-900 text-white rounded-lg border ${
                  focusedFields.confirmPassword ? 'border-white' : 'border-gray-700'
                } focus:outline-none peer transition-colors`}
              />
              <label
                className={`absolute left-4 ${
                  formData.confirmPassword || focusedFields.confirmPassword
                    ? 'top-2 text-xs text-white'
                    : 'top-1/2 -translate-y-1/2 text-gray-400'
                } transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-white`}
              >
                Xác nhận mật khẩu
              </label>
            </div>

            <button
              type="submit"
              className="bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors mt-2"
            >
              Đăng ký
            </button>

            {/* Hoặc đăng ký bằng Google */}
            <button
              type="button"
              className="flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-lg hover:bg-gray-900 transition-colors mt-4"
            >
              <img
                src={Google}
                alt="Google"
                className="w-5 h-5"
              />
              <span>Đăng ký bằng Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterDialog;