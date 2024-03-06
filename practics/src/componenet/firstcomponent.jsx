import { useState } from "react";
import Testes from "../pages/testes";

const Firstcomponent = () =>{
     const [data, setData] = useState("fdhjsajhdgj");
   console.log(data);


    return(
        <div>
            {data}
            {/* <Testes aman = {data} setData ={setData}/> */}
            <Testes data = {data} setData ={setData}/>
        </div>
    )
}
export default Firstcomponent