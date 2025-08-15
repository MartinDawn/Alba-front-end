import React, { ReactNode } from 'react';
import Navbar from '../components/navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* Video section */}
      <div className="relative w-full h-screen">
        {/* Video hoặc hero content */}
        {children}
      

        {/* Navbar dính trên đầu, background phủ thẳng lên video */}
        <div className="fixed top-0 left-0 w-full z-50 bg-background bg-opacity-100">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
