export const ADD = (item) =>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

//Delete

export const RMV = (id) =>{
    return{
        type:"RMV_CART",
        payload:id
    }
}

//Remove individual item

export const REMOVE = (item) =>{
    return{
        type:"RMV_ONE",
        payload:item
    }
}