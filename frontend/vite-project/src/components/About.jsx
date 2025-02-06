import React from "react";
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';



const About = () => {
    const{isAuthenticated}=useAuth0();
      let navigate=useNavigate();
  
    return (
      <section className="bg-black text-white py-20 px-5 sm:px-20 h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#affc41]">Why Pradaan Portal?</h2>
          <p className="mt-6 text-lg text-gray-400">
            Every year, millions suffer from poverty, hunger, cancer, and homelessness. 
            Orphaned children struggle without basic education, and many elderly individuals 
            have no shelter. These issues led to the creation of Pradaan Portal, a platform 
            where people can contribute to the welfare of those in need.
          </p>
          <p className="mt-4 text-lg text-gray-400">
            Your small act of kindness can make a huge difference. Whether it's donating money, 
            books, essential goods, or even blood, every contribution counts. Together, we can 
            create a better future for the underprivileged.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={()=>{
              !isAuthenticated? (alert("Please Login first"))
              :(navigate("/contribute"))
              
            } }className="bg-[#affc41] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:shadow-lg">
              Donate Now
            </button>
            <button className="border border-[#affc41] text-[#affc41] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#affc41] hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  