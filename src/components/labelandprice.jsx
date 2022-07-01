export default function Labpri({ label, price }) {
  return (
    <div style={{ display: "flex", gap: "20px",justifyContent:"space-around",width:"200px" }}>
      <div style={{fontWeight:"bold"}}>{label}</div>
      <div style={{color:"green",fontWeight:"bold"}}>{price}</div>
    </div>
  );
}
