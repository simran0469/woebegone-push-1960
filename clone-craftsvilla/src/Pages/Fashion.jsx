import './Fashion.css'
import { useState,useEffect } from "react"
const getdata=(url)=>{
    return fetch(url).then((res)=>res.json())
}
function Fashion(){
   
    const[err,seterr]=useState(false)
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetchdata()
    })
    const fetchdata=async()=>{
        try {
            
            seterr(false)
            let data=await getdata(`https://weak-teal-indri-boot.cyclic.app/Fashion`)
            setdata(data)
            
        } catch (err) {
          seterr(true)
         
        }
    }
    
    
     if(err){
        return <h1>Something went wrong..</h1>
     }
    return(
        <div>
           <button className='sort' >High to Low</button><button className='sort'>Low to High</button>
           <div className='main'>
            <div >
                <h2>Category</h2>
                <input type="checkbox" name="" id="" /> Silk Saree <br/>
                <input type="checkbox" name="" id="" /> Velvet Saree<br/>
                <input type="checkbox" name="" id="" /> Banarasi Saree <br/>
                <input type="checkbox" name="" id="" /> Georgette Saree <br/>
            </div>
        <div className="product">
           {data.map((item)=>(
            <div style={{border:"1px solid gray"}} key={item.id}>
                <img width="200px" src={item.image} alt="not loading" />
                <h2>{item.title}</h2>
                <h2>Rs {item.price}</h2>
                <button>Add to cart</button>
            </div>
           ))}
        </div>
        </div>
        </div>
    )
}
export default Fashion