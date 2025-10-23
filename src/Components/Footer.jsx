function Footer(){
    return(<div className="flex flex-col bg-[#001C34] h-full pb-1 pt-3">
        <div className=" flex flex-row">
        <div className="flex flex-col w-full h-full">
            <p className="mt-3 ml-2 text-white font-poppins font-semibold text-[0.6rem] sm:text-[1rem]  md:text-lg 2xl:text-xl text-nowrap"> Call or email us today to get a quote:</p>
            <div className="flex flex-row items-center">
                 <img
                    src='/src/assets/Mail.svg'
                    alt=""
                    className=" h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]"
                  />
            <a 
                href="mailto:Stevenollerenshaw@gmail.com" 
                className="mt-1 ml-2 text-white font-poppins hover:text-blue-300 transition-colors text-[0.6rem] xs:text-[0.9rem] sm:text-[1rem] 2xl:text-xl"
            >
                Stevenollerenshaw@gmail.com
            </a>
            </div>
            <div className="flex flex-row items-center">
                 <img
                    src='/src/assets/Phone.svg'
                    alt=""
                    className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]"
                  />
            <p className="mt-1 ml-2 text-white font-poppins text-[0.6rem] xs:text-[0.85rem] sm:text-[0.9rem] 2xl:text-xl ">07787561232</p>
            </div>
        </div>
        <div className=" flex-col w-full h-full justify-center items-center hidden md:flex">
            <ul className="list-none space-y-1 w-fit text-white text-[clamp(1rem,3.5vw,1rem)] text-center text-nowrap">
              <li><p className=" font-semibold font-poppins text-xl 2xl:text-2xl"> Navigation</p></li>
              <li><a href="#home" className="2xl:text-xl">Home</a></li>
              <li><a href="#services" className="2xl:text-xl">Services</a></li>
              <li><a href="#about-us" className="2xl:text-xl">About us</a></li>
              <li><a href="#coverage" className="2xl:text-xl">Coverage</a></li>
              <li><a href="#contact" className="2xl:text-xl">Contact</a></li>
            </ul>
        </div>
        <div className="flex flex-col w-fit md:w-full h-full justify-start">
            <div className="flex flex-col items-center mt-10">
      <h1 className=" text-2xl sm:text-4xl xl:text-5xl text-white font-luckiest">WINDOW</h1>
      <p className =" text-[0.7rem] sm:text-[0.9rem] xl:text-xl text-white font-poppins text-nowrap">CLEANING SERVICES</p>
      </div>
      


        </div>
        </div>

        <div className="flex justify-end">
            <p className=" mt-5 mr-2 self-end text-nowrap text-white text-[0.7rem] md:text-lg">© 2025 Window Cleaning Services | Crafted by Dolphin Software</p>
        </div>


    </div>);
}

export default Footer