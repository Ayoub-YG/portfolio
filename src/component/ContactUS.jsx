import React,{useRef } from "react";
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';



export default function ContactUS() {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_9qegtuc', 'template_lqzhapu', form.current, {
          publicKey: 'Pv6RVxOpcVEDPh_CT',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div id="contact" className="w-full flex justify-center px-[7%] py-[3%] bg-white text-black">
      <div className="flex  gap-3 flex-col sm:flex-row">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 bg-gray-100 px-6 py-3">
          <h1 className="font-bold text-xl" >Let me know here</h1>
          <div className="flex-col w-full flex gap-2 sm:flex-row ">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="bg-white py-2 px-1 w-full outline-none text-sm"
              name="user_name" 
            />
            <input
              type="email"
              placeholder="Email Adresse"
              required
              className="bg-white py-2 px-1 text-sm outline-none "
              name="user_email"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-white py-2 px-3"
            required
          />
          <textarea type="text" className="bg-white py-2 px-3" placeholder="Message" required name="message" />
          <button type="submit" className="bg-blue-900 text-white max-w-max px-3 py-2 rounded-xl" >Send Message</button>
        </form>
        <div className=" bg-gray-100 flex px-7 flex-col gap-3 py-3">
            <h1 className="font-bold text-xl" >Get In Touch</h1>
            <div className="flex items-center gap-2 py-2 text-base  sm:text-lg  " ><MdOutlinePlace className="bg-black text-white w-7 h-7 p-[3px] rounded-full " />  <h1>Khemis Miliana, Ain defla, Algeria</h1> </div>
            <div className="flex items-center gap-2 py-2 text-base  sm:text-lg"><MdOutlineMailOutline className="bg-black text-white w-7 h-7 p-[3px] rounded-full " /> <h1>ayoub.yagoubi12@gmail.com</h1></div>
            <div className="flex items-center gap-2 py-2 text-base  sm:text-lg"><BsFillTelephoneFill className="bg-black text-white w-7 h-7 p-[3px] rounded-3xl  " /> <h1>+213 799412900</h1></div>
            <div className="flex ml-4 mt-3 gap-5">
                <a href="https://www.linkedin.com/in/ayoub-yagoubi-79198b233/" className="text-3xl"><FaLinkedin /></a>
                <a href="https://github.com/Ayoub-YG" className="text-3xl" ><FaGithub /></a>
                
            </div>
        </div>
      </div>
    </div>
  );
}
