import React from 'react'

function Checkout() {
  return (
    <div class="container">
      <div class="row justify-content-center">
          <div class="col-xl-7 ftco-animate">
            <div class="row">
                <div class=" main-content-area">
                    <div class="wrap-contacts ">
                        <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                            <div class="contact-box contact-form">
                                <h2 class="box-title">Billing Details</h2>
                                <form action="#" method="get" name="frm-contact">
                                    <label for="name">Shipping Address<span>*</span></label>
                                    <input type="text" value="" id="name" name="name"/>

                                    <label for="phone">Number Phone<span>*</span></label>
                                    <input type="text" value="" id="phone" name="phone" />     

                                    <input type="submit" name="ok" value="Submit" /> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          <div class="col-xl-5">
            <div class="row">
                <div class="col-md-12 d-flex">
                    <div class="cart-detail cart-total p-3">
                        <h3 class="billing-heading mb-4">Cart Total</h3>

                         <p class="d-flex">
                             <span>Delivery</span>
                             <span>$0.00</span>
                         </p>
                        <hr/>
                        <p class="d-flex total-price">
                            <span>Total</span>
                            <span>$17.60</span>
                      </p>
                    </div>
               </div>
            </div>
         </div> 
      </div>
    </div>
  )
}

export default Checkout