import CircularImage from "../Components/CircularImage";

function Services() {
  return (
    <div className="bg-[#386389] h-screen flex  justify-center">
        <div className=" bg-opacity-80 p-10 rounded-lg text-center w-screen max-w-[80%] mt-[5%] mx-4">
        <h1 className="text-[clamp(2rem,3.5vw,4rem)] font-poppins font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white from-70% to-gray-400 text-center pt-20">OUR SERVICES</h1>
        <div className="flex justify-between flex-row  px-4">
            <CircularImage src="/src/assets/conservatory_cleaning.jpg">Conservatories</CircularImage>
            <CircularImage src="/src/assets/window_cleaned.png">Windows</CircularImage>
            <CircularImage src="/src/assets/drive_and_patio.png">Drive and Patio</CircularImage>
        </div>
        <div className="flex justify-evenly flex-row  px-4 mt-30">
            <CircularImage src="/src/assets/gutter_cleaning.png">Gutters</CircularImage>
            <CircularImage src="/src/assets/fascias.png">Fascias</CircularImage>
        </div>
        

        </div>
    </div>
  );
}

export default Services;