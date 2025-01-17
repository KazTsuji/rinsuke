"use client";

import { useState } from "react";

const DropdownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-black focus:outline-none"
        aria-label="Toggle Menu"
      >
        {/* Hamburger Icon */}
        <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={2}
  stroke="currentColor"
  className="w-6 h-6 mr-4" // Add margin-right here
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4 6h16M4 12h16m-7 6h7"
  />
</svg>

      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <ul className="w-60 absolute right-0 mt-2 bg-black shadow-lg rounded-md text-white ">
          <li className=" p-2 hover:bg-gray-100">
            <a href="/">ホーム</a>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <a href="/PriceBoard">料金表</a>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <a href="/Access">アクセス</a>
          </li>
          <li className="p-2 hover:bg-gray-100">
            <a href="/Contact">問い合わせ・見積もり依頼</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
