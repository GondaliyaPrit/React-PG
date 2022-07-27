import React, { useState, useMemo } from "react";

function Usememo() {
    const [data, setdata] = useState(0);
    const [mul, setmul] = useState(10);


    const memocall = useMemo(function mulusingfunc() {
        console.log("fun-calling");
        return data * 5
    }, [data])

    return (
        <>
            <h1>count:{data}</h1>
            <h1>mul:{mul}</h1>
            <h1>mulusingfunction:{memocall}</h1>
            <button onClick={() => setdata(data + 1)}>Count</button>
            <button onClick={() => setmul(mul * 10)}>Count</button>
        </>
    );
}

export default Usememo;
