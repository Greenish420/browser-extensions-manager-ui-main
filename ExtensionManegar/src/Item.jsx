import Toggle from "./Toggle";
import { useState } from "react";


function Item({Img,Name,Desc,id,deleteHandle,isOn,toggleHandle}) {

    // const [on, setOn] = useState(false);

    return (<div style={{ backgroundColor: '#212636', padding: "15px", maxWidth: "300px", borderRadius: "15px", display: "flex", flexDirection: "column", gap: "25px", justifyContent: "space-between", border: "solid 2px #2f364b" }}>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", padding: "0px" }}>
            <img src={`/images/${Img}.svg`}  alt="" />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "10px", flexDirection: "column" }}>
                <h2 style={{ fontSize: "1.2em" }}>{Name}</h2>
                <p style={{ fontSize: "0.75em" }}>{Desc}</p>
            </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <button className="Remove" onClick={() =>{ deleteHandle(id)}}>Remove</button>
            <Toggle on={isOn} toggleHandle = {toggleHandle} id={id}/>
        </div>

    </div>);


}


export default Item;