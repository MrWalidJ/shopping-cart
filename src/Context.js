import React, { createContext, useState } from "react";
export const Cart = createContext();



const Context = ( {children} ) => {
    const [cart , setCart] = useState([]);// to pass these to other components by passing them as value 
    // inside the provider
  return <Cart.Provider value={{cart,setCart}}>{children}</Cart.Provider>;// children means whatever it's going to wrap around
  // it's going to take all of those children and render it inside of it
  // we go to index.js and wrap app with (Context), so cart,setCart will be accessible inside 
  // the whole of our application
};

export default Context; 
