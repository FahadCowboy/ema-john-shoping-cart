const addToDb = id => {
   let shopingCart = {}
   const doesExist = window.localStorage.getItem('shopingCart')
   
   if(doesExist){
      
      shopingCart = JSON.parse(doesExist)
      if(shopingCart[id]){
         const newCount = shopingCart[id] + 1
         shopingCart[id] = newCount
         console.log(shopingCart)
      } else{
         shopingCart[id] = 1
      }
   } else{
      shopingCart[id] = 1
      
   }

   window.localStorage.setItem('shopingCart', JSON.stringify(shopingCart))
}
export {addToDb}