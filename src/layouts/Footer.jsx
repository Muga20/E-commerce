import React from 'react'
import imageOne from '../assets/images/payment.png'
import imageTwo from '../assets/images/brands/google-play-store.png'
import imageThree from '../assets/images/brands/apple-store.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
    <footer id="footer">
    <div class="wrap-footer-content footer-style-1">

        <div class="wrap-function-info">
            <div class="container">
                <ul>
                    <li class="fc-info-item">
                        <i class="fa fa-truck" aria-hidden="true"></i>
                        <div class="wrap-left-info">
                            <h4 class="fc-name">Free Shipping</h4>
                            <p class="fc-desc">Free On Oder Over $99</p>
                        </div>

                    </li>
                    <li class="fc-info-item">
                        <i class="fa fa-recycle" aria-hidden="true"></i>
                        <div class="wrap-left-info">
                            <h4 class="fc-name">Guarantee</h4>
                            <p class="fc-desc">30 Days Money Back</p>
                        </div>

                    </li>
                    <li class="fc-info-item">
                        <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
                        <div class="wrap-left-info">
                            <h4 class="fc-name">Safe Payment</h4>
                            <p class="fc-desc">Safe your online payment</p>
                        </div>

                    </li>
                    <li class="fc-info-item">
                        <i class="fa fa-life-ring" aria-hidden="true"></i>
                        <div class="wrap-left-info">
                            <h4 class="fc-name">Online Suport</h4>
                            <p class="fc-desc">We Have Support 24/7</p>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
       

        <div class="main-footer-content">

            <div class="container">

                <div class="row">

                    <div class="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                        <div class="wrap-footer-item">
                            <h3 class="item-header">Contact Details</h3>
                            <div class="item-content">
                                <div class="wrap-contact-detail">
                                    <ul>
                                        <li>
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                            <p class="contact-txt">45 Grand Central Terminal New York,NY 1017 United State USA</p>
                                        </li>
                                        <li>
                                            <i class="fa fa-phone" aria-hidden="true"></i>
                                            <p class="contact-txt">(+123) 456 789 - (+123) 666 888</p>
                                        </li>
                                        <li>
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                            <p class="contact-txt">Contact@yourcompany.com</p>
                                        </li>											
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-4 col-md-4 col-xs-12">

                        <div class="wrap-footer-item">
                            <h3 class="item-header">Hot Line</h3>
                            <div class="item-content">
                                <div class="wrap-hotline-footer">
                                    <span class="desc">Call Us toll Free</span>
                                    <b class="phone-number">(+123) 456 789 - (+123) 666 888</b>
                                </div>
                            </div>
                        </div>

                        <div class="wrap-footer-item footer-item-second">
                            <h3 class="item-header">Sign up for newsletter</h3>
                            <div class="item-content">
                                <div class="wrap-newletter-footer">
                                    <form action="#" class="frm-newletter" id="frm-newletter">
                                        <input type="email" class="input-email" name="email" value="" placeholder="Enter your email address"/>
                                        <button class="btn-submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-4 col-sm-4 col-md-4 col-xs-12 box-twin-content ">
                        <div class="row">
                            <div class="wrap-footer-item twin-item">
                                <h3 class="item-header">My Account</h3>
                                <div class="item-content">
                                    <div class="wrap-vertical-nav">
                                        <ul>
                                            <li class="menu-item"><a href="#" class="link-term">My Account</a></li>
                                            <li class="menu-item"><a href="#" class="link-term">Brands</a></li>
                                            <li class="menu-item"><a href="#" class="link-term">Gift Certificates</a></li>
                                            <li class="menu-item"><a href="#" class="link-term">Affiliates</a></li>
                                            <li class="menu-item"><a href="#" class="link-term">Wish list</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="wrap-footer-item twin-item">
                                <h3 class="item-header">Infomation</h3>
                                <div class="item-content">
                                    <div class="wrap-vertical-nav">
                                        <ul>
                                            <li class="menu-item"><a href="#" class="link-term">Contact Us</a></li>
                                            <li class="menu-item"><a href="#" class="link-term">Returns</a></li>
                                            <li class="menu-item"><a href="#" class="link-term">Site Map</a></li>
                                            <li class="menu-item"><a href="#" class="link-term">Specials</a></li>
                                            <li class="menu-item"><a href="#" class="link-term">Order History</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                        <div class="wrap-footer-item">
                            <h3 class="item-header">We Using Safe Payments:</h3>
                            <div class="item-content">
                                <div class="wrap-list-item wrap-gallery">
                                    <img src={imageOne} style={{maxWidth:'260px'}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                        <div class="wrap-footer-item">
                            <h3 class="item-header">Social network</h3>
                            <div class="item-content">
                                <div class="wrap-list-item social-network">
                                    <ul>
                                        <li><a href="#" class="link-to-item" title="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#" class="link-to-item" title="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#" class="link-to-item" title="pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="#" class="link-to-item" title="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#" class="link-to-item" title="vimeo"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                        <div class="wrap-footer-item">
                            <h3 class="item-header">Dowload App</h3>
                            <div class="item-content">
                                <div class="wrap-list-item apps-list">
                                    <ul>
                                        <li><a href="#" class="link-to-item" title="our application on apple store"><figure><img src={imageThree} alt="apple store" width="128" height="36"/></figure></a></li>
                                        <li><a href="#" class="link-to-item" title="our application on google play store"><figure>
                                        <img src={imageTwo} alt="google play store" width="128" height="36"/></figure></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="wrap-back-link">
            <div class="container">
                <div class="back-link-box">
                    <h3 class="backlink-title">Categories</h3>
                    <div class="back-link-row">
                        <ul class="list-back-link" >
                            <li><a href="#" class="redirect-back-link" title="Baby">Baby Blanket</a></li>
                            <li><a href="#" class="redirect-back-link" title="Premium">Premium Babylight Rummage</a></li>
                            <li><a href="#" class="redirect-back-link" title="Babylight">Babylight Rummage</a></li>
                            <li><a href="#" class="redirect-back-link" title="Bath">Bath & floor Mat</a></li>
                            <li><a href="#" class="redirect-back-link" title="BedSheet">BedSheet</a></li>
                            <li><a href="#" class="redirect-back-link" title="Children">Children Anorak Jacket</a></li>
                            <li><a href="#" class="redirect-back-link" title="Ladies">Ladies Fashion Tight</a></li>
                            <li><a href="#" class="redirect-back-link" title="Ladies t">Ladies Tshirt</a></li>
                            <li><a href="#" class="redirect-back-link" title="Socks">Socks</a></li>
                            <li><a href="#" class="redirect-back-link" title="Poly">Poly Silk Blouse</a></li>
                        </ul>

                        
                    </div>
                </div>
            </div>
        </div>

        </div>

        <div class="coppy-right-box">
            <div class="container">
                <div class="coppy-right-item item-left">
                    <p class="coppy-right-text"></p>
                </div>
                <div class="coppy-right-item item-right">
                    <div class="wrap-nav horizontal-nav">
                        <ul>
                            <li class="menu-item"><Link to="about" class="link-term">About us</Link></li>															
                        </ul>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</footer>
    
    
    </div>
  )
}

export default Footer