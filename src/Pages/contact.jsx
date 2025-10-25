import ContactCircle from "../Components/ContactCircle";
import { useState } from "react";
import Swal from "sweetalert2";

function Contact(){
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    console.log("Submitting form data:", formData);
    event.preventDefault();
    setIsSubmitting(true);

    try {
         // Debugging line
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "PUT YOUR ACCESS KEY HERE",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
            background: "#26578F",
            color: "#FFFFFF",
            
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
            title: "Oh no!",
            text: "Something went wrong, please try again",
            icon: "error"
        });
      }
    } catch (error) {
      Swal.fire({
            title: "Oh no!",
            text: "Something went wrong, please try again",
            icon: "error"
        });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };




    return ( <div className="bg-[#0A2840] min-h-screen h-fit flex flex-col  justify-center items-center relative">
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <div className="flex justify-evenly w-full items-center pt-20 max-w-[1920px]">
             <ContactCircle src={'/assets/Mail.svg'}>Stevenollerenshaw@gmail.com</ContactCircle>
                        {/*name and email text boxes*/}
                        
                         <div className="flex flex-col items-center w-full sm:max-w-[100%] md:max-w-[70%] md:max-w-[40%]  ">
                             <h1 className="text-[clamp(2rem,3.5vw,4rem)] font-poppins font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white from-70% to-gray-400 text-center">CONTACT US</h1>
                             
                            <div className="w-full mb-4">
                                <label htmlFor="name" className="block text-left text-white text-xl 2xl:text-2xl font-poppins mb-1 pl-1">Name:</label>
                                <input
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label htmlFor="email" className="block text-left text-white text-xl 2xl:text-2xl font-poppins  mb-1 pl-1">Email Address:</label>
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    placeholder="Email Address"
                                    className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                         </div>
            <ContactCircle src={'/assets/Phone.svg'} style={{fontSize:"1.5rem"}}>07787561232</ContactCircle>
              {/*detail text area*/}
            </div>
                        <div className="w-[100%] mb-10 mt-10 max-w-[1600px]">
                            <label htmlFor="message" className="block text-left text-white text-xl 2xl:text-2xl font-poppins mb-1 pl-1">Details:</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                placeholder="Please provide as much information as you can about the work and services you need, such as your location, property type, number of windows etc."
                                className="min-h-[300px] w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y align-top placeholder:text-left"
                                style={{resize: 'vertical'}}
                                required
                                onChange={handleChange}
                            />
                        </div>
                         <button type="submit"  disabled={isSubmitting} className="bg-[#26578F] cursor-pointer mb-8 text-white px-15 lg:px-25 py-5 rounded-full text-md md:text-lg lg:text-xl text-nowrap  font-poppins font-semibold hover:bg-blue-700 transition duration-300">{isSubmitting ? "SENDING..." : "SUBMIT"}</button>
                        </form>
           
    </div>);

}

export default Contact;