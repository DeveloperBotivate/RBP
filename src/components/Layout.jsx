import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex h-[100dvh] bg-white overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0 h-[100dvh]">

        {/* Header - Sticky */}
        <Header />

        <main className="flex-1 flex flex-col p-1 sm:p-2 lg:p-3 overflow-hidden relative z-0 min-h-0">
          <div className="w-full max-w-[1800px] mx-auto flex-1 flex flex-col animate-in fade-in duration-500 min-h-0">
            <Outlet />
          </div>
        </main>

        <Footer />

      </div>
    </div>
  );
};

export default Layout;
