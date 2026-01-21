import { useState } from "react";

function Toggle({on,toggleHandle,id}) {
  

  return (
    <div
      onClick={() => toggleHandle(id)}
      style={{
        scale:"0.8",
        width: "50px",
        height: "26px",
        borderRadius: "20px",
        backgroundColor: on ? "red" : "#888",
        display: "flex",
        alignItems: "center",
        padding: "3px",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "white",
          transform: on ? "translateX(24px)" : "translateX(0)",
          transition: "transform 0.3s",
        }}
      />
    </div>
  );
}

export default Toggle;
