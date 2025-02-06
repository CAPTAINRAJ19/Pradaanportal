import React from "react";
import { FaHandHoldingHeart, FaGlobeAmericas, FaUserFriends } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
const Abou = () => {
  return (
    <section>
      <Navbar/>
      <div className="banner bg-black text-center justify-center flex">
          <div className="name mt-20 sm:mt-0 w-ful" style={{ fontFamily: 'Samarkan' }}>
            <h1 className='text-4xl sm:text-7xl sm:pl-10 sm:pt-10 text-[#affc41]'>THE</h1>
            <h1 className='text-4xl sm:text-9xl sm:pl-10 text-[#affc41]'>PRADAAN</h1>
            <h1 className='text-4xl sm:text-7xl sm:pl-10 text-[#affc41]'>PORTAL</h1>
          </div>
          
          
        </div>
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-[#affc41] text-center mb-6">
        About Pradaan Portal
      </h1>

      <div className="max-w-3xl mx-auto text-center text-gray-300">
        <p className="mb-4">
          <span className="text-[#affc41] font-semibold">Pradaan Portal</span> is a 
          Full stack project envisioned by Dhruv Raj Singh as both a learning opportunity and 
          a step toward bringing a positive change into the lives of those who need it the most.
        </p>
        <p className="mb-4">
          It serves as a "centralized donation platform", making it easier for people to donate 
          money, blood, organs, food, or goods to help others. While currently in its most basic version, 
          Pradaan Portal aspires to grow into a fully functional charity hub.
        </p>
      </div>

  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-[#affc41]">
          <FaHandHoldingHeart className="text-[#affc41] text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-bold text-[#affc41]">Not Everyone is Lucky</h2>
          <p className="text-gray-300 text-sm mt-2">
            Some people struggle to afford even basic needs like food, shelter, and medicine. 
            Your contributions can make a real difference.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-[#affc41]">
          <FaGlobeAmericas className="text-[#affc41] text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-bold text-[#affc41]">A Global Problem</h2>
          <p className="text-gray-300 text-sm mt-2">
            Poverty, hunger, and medical crises affect millions of people worldwide. 
            A single act of kindness can "change a life forever".
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-[#affc41]">
          <FaUserFriends className="text-[#affc41] text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-bold text-[#affc41]">Together We Can Help</h2>
          <p className="text-gray-300 text-sm mt-2">
            By donating, you become part of a movement that believes in equality, support, and hope
            for those who need it most.
          </p>
        </div>
      </div>

      
      <div className="max-w-3xl mx-auto text-center text-gray-300 mt-10">
        <p className="mb-4">
          "No one has ever become poor by giving."
          <br />— *Anne Frank*
        </p>
        <p className="mb-4">
          Pradaan Portal is more than just a project. It’s a vision to make giving easier, accessible, 
          and impactful. Whether you donate money, blood, food, or time — every act of kindness counts.
        </p>
      </div>
    </div>
    <Footer/>
    </section>
  );
};

export default Abou;
