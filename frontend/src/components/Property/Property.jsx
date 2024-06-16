import React, { useEffect, useState } from "react";
import "./Property.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Property() {
  // const id = useLocation()
  const [contactdata, setContactdata] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [data, setData] = useState();
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  //   console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/property/${id}`)
      .then((d) => setData(d.data));
    //   console.log(data);
  }, []);

  const contact = (e) => {
    const { name, value } = e.target;
    setContactdata(() => {
      return {
        ...contactdata,
        [name]: value,
      };
    });
  };


  const sendcontact = (e) => {
    const { name, phone, email, message } = contactdata;
    e.preventDefault();
    axios
      .post("http://localhost:5000/contact", contactdata)
      .then((res) => {
        // navigate("/");
        toast.success("Message sent successful");
      })
      .catch((error) => {
        toast.error("Something error");
      });
  };

  return (
    <div className="property">
      <div className="property-page1">
        <div>
          <h3>{data?.title}</h3>
          <p>
            {data?.address} {data?.country}
          </p>
        </div>
        <div>
          <p>$ {data?.price}</p>
        </div>
      </div>
      <div className="property-page2">
        <div className="property-img">
          <img src={data?.image} alt="" />
        </div>
        <div className="property-contact">
          <h1>Contact</h1>
          <input
            type="text"
            onChange={contact}
            name="name"
            placeholder="Name*"
          />
          <input
            type="text"
            onChange={contact}
            name="phone"
            placeholder="Phone*"
          />
          <input
            type="email"
            onChange={contact}
            name="email"
            placeholder="Email*"
          />
          <textarea
            name="message"
            onChange={contact}
            id=""
            placeholder="Message*"
          ></textarea>
          <button onClick={sendcontact}>Send Message</button>
        </div>
      </div>
      <div className="property-page3">
        <p>{data?.description}</p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Property;
