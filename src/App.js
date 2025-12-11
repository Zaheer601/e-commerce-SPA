import { useState, useEffect, } from "react";


import { motion } from "motion/react";
import  './App.css';
import EcomHero from "./MyComponents/ecomHero";
import ProductsPage from './MyComponents/ProductsPage';
import ShoppingCart from "./MyComponents/shoppingCart";
import ProductCTA from "./MyComponents/ProductCTA";
import Footer from "./MyComponents/Footer";



function App() {
 

  const [scroll, setScroll] = useState(false);
  const [cart, setCart] = useState([]);
  const [isOpen ,setIsopen] = useState(false);


  const addToCart = (item) => {
    setCart([...cart, item]);
  };

function showCart(){
  setIsopen(!isOpen);
}

// function showSingleproductpage(){
//   setIssingleproductpage(!issingleproductpage);
// }


useEffect(()=>{
  const handleScroll = () => {
    if(window.scrollY > 0){
      setScroll(true);
    }else{
      setScroll(false)
    }
  }
  window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll' , handleScroll)
}, [])


function Navbar(){

   return (
   <div className= {`${scroll ? 'stickyNav' : 'defaultNav'}`} style={{
    backgroundColor:' #031423', 
    width:'100%',
    height:'12vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',

    boxSizing:'border-box',
   padding:'20px 90px',
    position:'sticky',
    top:'0px',
    zIndex:1000,
     transition: 'backgroundColor 0.7s ease -in',
    
         
   }}>
    <img src="../assets/logo.svg" alt="" style={{width:'60px'}}></img>
    <div style={{display:'flex', gap:'8px'}}>
    <img src="../assets/cart.svg" style={{width:'60px', cursor:'pointer'}} alt="" onClick={showCart}></img>
    <a><span style={{fontSize:'28px', color:'orange',}} >{cart.length}</span></a>
    </div>
   </div>
   )
}





  return (
    <>
     <div className="app">
   
         <Navbar />
          <EcomHero />
            <ProductsPage cart={cart} setCart={setCart} addToCart={addToCart} />
         {isOpen && <ShoppingCart cart={cart} onShow={showCart} isOpen={isOpen}/>}
            <ProductCTA />
         <Footer />
  


    

  </div>
    </>
  );
}

export default App;
