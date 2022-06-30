import CartItem from "./CartItem";
import Total from "./Total";
import { useState } from "react";


const initData = [
    {
        id:1,
        product_name:"Noodles",
        qty:1,
        price:30,
    },
    {
        id:2,
        product_name:"Biryani",
        qty:2,
        price:90,
    },
    {
        id:3,
        product_name:"Chips",
        qty:3,
        price:10,
    },
]



function calculateTotal(products){
    // calculate total cost
   return products.reduce( (acc,c) => 
           acc+ (c.qty*c.price),0)
}



export default function CartContainer(){
    
    const [data,setData] = useState(initData);

    const handleChangeQty =(id,amount) =>{
         let updatedData = data.map( item =>{
            if(item.id === id){
                return {
                    ...item, qty: item.qty +amount
                }
            }
            else{
                return item;
            }
         })
         setData(updatedData)
    }



    return (
        <div>
            {/* body */}


            {/* list of products */}
            {data.map( item =>
                <CartItem 
                  key ={item.id}
                  id={item.id}
                  label={item.product_name} 
                  qty={item.qty} 
                  price={item.price}
                  handleChangeQty = {handleChangeQty}
                  />
                )}
                  
             {/* <CartItem />
             <CartItem />
             <CartItem /> */}

            {/* total */}
             <Total total={calculateTotal(data)}/>
        </div>
    )

}