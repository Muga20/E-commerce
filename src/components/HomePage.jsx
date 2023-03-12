import React from 'react'
import imageOne from '../assets/images/main-slider-1-1.jpg'
import imageTwo from '../assets/images/main-slider-1-3.jpg'
import imageThree from '../assets/images/home-1-banner-1.jpg'
import imageFour from '../assets/images/home-1-banner-2.jpg'
import imageFive from '../assets/images/home-1-banner-1.jpg'
import imageSix from '../assets/images/home-1-banner-1.jpg'
import imageSeven from '../assets/images/home-1-banner-1.jpg'
import imageEight from '../assets/images/home-1-banner-1.jpg'
import imageNine from '../assets/images/home-1-banner-1.jpg'
import imageTen from '../assets/images/home-1-banner-1.jpg'


function HomePage() {
  return (
    <div>
    <main id="main">
		<div class="container">

			<div class="wrap-main-slide">
				<div class="slide-carousel owl-carousel style-nav-1" data-items="1" data-loop="1" data-nav="true" data-dots="false">
					<div class="item-slide">
						<img src={imageOne} alt="" class="img-slide"/>
						<div class="slide-info slide-1">
							<h2 class="f-title">Kid Smart <b>Watches</b></h2>
							<span class="subtitle">Compra todos tus productos Smart por internet.</span>
							<p class="sale-info">Only price: <span class="price">$59.99</span></p>
							<a href="#" class="btn-link">Shop Now</a>
						</div>
					</div>
					<div class="item-slide">
						<img src={imageFour}alt="" class="img-slide"/>
						<div class="slide-info slide-2">
							<h2 class="f-title">Extra 25% Off</h2>
							<span class="f-subtitle">On online payments</span>
							<p class="discount-code">Use Code: #FA6868</p>
							<h4 class="s-title">Get Free</h4>
							<p class="s-subtitle">TRansparent Bra Straps</p>
						</div>
					</div>
					<div class="item-slide">
						<img src={imageTwo} alt="" class="img-slide"/>
						<div class="slide-info slide-3">
							<h2 class="f-title">Great Range of <b>Exclusive Furniture Packages</b></h2>
							<span class="f-subtitle">Exclusive Furniture Packages to Suit every need.</span>
							<p class="sale-info">Stating at: <b class="price">$225.00</b></p>
							<a href="#" class="btn-link">Shop Now</a>
						</div>
					</div>
				</div>
			</div>

			<div class="wrap-banner style-twin-default">
				<div class="banner-item">
					<a href="#" class="link-banner banner-effect-1">
						<figure><img src={imageThree} alt="" style={{width:'580px', height:'190px'}}/></figure>
					</a>
				</div>
				<div class="banner-item">
					<a href="#" class="link-banner banner-effect-1">
						<figure><img src={imageFour} alt="" style={{width:'580px', height:'190px'}}/></figure>
					</a>
				</div>
			</div>

			<div class="wrap-show-advance-info-box style-1 has-countdown">
				<h3 class="title-box">On Sale</h3>
				<div class="wrap-countdown mercado-countdown" data-expire="2020/12/12 12:34:56"></div>
				<div class="wrap-products slide-carousel owl-carousel style-nav-1 equal-container d-flex">
					<div class="product product-style-2 equal-elem ">
						<div class="product-thumnail">
							<a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
								<figure><img src={imageFour} style={{width:"290px",height:"200px",borderRadius:'5px'}} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
							</a>
							<div class="group-flash">
								<span class="flash-item sale-label">sale</span>
							</div>
							<div class="wrap-btn">
								<a href="#" class="function-link">quick view</a>
							</div>
						</div>
						<div class="product-info">
							<a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
							<div class="wrap-price"><span class="product-price">$250.00</span></div>
						</div>
					</div>

					<div class="product product-style-2 equal-elem ">
						<div class="product-thumnail">
							<a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
								<figure><img src={imageFour} style={{width:"290px",height:"200px",borderRadius:'5px'}}  alt=""/></figure>
							</a>
							<div class="group-flash">
								<span class="flash-item sale-label">sale</span>
							</div>
							<div class="wrap-btn">
								<a href="#" class="function-link">quick view</a>
							</div>
						</div>
						<div class="product-info">
							<a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
							<div class="wrap-price"><ins><p class="product-price">$168.00</p></ins> <del><p class="product-price">$250.00</p></del></div>
						</div>
					</div>

					<div class="product product-style-2 equal-elem ">
						<div class="product-thumnail">
							<a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
								<figure><img src={imageFour} style={{width:"290px",height:"200px",borderRadius:'5px'}}   alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
							</a>
							<div class="group-flash">
								<span class="flash-item sale-label">sale</span>
							</div>
							<div class="wrap-btn">
								<a href="#" class="function-link">quick view</a>
							</div>
						</div>
						<div class="product-info">
							<a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
							<div class="wrap-price"><span class="product-price">$250.00</span></div>
						</div>
					</div>

					<div class="product product-style-2 equal-elem ">
						<div class="product-thumnail">
							<a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
								<figure><img src={imageFour} style={{width:"290px",height:"200px",borderRadius:'5px'}}   alt=""/></figure>
							</a>
							<div class="group-flash">
								<span class="flash-item sale-label">sale</span>
							</div>
							<div class="wrap-btn">
								<a href="#" class="function-link">quick view</a>
							</div>
						</div>
						<div class="product-info">
							<a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
							<div class="wrap-price"><ins><p class="product-price">$168.00</p></ins> <del><p class="product-price">$250.00</p></del></div>
						</div>
					</div>

				</div>
			</div>

      <div class="wrap-show-advance-info-box style-1">
      <h3 class="title-box">Latest Products</h3>
      <div class="wrap-top-banner">
        <a href="#" class="link-banner banner-effect-2">
          <figure><img src={imageTwo} style={{ width:"1170px",height:"240px"}} alt=""/></figure>
        </a>
      </div>
      <div class="wrap-products">
        <div class="wrap-product-tab tab-style-1">						
          <div class="tab-contents">
            <div class="tab-content-item active" id="digital_1a">
              <div class="wrap-products slide-carousel owl-carousel style-nav-1 equal-container d-flex" >

                <div class="product product-style-2 equal-elem ">
                  <div class="product-thumnail">
                    <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                      <figure><img src={imageFour} style={{width:"290px",height:"200px",borderRadius:'5px'}} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
                    </a>
                    <div class="group-flash">
                      <span class="flash-item new-label">new</span>
                    </div>
                    <div class="wrap-btn">
                      <a href="#" class="function-link">quick view</a>
                    </div>
                  </div>
                  <div class="product-info">
                    <a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                    <div class="wrap-price"><span class="product-price">$250.00</span></div>
                  </div>
                </div>

                <div class="product product-style-2 equal-elem ">
                  <div class="product-thumnail">
                    <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                      <figure><img src={imageFour} style={{width:"290px",height:"200px",borderRadius:'5px'}} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
                    </a>
                    <div class="group-flash">
                      <span class="flash-item sale-label">sale</span>
                    </div>
                    <div class="wrap-btn">
                      <a href="#" class="function-link">quick view</a>
                    </div>
                  </div>
                  <div class="product-info">
                    <a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                    <div class="wrap-price"><ins><p class="product-price">$168.00</p></ins> <del><p class="product-price">$250.00</p></del></div>
                  </div>
                </div>

                <div class="product product-style-2 equal-elem ">
                  <div class="product-thumnail">
                    <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                      <figure><img src={imageFour} style={{width:"290px",height:"200px",borderRadius:'5px'}} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
                    </a>
                    <div class="group-flash">
                      <span class="flash-item new-label">new</span>
                      <span class="flash-item sale-label">sale</span>
                    </div>
                    <div class="wrap-btn">
                      <a href="#" class="function-link">quick view</a>
                    </div>
                  </div>
                  <div class="product-info">
                    <a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                    <div class="wrap-price"><ins><p class="product-price">$168.00</p></ins> <del><p class="product-price">$250.00</p></del></div>
                  </div>
                </div>

                <div class="product product-style-2 equal-elem ">
                  <div class="product-thumnail">
                    <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                      <figure><img src={imageFour} style={{width:"290px",height:"200px",borderRadius:'5px'}} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
                    </a>
                    <div class="group-flash">
                      <span class="flash-item bestseller-label">Bestseller</span>
                    </div>
                    <div class="wrap-btn">
                      <a href="#" class="function-link">quick view</a>
                    </div>
                  </div>
                  <div class="product-info">
                    <a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                    <div class="wrap-price"><span class="product-price">$250.00</span></div>
                  </div>
                </div>


              </div>
            </div>							
          </div>
        </div>
      </div>
    </div>

		</div>

	</main>
    
    
    
    </div>
  )
}

export default HomePage