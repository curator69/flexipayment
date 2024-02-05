import { Link } from "react-router-dom";

const Page2 = ({ count, backgroundColor }) => {
  return (
    <div style={{ backgroundColor, padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "white" }}>Page 2</h1>
      <p style={{ color: "white" }}>Count from Page 1: {count}</p>
      <Link
        to="/page1"
        style={{
          textDecoration: "none",
          color: "white",
          marginTop: "10px",
          display: "block",
        }}
      >
        Go back to Page 1
      </Link>
    </div>
  );
};

export default Page2;
