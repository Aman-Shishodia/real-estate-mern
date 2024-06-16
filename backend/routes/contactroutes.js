const express = require("express");
const app = express();

const router = express.Router();

const Contact = require("../schema/contactschema");

router.post("/contact", async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ message: "Incomplete property data" });
      }

    const newcontact = new Contact({
      name,
      phone,
      email,
      message,
    });
    // console.log("hii");

    const contact = await newcontact.save();
    res.status(201).json(contact);
  } catch (error) {
    console.error("Error adding property:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
