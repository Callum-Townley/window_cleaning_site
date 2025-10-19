
function About() {
  return (
    <div className="bg-[#386389] h-screen flex  justify-center relative">
        <div className=" z-0 absolute bottom-0  left-0 w-full h-[100%]">
  <img
    src="/src/assets/about_us_wave.svg"
    alt=""
    className="w-[100%] h-full object-cover"
  />
</div>
         <div className=" bg-opacity-80 p-10 rounded-lg text-center w-screen max-w-[60%] mx-4 z-10">
        <h1 className="text-[clamp(2rem,3.5vw,4rem)] font-poppins font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white from-70% to-gray-400 text-center pt-20">ABOUT US</h1>
        <p className="text-[clamp(1rem,3.5vw,1.75rem)] font-poppins text-white"> Here at WINDOW Cleaning Services, we put you first. We believe your home or business deserves nothing less than spotless results and friendly, reliable service. <br/><br/>
Based in the West Midlands, our goal is simple: to brighten your view and make your property shine. We take pride in our attention to detail, ensuring every job -big or small-meets the highest standard of care.<br/><br/>
Whether it’s a regular clean or a one-off refresh, you can count on us to arrive on time, work carefully, and leave your space looking its best.<br/><br/>
Because at WINDOW Cleaning Services, your satisfaction always comes first.</p>
        </div>
    </div>
  );
} 

export default About;