import React, { useContext } from "react";
import { Context } from "./context";

function ChildB(props) {
  const fruit = useContext(Context);
  return (
    <div className={props.title}>
      <h1>{props.title}</h1>
      <h3>The fruit is {fruit}</h3>
    </div>
  );
}

export default ChildB;
