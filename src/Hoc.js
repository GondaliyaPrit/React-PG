import {useState} from 'react'

function Hoc(){
return(
        <>
        <h1>HOC</h1>
        <TestFun coun={Count} />
        </>
    )
}


function TestFun(props){
    return <h4><props.coun/></h4>
}


function Count() {
    const [Data ,setData]  = useState(0);
    return(
    <>
        <h1>{Data}</h1>
        <button  onClick={()=>setData(Data+1)}>count</button>
    </>
    )
}


export default Hoc