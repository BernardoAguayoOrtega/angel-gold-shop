// components/Sidebar.tsx

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className='fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40'
          onClick={onClose}></div>
      )}
      <div
        className={`fixed top-0 right-0 w-full sm:w-1/3 h-full bg-white shadow-md z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <button onClick={onClose} className='text-black p-2 focus:outline-none'>
          <AiOutlineClose className='h-6 w-6' />
        </button>
        <div className='p-4'>
          {/* Content of your sidebar */}
          <div className='flex flex-col space-y-4'>
            {/* Map through your sidebar items here */}
            <a href='#' className='text-gray-700 hover:text-gray-900'>
              Sample Item
            </a>
            {/* ... other items */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
