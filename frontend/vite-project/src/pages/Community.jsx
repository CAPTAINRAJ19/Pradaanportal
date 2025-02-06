import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


const Community = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/community");
        setDonors(response.data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      }
    };

    fetchDonors();
  }, []);


  const getDonationMessage = (donor) => {
    switch (donor.donation_type.toLowerCase()) {
      case "money":
        return "generously donated funds to support those in need.";
      case "blood":
        return "selflessly donated blood to help save lives.";
      case "organ":
        return "made a life-saving organ donation to give someone a second chance.";
      case "food":
        return "provided food to those struggling with hunger.";
      case "goods":
        return "contributed essential supplies to improve the lives of others.";
      default:
        return "made a valuable contribution to the community.";
    }
  };

  return (
    <section>
      <Navbar/>
      <div className="banner bg-black  justify-center flex">
          <div className="name mt-20 sm:mt-0 w-ful" style={{ fontFamily: 'Samarkan' }}>
            <h1 className='text-4xl sm:text-7xl sm:pl-10 sm:pt-10 text-[#affc41]'>THE</h1>
            <h1 className='text-4xl sm:text-9xl sm:pl-10 text-[#affc41]'>PRADAAN</h1>
            <h1 className='text-4xl sm:text-7xl sm:pl-10 text-[#affc41]'>PORTAL</h1>
          </div>
          
          
        </div>
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-whtie text-center mb-6">
        OUR COMMUNITY CONTRIBUTIONS
      </h1>
      {donors.length === 0 ? (
        <p className="text-center text-gray-400">No contributions yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donors.map((donor) => (
            <div
              key={donor._id}
              className="bg-gray-900 p-5 rounded-lg shadow-lg border border-[#affc41]"
            >
              <h2 className="text-xl font-bold text-[#affc41]">
                Mr/Ms. {donor.name}
              </h2>
              <p className="text-gray-300">Age: {donor.age}</p>
              <p className="text-gray-400">
                {donor.name} {getDonationMessage(donor)} <br />
                <span className="text-sm text-gray-500">
                  (Donated on {new Date(donor.donation_date).toDateString()})
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </section>
  );
};

export default Community;
