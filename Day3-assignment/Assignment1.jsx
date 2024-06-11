//guess number between 1 to 20

import React, { useState, useEffect } from "react";

const Guess = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [randomno, setTarget] = useState("");

  useEffect(() => {
    setTarget(Math.floor(Math.random() * 20));
    // console.log(randomno);
  }, []);

  useEffect(() => {
    // console.log(randomno, typeof randomno, typeof number, number);
    if (number == "") {
      setResult("");
    } else if (number < randomno) {
      setResult("lesser");
    } else if (number > randomno) {
      setResult("higher");
    } else setResult("correct!");
  }, [number]);

  return (
    <>
      <h1>Guess Number between 1 to 20</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {/* <button>Submit</button> */}
      <h2>
        Your guess {number} is {result}
      </h2>
    </>
  );
};

export default Guess;