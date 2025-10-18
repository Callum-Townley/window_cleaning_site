import React from "react";

function Navbar() {
    return (
    <div>
 <nav className="bg-gradient-to-r from-[#001C34] from-10% to-[#023663] text-white px-6 py-4 flex justify-between items-center h-24">
      <div className="flex flex-col items-center ml-[5%]">
      <h1 className="text-5xl font-luckiest">WINDOW</h1>
      <p className ="text-xl font-poppins">CLEANING SERVICES</p>
      </div>
      <ul className="flex space-x-20" >
        <li><a href="#home" className="hover:text-gray-200 font-poppins text-2xl">HOME</a></li>
        <li><a href="#services" className="hover:text-gray-200 font-poppins text-2xl">SERVICES</a></li>
        <li><a href="#about-us" className="hover:text-gray-200 font-poppins text-2xl">ABOUT US</a></li>
        <li><a href="#coverage" className="hover:text-gray-200 font-poppins text-2xl">COVERAGE</a></li>
        <li><a href="#contact" className="hover:text-gray-200 font-poppins text-2xl">CONTACT</a></li>
      </ul>
    </nav>
    </div>
    );
}


export default Navbar;
