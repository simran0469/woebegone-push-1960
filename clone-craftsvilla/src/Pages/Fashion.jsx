import React from 'react';
import FashionList from '../Component/FashionList';
import Sidebar from '../Component/Sidebar';
import "./Fashion.css"
import styled from 'styled-components';
// import {Navigate} from "react-router-dom"
// import { useContext } from 'react';
// import {AuthContext} from "../Component/Context/AuthContextProvider"
const Fashion = () => {
  // const {IsAuth}=useContext(AuthContext)
  // if(!IsAuth){
    
  //   return <Navigate to="/Login"/>
  // }
  
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