import React, { useEffect, useState } from "react";
import "./Properties.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Properties() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    record();
  }, [data]);

  const record = async () => {
    const res = await axios
      .get("http://localhost:5000/getallproperty")
      .then((res) => {
        setData(res.data);
        // console.log(res.data)
      });
  };

  return (
    <div className="properties">
      {data &&
        data.map((data, i) => {
          return (
            <div key={i}>
              <div className="properties-card" key={i}
               onClick={() => navigate(`/properties/${data._id}`)}>
                <Link
                  className="properties-link"
                 
                >
                  <img src={data.image} alt="img" />
                  {/* <img src="C:/fakepath/r1.png" alt="img" /> */}
                </Link>
                <h3>
                  <span>$</span>
                  {data.price}
                </h3>
                <Link className="properties-link" >
                  <h5>{data.title}</h5>
                </Link>
                <p>{data.address} | {data.country}</p>
              </div>
            </div>
          );
        })}
    
    </div>
  );
}

export default Properties;
