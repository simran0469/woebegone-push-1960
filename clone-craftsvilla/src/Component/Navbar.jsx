import styled from '@emotion/styled'
import { Link } from "react-router-dom"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';


function Navbar() {

    const links = [
        { to: "/login", title: "SignIn/Register" }]
    const linkss = [{ to: "/cart", title: "Cart" }]
    const linkes = [{ to: "/fashion", title: "Fashion" }]
    return (
        <DIV>
            <div>
                <hr className="horizontal" />
                <h4 className="logo" >GET Rs 50 OFF ON ORDERS ABOVE Rs100 </h4>
                <hr className="horizontal" />
                <div className="box1" >
                    <div><Link style={{ textDecoration: "none" }} to="/"><h2 className="logo2">CraftsVilla</h2></Link></div>
                    <div>   <input placeholder="Search here for products" className="input" /></div>
                    <div > {links.map((item) => (
                        <Link style={{ textDecoration: "none" }} key={item.to} to={item.to}
                        >{item.title}</Link>
                    ))}
                    </div>
                    <div>
                        {linkss.map((item) => (
                            <Link style={{ textDecoration: "none" }} key={item.to} to={item.to}> {item.title}  </Link>
                        ))}
                    </div>
                </div>
                <div className="box2">
                    <div>
                        {linkes.map((item) => (
                            <Link className="nav2" key={item.to} to={item.to}>{item.title}</Link>
                        ))}
                    </div>
                    <div><Link style={{ textDecoration: "none" }} to="/fashion"><h4 className="headline">Stores Near Me</h4></Link></div>
                    <div> <Link style={{ textDecoration: "none" }} to="/fashion"><h4 className="headline">Product Near Me</h4></Link></div>
                    <div> <Link style={{ textDecoration: "none" }} to="/fashion"><h4 className="headline">Beauty & Parlour Care</h4></Link></div>
                    <div> <Link style={{ textDecoration: "none" }} to="/fashion"><h4 className="headline">Electronics</h4></Link></div>
                </div>

            </div>
        </DIV>
    )
}
const DIV = styled.div`
@media (min-width:400px) and (max-width:800px){
    .box2{
        display:grid;
        grid-template-columns:repeat(3,1fr);
    }
}
@media (min-width:0px) and (max-width:400px){
    .box2{
        display:grid;
        grid-template-columns:repeat(2,1fr);
    }
} 
@media (min-width:0px) and (max-width:800px){
    .box1{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        
    }
}




`
export default Navbar