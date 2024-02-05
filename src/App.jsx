import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

const App = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("black");

  const handleIncrement = () => {
    setCount(count + 1);
    setBackgroundColor(count % 2 === 0 ? "blue" : "red");
  };

  return (
    <Router>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <nav style={{ marginBottom: "20px" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ display: "inline", marginRight: "20px" }}>
              <Link
                to="/page1"
                style={{ textDecoration: "none", color: "black" }}
              >
                Page 1
              </Link>
            </li>
            <li style={{ display: "inline" }}>
              <Link
                to="/page2"
                style={{ textDecoration: "none", color: "black" }}
              >
                Page 2
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/page1"
            element={
              <Page1
                count={count}
                backgroundColor={backgroundColor}
                handleIncrement={handleIncrement}
              />
            }
          ></Route>
          <Route
            path="/page2"
            element={<Page2 count={count} backgroundColor={backgroundColor} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
