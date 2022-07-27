import React, { useState } from "react";

function Getvaluetxt() {
  const [data, setData] = useState(null);
  const [da, setValue] = useState(false);

  return (
    <>
      {da ? <h1>{data} </h1> : null}
      <input
        onChange={(val) => {
          setData(val.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setValue(true);
        }}
      >
        Getdata
      </button>
    </>
  );
}

export default Getvaluetxt;
