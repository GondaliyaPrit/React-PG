import { React, useState } from "react";

function Incdic() {
  const [data, setData] = useState(0);

  return (
    <>
      <button
        onClick={function () {
          setData(data + 1);
        }}
      >
        Add
      </button>
      <h1>{data}</h1>
      <button
        onClick={function () {
          if (data > 0) {
            setData(data - 1);
          }
        }}
      >
        Remove
      </button>
    </>
  );
}

export default Incdic;
