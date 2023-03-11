import React from 'react'
import { BsFillCartCheckFill, BsSearch} from 'react-icons/bs';
import { GoTasklist } from 'react-icons/go';

function Navbar() {
  return (
    <div>
    <header id="header" className="header header-style-1">
        <div className="container-fluid">
            <div className="row">
                <div className="container">
                    <div className="mid-section main-info-area">

                        <div className="wrap-logo-top left-section">
                            <a href="index.html" className="link-to-home "><p>Diamond Mtumba</p></a>
                        </div>

                        <div className="wrap-search center-section">
                            <div className="wrap-search-form">
                                <form action="#" id="form-search-top" name="form-search-top">
                                    <input type="text" name="search" placeholder="Search by category"/>
                                    <button form="form-search-top" type="button"><i><BsSearch/></i></button>
                                    <div className="wrap-list-cate">
                                        <input type="hidden" name="product-cate"  id="product-cate"/>
                                        <a href="#" className="link-control">All Category</a>
                                   
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="wrap-icon right-section">
                            <div className="wrap-icon-section wishlist">
                                <a href="/wishList" className="link-direction">
                                    <i className="fa " aria-hidden="true"><GoTasklist/></i>
                                    <div className="left-info">
                                        <span className="index">0 item</span>
                                        <span className="title">Wishlist</span>
                                    </div>
                                </a>
                            </div>
                            <div className="wrap-icon-section minicart">
                                <a href="/cart" className="link-direction">
                                <i className="fa" aria-hidden="true"><BsFillCartCheckFill/></i>
                                    <div className="left-info">
                                        <span className="index">4 items</span>
                                        <span className="title">CART</span>
                                    </div>
                                </a>
                            </div>
                            <div className="wrap-icon-section show-up-after-1024">
                                <a href="#" className="mobile-navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="nav-section header-sticky">
                    <div className="header-nav-section">
                        <div className="container">
                            <ul className="nav menu-nav clone-main-menu" id="mercado_haead_menu" data-menuname="Sale Info" >
                                <li className="menu-item"><a href="#" className="link-term">Weekly Featured</a><span className="nav-label hot-label">hot</span></li>
                                <li className="menu-item"><a href="#" className="link-term">Hot Sale items</a><span className="nav-label hot-label">hot</span></li>
                                <li className="menu-item"><a href="#" className="link-term">Top new items</a><span className="nav-label hot-label">hot</span></li>
                                <li className="menu-item"><a href="#" className="link-term">Top Selling</a><span className="nav-label hot-label">hot</span></li>
                                <li className="menu-item"><a href="#" className="link-term">Top rated items</a><span className="nav-label hot-label">hot</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="primary-nav-section">
                        <div className="container">
                            <ul className="nav primary clone-main-menu" id="mercado_main" data-menuname="Main menu" >
                                <li className="menu-item">
                                    <a href="/shop" className="link-term mercado-item-title">Shop</a>
                                </li>
                                <li className="menu-item">
                                    <a href="cart.html" className="link-term mercado-item-title">Cart</a>
                                </li>
                                <li className="menu-item">
                                    <a href="checkout.html" className="link-term mercado-item-title">Checkout</a>
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