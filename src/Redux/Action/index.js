
//add to cart
export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}


//delete cart
export const DelCart=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}

