import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';
import Fashion from '../Pages/Fashion';
import PrivateRoute from './PrivateRoute';

function AllRoutes(){
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/fashion" element={
            <PrivateRoute>
           <Fashion/>
           </PrivateRoute>
        }/>
        </Routes>
        
   
    )
}
export default AllRoutes