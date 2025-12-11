import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
export default function ShoppingCart({onShow, cart, isOpen}){




    return(
        <motion.div
           initial={{ opacity: 0 }}
  animate={{  opacity: 1 }}
  transition={{ duration: 0.7}}
  exit={{opacity:0}}
 
>
       
       <div className= "shoppingcart">

      {cart.length === 0 ? 
      ( <h1>No Item has added</h1>) 
      :(
        <>
     <h1>Cart Items : {cart.length}</h1>
      {cart.map((item, index) => (
        <div style={{ display:'flex', alignItems:'center'}} key={index}><img src={item.url} width='100px' alt="img" /> <span>{item.name} ${item.price}</span></div>
      ))}
</>
      )}
    

    

        </div>
        
        </motion.div>
    )
}


