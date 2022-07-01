import { useEffect } from "react";
import { useState } from "react";
import Add3 from "./add3";
import Total from "./total";

let initial = [
  { id: 1, product: "Gopi-Ma", price: 100, qty: 1 },
  { id: 2, product: "Chicken", price: 200, qty: 1 },
  { id: 3, product: "Biriyani", price: 150, qty: 1 },
  { id: 4, product: "Andra-S", price: 100, qty: 1 },
  { id: 5, product: "Porata", price: 90, qty: 1 },
  { id: 6, product: "Biriy_sp", price: 150, qty: 1 },
];

export default function Main() {
  const [data, setData] = useState(initial);
  function newfunction(productone){
    return productone.reduce((acc,c)=>acc+(c.qty*c.price),0)
   }
  const handling = (id, amount) => {
    let updateddata = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + amount,
        };
      } else {
        return item;
      }
    });
    setData(updateddata);
  };
  useEffect=()=>{
    setData(initial)
  }
  return (
    <div>
      {data.map((item) => (
        <Add3 key={item.id}
        id={item.id}
        label={item.product}
        price={item.price}
        handling={handling}
        qty={item.qty}
        />
      ))}
      <Total price={newfunction(data)} />
    </div>
  );
}
