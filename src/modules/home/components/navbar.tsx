import React from 'react';
import Logo from '../../../assets/Logo.jpg';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={`
        fixed top-0 left-0 w-full flex items-center justify-between p-4
        z-50 transition-colors duration-300
        bg-black bg-opacity-100 shadow-md
        ${className || ''}
      `}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="w-16 h-16" />
      </div>
      
      {/* Nút và menu */}
      <div className="flex items-center space-x-4 text-white">
        {/* Menu các mục */}
        <div className="flex space-x-4">
          <a href="#ve-chung-toi" className="hover:underline">Về chúng tôi</a>
          <a href="#thong-tin-lien-he" className="hover:underline">Thông tin liên hệ</a>
          <a href="#dieu-khoan" className="hover:underline">Điều khoản chính sách</a>
        </div>
        {/* Dấu gạch đứng */}
        <div className="h-6 w-px bg-white mx-4"></div>
        {/* Nút Đăng nhập */}
        <button className="px-4 py-2 rounded text-white_text
                         transition-colors duration-300 font-extrabold">
          Đăng nhập
        </button>

        {/* Nút Đăng ký */}
        <button className="px-4 py-2 rounded bg-white_text text-black 
                           hover:bg-white transition-colors duration-300 font-extrabold">
          Đăng ký
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
