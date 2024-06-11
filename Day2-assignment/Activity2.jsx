import React, {useState} from "react";

const Booklist = () => {
    const [blist, setBlist]=useState([]);
    const[inpvalue, setInpvalue] =useState("");

    const datalist =()=>{
        setBlist([...blist, inpvalue]);
        setInpvalue("");
    }

return(
    <>
    <h1>Enter your Favourite Books:</h1>
    <input type="text" value={inpvalue} onChange={(e)=>setInpvalue(e.target.value)} />
    <button onClick={datalist}>Add Book</button>
    <div><ul>{blist.map((item,index)=>(<li key={index}>{item}</li>))}</ul></div>
    
    </>
)}
    
export default Booklist