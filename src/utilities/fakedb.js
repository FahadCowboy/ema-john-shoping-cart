const getDB = () => window.localStorage.getItem('shopingCart')

const getStoredCart = () => {
   const doesExist = getDB()
   return doesExist ? JSON.parse(doesExist) : {}
}

const removeStoredCart = () => {
   window.localStorage.removeItem('shopingCart')
}



const addToDb = id => {
   let shopingCart = {}
   const doesExist = getDB()
   
   if(doesExist){
      
      shopingCart = JSON.parse(doesExist)
      if(shopingCart[id]){
         const newCount = shopingCart[id] + 1
         shopingCart[id] = newCount
         // console.log(shopingCart)
      } else{
         shopingCart[id] = 1
      }
   } else{
      shopingCart[id] = 1
      
   }

   window.localStorage.setItem('shopingCart', JSON.stringify(shopingCart))
}





export {addToDb, getStoredCart, removeStoredCart}