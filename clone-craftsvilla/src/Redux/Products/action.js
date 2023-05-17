import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"
import axios from "axios"

export const getProductsRequestAction = () =>{
    return {type:GET_PRODUCTS_REQUEST}
}

export const getProductsSuccessAction = (payload) =>{
    return {type:GET_PRODUCTS_SUCCESS,payload}
}

export const getProductsFailureAction = () =>{
    return {type:GET_PRODUCTS_FAILURE}
}

export const getProducts =(params={}) => (dispatch) =>{
    dispatch(getProductsRequestAction())
    axios.get("https://weak-teal-indri-boot.cyclic.app/Fashion",params)
    .then((res)=>{
        // console.log(res.data)
        dispatch(getProductsSuccessAction(res.data))
    })
    .catch((err)=>{
        dispatch(getProductsFailureAction())
    })
}