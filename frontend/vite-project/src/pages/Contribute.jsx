import { useState ,useEffect } from "react";
import { FaHandHoldingHeart, FaBook, FaUtensils, FaTshirt, FaTint, FaLungs } from "react-icons/fa";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useNavigate } from 'react-router-dom'
import Book from "../components/book";
import BloodDonation from "../components/blood";
import GoodsDonation from "../components/good";
import OrganDonation from "../components/organ";
import FoodDonation from "../components/food";

const Contribute = () => {
  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, []);
  const [popup, setPopup] = useState(null);
  const [showBookPopup, setShowBookPopup] = useState(false);
  const [showBloodPopup, setShowBloodPopup] = useState(false);
  const [showGoodPopup, setShowGoodPopup] = useState(false);
  const [showfoodPopup, setShowfoodPopup] = useState(false);
  const [showorganPopup, setShoworganPopup] = useState(false);
 

  let navigate=useNavigate();





  const contributions = [
    { icon: <FaHandHoldingHeart size={40} className="text-yellow-400" />, text: "Donate Money", popupText: "Your donation helps provide essential aid. Pradaan portal has tied up with the following NGOs/Institutions that are accepting Monetary Donations: 1.GlobalGiving  2.UNICEF  3.The Red Cross  4.Goonj  5.HelpAge India  6.Pratham    7.ActionAid India    " },
    { icon: <FaTint size={40} className="text-red-500" />, text: "Donate Blood", popupText: "Blood donation saves lives in emergencies. Pradaan portal has tied up with the following NGOs/Institutions that are accepting Blood Donations: 1.Global Blood Fund 2.Doctors Without Borders (MSF) 3.Sankalp India Foundation 4.Dera Sacha Sauda" },
    { icon: <FaBook size={40} className="text-blue-400" />, text: "Donate Books", popupText: "Books empower and educate the underprivileged. Pradaan portal has tied up with the following NGOs/Institutions that are accepting Book Donations: 1.Book Aid International 2.Books for Afric 3.Vikram A. Sarabhai Community Science Centre 4.True Vision Trust" },
    { icon: <FaUtensils size={40} className="text-green-400" />, text: "Donate Food", popupText: "Food donations help eliminate hunger. Pradaan portal has tied up with the following NGOs/Institutions: 1.World Food Programme (WFP) 2.The Hunger Project 3.Feeding America 4.Akshaya Patra Foundation 5.Annamrita Foundation 6.Uday Foundation" },
    { icon: <FaTshirt size={40} className="text-purple-400" />, text: "Donate Goods", popupText: "Essential goods support those in need. Pradaan portal has tied up with the following NGOs/Institutions that are accepting used Goods: 1.Clothes Box Foundation 2. Snehalaya 3. Lasting Smile Foundation 4. Share At Door Step" },
    { icon: <FaLungs size={40} className="text-teal-400" />, text: "Donate Organs", popupText: "Organ donation gives others a second chance at life. Pradaan portal has tied up with the following NGOs/Institutions that are accepting organ donations: 1.Organ Donor Registry 2. Donate Life 3.Global Alliance for Transplantation (GAT) 4.Gift Your Organ Foundation" }
  ];

  return (
    <section>
      <Navbar/>
      <div className="banner bg-black text-center flex">
          <div className="name mt-20 sm:mt-0 w-ful" style={{ fontFamily: 'Samarkan' }}>
            <h1 className='text-4xl sm:text-7xl sm:pl-10 sm:pt-10 text-[#affc41]'>THE</h1>
            <h1 className='text-4xl sm:text-9xl sm:pl-10 text-[#affc41]'>PRADAAN</h1>
            <h1 className='text-4xl sm:text-7xl sm:pl-10 text-[#affc41]'>PORTAL</h1>
            <h1 className=" sm:block text-white mx-40  text-lg pt-4 " style={{ fontFamily: 'Corben' }}> " We are currently accepting the following forms of contributions , Please select your desired donation aspect and continue by clicking Donate  "</h1>
          </div>
          
          
        </div>
    <section className="bg-black text-white py-20 px-5 sm:px-20 min-h-screen flex flex-wrap justify-center gap-6">
      {contributions.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-80 h-64 border-4 border-[#affc41] rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41] hover:scale-105 p-4"
        >
          {item.icon}
          <p className="mt-2 text-lg font-semibold text-white">{item.text}</p>
          <div className="flex gap-4 mt-4">
            <button onClick={() => {
          if (item.text === "Donate Books") {
            setShowBookPopup(true);  
          }
          else if (item.text === "Donate Blood") {
            setShowBloodPopup(true);  
          }
          else if (item.text === "Donate Goods") {
            setShowGoodPopup(true);  
          }
          else if (item.text === "Donate Organs") {
            setShoworganPopup(true);  
          }
          else if (item.text === "Donate Food") {
            setShowfoodPopup(true); 
          }
          else if(item.text==="Donate Money"){
            navigate("/pay");
          }

        
            }}className="bg-[#affc41] text-black px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-black">Donate</button>
            <button onClick={() => setPopup(index)} className="border border-[#affc41] text-[#affc41] px-4 py-2 rounded-md font-semibold hover:bg-[#affc41] hover:text-black">Learn More</button>
          </div>
        </div>
      ))}
      {showBookPopup && <Book onClose={() => setShowBookPopup(false)} />}

      {showfoodPopup && <FoodDonation onClose={() => setShowfoodPopup(false)} />}

      {showorganPopup && <OrganDonation onClose={() => setShoworganPopup(false)} />}

      {showGoodPopup && <GoodsDonation onClose={() => setShowGoodPopup(false)} />}

      {showBloodPopup && <BloodDonation onClose={() => setShowBloodPopup(false)} />}

      {popup !== null && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <div className="bg-white text-black p-6 rounded-lg w-3/4 text-center">
            <p className="mb-4">{contributions[popup].popupText}</p>
            <button onClick={() => setPopup(null)} className="bg-[#affc41] text-black px-6 py-2 rounded-md font-semibold hover:bg-black hover:text-white">Got it</button>
          </div>
        </div>
      )}
    </section>
    <Footer/>
    </section>
  );
};

export default Contribute;
