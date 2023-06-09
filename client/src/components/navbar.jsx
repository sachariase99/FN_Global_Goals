import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='bg-background'>
        <div className={`flex justify-end md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col justify-center items-center text-[1.6rem] fixed top-0 z-10 bg-background w-[100%] h-[100%]'>
            <li className='text-accent ml-8 mt-1 mb-1 uppercase hover:text-[#0066cc;]'>
              <a href="#worldgoals" onClick={toggleMenu}>Verdensmål</a>
            </li>
            <li className='text-accent ml-8 mt-1 mb-1 uppercase hover:text-[#0066cc;]'>
              <a href="#sharedgoals" onClick={toggleMenu}>Delmålene</a>
            </li>
            <li className='text-accent ml-8 mt-1 mb-1 uppercase hover:text-[#0066cc;]'>
              <a href="#challenges" onClick={toggleMenu}>Udfordringer</a>
            </li>
            <li className='text-accent ml-8 mt-1 mb-1 uppercase hover:text-[#0066cc;]'>
              <a href="#contact" onClick={toggleMenu}>Kontakt</a>
            </li>
          </ul>
          <button className="md:hidden z-20 fixed top-2 right-2 text-white text-[1.6rem] cursor-pointer p-2" onClick={toggleMenu}>
            <RxCross2 />
          </button>
        </div>
        <ul className='sm:hidden md:flex md:flex-row lg:justify-end max-w-[1115px] m-auto'>
          <li className='text-accent ml-8 mt-1 mb-1 uppercase hover:text-[#0066cc;]'>
            <a href="#worldgoals">Verdensmål</a>
          </li>
          <li className='text-accent ml-8 mt-1 mb-1 uppercase hover:text-[#0066cc;]'>
            <a href="#sharedgoals">Delmålene</a>
          </li>
          <li className='text-accent ml-8 mt-1 mb-1 uppercase hover:text-[#0066cc;]'>
            <a href="#challenges">Udfordringer</a>
          </li>
          <li className='text-accent ml-8 mt-1 mb-1 uppercase hover:text-[#0066cc;]'>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
        <button className="md:hidden flex justify-end w-[100%] text-white text-[1.6rem] cursor-pointer p-2" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
