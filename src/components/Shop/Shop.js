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
// ঊপরের এবং নিচের দুইটা useEffect() এসিংক্রোনাস যার ফলে একসাথে এক্সিকিউট হচ্ছে এবং 
// নিচের টা উপরেরটার জন্য অপেক্ষা করছে না। তাই উপরের useEffect ডাটাকে লোড করে products
// এর ভিতরে পাঠানোর আগে নিচে ফাংশন এক্সিকিউট হয়ে যাচ্ছে ফরে নিচের useEffect প্রথমবার 
// if এর ভিতর products এর length কে ০ পায় এবং ডিপেন্ডেন্সি আবার সেটাকে লোড করার কারনে
// পরের বার প্রোডাক্টস এর লেন্থ পায় এবং if এর ভিতরে ঢুকে এক্সিকিউট করে।
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