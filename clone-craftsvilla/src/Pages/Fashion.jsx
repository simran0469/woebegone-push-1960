import React from 'react';
import FashionList from '../Component/FashionList';
import Sidebar from '../Component/Sidebar';
import "./Fashion.css"
import styled from 'styled-components';
import {Navigate} from "react-router-dom"
const isAuth=false
const Fashion = () => {
  if(!isAuth){
    return <Navigate to="/Login"/>
  }
  return (
    <DIV>
    <div className='product' >
      <div>
        <Sidebar/>
      </div>
      <div>
        <FashionList/>
      </div>
    </div>
    </DIV>
  );
}
const DIV=styled.div
`@media (min-width:0px) and (max-width:800px){
  .product{
      display:grid;
      grid-template-columns:repeat(1,1fr)
  }
}

`

export default Fashion;