import { motion, AnimatePresence } from "motion/react"
export default function EcomHero(){

    return(
        <>
        <motion.div
        initial={{ y:-100, opacity:0 }}
        animate={{ y:0, opacity:1}}
transition={{duration:2}}
> 
    <div className="ecomhero" style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0px 80px',
        width:'100%',
        boxSizing:'border-box',
        alignItems:'center',
        height:'100vh',

        boxShadow: '5px 5px 10px #88888840',
            
     
    }}>
       
   <div className="herocontent" style={{ width:'50%'}}><h1>SHOP WITH QUALITY</h1>
   <button className="shopbtn" style={{backgroundColor:'#031423', color:'ghostwhite', padding:'20px 80px', fontFamily:'sans-serif', fontSize:'18px', fontWeight:600, borderRadius:'5px', border:'1px solid #031423'}}>Shop Now</button>
   </div>
   <div className="heroimage" style={{width:'50%', overflow:'hidden', boxSizing:'border-box',}}>
    <img src="../assets/shoeshero.jpg" style={{width:'105%',}} alt="heroimg"/>
   </div>

   </div>
   </motion.div>
    </>
        
   
    )
}