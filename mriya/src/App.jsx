import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import DB from "./db.json";

import "animate.css";

import Footer from "./Components/Footer";
import Home from "./Page/Home.jsx";
import Offer from "./Page/Offer.jsx";
import Service from "./Page/Service.jsx";
import Contact from "./Page/Contact.jsx";
import Gallery from "./Page/Gallery.jsx";
import MetalPlasticProducts from "./Page/MetalPlasticProducts.jsx";
import EnterDors from "./Page/EnterDors.jsx";
import SectionalGates from "./Page/SectionalGates.jsx";
import About from './Page/About'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Route path="/" exact>
          <Home DB={DB} />
        </Route>
        <Route path="/offer">
          <Offer DB={DB} />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/gallery">
          <Gallery DB={DB} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/metalPlasticProducts">
          <MetalPlasticProducts />
        </Route>
        <Route path="/enterDors">
          <EnterDors />
        </Route>
        <Route path="/SectionalGates">
          <SectionalGates />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
