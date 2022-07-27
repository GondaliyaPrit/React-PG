import React, { useState } from "react";

// function HideShowtoggle() {
//   const [hide, setHide] = useState(true);
//   return (
//     <>
//       {hide ? <h1>Prit Gondaliya</h1> : null}
//       <button
//         onClick={() => {
//           setHide(false);
//         }}
//       >
//         Hide
//       </button>
//       <button
//         onClick={() => {
//           setHide(true);
//         }}
//       >
//         Show
//       </button>
//     </>
//   );
// }

// export default HideShowtoggle;

function HideShowtoggle() {
  const [hide, setHide] = useState(true);
  return (
    <>
      {hide ? <h1>Prit Gondaliya</h1> : null}
      <button
        onClick={() => {
          setHide(!hide);
        }}
      >
        toggle
      </button>
    </>
  );
}

export default HideShowtoggle;
