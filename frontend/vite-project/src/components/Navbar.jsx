import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const{user, loginWithRedirect, isAuthenticated}=useAuth0();
  let navigate=useNavigate();
  return (
    <div>
        <div className="navigationbar py-1 bg-black font-serif justify-left  text-white sm:flex sm:space-x-4 " >
        
            <h1 style={{ fontFamily: 'Samarkan' }} className="hover:cursor-pointer hover:bg-white  rounded-xl text-[#affc41] hover:text-[#040401] px-2 border-2 border-solid  text-center"> Pradaan</h1>
            <h1 onClick={()=>{
              navigate("/");
            }}  className='hover:cursor-pointer border-y-1 px-2 rounded-xl  hover:text-[#affc41] border-white font-serif text-center sm:border-none'> Home</h1>
            <h1 onClick={()=>{
              navigate("/about");
            }}  
            className='hover:cursor-pointer border-y-1 px-2 rounded-xl  hover:text-[#affc41]  border-white font-serif text-center sm:border-none'> About</h1>
            <h1 onClick={()=>{
              navigate("/contact");
            }}  
             className='hover:cursor-pointer border-y-1 px-2 rounded-xl  hover:text-[#affc41] border-white font-serif text-center sm:border-none'> Contact</h1>

            <h1 onClick={()=>{
              navigate("/contribute");
            }}  
            
            className='hover:cursor-pointer border-y-1 px-2 rounded-xl  hover:text-[#affc41] border-white text-center sm:border-none'> Contribute</h1>
            <h1 onClick={()=>{
              navigate("/community");
            }} 
            
            className='hover:cursor-pointer border-y-1 px-2 rounded-xl  hover:text-[#affc41] border-white text-center sm:border-none'> Explore</h1>
          
          {
          isAuthenticated ?(<h1 className='text-[#affc41] ml-auto mr-7 text-xl'>{user.name}</h1>)
          :(
        <button onClick={(e)=>loginWithRedirect()}
        className="text-black w-20 ml-auto mr-7 rounded-xl text-xl font-serif bg-[#98ea25] transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41]">
          Login
        </button>)
        }


        </div>
      
    </div>
  )
}

export default Navbar
