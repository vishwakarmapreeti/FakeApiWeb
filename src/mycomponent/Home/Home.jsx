import React from "react";
import Carausal from "./Carausal";
import Cards from "./Cards";
import Footer from "./Footer";
import Body from "../Body";
import Album from "./Album";

function Home() {
  return (
    <div>
      <Carausal />

      <Cards />
      <Album/>
      
<Body/>
    
    </div>
  );
}

export default Home;
