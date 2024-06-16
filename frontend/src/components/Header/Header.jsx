import React, { useEffect,useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Header.css";
import About from "../About/About";

function Header() {
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  const isUserLoggedIn = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
    setValue(value + 1)
    navigate('/')
  };

  useEffect(()=>{

  },[value])

  // useFocusEffect(useCallback(() => { 
  //   console.log("NAVIGATED TO SCREEN3")
  //   forceRender();
  // }, []));

  return (
    <nav>
      <div className="nav-part1">
        <NavLink className="link" to="/">
          <h1>GharDekho</h1>
        </NavLink>
      </div>
      <div className="nav-part2">
        <NavLink className="link" to="/properties">
          Properties
        </NavLink>
        {/* <NavLink className="link" to={<About />}>About</NavLink> */}

        {isUserLoggedIn ? (
          <NavLink className="link" to="/addproperty">
            Add Property
          </NavLink>
        ) : (
          ""
        )}

        {!isUserLoggedIn ? (
          <NavLink className="link" to="/login">
            <button>Login</button>
          </NavLink>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Header;
