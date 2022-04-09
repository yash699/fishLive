import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navbar_component/Navbar';

import Advertisement_banner from './banners/Advertisement_banner';

import Poster from './banners/Poster';

import Product from './products/Product';

import Footer from './Footer/footer';



function Home() {
  return (
    <div style={{position:'sticky'}}>
        


       

     
        <Advertisement_banner/>
   
        <Poster/>

        <Product/>
        <Poster/>
          
          


         




    </div>
  );
}

export default Home;
