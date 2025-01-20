import React from 'react';

const Footer = () => (
  <footer className="bg-yellow-10 py-10">
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end px-5 sm:px-10">
      {/* Left side with contact info */}
      <ul className="flex flex-col items-start space-y-4 text-black sm:text-sm md:text-base lg:text-xl font-bold">
        <li>
          <a href="">〒595-0023</a>
        </li>
        <li>
          <a href="">住所　大阪府泉大津市豊中町3-4-6</a>
        </li>
        <li>
          <a href="">代表 辻川浩一</a>
        </li>
        <li>
          <a href="">電話番号 09011510374</a>
        </li>
        <li>
          <a href="">Eメール　tujikawa5950023@gmail.com</a>
        </li>
        <li>
          <a href="">営業時間　AM９:００～PM５:００</a>
        </li>
        <li>
          <a href="">定休日　土曜日・日曜日・祝日</a>
        </li>
      </ul>

      {/* Right side with logo */}
      <div className="flex-shrink-0 sm:ml-5 mt-5 sm:mt-0 w-full sm:w-auto flex justify-center">
        <img 
          src="/images/banner2.png" 
          alt="Shop Logo" 
          className="max-w-[180px] sm:max-w-[230px] lg:max-w-[250px] h-auto" 
        />
      </div>
    </div>
  </footer>
);

export default Footer;
