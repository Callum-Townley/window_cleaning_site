import ContactCircle from "../Components/ContactCircle";

function Contact(){
    return ( <div className="bg-[#0A2840] min-h-screen h-fit flex flex-col  justify-center items-center relative">
            <div className="flex justify-evenly w-full items-start pt-20">
             <ContactCircle src={'/src/assets/Mail.svg'}>Stevenollerenshaw@gmail.com</ContactCircle>
                         <div className="flex flex-col items-center w-full max-w-[40%]">
                             <h1 className="text-[clamp(2rem,3.5vw,4rem)] font-poppins font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white from-70% to-gray-400 text-center">CONTACT US</h1>
                                                         <div className="w-full mb-4">
                                                             <label htmlFor="contact-name" className="block text-left text-white text-xl font-poppins mb-1 pl-1">Name:</label>
                                                             <input
                                                                 id="contact-name"
                                                                 type="text"
                                                                 placeholder="Name"
                                                                 className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                             />
                                                         </div>
                                                         <div className="w-full mb-4">
                                                             <label htmlFor="contact-email" className="block text-left text-white text-xl font-poppins  mb-1 pl-1">Email Address:</label>
                                                             <input
                                                                 id="contact-email"
                                                                 type="email"
                                                                 placeholder="Email Address"
                                                                 className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                             />
                                                         </div>
                         </div>
            <ContactCircle src={'/src/assets/Mail.svg'} style={{fontSize:"1.5rem"}}>07787561232</ContactCircle>
            </div>
                        <div className="w-[70%] mb-4 mt-10">
                            <label htmlFor="contact-details" className="block text-left text-white text-xl font-poppins mb-1 pl-1">Details:</label>
                            <textarea
                                id="contact-details"
                                placeholder="Please provide as much information as you can about the work and services you need, such as your location, property type, number of windows etc."
                                className="min-h-[300px] w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y align-top placeholder:text-left"
                                style={{resize: 'vertical'}}
                            />
                        </div>

    </div>);

}

export default Contact;