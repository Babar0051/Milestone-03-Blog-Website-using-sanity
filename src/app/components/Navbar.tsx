'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-zinc-800 text-white font-sans">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 text-white p-2 bg-white rounded-full">
            <img
              src="/images/techlogo.png"
              alt="Tech Logo"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <h1 className="text-3xl font-bold text-white">FutureTech Blog</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="sm:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden sm:flex">
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blogpage">Blogs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <nav className="sm:hidden absolute top-16 left-0 right-0 bg-zinc-800 py-4">
            <ul className="flex flex-col items-center space-y-4 text-lg">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blogpage">Blogs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
