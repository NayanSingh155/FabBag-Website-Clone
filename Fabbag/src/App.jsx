import { Link, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Productdetails } from "./Components/ProductDetails/Productdetails";
import "./App.css";
import { HomePage } from "./Components/Home";
import { Homedetail } from "./Components/HomeDetails";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { About } from "./Components/About";
import Cart from "./Components/Cart/Cart";
import Contactus from "./Components/ContactUs/Contactus";
import Checkout from "./Pages/Checkout/Checkout"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/homedetail" element={<Homedetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/productsdetails" element={<Productdetails />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
