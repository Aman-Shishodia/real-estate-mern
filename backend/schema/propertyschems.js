const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    title: String,
    country: String,
    address: String,
    image: String,
    price: Number,
    description: String,
    contact: String,
    // name:{
    //     type: String,
    //     required : true
    // },
    
})

const Property = new mongoose.model("Property",propertySchema)

module.exports = Property;