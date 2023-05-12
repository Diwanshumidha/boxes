import "./App.css";
import { useState , useEffect } from "react";

function App() {
  const [ups, setups] = useState(0);
  const [lefts, setlefts] = useState(0);
  // Up right bottom left
  const [updisable, setupdisable] = useState(true);
  const [downdisable, setdowndisable] = useState(false);
  const [leftdisable, setleftdisable] = useState(true);
  const [rightdisable, setrightdisable] = useState(false);

  const increment_up = (direction) => {
    if (direction === "up") {
      if (ups > 0) {
        setups((prev) => prev - 50);
      }
    } else if (direction === "down") {
      if (ups < 450) {
        setups((prev) => prev + 50);
      }
    } else if (direction === "left") {
      if (lefts > 0) {
        setlefts((prev) => prev - 50);
      }
    } else if (direction === "right") {
      if (lefts < 450) {
        setlefts((prev) => prev + 50);
      }
    }
  };

  const updateDisabledButtons = () => {
    setupdisable(ups === 0);
    setdowndisable(ups === 450);
    setleftdisable(lefts === 0);
    setrightdisable(lefts === 450);
  };

  // Update disabled buttons whenever state variables change
  useEffect(() => {
    updateDisabledButtons();
  }, [ups, lefts]);

  return (
    <div className="container">
      <button
        className="up h-button button"
        onClick={() => increment_up("up")}
        disabled={updisable}
      >Up</button>
      <div className="vertical">
        <button
          className="left v-button button"
          onClick={() => increment_up("left")}
          disabled={leftdisable}
        >Left</button>
        <div className="main">
          <div
            className="box"
            style={{
              top: `${ups}px`,
              left: `${lefts}px`,
            }}
          ></div>
        </div>
        <button
          className="right v-button button"
          onClick={() => increment_up("right")}
          disabled={rightdisable}
        >Right</button>
      </div>
      <button
        className="bottom h-button button"
        onClick={() => increment_up("down")}
        disabled={downdisable}
      >Down</button>
    </div>
  );
}

export default App;
