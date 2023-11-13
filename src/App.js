import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import banner_wear from "./Components/assets/Banner_Wear.jpeg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={<ShopCategory banner={banner_wear} category="mens-wear" />}
          ></Route>
          <Route
            path="/womens"
            element={
              <ShopCategory banner={banner_wear} category="womens-wear" />
            }
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_wear} category="kids-wear" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignUp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
