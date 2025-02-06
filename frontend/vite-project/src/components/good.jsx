import { useState } from "react";

const GoodsDonation = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    goodstype: [],
    weight: "",
    p_address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        goodstype: checked
          ? [...prevState.goodstype, value]
          : prevState.goodstype.filter((type) => type !== value),
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const donationData = {
      name: formData.name,
      email: formData.email,
      age: Number(formData.age),
      donation_type: "Goods", 
      donation_date: new Date(), 
      goodstype: formData.goodstype,
      p_address: formData.p_address,
    };

    try {
      const response = await fetch("http://localhost:8000/contribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        alert("Goods Donation Request Submitted Successfully!");
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
        <h2 className="text-2xl font-bold mb-4 text-[#affc41]">Goods Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          
          <fieldset className="w-full p-2 bg-gray-900 border border-gray-700 rounded">
            <legend className="text-sm text-gray-400">Select Goods Type (Multiple Allowed)</legend>
            {['Clothes', 'Blankets', 'Furniture', 'Toys', 'Electric Items', 'Medicines', 'Stationery Items'].map((type) => (
              <label key={type} className="block text-white">
                <input type="checkbox" value={type} onChange={handleCheckboxChange} className="mr-2" />
                {type}
              </label>
            ))}
          </fieldset>

          <input type="number" name="weight" placeholder="Approx Weight of Items (kg)" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          <input type="text" name="p_address" placeholder="Pickup Address" className="w-full p-2 bg-gray-900 border border-gray-700 rounded" onChange={handleChange} required />
          
          <p className="text-[#affc41]">Press the button below to confirm your goods donation.</p>
          <button type="submit" className="w-full bg-[#affc41] text-black font-bold py-2 rounded hover:bg-green-500">Confirm Donation</button>
          <button type="button" className="w-full mt-2 bg-gray-700 text-white py-2 rounded hover:bg-gray-600" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default GoodsDonation;
