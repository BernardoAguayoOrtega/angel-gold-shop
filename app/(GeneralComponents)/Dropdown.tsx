import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const Dropdown = ({ label = "Item", items = ["element1", "element2"] }) => {
  const [isOpen, setIsOpen]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className='px-4 py-2 bg-gray-200 text-black rounded-md focus:outline-none'>
        {label}
      </button>
      {isOpen && (
        <div className='absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md z-10'>
          {items.map((item, index) => (
            <a
              key={index}
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
