const express = require("express");
const app = express();

const router = express.Router();

const Property = require("../schema/propertyschems");

router.post("/createproperty", async (req, res) => {
  const { title, country, address, image, price, description, contact } =
    req.body;

  try {
    if (
      !title ||
      !country ||
      !address ||
      !image ||
      !price ||
      !description ||
      !contact
    ) {
      return res.status(400).json({ message: "Incomplete property data" });
    }
    const newProperty = new Property({
      title,
      country,
      address,
      image,
      price,
      description,
      contact,
    });

    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    console.error("Error adding property:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/getallproperty", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getfourproperty", async (req, res) => {
  try {
    const properties = await Property.find().limit(4);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/property/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findById({ _id: id });
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
