import { BrowserRouter, Route, Routes ,Router  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style.css'
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import  './assets/animate.css'
import './assets/chosen.min.css'
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
import Topnav from './layouts/Topnav';


function App() {

  return (
    <div className="App">
          <BrowserRouter>
             <Topnav/>
             <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="signup"  element={<Signup/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path='shop' element={<Shop/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="details" element={<Details/>}/>
          <Route path='about'  element={<About/>} />
          </Routes>
             <Footer/>
          </BrowserRouter>  
    </div>
  )
}

export default App
