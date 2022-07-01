export default function Button({ onClick, disabled, children }) {
  return (
    <div>
      <button
        style={{
          padding: "10px",
          border: 0,
          borderRadius: "3px",
          boxShadow: "1px 1px 1px 2px red",
          backgroundColor: "black",
          color: "white",
          fontSize:"20px",
          fontWeight:"bold"
        }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}
