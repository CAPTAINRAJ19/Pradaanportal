import { useState } from "react";
import axios from "axios";

function Pay() {
  const [amount, setAmount] = useState(""); 

  const buyfunc = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    localStorage.setItem("donationAmount", amount); 

    let response = await axios.post("http://localhost:8000/payment", { amount });
    console.log("Stripe Session URL:", response.data.url); 

    if (response && response.status === 200) {
      window.location.href = response.data.url;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
     
      <h1 className="text-3xl font-bold text-[#affc41] mb-6">Support Our Cause</h1>

      
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <input
          type="number"
          placeholder="Enter donation amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 mb-4 bg-black text-white border border-[#affc41] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#affc41]"
        />
        <button
          className="w-full bg-[#affc41] text-black font-bold py-3 rounded-lg hover:bg-[#d4ff7f] transition"
          onClick={buyfunc}
        >
          Donate
        </button>
      </div>

      
      <p className="mt-6 text-gray-400 text-center max-w-md">
        This is a placeholder paragraph. You can replace this with actual text
        describing your cause and how donations will be used.
      </p>
    </div>
  );
}

export default Pay;
