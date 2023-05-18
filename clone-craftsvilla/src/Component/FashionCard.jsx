import React from 'react';
//import "./FashionCard.css"
// import { Link } from 'react-router-dom';


const FashionCard = ({product}) => {
  return (
    // <Link to={`/products/${product.id}`}>
    <div >
    <div style={{textAlign:"center",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",margin:"20px 20px 20px 20px",padding:"10px 10px 10px 10px"}}>
      <img src={product.image} alt="product-image" width="80%" />
      <h4>{product.title}</h4>
      <p><b>Category</b>: {product.category}</p>
      <p><b>Price</b>: Rs {product.price}</p>
      <button style={{borderRadius:"5px",backgroundColor:"#C62828",padding:"10px 10px 10px 10px",color:"white",border:"none"}}>Add To cart</button>
    </div>
  </div>
  );
}

export default FashionCard;