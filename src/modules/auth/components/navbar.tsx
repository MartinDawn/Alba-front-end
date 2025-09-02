import React, { useState } from 'react';
import Logo from '../../../assets/Logo.jpg';
import LoginDialog from './login_dialog';
import RegisterDialog from './register_dialog';
interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return (
    <>
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
      <div className="flex items-center space-x-4 text-white_text">
        {/* Menu các mục */}
        <div className="flex space-x-4">
          <a href="/home" className="hover:underline">Trang chủ</a>
          <a href="/policy" className="hover:underline">Điều khoản & chính sách</a>
        </div>
        {/* Dấu gạch đứng */}
        <div className="h-6 w-px bg-white_text mx-4"></div>
        {/* Nút Đăng nhập */}
        <button className="px-4 py-2 rounded text-white_text
                         transition-colors duration-300 font-extrabold"
                         onClick={() => setIsLoginOpen(true)}>
          Đăng nhập
        </button>

        {/* Nút Đăng ký */}
        <button className="px-4 py-2 rounded bg-white_text text-black 
                           hover:bg-white transition-colors duration-300 font-extrabold"
                           onClick={() => setIsRegisterOpen(true)}>
          Đăng ký
        </button>

      </div>
    </nav>
    {/* Modal */}
      <LoginDialog
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
      <RegisterDialog isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </>
  );
};

export default Navbar;
