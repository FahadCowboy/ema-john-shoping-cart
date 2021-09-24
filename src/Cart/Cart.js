import React from 'react';
import './Cart.css'

const Cart = props => {
   const {cart} = props
   const initialTotal = cart.reduce((accu, cart) => accu + cart.price,0)
   const shiping = 50
   const tax = initialTotal / 100 * 10
   console.log(typeof initialTotal, typeof shiping, typeof tax)
   const total = initialTotal+shiping+tax
   console.log(total)
   return (
      <div>
         <div className="cart-header">
            <h2>Order Summary</h2>
            <p style={{fontSize: "1.2rem"}}>Items Ordered: {props.cart.length}</p>
         </div>
         <div className="cart-body">
            <div>
               <div className="table-row">
                  <p colSpan="2">Only price:</p>
                  <p>${initialTotal.toFixed(2)}</p>
               </div>
            
               <div className="table-row">
                  <p>Shiping & Handling:</p>
                  <p>${shiping}</p>
               </div>
            
               <div className="table-row">
                  <p>Tax:</p>
                  <p>${tax.toFixed(2)}</p>
               </div>
            
               <div className="table-row total">
                  <p>Total:</p>
                  <p>${total.toFixed(2)}</p>
               </div>
            </div>
         </div>
         <div className="cart-footer">
            <button className="cart-button">Review your order</button>
         </div>
      </div>
   );
};

export default Cart;