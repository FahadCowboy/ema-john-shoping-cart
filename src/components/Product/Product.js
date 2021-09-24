import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = props => {
   const {name, img, seller, price, stock, star} = props.product
   const element = <FontAwesomeIcon icon={faShoppingCart} />

   return (
      <div className="single-product">
         <div className="product-image-container">
            <img src={img} alt="" />
         </div>
         <div className="product-details-container">
            <div>
               <h2 style={{fontWeight: 400, fontSize: '1.3rem', color: 'blue', padding: "20px 0",}}>{name}</h2>
            </div>
            <div className="bottom-part">
               <div>
                  <p style={{marginBottom: '20px'}}>By {seller}</p>
                  <h3 style={{fontWeight: 600, marginBottom: '10px'}}>${price}</h3>
                  <p style={{marginBottom: '10px'}}>Only {stock} is left in stock, hurry up!</p>
                  <button onClick={() => props.handleAddToCart(props.product)} className="addToCart-btn">{element} Add to cart</button>
               </div>

               <div>
                  <div></div>
                  <h3>Features</h3>
                  <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Product;