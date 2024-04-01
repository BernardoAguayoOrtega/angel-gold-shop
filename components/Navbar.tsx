"use client"; // This is a client component 👈🏽

import { useState } from 'react';
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          
          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
            >
              {isMenuOpen ? <AiOutlineClose className='h-6 w-6' /> : <AiOutlineMenu className='h-6 w-6' />}
            </button>
          </div>

          {/* Logo and brand */}
          <div className='flex-shrink-0'>
            <a href='/' className='text-xl font-bold'>
              Angel Gold
            </a>
          </div>

          {/* Navigation Links - show in md and hide in mobile */}
          <div className={`md:flex space-x-10 items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Jewelry
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              New Releases
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Gifts
            </a>
          </div>

          {/* Search and Cart Icons */}
          <div className='flex items-center space-x-4'>
            <AiOutlineSearch className='h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer' />
            <AiOutlineHeart className='h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer' />
            <AiOutlineShoppingCart className='h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer' />
            <AiOutlineUser className='h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer' />
          </div>
        </div>

        {/* Mobile Navigation Links - hide in md and above */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <a href='#' className='block text-gray-600 hover:text-gray-900 px-2 py-2 rounded-md text-base font-medium'>
              Jewelry
            </a>
            <a href='#' className='block text-gray-600 hover:text-gray-900 px-2 py-2 rounded-md text-base font-medium'>
              New Releases
            </a>
            <a href='#' className='block text-gray-600 hover:text-gray-900 px-2 py-2 rounded-md text-base font-medium'>
              Gifts
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
