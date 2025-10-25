
function About() {
  return (
    <div className="bg-[#386389] min-h-screen h-fit flex justify-center relative overflow-hidden ">
      <div className="max-w-[1920px] flex justify-center">
        {/*wave part of the background.*/}
        <div className="z-0 absolute bottom-0 left-0 w-full h-[100%]">
            <img
                src="/assets/about_us_wave.svg"
                alt=""
                className="w-[100%] h-full object-cover"
            />
        </div>
        {/*sparkles in the background*/}
        <img src="/assets/sparkle.svg" alt="" className="absolute w-15 h-15 top-[20%] left-[15%] rotate-45 opacity-20" />
        <img src="/assets/sparkle.svg" alt="" className="absolute w-13 h-13 top-[30%] right-[20%] -rotate-12 opacity-30" />
        <img src="/assets/sparkle.svg" alt="" className="absolute w-17 h-17 bottom-[30%] left-[25%] rotate-90 opacity-50" />
        <img src="/assets/sparkle.svg" alt="" className="absolute w-14 h-14 top-[50%] right-[15%] rotate-180 opacity-40" />
        <img src="/assets/sparkle.svg" alt="" className="absolute w-12 h-12 bottom-[20%] right-[30%] rotate-[135deg] opacity-30" />
        
        <div className="bg-opacity-80 p-10 rounded-lg text-center w-screen xl:max-w-[60%] max-w-[80%] mx-4 z-10">
        {/*the text on the page*/}
        <h1 className="text-[clamp(2rem,3.5vw,4rem)] font-poppins font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white from-70% to-gray-400 text-center pt-20">ABOUT US</h1>
        <p className="text-[clamp(1rem,1.75vw,2rem)] font-poppins text-white"> Here at WINDOW Cleaning Services, we put you first. We believe your home or business deserves nothing less than spotless results and friendly, reliable service. <br/><br/>
Based in the West Midlands, our goal is simple: to brighten your view and make your property shine. We take pride in our attention to detail, ensuring every job -big or small-meets the highest standard of care.<br/><br/>
Whether it’s a regular clean or a one-off refresh, you can count on us to arrive on time, work carefully, and leave your space looking its best.<br/><br/>
Because at WINDOW Cleaning Services, your satisfaction always comes first.</p>
        </div>
        </div>
    </div>
  );
} 

export default About;