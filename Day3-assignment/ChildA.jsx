import React from "react";
import ChildB from "./ChildB";

function ChildA(props) {
  return (
    <div>
      <h1 className="childA">{props.title}</h1>
      <ChildB title="ChildB" />
    </div>
  );
}

export default ChildA;
