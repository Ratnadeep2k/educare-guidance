import React, { useState } from 'react';
import { LOGO_IMG } from '../utils/constants';

export default function NavbarTemp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800 border-gray-200 dark:text-white">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-6">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={LOGO_IMG} className="h-12" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              GUIDANCE EDUCARE
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              // Close icon (X)
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="bg-gray-800 md:hidden">
            <div className="max-w-screen-xl mx-auto p-6">
              <ul className="font-medium flex flex-col p-4 rounded-lg space-y-4">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                    aria-current="page"
                    onClick={toggleNavbar}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/About"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                    onClick={toggleNavbar}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/admission"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                    onClick={toggleNavbar}
                  >
                    Admission
                  </a>
                </li>
                <li>
                  <a
                    href="/Subjects"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                    onClick={toggleNavbar}
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                    onClick={toggleNavbar}
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
