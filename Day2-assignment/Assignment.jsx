import React, { useState } from "react";

const Todolist = () => {
  const [tasklist, setTasklist] = useState([]);
  const [inpdata, setInpdata] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);

  const adddata = () => {
    if (inpdata.trim() !== ""){
        setTasklist([...tasklist, inpdata]);
        setInpdata("");
    }
  };

  const taskdel = (index) => {
    const updatedTasklist = [...tasklist];
    updatedTasklist.splice(index, 1);
    setTasklist(updatedTasklist);
  };

  return (
    <>
      <h1>Today's Plan of Action</h1>
      <input type="text" value={inpdata} onChange={(e) => setInpdata(e.target.value)} />
      <button onClick={adddata}>Add task</button>
      <ul>
        {tasklist.map((item, index) => (
          <li key={index} style={{listStyleType: 'none'}}>
            <input type="checkbox"/>
            {item}
            <button onClick={() => taskdel(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
