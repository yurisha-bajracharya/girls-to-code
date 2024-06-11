import React, { useState } from "react";
import ChildA from "./ChildA";
import { Context } from "./context";

function Task() {
  const [fruitname, setFruitname] = useState("mango");
  return (
    <div>
      <Context.Provider value={fruitname}>
        <h1 className="basecomponent">Base Component</h1>
        <ChildA title="Child A" />
      </Context.Provider>
    </div>
  );
}

export default Task;
