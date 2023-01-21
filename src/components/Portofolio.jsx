import React from "react";
import { useEffect, useState } from "react";
import data from "../data/data";
import Body from "./Body";
import { Context } from "../Context/context.js";
import Nav from "./Nav";
import Timeline from "./Timeline";
import Footer from "./Footer";

function Portofolio() {
  const [conocimientos, setConocimientos] = useState([]);
  useEffect(() => {
    setConocimientos(data);
  }, []);

  return (
    <>
      <Nav />
      <Context.Provider value={conocimientos}>
        <Body/>
      </Context.Provider>
      <Timeline />
      <Footer />
      
    </>
  );
}

export default Portofolio;
