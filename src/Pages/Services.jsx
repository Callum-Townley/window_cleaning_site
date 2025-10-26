import CircularImage from "../Components/CircularImage";

function Services() {
  return (
    <div className="bg-[#386389] min-h-screen h-fit flex relative justify-center ">
      {/*sparkles in the background*/}
      <div className="max-w-[1920px] w-full">
       <img src="/assets/sparkle.svg" alt="" className="absolute w-15 h-15 top-[60%] left-[15%] rotate-70 opacity-40" />
        <img src="/assets/sparkle.svg" alt="" className="absolute w-13 h-13 top-[10%] right-[60%] -rotate-30 opacity-50" />
        <img src="/assets/sparkle.svg" alt="" className="absolute w-17 h-17 bottom-[30%] left-[25%] rotate-90 opacity-70" />
        <img src="/assets/sparkle.svg" alt="" className="absolute w-14 h-14 top-[30%] right-[15%] rotate-180 opacity-80" />
        <img src="/assets/sparkle.svg" alt="" className="absolute w-12 h-12 bottom-[40%] right-[30%] rotate-[135deg] opacity-50" />
        <div className=" bg-opacity-80 p-10 rounded-lg text-center w-screen max-w-[95%] mt-[5%]  flex flex-col">
        <h1 className="text-[clamp(2rem,3.5vw,4rem)] font-poppins font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white from-70% to-gray-400 text-center pt-20">OUR SERVICES</h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between px-4">
            <CircularImage src="/assets/conservatory_cleaning.jpg">Conservatories</CircularImage>
            <CircularImage src="/assets/window_cleaned.png">Windows</CircularImage>
            <CircularImage src="/assets/drive_and_patio.png">Drive and Patio</CircularImage>
        </div>
        <div className="flex flex-col justify-evenly md:flex-row gap-10 md:gap-0  px-4 mt-10 md:mt-30">
            <CircularImage src="/assets/gutter_cleaning.png">Gutters</CircularImage>
            <CircularImage src="/assets/fascias.png">Fascias</CircularImage>
        </div>

        

        </div>
        </div>
    </div>
  );
}

export default Services;