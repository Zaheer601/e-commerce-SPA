import React, { useState } from "react";

import { products } from "./products";
import ProductCard from "./ProductCard";


const ProductsPage = ({cart , setCart, addToCart,}) => {
 




  return (
    <div className="ProductSection" style={{paddingTop:'60px'}}>
      <h1 style={{marginLeft:'100px', fontSize:'50px', fontWeight:'800'}}>Featured Products</h1>

      <div className="products-list" >
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}
           
          />
        
        ))}
       {/* {issingleproductpage && <SingleProductpage issingleproductpage={issingleproductpage} onShow={showSingleproductpage} />} */}
      </div>

      <hr />

        
    

  
     
    </div>

  );
};

export default ProductsPage;