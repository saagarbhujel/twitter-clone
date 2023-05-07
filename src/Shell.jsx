import Home from "./Home/Home";
import Navbar from "./Components/NavBar";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import SIngleTweet from "./Home/SIngleTweet";
import About from "./Components/About";

const Shell = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/tweet/:id" element={<SIngleTweet />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Shell;
