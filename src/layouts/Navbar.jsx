import React from 'react'

function Navbar() {
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
                                <a title="Hotline: (+254) 720 423 764" href="#" ><span class="icon label-before fa fa-mobile"></span>Hotline: (+254) 720 423 764</a>
                            </li>
                        </ul>
                    </div>
                    <div class="topbar-menu right-menu">
                        <ul>
                            <li class="menu-item" ><a title="Register or Login" href="Login">Login</a></li>
                            <li class="menu-item" ><a title="Register or Login" href="signup">Register</a></li>
                            <li class="menu-item lang-menu menu-item-has-children parent">
                                <a title="English" href="#"><span class="img label-before"><img src="assets/images/lang-en.png" alt="lang-en"/></span>English<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                               
                            </li>
                            <li class="menu-item menu-item-has-children parent" >
                                <a title="Kenya (KSH)" href="#">Kenya (KSH)<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

<<<<<<< HEAD
                        <div className="wrap-logo-top left-section">
                            <a href="/" className="link-to-home "><p>Diamond Mtumba</p></a>
=======
            <div class="container">
                <div class="mid-section main-info-area">

                    <div class="wrap-logo-top left-section">
                        <a href="index.html" class="link-to-home"><img src="assets/images/logo-top-1.png" alt=""/></a>
                    </div>

                    <div class="wrap-search center-section">
                        <div class="wrap-search-form">
                            <form action="#" id="form-search-top" name="form-search-top">
                                <input type="text" name="search" value="0" placeholder="Search here..."/>
                                <button form="form-search-top" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                                <div class="wrap-list-cate">
                                    <input type="hidden" name="product-cate" value="0" id="product-cate"/>
                                    <a href="#" class="link-control">All Category</a>
                                    <ul class="list-cate">
                                        <li class="level-0">All Category</li>
                                        <li class="level-1"></li>
                                        <li class="level-2"></li>
                                        <li class="level-2"></li>
                                        <li class="level-2"></li>
                                        <li class="level-1"></li>
                                        <li class="level-2"></li>
                                        <li class="level-2"></li>
                                        <li class="level-2"></li>
                                        <li class="level-1"></li>
                                        <li class="level-2"></li>
                                        <li class="level-2"></li>
                                        <li class="level-2"></li>
                                        <li class="level-1"></li>
                                        <li class="level-2"></li>
                                        <li class="level-2"></li>
                                        <li class="level-2"></li>
                                    </ul>
                                </div>
                            </form>
>>>>>>> 5166312fed2193edbe6c106c7f8f6d5ad1e95c87
                        </div>
                    </div>

                    <div class="wrap-icon right-section">
                        <div class="wrap-icon-section wishlist">
                            <a href="#" class="link-direction">
                                <i class="fa fa-heart" aria-hidden="true"></i>
                                <div class="left-info">
                                    <span class="index">0 item</span>
                                    <span class="title">Wishlist</span>
                                </div>
                            </a>
                        </div>
                        <div class="wrap-icon-section minicart">
                            <a href="#" class="link-direction">
                                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                                <div class="left-info">
                                    <span class="index">4 items</span>
                                    <span class="title">CART</span>
                                </div>
                            </a>
                        </div>
                        <div class="wrap-icon-section show-up-after-1024">
                            <a href="#" class="mobile-navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="nav-section header-sticky">
                <div class="header-nav-section">
                    <div class="container">
                        <ul class="nav menu-nav clone-main-menu" id="mercado_haead_menu" data-menuname="Sale Info" >
                            <li class="menu-item"><a href="#" class="link-term">Weekly Featured</a><span class="nav-label hot-label">hot</span></li>
                            <li class="menu-item"><a href="#" class="link-term">Hot Sale items</a><span class="nav-label hot-label">hot</span></li>
                            <li class="menu-item"><a href="#" class="link-term">Top new items</a><span class="nav-label hot-label">hot</span></li>
                            <li class="menu-item"><a href="#" class="link-term">Top Selling</a><span class="nav-label hot-label">hot</span></li>
                            <li class="menu-item"><a href="#" class="link-term">Top rated items</a><span class="nav-label hot-label">hot</span></li>
                        </ul>
                    </div>
                </div>

                <div class="primary-nav-section">
                    <div class="container">
                        <ul class="nav primary clone-main-menu" id="mercado_main" data-menuname="Main menu" >
                            <li class="menu-item home-icon">
                                <a href="index.html" class="link-term mercado-item-title"><i class="fa fa-home" aria-hidden="true"></i></a>
                            </li>
                            <li class="menu-item">
                                <a href="about-us.html" class="link-term mercado-item-title">About Us</a>
                            </li>
                            <li class="menu-item">
                                <a href="shop.html" class="link-term mercado-item-title">Shop</a>
                            </li>
                            <li class="menu-item">
                                <a href="cart.html" class="link-term mercado-item-title">Cart</a>
                            </li>
                            <li class="menu-item">
                                <a href="checkout.html" class="link-term mercado-item-title">Checkout</a>
                            </li>
                            <li class="menu-item">
                                <a href="contact-us.html" class="link-term mercado-item-title">Contact Us</a>
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

export default Navbar