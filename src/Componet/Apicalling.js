import { useEffect } from "react";
import { useState } from "react";

function Apicalling() {
  const [mydata, setdata] = useState([]);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ country_code: "US" }),
  };
  const calling = async (url) => {
    const res = await fetch(url, requestOptions);
    const jsondata = await res.json();
    setdata(jsondata.data);
  };

  useEffect(() => {
    calling("https://www.luxuryx-change.com/wp-json/api/v1/get_state");
  }, []);

  return (
    <div className="App">
      {mydata.map((curdata) => {
        return (
          <>
            <h1>{curdata.code}</h1>
            <h1>{curdata.name}</h1>
          </>
        );
      })}
    </div>
  );
}

export default Apicalling;
