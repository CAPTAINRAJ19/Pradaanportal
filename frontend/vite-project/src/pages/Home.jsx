import React, { useState, useEffect } from "react";
import Navbar from '../components/navbar'
import Footer from "../components/footer";
import About from "../components/About";
import imageTextData from "../assets/imageTextData";
import { useAuth0 } from '@auth0/auth0-react';


function Home() {

  const{user, loginWithRedirect, isAuthenticated,logout}=useAuth0();
  console.log("Current User", user);



  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageTextData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className='bg-black h-full'>
        <Navbar/>
        <div className="banner flex">
          <div className="name mt-20 sm:mt-0 w-3/4" style={{ fontFamily: 'Samarkan' }}>
            <h1 className='text-4xl sm:text-7xl sm:pl-10 sm:pt-10 text-[#affc41]'>THE</h1>
            <h1 className='text-4xl sm:text-9xl sm:pl-10 text-[#affc41]'>PRADAAN</h1>
            <h1 className='text-4xl sm:text-7xl sm:pl-10 text-[#affc41]'>PORTAL</h1>
            <h1 className="hidden sm:block text-white sm:pl-10 w-80 text-2xl pt-4 sm:w-4/5" style={{ fontFamily: 'Bebas Neue' }}> " A Project aimed at the welfare of underprivileged childern . old age homes . Differently abled individuals . Cancer patients "</h1>
          </div>
          <div className="cards sm:ml-10 h-60 overflow-hidden justify-items-center sm:h-96 sm:mr-20 border-[#affc41] border-6 sm:w-2/4 sm:my-10 rounded-l-full m-4 ">

            <img src={imageTextData[currentIndex].image} alt='image' className='sm:h-96 mt-4'></img>
            
            
          </div>
          
        </div>
        <h1 className="sm:hidden text-white sm:pl-10 w-full text-2xl pt-6 sm:w-4/5" style={{ fontFamily: 'Bebas Neue' }}> " A Project aimed at the welfare of underprivileged childern . old age homes . Differently abled individuals . Cancer patients "</h1>
        




        <div className="flex justify-between items-center w-full p-4 pt-2">

  
  <div className="flex w-1/2 space-x-10 pl-14">

    {
      isAuthenticated ?(<button onClick={(e)=>logout({ returnTo: window.location.origin })} className="text-black  w-40  rounded-xl text-xl font-serif bg-[#98ea25] transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41]">Logout</button>)
      :(
    <button onClick={(e)=>loginWithRedirect()}
    className="text-black w-40  rounded-xl text-xl font-serif bg-[#98ea25] transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41]">
      Login
    </button>)
    }
    

  </div>

 
  <div
    className=" hidden sm:block w-1/2 text-right text-xl text-[#ffffff] pr-10 mr-10"
    style={{ fontFamily: "Corben" }}
  >
    {imageTextData[currentIndex].text}
  </div>
</div>
<h1 className="text-[#98ea25] inline text-3xl ml-10" style={{ fontFamily: "Corben" }}> Welcome</h1>
        {
  isAuthenticated && (<h1 className="text-[#ffffff] inline text-xl ml-10 " style={{ fontFamily: "Corben" }}>{user.name}</h1>)
  
}
{
  !isAuthenticated && (<h1 className="text-[#fefefd] inline text-xl ml-10 " style={{ fontFamily: "Corben" }}>Guest</h1>)
}

    <About/>
  <Footer/>
    </section>
  )
}

export default Home
