import { useState } from "react";

function Discount()
{
    const originalPrice=7899;
    const [price,setPrice]=useState(originalPrice)
    const[discount,setDiscount]=useState(0)
    const applyDiscount=(discountValue) => {
        if (discountValue === 10) {
            setDiscount(price*0.1);
        }
       else if (discountValue === 20) {
            setDiscount(price*0.2);
        }
       else if (discountValue === 30) { 
            setDiscount(price*0.3);
        }
        else {
            setDiscount(0);
            setPrice(0);
        }
    };
    return (
        <>
        <h1> Original Price: ${originalPrice}</h1>
        <h2>Discount Price: ${discount.toFixed(2)}</h2>
        <h3>Applied Discount:{originalPrice-discount}%</h3>
        <p>Click a button to apply a discount :</p>
        <button onClick={() =>applyDiscount(10)}>Apply 10% Discount</button>
        <button onClick={() =>applyDiscount(20)}>Apply 20% Discount</button>
        <button onClick={() =>applyDiscount(30)}>Apply 30% Discount</button>
        <button onClick={() =>applyDiscount(0)}>Rest Price</button>
        </>
    )
}
export default Discount;