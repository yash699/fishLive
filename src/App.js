import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/ecommerce/navbar_component/Navbar';

import Advertisement_banner from './components/ecommerce/banners/Advertisement_banner';

import Poster from './components/ecommerce/banners/Poster';

import Product from './components/ecommerce/products/Product';

import Footer from './components/ecommerce/Footer/footer';


import Home from './components/ecommerce/Home';
import Product_details from './components/ecommerce/products/product_details';

import AddToCart from './components/ecommerce/cart/AddToCart';

import Login from './components/ecommerce/credentials/Login';

import Register from './components/ecommerce/credentials/Register';

import Profile from './components/ecommerce/credentials/Profile';

import Orders from './components/ecommerce/orders/Orders';

import Faq from './components/ecommerce/common_components/Faq';

import AboutUs from './components/ecommerce/common_components/AboutUs';

import PrivacyPolicy from './components/ecommerce/common_components/PrivacyPolicy';

import TermsConditions from './components/ecommerce/common_components/TermsConditions';




function Test() {
  return (
    <div >

       <Navbar/>
           

        <BrowserRouter >
          <Routes>
          
            <Route exact path="/" element={<Home />}/>
              <Route exact  path="/product_details" element={<Product_details />} />

              <Route exact  path="/add_to_cart" element={<AddToCart />} />

              <Route exact  path="/login" element={<Login />} />

              <Route exact  path="/register" element={<Register />} />

              <Route exact  path="/profile" element={<Profile />} />
            
              <Route exact  path="/myOrder" element={<Orders />} />
              
              <Route exact  path="/faq" element={<Faq />} />

              <Route exact  path="/about_us" element={<AboutUs />} />

              <Route exact  path="/privacy_policy" element={<PrivacyPolicy />} />

              <Route exact  path="/terms_conditions" element={<TermsConditions />} />
              
              

          </Routes>
        </BrowserRouter>

      <Footer/>

          
        


         




    </div>
  );
}

export default Test;
