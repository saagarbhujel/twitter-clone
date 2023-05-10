import Home from "./Home/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SIngleTweet from "./Home/SIngleTweet";
import About from "./Home/About";
import Profile from "./Components/Profile/Profile"
import Update from "./Components/Update";


const Shell = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/tweet/:id" element={<SIngleTweet />}></Route>
          <Route path="/tweet/profile/:id" element={<Profile/>}></Route>
          <Route path="/tweet/update/:id" element={<Update/>}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default Shell;
