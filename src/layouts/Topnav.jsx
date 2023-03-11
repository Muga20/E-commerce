import React from 'react'
import { BiMobile } from 'react-icons/bi';
import { TbLanguage } from 'react-icons/tb';

function Topnav() {
  return (
    <header id="header" className="header header-style-1">
      <div className="container-fluid">
        <div className="row">
            <div className="topbar-menu-area">
              <div className="container">
                   <div className="topbar-menu left-menu">
                          <ul>
                              <li className="menu-item" >
                                  <p title="Hotline: (+254) 720 423 764" href="#" ><span className="icon label-before fa "><BiMobile/></span>Hotline: (+254) 720 423 764</p>
                              </li>
                          </ul>
                    </div>
                    <div className="topbar-menu right-menu">
                       <ul>
                              <li className="menu-item" ><a title="Register or Login" href="login.html">Login</a></li>
                              <li className="menu-item" ><a title="Register or Login" href="register.html">Register</a></li>
                        </ul>
                    </div>
              </div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Topnav
