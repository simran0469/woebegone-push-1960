import { useContext } from "react";
import { AuthContext } from "../Component/context/AuthContextProvider";
import styled from 'styled-components';
import "./Login.css"
function Login() {
  const { IsAuth, login } = useContext(AuthContext);
  return (
    <DIV>
    <div>
        <h1 className="logo3">CraftsVilla</h1>
    <div className="login">
        
        <div>
            <h2>BENEFITS</h2>
            <img width="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAcA69aQFC7pjd_M8cVMkDojoWdYWQliisg&usqp=CAU" alt="not loaded" />
             <p><b>Manage Orders</b></p>
             <p>Track, Return & Cancel your orders</p>
            <img width="30px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Xz2jtstC_8xTLTyQc50w_BIUApDPcmcZXg&usqp=CAU" alt="not loaded" />
           <p><b>Access Products that you love</b></p>
           <p>Seamless access to Wishlist & Cart items</p>
           <img width="60px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnLpcMqWR7yaT291y0fqIKQWOkzHm7pXv_crFEyq_OK6dVovJ_3n_0j8jBZyvaF7Vsy4U&usqp=CAU" alt="" />
          <p><b>Quicker Checkout</b></p> 
          <p>Saved Addresses & bank details for<br/> 3 step checkout</p>
        </div >
        <div style={{margintop:"20%"}}>
        
        <h1 className="loginheadline" >Login/SignUp</h1>
        <h4>{IsAuth ? "Login Successfully" : "Welcome To CraftVilla"}</h4>
        Email:<input  className="email" type="text"  /><br/>
        Password:<input className="password" type="password"/><br/>
          <button className="loginbtn" onClick={login}>Login</button>
        </div>
      
    </div>
    </div>
    </DIV>
  );
}
const DIV=styled.div
`@media (min-width:0px) and (max-width:800px){
  .login{
      display:grid;
      grid-template-columns:repeat(1,1fr)
  }
}

`
export default Login;