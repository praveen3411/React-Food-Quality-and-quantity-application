import Labpri from "./labelandprice";
import Quantity from "./quantity";

export default function Add3({ label, id, price, qty, handling }) {
  return (
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"10px"}}>
      <Labpri label={label} price={price} />
      <Quantity
        qty={qty}
        increment={() => handling(id, +1)}
        decrement={() => handling(id, -1)}
      />
    </div>
  );
}
