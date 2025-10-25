
function Home() {
  return (
    <div id="home" className="relative bg-[url('/src/assets/conservatory_cleaning.jpg')] bg-cover bg-center min-h-screen h-fit flex  justify-center pb-40 ">
      <div className="absolute inset-0 bg-[#00172A]/70"></div>
      <div className=" bg-opacity-80 p-10 rounded-lg text-center max-w-[1920px] sm:max-w-[60%] mt-[15%] mx-4 z-10">
        <h1 className="text-[clamp(1.5rem,3.5vw,4rem)] font-poppins font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white from-70% to-gray-400">PROFFESSIONAL WINDOW CLEANING IN YOUR LOCAL AREA</h1>
        <p className="text-md md:text-xl lg:text-2xl font-poppins mb-15 text-white">STREAK-FREE WINDOWS, SPARKLING CONSERVATORIES. YOUR HOME AT ITS BEST.</p>
        <a href="#contact" className="bg-[#26578F] cursor-pointer text-white px-3 lg:px-10 py-5 rounded-full text-md md:text-lg lg:text-xl text-nowrap  font-poppins font-semibold hover:bg-blue-700 transition duration-300">CONTACT US NOW!</a>
      </div>
    </div>
  );
}

export default Home;