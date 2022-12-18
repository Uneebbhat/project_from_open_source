import React, { useState } from "react";
import "./styles.css";

export default function FormData() {
  const [mode, setMode] = useState("A");
  const changeHandler = () => {
    setMode("B");
    console.log("Changed to mode B");
  };

  const formHandler = (e) => {
    e.preventDefault();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <h1>{mode}</h1>
      <form onSubmit={formHandler}>
        {mode === "A" ? (
          <button type="button" onClick={changeHandler}>
            Change Mode
          </button>
        ) : (
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
