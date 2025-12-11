


const ProductCard = ({ product, addToCart, }) => {
  return (
    <div className="product-card" style={{textAlign:'center'}} >
      <img src={product.url} alt={product.name} width="400px" />
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <h5> Get at {product.price}$</h5>

      <button onClick={() => addToCart(product)} style={{backgroundColor:'#031423', padding:'16px 60px', color:'ghostwhite', borderRadius:'100px', fontFamily:'sans-serif', fontSize:'16px'}}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;