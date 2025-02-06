import { useState } from "react";

const BloodDonation = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    weight: "",
    recentIllness: "",
    haemoglobin: "",
    travelHistory: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (Number(formData.age) < 18) {
      alert("Minimum age for blood donation is 18.");
      return;
    }
    if (Number(formData.weight) < 50) {
      alert("Minimum weight for blood donation is 50kg.");
      return;
    }

    const donationData = {
      name: formData.name,
      email: formData.email,
      age: Number(formData.age),
      donation_type: "Blood", 
      donation_date: new Date(), 
      b_gp: "Unknown", 
    };

    try {
      const response = await fetch("http://localhost:8000/contribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        alert("Blood Donation Request Submitted Successfully!");
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
        <h2 className="text-2xl font-bold mb-4 text-[#affc41]">Blood Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" min="18" onChange={handleChange} required />
          <input type="number" name="weight" placeholder="Weight (kg)" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" min="50" onChange={handleChange} required />
          
          <select name="recentIllness" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required>
            <option value="">Had cold/flu in past 4 weeks?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          
          <select name="haemoglobin" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required>
            <option value="">Is your haemoglobin between 12.5 - 13.5?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          
          <select name="travelHistory" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required>
            <option value="">Traveled to malaria/zika/corona virus prone area in past 2 months?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          
          <p className="text-[#affc41]">Press the button below to confirm your blood donation.</p>
          <button type="submit" className="w-full bg-[#affc41] text-black font-bold py-2 rounded hover:bg-green-500">Confirm Donation</button>
          <button type="button" className="w-full mt-2 bg-gray-700 text-white py-2 rounded hover:bg-gray-600" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default BloodDonation;
