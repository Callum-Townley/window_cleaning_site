import React from "react";

function Navbar() {
    return (
    <div>
 <nav className="bg-gradient-to-r from-[#001C34] from-10% to-[#023663] text-white px-6 py-4 flex justify-between items-center h-24">
      <div className="flex flex-col items-center ml-[5%]">
      <h1 className="md:text-4xl xl:text-5xl font-luckiest">WINDOW</h1>
      <p className ="md:text-md xl:text-xl font-poppins">CLEANING SERVICES</p>
      </div>
      <ul className="flex space-x-7 lg:space-x-7 xl:space-x-15 2xl:space-x-20  " >
        <li><a href="#home" className="hover:text-gray-200 font-poppins text-lg 2xl:text2xl">HOME</a></li>
        <li><a href="#services" className="hover:text-gray-200 font-poppins text-lg 2xl:text2xl">SERVICES</a></li>
        <li><a href="#about-us" className="hover:text-gray-200 font-poppins text-lg 2xl:text2xl text-nowrap">ABOUT US</a></li>
        <li><a href="#coverage" className="hover:text-gray-200 font-poppins text-lg 2xl:text2xl">COVERAGE</a></li>
        <li><a href="#contact" className="hover:text-gray-200 font-poppins text-lg 2xl:text2xl">CONTACT</a></li>
        <li> <a href="#contact" className="bg-[#26578F] text-white px-8 2xl:px-10 py-4 2xl:py-5 rounded-full 2xl:text-lg font-poppins font-semibold hover:bg-blue-700 transition duration-300 text-nowrap">GET A QUOTE</a></li>
      </ul>
    </nav>
    </div>
    );
}


export default Navbar;
