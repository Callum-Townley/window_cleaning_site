import React from "react";
import { useState } from "react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
    return (
    <div>
 <nav className="bg-gradient-to-r from-[#001C34] from-10% to-[#023663] text-white px-4 py-4 flex justify-between items-center h-24">
      <div className="flex flex-col items-center sm:ml-[0%] lg:ml-[5%]">
      <h1 className=" text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-luckiest">WINDOW</h1>
      <p className ="text-[0.7rem] sm:text-[0.7rem] md:text-[0.9rem] xl:text-xl font-poppins">CLEANING SERVICES</p>
      </div>
      {/*desktop view of the navbar*/}
      <ul className="hidden md:flex space-x-4 lg:space-x-7 xl:space-x-15 2xl:space-x-20  " >
        <li><a href="#home" className="hover:text-gray-200 font-poppins text-[0.8rem] md:text-[1rem] lg:text-lg 2xl:text-2xl">HOME</a></li>
        <li><a href="#services" className="hover:text-gray-200 font-poppins text-[0.8rem] md:text-[1rem]  lg:text-lg 2xl:text-2xl">SERVICES</a></li>
        <li><a href="#about-us" className="hover:text-gray-200 font-poppins text-[0.8rem] md:text-[1rem] lg:text-lg 2xl:text-2xl text-nowrap">ABOUT US</a></li>
        <li><a href="#coverage" className="hover:text-gray-200 font-poppins text-[0.8rem] md:text-[1rem] lg:text-lg 2xl:text-2xl">COVERAGE</a></li>
        <li><a href="#contact" className="hover:text-gray-200 font-poppins text-[0.8rem] md:text-[1rem] lg:text-lg 2xl:text-2xl">CONTACT</a></li>
        <li> <a href="#contact" className="bg-[#26578F] text-white px-8 text-[0.8rem] 2xl:px-10 py-4 2xl:py-5 rounded-full 2xl:text-lg font-poppins font-semibold hover:bg-blue-700 transition duration-300 text-nowrap">GET A QUOTE</a></li>
      </ul>

      <div className="md:hidden flex flex-row w-fit">
       <a
          href="#contact"
          className="md:hidden text-nowrap bg-[#26578F] text-sm md:text-md text-white mr-2 sm:mr-5 px-3 sm:px-8 py-3 rounded-full font-poppins font-semibold hover:bg-blue-700 transition duration-300"
            >
              GET A QUOTE
            </a>
        {/*menu button for mobile view*/}
       <button
        onClick={() => setIsOpen(!isOpen)}
        className=" h-5 w-5 md:hidden text-white focus:outline-none justify-self-end"
      >
        {isOpen ? <img src={"/src/assets/X.svg"} className="h-10 w-10" /> : <img src={"/src/assets/menu.svg"} className="h-10 w-10" />}
      </button>
      {/*mobile menu*/}
      {isOpen && (
        <ul className="absolute top-24 right-0 bg-[#023663] w-full flex flex-col items-center space-y-4 py-6 md:hidden z-50">
          <li><a onClick={() => setIsOpen(false)} href="#home" className="font-poppins text-lg">HOME</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#services" className="font-poppins text-lg">SERVICES</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#about-us" className="font-poppins text-lg">ABOUT US</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#coverage" className="font-poppins text-lg">COVERAGE</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#contact" className="font-poppins text-lg">CONTACT</a></li>
          <li>
           
          </li>
        </ul>
      )}
      </div>
    </nav>
    
    </div>
    );
}


export default Navbar;
