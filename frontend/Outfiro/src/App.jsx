import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Product from "./pages/Product";
import Header from "./components/Header";
import Collection from "./pages/Collection";

const App = () => {
  return (
    <main className="over-flow-hidden text-[#404040]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </main>
  );
};

export default App;
