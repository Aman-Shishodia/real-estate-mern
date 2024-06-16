import React, { useState, useEffect } from "react";
import "./Residency.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";


function Residency() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    record();
  }, [data]);

  const record = async () => {
    const res = await axios
      .get("http://localhost:5000/getfourproperty")
      .then((res) => {
        setData(res.data);
      });
  };

  return (
    <>
      <div className="pr-p">Best Choices</div>
      <div className="pr-h3">Popular Residencies</div>
      <div className="residency">
        {data &&
          data.map((data, i) => {
            return (
              <div key={i}>
                <div
                  className="properties-card"
                  key={i}
                  onClick={() => navigate(`/properties/${data._id}`)}
                >
                  <Link className="properties-link">
                    <img src={data.image} alt="img" />
                  </Link>
                  <h3>
                    <span>$</span>
                    {data.price}
                  </h3>
                  <Link className="properties-link">
                    <h5>{data.title}</h5>
                  </Link>
                  <p>
                    {data.address} | {data.country}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Residency;
