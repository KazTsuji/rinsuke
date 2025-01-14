import React from 'react';
import DropdownMenu from "./DropdownMenu";

const Header = () => (
  <header>
    <div className='bg-black bg-opacity-5'>
    <div className="flex items-center justify-between ">
      {/* Logo Section */}
      <div className="flex-shrink-0 pl-5">
        <img 
          src="/images/banner1.png" 
          alt="Shop Logo" 
          className="max-w-[320px] h-auto"
        />
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="hidden md:flex space-x-16 mr-20 text-black text-2xl font-bold ">
          <li>
            <a href="/" className="hover:text-blue-800">ホーム</a>
          </li>
          <li>
            <a href="/PriceBoard" className="hover:text-blue-800">料金表</a>
          </li>
          <li>
            <a href="/Access" className="hover:text-blue-800">アクセス</a>
            </li>
          <li>
            <a href="/Contact" className="hover:text-blue-800">問い合わせ・見積もり依頼</a>
          </li>
        </ul>

        {/* Dropdown Menu for Smaller Screens */}
        <div className="md:hidden">
          <DropdownMenu />
        </div>
      </nav>
    </div>

    </div>

    {/* Centering the H1 */}
    <div className="flex justify-center items-center max-h-[260px] font-ZenKurenaido">
      <h1 className="flex justify-center items-center text-gray-600 text-xl sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center mx-10 my-20">
        法被の加工なら、確かな技術の当店にお任せください。<br />
        細部まで丁寧に仕上げる職人技で、筒袖、鉄砲袖、襟交換までお客様のご要望にお応えします。<br />
        特別な一着を、さらに特別なものに。ぜひご利用ください。
      </h1>
    </div>
  </header>
);

export default Header;
