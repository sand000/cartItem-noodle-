import LabelPrice from "./LabelPrice";
import Quantity from "./Quantity";

export default function CartItem({id,label,qty,price,handleChangeQty}){

    return (
        <div style={{
            display:"flex",
            gap:"1rem",
            padding: "2rem",
            justifyContent:"center",
            alignItems:"center",
            
        }}>
            <LabelPrice label={label} price={price} />
            <Quantity id={id} qty={qty} changeCount={handleChangeQty}/>
        </div>
    )
}