import React, { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
   const [searchParams,setSearchParams] = useSearchParams();
   const initialState = searchParams.getAll("category")
   const initialOrder = searchParams.get("order")
   const [category,setCategory] = useState(initialState||[])
   const [order,setOrder] = useState(initialOrder||"")
  //  console.log(order)


   const handleFilter = (e) =>{
    let newCategory = [...category]
    let value = e.target.value;
      // If a user changes any category it should be stored in state.
      // If the category is already present pop out of the state.
      if(newCategory.includes(e.target.value)){
          //filter
          //splice
        newCategory.filter((el)=>el!== value)
        newCategory.splice(newCategory.indexOf(value),1)
      }else{
        newCategory.push(value)
      }
      setCategory(newCategory);
   }
   const handleSort = (e) =>{
    setOrder(e.target.value)
   }
   useEffect(() => {
     const params = {
        category
     }
     order && (params.order = order)
     setSearchParams(params)
   }, [category,order]);

  return (
    <div style={{marginLeft:"30px"
    }}>
        <h2 style={{marginTop:"50px"}}>Filter By</h2>
      <div>
        <input  type="checkbox" value="Silk Saree" onChange={handleFilter} checked={category.includes("Silk Saree")}/>
        <label>Silk Saree</label>
      </div>
      <div>
        <input type="checkbox" value="Georgette Saree" onChange={handleFilter} checked={category.includes("Georgette Saree")}/>
        <label>Georgette Saree</label>
      </div>
      <div>
        <input type="checkbox" value="Velvet Saree"  onChange={handleFilter} checked={category.includes("Velvet Saree")}/>
        <label>Velvet Saree</label>
      </div>
      <div>
        <input type="checkbox" value="Banarasi Saree"  onChange={handleFilter} checked={category.includes("Banarasi Saree")}/>
        <label>Banarasi Saree</label>
      </div>
      <h2>Sort By Order</h2>
      <div onChange={handleSort}>
        <input type="radio" name='sort_by' value={"asc"}/>
        <label>Ascending</label><br/>
        <input type="radio" name='sort_by' value={"desc"}/>
        <label>Descending</label>
      </div>
    </div>
  );
}

export default Sidebar;