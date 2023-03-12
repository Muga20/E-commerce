import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageOne from '../assets/images/logo-top-1.png'

function Navbar() {

  const [showList, setShowList] = useState(false); //state to control the visibility of the list

  const handleListToggle = () => {
    setShowList(!showList);
  };

  return (
    <div>
    <header id="header" class="header header-style-1">
		<div class="container-fluid">
			<div class="row">
				
				<div class="container">
					<div class="mid-section main-info-area">

						<div class="wrap-logo-top left-section">
							<a href="index.html" class="link-to-home"><img src={imageOne} alt="mercado"/></a>
						</div>

						<div class="wrap-search center-section">
							<div class="wrap-search-form "  style={{borderRadius:'5px'}}>
								<form action="#" id="form-search-top" name="form-search-top" > 
									<input type="text" name="search" value="" placeholder="Search here..." 
                                    />
									<button form="form-search-top" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
									
								</form>
							</div>
						</div>

						<div class="wrap-icon right-section">
							<div class="wrap-icon-section wishlist">
                            <Link to='' class="link-direction">
									<i class="fa fa-heart" aria-hidden="true"></i>
									<div class="left-info">
										<span class="index">0 item</span>
										<span class="title">Wishlist</span>
									</div>
							</Link>
							</div>
							<div class="wrap-icon-section minicart">
                                 <Link to='cart' class="link-direction" >
							
									<i class="fa fa-shopping-basket" aria-hidden="true"></i>
									<div class="left-info">
										<span class="index">4 items</span>
										<span class="title">CART</span>
									</div>
							
                                </Link>
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
					<div class="primary-nav-section">
						<div class="container">
							<ul class="nav primary clone-main-menu" id="mercado_main" data-menuname="Main menu" >
								<li class="menu-item home-icon">
									<a href="/" class="link-term mercado-item-title"><i class="fa fa-home" aria-hidden="true"></i></a>
								</li>
								<li class="menu-item">
                                   <Link to="about" class="link-term mercado-item-title" >About Us </Link>
								
								</li>
								<li class="menu-item">
                                    <Link to="shop" class="link-term mercado-item-title" >Shop </Link>
							
								</li>
								<li class="menu-item">
                                    <Link to="cart" class="link-term mercado-item-title" >Cart </Link>
								
								</li>
								<li class="menu-item">
                                    <Link to="checkout" class="link-term mercado-item-title" >Checkout</Link>
								</li>
								<li class="menu-item">
                                   <Link to="contact" class="link-term mercado-item-title" >Contact </Link>
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