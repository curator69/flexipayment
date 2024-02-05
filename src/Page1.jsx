import { Link } from "react-router-dom";

const Page1 = ({ count, backgroundColor, handleIncrement }) => {
  return (
    <div style={{ backgroundColor, padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "white" }}>Page 1</h1>
      <p style={{ color: "white" }}>Count: {count}</p>
      <button
        onClick={handleIncrement}
        style={{
          padding: "10px",
          fontSize: "16px",
          backgroundColor: "lightgray",
          cursor: "pointer",
        }}
      >
        Increment Count
      </button>
      <br />
      <Link
        to="/page2"
        style={{
          textDecoration: "none",
          color: "white",
          marginTop: "10px",
          display: "block",
        }}
      >
        Go to Page 2
      </Link>
    </div>
  );
};

export default Page1;
