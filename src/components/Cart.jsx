import React from 'react'
import { MdDelete } from 'react-icons/md';

function Cart() {
  return (
    <div>
        <main id="main" class="main-site">
            <div class="container">
                <div class="wrap-breadcrumb">
                    <ul>
                        <li class="item-link"><a href="/" class="link">home</a></li>
                        <li class="item-link"><span>login</span></li>
                    </ul>
                </div>

                <div class=" main-content-area">
                    <div class="wrap-iten-in-cart">
                        <h3 class="box-title">Products Name</h3>
                        <ul class="products-cart">
                            <li class="pr-cart-item">
                                <div class="product-image">
                                    <figure><img src="src\assets\images\6258_06612808882815067_720.png.webp" alt=""/></figure>
                                </div>

                                <div class="product-name">
                                    <p class="link-to-product" href="#">Radiant-360 R6 Wireless Omnidirectional Speaker [White]</p>
                                </div>

                                <div class="price-field produtc-price"><p class="price">$256.00</p></div>

                                <div class="quantity">
                                    <div class="quantity-input">
                                        <button class="btn btn-increase" href="#">-</button>
                                        <input type="text" name="product-quatity" value="1" data-max="120" pattern="[0-9]*"/>									
                                        
                                        <button class="btn btn-reduce" href="#">+</button>
                                    </div>
                                </div>

                                <div class="price-field sub-total"><p class="price">$256.00</p></div>
                                
                                <div class="delete">
                                    <p  class="btn btn-delete" title="Delete from your cart">
                                        <i><MdDelete size="1.5em"/></i>
                                    </p>
                                </div>
                            </li>												
                        </ul>
                    </div>

                    <div class="summary">
                        <div class="order-summary">
                            <h4 class="title-box">Order Summary</h4>
                            <p class="summary-info"><span class="title">Shipping</span><b class="index">Free Shipping</b></p>
                            <p class="summary-info total-info "><span class="title">Total</span><b class="index">$512.00</b></p>
                        </div>
                        <div class="checkout-info">
                            <a class="btn btn-checkout" href="/Checkout">Check out</a>
                        </div>
                        <div class="update-clear">
                            <a class="btn btn-clear" href="#">Clear Shopping Cart</a>
                            <a class="btn btn-update" href="/shop">Continue Shopping</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Cart