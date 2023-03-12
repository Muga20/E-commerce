import { BrowserRouter, Route, Routes ,Router  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import  './assets/animate.css';
import './assets/chosen.min.css';
import  './assets/color-01.css'
import './assets/font-awesome.min.css'
import './assets/owl.carousel.min.css'
import './assets/flexslider.css'
import Home from './components/Home';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Details from './components/Details';
import About from './components/About';
<<<<<<< HEAD
import Topnav from './layouts/Topnav';
import WishList from './components/WishList';
import Checkout from './components/Checkout';
import MyAccount from './components/MyAccount';

=======
>>>>>>> 5166312fed2193edbe6c106c7f8f6d5ad1e95c87


function App() {

  return (
    <div className="App">
          <BrowserRouter>
             <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/yAccount' element={<MyAccount/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="signup"  element={<Signup/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path='shop' element={<Shop/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="details" element={<Details/>}/>
          <Route path='about'  element={<About/>} />
<<<<<<< HEAD
          <Route path='wishList'  element={<WishList/>} />
          <Route path='Checkout'  element={<Checkout/>} />
=======
>>>>>>> 5166312fed2193edbe6c106c7f8f6d5ad1e95c87
          </Routes>
             <Footer/>
          </BrowserRouter>  
    </div>
  )
}

export default App
