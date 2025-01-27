import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-(--Glory, serif)">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="apply" element={<Apply />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
