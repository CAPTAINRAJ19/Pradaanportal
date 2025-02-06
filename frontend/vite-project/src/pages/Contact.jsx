import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


const Contact = () => {
  return (
    <section>
        <Navbar/>
        <div className="banner bg-black  justify-center flex">
          <div className="name mt-20 sm:mt-0 w-ful" style={{ fontFamily: 'Samarkan' }}>
            <h1 className='text-4xl sm:text-7xl sm:pl-10 sm:pt-10 text-white'>THE</h1>
            <h1 className='text-4xl sm:text-9xl sm:pl-10 text-white'>PRADAAN</h1>
            <h1 className='text-4xl sm:text-7xl sm:pl-10 text-white'>PORTAL</h1>
          </div>
          
          
        </div>
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-[#affc41] text-center mb-6">
        Contact Us
      </h1>

      <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg border border-[#affc41]">
        <h2 className="text-xl font-bold text-[#affc41] mb-4 text-center">Get in Touch</h2>

        <div className="flex items-center mb-4">
          <FaUserFriends className="text-[#affc41] text-2xl mr-4" />
          <p className="text-gray-300">Founder- Dhruv Raj Singh</p>
        </div>

        <div className="flex items-center mb-4">
          <FaPhone className="text-[#affc41] text-2xl mr-4" />
          <p className="text-gray-300">+91 98765 43210</p>
        </div>

        <div className="flex items-center mb-4">
          <FaEnvelope className="text-[#affc41] text-2xl mr-4" />
          <p className="text-gray-300">support@pradaanportal.com</p>
        </div>

        <div className="flex items-center">
          <FaMapMarkerAlt className="text-[#affc41] text-2xl mr-4" />
          <p className="text-gray-300">
          Army Institute of Technology (AIT) in Pune - Dighi Hills, Alandi Road, Pune, Maharashtra, 411015
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </section>
  );
};

export default Contact;
