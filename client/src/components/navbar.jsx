import React from 'react';
import BurgerMenu from './burgermenu'
// import { RxHamburgerMenu } from 'react-icons/rx';
// import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {

  return (
    <div>
      <nav className='bg-background'>
        <BurgerMenu />
        <ul className='hidden md:flex md:flex-row lg:justify-end max-w-[1115px] m-auto'>
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

      </nav>
    </div>
  );
};

export default Navbar;
