import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <h1>Quantity-Application</h1>
      <div
        style={{
          width: "500px",
          height: "auto",
          border: "2px solid balck",
          borderRadius: "10px",
          boxShadow: "2px 2px 2px 1px blue",
          margin:"auto",
          textAlign:"center"
        }}
      >
        <h3>Select Quantity</h3>
        <Main/>
      </div>
    </div>
  );
}

export default App;
