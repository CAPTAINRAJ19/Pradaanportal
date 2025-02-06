import { useState } from "react";

const OrganDonation = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    organ: "",
    appointmentDate: "",
    address: "",
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
      donation_type: "Organ", 
      donation_date: new Date(), 
      organ: formData.organ,
      p_address: formData.address,
    };

    try {
      const response = await fetch("https://pradaanportal.onrender.com/contribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        alert("Organ Donation Request Submitted Successfully!");
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
        <h2 className="text-2xl font-bold mb-4 text-[#affc41]">Organ Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          
          <select name="organ" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required>
            <option value="">Select Organ for Donation</option>
            {["Kidney", "Liver", "Pancreas", "Heart", "Intestines", "Lungs"].map((organ) => (
              <option key={organ} value={organ}>{organ}</option>
            ))}
          </select>

          <input type="date" name="appointmentDate" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="text" name="address" placeholder="Appointment Address" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          
          <p className="text-[#affc41]">Press the button below to confirm your organ donation.</p>
          <button type="submit" className="w-full bg-[#affc41] text-black font-bold py-2 rounded hover:bg-green-500">Confirm Donation</button>
          <button type="button" className="w-full mt-2 bg-gray-700 text-white py-2 rounded hover:bg-gray-600" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default OrganDonation;