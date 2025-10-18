
function Home() {
  return (
    <div id="home" className="relative bg-[url('/src/assets/conservatory_cleaning.jpg')] bg-cover bg-center h-screen flex  justify-center">
      <div className="absolute inset-0 bg-[#00172A]/70"></div>
      <div className=" bg-opacity-80 p-10 rounded-lg text-center max-w-[47%] mt-[15%] mx-4 z-10">
        <h1 className="text-6xl font-poppins font-extrabold mb-6">PROFFESSIONAL WINDOW CLEANING IN YOUR LOCAL AREA</h1>
        <p className="text-xl font-poppins mb-8">STREAK-FREE WINDOWS, SPARKLING CONSERVATORIES. YOUR HOME AT ITS BEST.</p>
        <a href="#services" className="bg-[#26578F] text-white px-10 py-5 rounded-full text-xl font-poppins font-semibold hover:bg-blue-700 transition duration-300">CONTACT US NOW!</a>
      </div>
    </div>
  );
}

export default Home;