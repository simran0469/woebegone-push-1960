import React from 'react';
//import "./FashionCard.css"
// import { Link } from 'react-router-dom';


const FashionCard = ({product}) => {
  return (
    // <Link to={`/products/${product.id}`}>
    <div >
    <div style={{ width:"100%",textAlign:"center",padding:"0px 30px 10px 30px",margin:"20px 20px 20px 20px"}}>
      <img src={product.image} alt="product-image" width="100%" />
      <h4>{product.title}</h4>
      <p><b>Category</b>: {product.category}</p>
      <p><b>Price</b>: Rs {product.price}</p>
      <button style={{borderRadius:"5px",backgroundColor:"#C62828",padding:"10px 10px 10px 10px",color:"white",border:"none"}}>Add To cart</button>
    </div>
  </div>
  );
}

export default FashionCard;