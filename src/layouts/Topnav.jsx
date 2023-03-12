import React from 'react'
import iconOne  from '../assets/images/lang-en.png'
import iconTwo  from '../assets/images/lang-ger.png'
import iconThree  from '../assets/images/lang-fra.png'
import { Link } from 'react-router-dom'

function Topnav() {
  return (
    <div> 
    <header id="header" class="header header-style-1">
    <div class="container-fluid">
        <div class="row">
            <div class="topbar-menu-area">
                <div class="container">
                    <div class="topbar-menu left-menu">
                        <ul>
                            <li class="menu-item" >
                                <a title="" href="#" ><span class="icon label-before fa fa-mobile"></span>Number to be Updated </a>
                            </li>
                        </ul>
                    </div>
                    <div class="topbar-menu right-menu">
                        <ul>
                             
                            <li class="menu-item" ><Link to="login" >Login</Link></li>
                            <li class="menu-item" ><Link to="signup" >Register</Link></li>
                             <li class="menu-item lang-menu menu-item-has-children parent">
                                <a title="English" href="#"><span class="img label-before">
                                <img src={iconOne} alt="lang-en"/></span>English<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                                <ul class="submenu lang" >
                                    <li class="menu-item" ><a title="german" href="#"><span class="img label-before"><img src={iconTwo} alt="lang-ger"/ ></span>German</a></li>
                                    <li class="menu-item" ><a title="french" href="#"><span class="img label-before"><img src={iconThree} alt="lang-fre"/></span>French</a></li>
                                   
                                </ul>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </header>
    
    
    </div>
  )
}

export default Topnav