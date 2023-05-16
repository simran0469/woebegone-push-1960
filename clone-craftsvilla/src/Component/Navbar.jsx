import { Link } from "react-router-dom"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';


function Navbar() {

    const links = [
       
        {
            to: "/login", title: "SignIn/Register"
        },
        { to: "/cart", title:"Cart" }]
    const linkes=[{to:"/fashion",title:"Fashion"}]
    return (
        <div>
            <hr className="horizontal" />
             <h4 className="logo" >GET Rs 50 OFF ON ORDERS ABOVE Rs100 </h4>
            <hr  className="horizontal"/>
            <div className="box1" >
                <Link style={{textDecoration:"none"}} to="/"><h2 className="logo2">CraftsVilla</h2></Link>
                <input placeholder="Search here for products" className="input" />
                {links.map((item) => (
                    <Link className="nav" key={item.to} to={item.to} 
                >{item.title}</Link>
                ))}
            </div>
            <div className="box2">
          {linkes.map((item)=>(
         <Link  className="nav2" key={item.to} to={item.to}>{item.title}</Link>
          ))}

          <Link style={{textDecoration:"none"}} to="/fashion"><h4 className="headline">Stores Near Me</h4></Link>
          <Link style={{textDecoration:"none"}} to="/fashion"><h4 className="headline">Product Near Me</h4></Link>
         <Link style={{textDecoration:"none"}} to="/fashion"><h4 className="headline">Beauty & Parlour Care</h4></Link>
         <Link style={{textDecoration:"none"}} to="/fashion"><h4 className="headline">Electronics</h4></Link>
          </div>
          
        </div>
    )
}
export default Navbar