import React, { useState } from "react";
import "./Addproperty.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Addproperty() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: "",
    country: "",
    address: "",
    image: "",
    price: "",
    description: "",
    contact: "",
  });

  const updatedata = (e) => {
    const { name, value } = e.target;
    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  // console.log(data)


  const adddata = (e) => {
    const { title,country,address,image, price,  description, contact}  = data;
    e.preventDefault();
    // console.log(data)
    axios
    .post("http://localhost:5000/createproperty", data)
    .then(() => {
      alert("Property Added");
      navigate("/properties");
    })
    .catch((error) => {
      // console.log(error);
      alert(error);
    });
  };
  return (
    <div className="addproperty">
      <div className="addproperty-part1">
        <ol>
          <li>
            <span>1</span>Basics Details
          </li>
          <li>
            <span>2</span>Address
          </li>
          <li>
            <span>3</span>Price
          </li>
          <li>
            <span>4</span>Submit
          </li>
          <hr className="hr1" />
          <hr className="hr2" />
          <hr className="hr3" />
        </ol>
      </div>
      <div className="addproperty-part2">
        <div>
          <label htmlFor="property">Title*</label>
          <br />
          <input
            type="text"
            id="property"
            name="title"
            placeholder="Property Name"
            onChange={updatedata}
          />
          <br />
          <label htmlFor="country">Country*</label>
          <br />
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            onChange={updatedata}
          />
          <br />
          <label htmlFor="address">Address*</label>
          <br />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            onChange={updatedata}
          />
          <br />
          <label htmlFor="image">Image Url*</label>
          <br />
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Image"
            onChange={updatedata}
          />
          <br />
        </div>
        <div>
          <label htmlFor="price">Price*</label>
          <br />
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            onChange={updatedata}
          />
          <br />
          <label htmlFor="contact">Contact*</label>
          <br />
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Contact"
            onChange={updatedata}
          />
          <br />
          <label htmlFor="description">Description*</label>
          <br />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            onChange={updatedata}
          ></textarea>
        </div>
      </div>
      <div className="addproperty-part3">
        <button onClick={adddata}>Add Property</button>
        <button>Back</button>
      </div>
    </div>
  );
}

export default Addproperty;
