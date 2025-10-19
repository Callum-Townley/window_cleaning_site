
function Coverage(){
    return (<>
    

     <div className="bg-[url('/src/assets/map.png')] min-h-screen h-fit flex  justify-center relative">
     <div className="absolute inset-0 bg-[#00172A]/70"></div>
        <div className=" z-1 absolute top-0  left-0 w-full h-[70%]">
  <img
    src="/src/assets/about_us_wave.svg"
    alt=""
    className="w-[100%] h-full object-cover -scale-y-100"
  />
</div>

  <div className=" z-0 absolute bottom-0  left-0 w-full h-[70%]">
  <img
    src="/src/assets/coverage_wave.svg"
    alt=""
    className="w-[100%] h-full object-cover"
  />
</div>
        <div className=" bg-opacity-80 p-10 rounded-lg  text-center w-screen max-w-[60%] mx-4 z-10 flex flex-col justify-center items-center">
        <h1 className="text-[clamp(2rem,3.5vw,4rem)] font-poppins font-extrabold mb-15 bg-clip-text text-transparent bg-gradient-to-b from-white from-70% to-gray-400 text-center pt-20">PROUDLY SERVING THE WEST MIDLANDS</h1>
        <p className="text-[clamp(2rem,3.5vw,4rem)] text-[#A6D6FF] text-poppins"> We cover:</p>
        <div className="flex justify-center w-fit  gap-[20%] mt-8">
        <ul className="list-none space-y-10 w-fit text-white text-[clamp(2rem,3.5vw,2rem)] text-nowrap">
              <li>Solihull</li>
              <li>Shirley</li>
              <li>Marston Green</li>
              <li>Castle Bromwich</li>
              <li>Coleshill</li>
            </ul>
        <ul className="list-none space-y-10 text-white text-[clamp(2rem,3.5vw,2rem)] text-nowrap">
              <li>Yardley</li>
              <li>Balsall Common</li>
              <li>Coundon</li>
              <li>Keresley</li>
              <li>Allesley</li>
            </ul>
        <ul className="list-none space-y-10 text-white text-[clamp(2rem,3.5vw,2rem)] text-nowrap">
              <li>Water Orton</li>
              <li>Meriden</li>
              <li>Stechford</li>
              <li>Knowle</li>
              <li>Kingshurst</li>
            </ul>
            </div>
        </div>

    </div>

    </>);
}

export default Coverage;