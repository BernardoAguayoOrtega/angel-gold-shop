"use client"; // This is a client component 👈🏽

import Link from "next/link";
// Navbar.client.jsx

import { Dispatch, SetStateAction, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import CartSidebar from "./CartSidebar";

import {
  IconMenuComponentType,
  LinkProps,
  MobileMenuButtonComponentType,
  NavigationLinksComponentProps,
  stateType,
} from "@/types/Navbar.types";

const NavigationLinks: LinkProps[] = [
  { ref: "#", label: "Jewelry" },
  { ref: "#", label: "New Releases" },
  { ref: "#", label: "Gifts" },
];

const LogoComponent = (): JSX.Element => (
  <div className='flex-shrink-0'>
    <Link href='/' className='text-xl font-bold'>
      Angel Gold
    </Link>
  </div>
);

const NavigationLinksComponent: React.FC<NavigationLinksComponentProps> = ({
  isMobile,
  isMenuOpen,
}): JSX.Element => {
  return (
    <div
      className={`${
        isMobile ? (isMenuOpen ? "block" : "hidden") : "hidden md:flex"
      } ${
        isMobile
          ? "absolute top-16 left-0 w-full bg-white z-50 shadow-md rounded-b-lg p-4"
          : "space-x-10 items-center"
      }`}>
      {NavigationLinks.map((link) => (
        <Link
          key={link.ref}
          href={link.ref}
          className='text-gray-600 hover:text-gray-900 block'>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

const IconMenuComponent = ({
  handleOpenCart,
}: IconMenuComponentType): JSX.Element => (
  <div className='flex items-center space-x-4'>
    <AiOutlineSearch className='h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer' />
    <AiOutlineHeart className='h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer' />
    <AiOutlineShoppingCart
      onClick={handleOpenCart}
      className='h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer'
    />
    <AiOutlineUser className='h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer' />
  </div>
);

const MobileMenuButtonComponent: React.FC<MobileMenuButtonComponentType> = ({
  isMenuOpen,
  setIsMenuOpen,
}): JSX.Element => (
  <div className='md:hidden flex justify-center'>
    <button
      onClick={setIsMenuOpen}
      className='text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
      {isMenuOpen ? (
        <AiOutlineClose className='h-6 w-6' />
      ) : (
        <AiOutlineMenu className='h-6 w-6' />
      )}
    </button>
  </div>
);

export default function Navbar(): JSX.Element {
  const [state, setState]: [stateType, Dispatch<SetStateAction<stateType>>] =
    useState<stateType>({
      isMenuOpen: false,
      isCartOpen: false,
    });

  const toggleCart = (): void =>
    setState((prevState: stateType) => ({
      ...prevState,
      isCartOpen: !prevState.isCartOpen,
    }));

  return (
    <nav className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <MobileMenuButtonComponent
            isMenuOpen={state.isMenuOpen}
            setIsMenuOpen={() =>
              setState((prevState) => ({
                ...prevState,
                isMenuOpen: !prevState.isMenuOpen,
              }))
            }
          />
          <LogoComponent />
          <NavigationLinksComponent
            isMobile={false}
            isMenuOpen={state.isMenuOpen}
          />
          <IconMenuComponent handleOpenCart={toggleCart} />
          <NavigationLinksComponent
            isMobile={true}
            isMenuOpen={state.isMenuOpen}
          />
          <CartSidebar isOpen={state.isCartOpen} onClose={toggleCart} />
        </div>
      </div>
    </nav>
  );
}
