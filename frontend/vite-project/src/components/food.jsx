import { useState } from "react";

const FoodDonation = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    about: "",
    p_address: "",
  });

  const vendors = [
    { name: "Vendor 1", phone: "1234567890", email: "vendor1@example.com" },
    { name: "Vendor 2", phone: "0987654321", email: "vendor2@example.com" },
    { name: "Vendor 3", phone: "1122334455", email: "vendor3@example.com" },
    { name: "Vendor 4", phone: "5566778899", email: "vendor4@example.com" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const donationData = {
      name: formData.name,
      email: formData.email,
      age: Number(formData.age),
      donation_type: "Food", 
      donation_date: new Date(),
      p_address: formData.p_address,
    };

    try {
      const response = await fetch("https://pradaanportal.onrender.com/contribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        alert("Food Donation Request Submitted Successfully!");
        onClose();
      } else {
        alert("Failed to submit donation request.");
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-start p-10 overflow-y-auto">
      <div className="bg-black p-6 rounded-xl w-96 text-white relative">
        <h2 className="text-2xl font-bold mb-4 text-[#affc41]">Food Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <textarea name="about" placeholder="Describe the food to be donated" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required></textarea>
          <input type="text" name="p_address" placeholder="Pickup Address" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          
          <h3 className="text-xl font-semibold text-[#affc41] mt-4">Vendor Details</h3>
          {vendors.map((vendor, index) => (
            <div key={index} className="border border-gray-700 p-2 rounded mt-2">
              <p>{vendor.name}</p>
              <div className="flex gap-2 mt-1">
                <button type="button" className="bg-[#affc41] text-black px-2 py-1 rounded" onClick={() => copyToClipboard(vendor.phone)}>Copy Phone</button>
                <button type="button" className="bg-[#affc41] text-black px-2 py-1 rounded" onClick={() => copyToClipboard(vendor.email)}>Copy Email</button>
              </div>
            </div>
          ))}
          
          <button type="submit" className="w-full bg-[#affc41] text-black font-bold py-2 rounded hover:bg-green-500">Order Placed with Vendor Successfully</button>
          <button type="button" className="w-full mt-2 bg-gray-700 text-white py-2 rounded hover:bg-gray-600" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default FoodDonation;
