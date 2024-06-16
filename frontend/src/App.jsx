import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import React from "react";
import Website from "./pages/Website/Website";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import Property from "./components/Property/Property";
import Addproperty from "./pages/Addproperty/Addproperty";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/properties">
              <Route index element={<Properties />} />
              <Route path=":propertyId" element={<Property />} />
            </Route>
            {/* <Route path="/propertydetails" element={<Property />} /> */}
            <Route path="/addproperty" element={<Addproperty />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
