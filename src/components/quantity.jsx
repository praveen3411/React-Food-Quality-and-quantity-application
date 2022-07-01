import Button from "./Button";

export default function Quantity({ qty, increment, decrement }) {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <Button disabled={qty===0} onClick={decrement}>-</Button>
      <div>
        <h3>{qty}</h3>
      </div>
      <Button onClick={increment}>+</Button>
    </div>
  );
}
