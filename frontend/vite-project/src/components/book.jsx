import { useState } from "react";

const Book = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    b_name: "",
    b_author: "",
    b_quant: "",
    b_quality: "",
    p_address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const donationData = {
      name: formData.name,
      email: formData.email,
      age: Number(formData.age),
      donation_type: "Book", 
      donation_date: new Date(), 
      b_name: formData.b_name,
      b_quant: Number(formData.b_quant),
      p_address: formData.p_address,
    };

    try {
      const response = await fetch("http://localhost:8000/contribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        alert("Donation Successful!");
        onClose(); 
      } else {
        alert("Failed to submit donation.");
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-black p-6 rounded-xl w-96 text-white relative">
        <h2 className="text-2xl font-bold mb-4 text-[#affc41]">Book Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Donor Name" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="text" name="b_name" placeholder="Book Name" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="text" name="b_author" placeholder="Author Name" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="number" name="b_quant" placeholder="Quantity" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="number" name="b_quality" placeholder="Quality (1-5)" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" min="1" max="5" onChange={handleChange} required />
          <input type="text" name="p_address" placeholder="Pickup Address" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          
          <p className="text-[#affc41]">Press the below button to complete donation</p>
          <button type="submit" className="w-full bg-[#affc41] text-black font-bold py-2 rounded hover:bg-green-500">Donate</button>
          <button type="button" className="w-full mt-2 bg-gray-700 text-white py-2 rounded hover:bg-gray-600" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Book;
