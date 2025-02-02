import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./components/Login";
import Contact from "./pages/Contact";
import { useSelector } from "react-redux";
import About from "./pages/About";
import SignUp from "./components/SignUp";
import Forgotpass from "./pages/Forgotpass";



const App = () => {
 
  return (<div className="">
        <div className="bg-slate-900 ">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/contactus" element={<Contact></Contact>} />
          <Route path="/aboutus" element={<About></About>} /> 
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/forgot-password" element={<Forgotpass></Forgotpass>} /> 
          
        </Routes>
  </div>)
};

export default App;
