import React from 'react';
import './Shop.css'

const Shop = () => {
   return (
      <main className="container">
         <div className="shop-and-cart">
            <div className="product-container">this is rab, khankir pola dorja khol.</div>
            <div className="cart-container">
               <div className="cart-header">
                  <h2>Order Summary</h2>
                  <p style={{fontSize: "1.2rem"}}>Items Ordered: 22</p>
               </div>
               <div className="cart-body">
                  <div>
                     <div className="table-row">
                        <p colSpan="2">items:</p>
                        <p>$0</p>
                     </div>
                  
                     <div className="table-row">
                        <p>Shiping & Handling:</p>
                        <p>$0</p>
                     </div>
                  
                     <div className="table-row">
                        <p>Total except tax:</p>
                        <p>$0</p>
                     </div>
                  
                     <div className="table-row">
                        <p>Including tax:</p>
                        <p>$0</p>
                     </div>
                  
                     <div className="table-row total">
                        <p>Total:</p>
                        <p>$0</p>
                     </div>
                  </div>
               </div>
               <div className="cart-footer">
                  <button className="cart-button">Review your order</button>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Shop;