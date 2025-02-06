require("dotenv").config();
const express = require("express");
const Donor = require("./models/donor.js");
const mongoose = require("mongoose");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECKEY);




const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));
  
app.listen(process.env.PORT,()=>{
console.log(`server is running on port ${process.env.PORT}`);
})

app.use((req, res, next) => {
  console.log(`📩 ${req.method} ${req.url} - Body:`, req.body);
  next();
});


app.post("/contribute", async (req, res) => {
  try {
    const newDonor = new Donor(req.body); 
    await newDonor.save(); 
    res.status(201).json({ message: "Donation made", Donor: newDonor });
  } catch (error) {
    console.error("Validation Error:", error);  // Log error details
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message }); // Send validation error details
    }
    res.status(500).json({ error: error.message }); // For other errors
  }
});


app.post("/payment", async (req, res) => {
  const { amount } = req.body;

  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid donation amount" });
  }

  try {
    const product = await stripe.products.create({ name: "Donation" });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: Math.round(amount * 100), // Convert to cents
      currency: "inr",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/",
      customer_email: "pradaanportal@gmail.com",
    });

    res.json({ url: session.url });
  } 
  catch (error) {
    console.error('Error creating payment session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
});




  app.get("/community", async (req, res) => {
    try {
      const donors = await Donor.find(); // Fetch all donors from MongoDB
      res.json(donors); // Send the donors as JSON response
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handle errors
    }
  });
  


