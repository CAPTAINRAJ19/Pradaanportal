const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  donation_type:{ type: String, required: true },
  donation_date:{ type: Date, required: true },
  b_name: { type: String, required: false },
  b_quant:{ type: Number, required: false },
  Amountofmoney:{ type: Number, required: false},
  organ:{ type: String, required: false},
  b_gp:{ type: String, required: false },
  goodstype:{ type: [String], required: false },
  p_address:{ type: String, required: false },
});

const Donor = mongoose.model("User", DonorSchema);
module.exports = Donor; 
