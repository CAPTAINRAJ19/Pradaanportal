import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const storedAmount = localStorage.getItem("donationAmount");
    if (storedAmount) {
      setAmount(Number(storedAmount)); 
      localStorage.removeItem("donationAmount"); 
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      email: formData.email,
      age: Number(formData.age),
      donation_type: "Money",
      donation_date: new Date(),
      Amountofmoney: amount, 
      p_address: formData.address,
    };

    try {
      await axios.post("http://localhost:8000/contribute", userData);
      navigate("/"); 
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-green-600 text-center mb-4">
        Congratulations, your payment was successful!
      </h2>
      <p className="text-gray-700 text-center mb-4">
        Please fill up the following form so that we can know more about you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Your Age"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Your Address"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Success;
