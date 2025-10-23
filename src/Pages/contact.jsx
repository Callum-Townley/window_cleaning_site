import ContactCircle from "../Components/ContactCircle";

function Contact(){
    return ( <div className="bg-[#0A2840] min-h-screen h-fit flex flex-col  justify-center items-center relative">
            <div className="flex justify-evenly w-full items-center pt-20 max-w-[1920px]">
             <ContactCircle src={'/src/assets/Mail.svg'}>Stevenollerenshaw@gmail.com</ContactCircle>
                        {/*name and email text boxes*/}
                         <div className="flex flex-col items-center w-full max-w-[70%] md:max-w-[40%]  ">
                             <h1 className="text-[clamp(2rem,3.5vw,4rem)] font-poppins font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white from-70% to-gray-400 text-center">CONTACT US</h1>
                            <div className="w-full mb-4">
                                <label htmlFor="contact-name" className="block text-left text-white text-xl 2xl:text-2xl font-poppins mb-1 pl-1">Name:</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label htmlFor="contact-email" className="block text-left text-white text-xl 2xl:text-2xl font-poppins  mb-1 pl-1">Email Address:</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                         </div>
            <ContactCircle src={'/src/assets/Phone.svg'} style={{fontSize:"1.5rem"}}>07787561232</ContactCircle>
              {/*detail text area*/}
            </div>
                        <div className="w-[70%] mb-10 mt-10 max-w-[1600px]">
                            <label htmlFor="contact-details" className="block text-left text-white text-xl 2xl:text-2xl font-poppins mb-1 pl-1">Details:</label>
                            <textarea
                                id="contact-details"
                                placeholder="Please provide as much information as you can about the work and services you need, such as your location, property type, number of windows etc."
                                className="min-h-[300px] w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y align-top placeholder:text-left"
                                style={{resize: 'vertical'}}
                            />
                        </div>
            <a href="#contact" className="bg-[#26578F] mb-8 text-white px-15 lg:px-25 py-5 rounded-full text-md md:text-lg lg:text-xl text-nowrap  font-poppins font-semibold hover:bg-blue-700 transition duration-300">SUBMIT</a>
    </div>);

}

export default Contact;