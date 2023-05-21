import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { RMV, ADD, REMOVE } from "../Redux/Cart/action";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [price, setPrice] = useState(0);
  console.log(price);
  const getData = useSelector((state) => state.cartReducer.cart);
  // console.log(getData)

  //To Delete
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const dlt = (id) => {
    dispatch(RMV(id));
  };

  //add Data
  const send = (el) => {
    dispatch(ADD(el));
  };

  //Remove Data

  const remove = (Item) => {
    dispatch(REMOVE(Item));
  };

  //Place Order

  const handleBuy = () =>{
    alert("Your order is Successfully Placed")
    navigate("/")
  }

  //Price
  const total = () => {
    let price = 0;
    getData.map((el, k) => {
      price = el.price * el.quantity + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <DIV>
      <div className="card1">
        <div className="cart">
          <hr />
          <div className="head1">
            <h2>Item Details</h2>
            <h2>Quantity</h2>
            <h2>MRP</h2>
          </div>
          <hr />
          {getData.map((el) => {
            return (
              <div
                key={el.id}
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <img width="10%" src={el.image} alt="" />
                <div>
                  <h4>{el.title}</h4>
                  <button  style={{border:"none",backgroundColor:" #B71C1C" , color:"white",padding:"10px"}} onClick={() => dlt(el.id)}>Remove</button>
                </div>
                <div className="qty">
                  <div className="qtyBtn">
                    <button
                      onClick={
                        el.quantity <= 1 ? () => dlt(el.id) : () => remove(el)
                      }
                    >
                      -
                    </button>
                    <span>{el.quantity}</span>
                    <button onClick={() => send(el)}>+</button>
                  </div>
                  <div style={{ marginLeft: "200px" }}>
                    ₹{el.price * el.quantity}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h2>PRICE DETAILS</h2>
          <div>
            <h4 style={{ color: "gray" }}>
              TotalMRP : <span>{price}</span>{" "}
            </h4>
          </div>
          <div>
            <h4>
              Subtotal : <span>{price}</span>{" "}
            </h4>
          </div>
          <button className="buy" onClick={handleBuy} >Place Order</button>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
@media (min-width: 0px) and (max-width: 600px) {
  .qtyBtn{
    display:flex;
    align-items:center;
    margin-left:30px
  }
  
  .card1{
    display:grid;
    grid-template-columns:repeat(1,1fr)
  }
}

`

export default Cart