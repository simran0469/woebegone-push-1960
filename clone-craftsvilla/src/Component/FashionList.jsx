import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux"
import { getProducts } from '../Redux/Products/action';
import FashionCard from './FashionCard';
// import styles from "../Styles/ProductList.module.css"
import styled from 'styled-components';
import "./FashionList.css"
import { useLocation, useSearchParams } from 'react-router-dom';

const FashionList = () => {
    const dispatch = useDispatch();
    const products = useSelector((store)=>store.productReducer.products)
    const location = useLocation();
    const [searchParams] = useSearchParams()
    

    useEffect(() => {
      const order = searchParams.get("order")
      let paramObj = {
        params:{
          category:searchParams.getAll("category"),
          _sort:order && "price",
          _order:order,
        }
      }
      dispatch(getProducts(paramObj))
    }, [location.search]);

  return (
     <DIV >
      <div className="wrap">
      {products.length>0 && products.map((el)=>{
        return <FashionCard key={el.id} product={el}/>
      })}
      </div>
    </DIV>
  );
}

const DIV=styled.div
`@media (min-width:400px) and (max-width:800px){
  .wrap{
      display:grid;
      grid-template-columns:repeat(2,1fr)
  }
}
@media (min-width:0px) and (max-width:400px){
  .wrap{
      display:grid;
      grid-template-columns:repeat(1,1fr)
  }
}
`

export default FashionList;