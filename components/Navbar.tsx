import { inter } from "@/styles/fonts";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

export default function navbar(): JSX.Element {
  return (
    <nav className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Navigation Links */}
          <div className='hidden md:flex space-x-10'>
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

          {/* Logo and brand */}
          <div className='flex-shrink-0'>
            <a href='/' className='text-xl font-bold'>
              Angel Gold
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
      </div>
    </nav>
  );
}
