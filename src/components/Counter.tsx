import "./Counter.css";
import { useState } from "react";

// ## Challenge 3 — Counter with `useState` *(easy)*

// **Goal:** first React hook.

// Create a `Counter` component with:

// - A number displayed large in the center.
// - Three buttons: `-`, `reset`, `+`.
// - Use `useState<number>(0)` to hold the count.
// - `-` must not go below 0.

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const reduceCounter = () => {
    if (counter == 0) {
      alert("Zähler darf nicht negativ sein!");
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="container">
        <p style={{ display: "flex", justifyContent: "center", fontSize: 100 }}>
          {counter}
        </p>
        <div className="btn-container">
          <button className="btn" onClick={() => setCounter(counter + 1)}>
            +
          </button>
          <button className="btn" onClick={() => setCounter(0)}>
            Reset
          </button>
          <button className="btn" onClick={() => reduceCounter()}>
            -
          </button>
        </div>
      </div>
    </>
  );
};
