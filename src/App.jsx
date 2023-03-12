
import { BrowserRouter, Route, Routes ,Router  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css'
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import  './assets/css/animate.css'
import './assets/css/chosen.min.css'
import  './assets/css/color-01.css'
import './assets/css/font-awesome.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/flexslider.css'
import  './assets/css/bootstrap.min.css'

import Contact from './components/Contact';
import Shop from './components/Shop';
import Cart from './constants/Cart';

import About from './components/About';
import Topnav from './layouts/Topnav';
import HomePage from './components/HomePage';
import CheckOut from './constants/CheckOut';
import Details from './constants/Details';
import WishList from './components/WishList';



export default function Home() {
  return (
    <div className="">
    <BrowserRouter>
    <Topnav/>
    <Navbar/>
 <Routes>

 <Route path='/' element={<HomePage/>} />
 <Route path="contact" element={<Contact/>}/>
 <Route path='shop' element={<Shop/>} />
 <Route path="cart" element={<Cart/>} />
 <Route path='checkout' element={<CheckOut/>}/>
 <Route path='about'  element={<About/>} />
 <Route path="details" element={<Details/>}/>
 <Route path="signup"  element={<SignUp/>}/>
 <Route path="login" element={<Login/>}/>
 <Route path='wishList'  element={<WishList/>} />

 </Routes>
    <Footer/>
 </BrowserRouter>  
    </div>
  );
}
