import React from 'react';
import { User } from 'lucide-react';

const Header = () => {

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-indigo-200">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        
        {/* Left Section: Brand */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-indigo-600 text-white text-xs font-bold">
            GJ
          </div>
          <span className="text-xl font-bold text-indigo-700 tracking-tight truncate">Gaurav Jain</span>
        </div>

        {/* Right Section: Actions & Profile */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* User Profile Summary (Desktop) */}
          <div className="flex items-center gap-3 pl-2 group cursor-pointer">
            <div className="hidden md:block text-right">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                Gaurav Jain
              </p>
              <p className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider">
                Administrator
              </p>
            </div>
            <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-all overflow-hidden shadow-sm border border-indigo-300">
              <User size={20} className="text-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
