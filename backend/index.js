const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const propertyRoutes = require("./routes/propertyroutes");
const userRoutes = require("./routes/userroutes");
const contactRoutes = require("./routes/contactroutes");
const db = require('./db')

const app = express();
const PORT = 5000;

// app.use(app.router);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(userRoutes);
app.use(propertyRoutes);
app.use(contactRoutes);

app.get("/",(req,res)=>{
    res.send("Hello Server")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
