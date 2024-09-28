// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_51Q3LfW083ieN4c27xXhhqBUvOwpG9pe7yHWRAuyUBRZ9RKtfbsaD0FihaHErFdS7eHTuOrIcSv9hWBEZwuZpRt2O00U7BAOrRl"); // Your actual Stripe secret key

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body; // Amount is expected in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 
