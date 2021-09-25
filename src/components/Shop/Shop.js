import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
   const [products, setProducts] = useState([])
   const [cart, setCart] = useState([])

   useEffect(() => {
      fetch('./products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
   },[])

   useEffect(()=>{
      const storedCart = getStoredCart()
      const storedProductToShowInUI = []
      if(products.length){
         for(const key in storedCart){
            const storedCartData = products.find(eachProduct => key === eachProduct.key)
            storedProductToShowInUI.push(storedCartData)
         }
      }
      setCart(storedProductToShowInUI)
   }, [products])

   const handleAddToCart = product => {
      const newCart = [...cart, product]
      setCart(newCart)
      addToDb(product.key)
      console.log(product)
   }

   return (
      <main className="container">
         <div className="shop-and-cart">
            <div className="product-container">
               {
                  products.map(product => <Product 
                     key={product.key}
                     product={product}
                     handleAddToCart={handleAddToCart}
                     ></Product>)
               }
            </div>

            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
         </div>
      </main>
   );
};

export default Shop;