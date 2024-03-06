import { useState } from "react";
import Fithcomponent from "../componenet/fithcomponent";

const Third = (props) => {
  const [aman, setAman] = useState("baretha");
  console.log(aman);
  const a = props.data;
  const { data, setData } = props;
  console.log(data);
  console.log(setData);
  const b = () => {
    setData("rahul");
    
  };
  
  return (
    <div>
      <button onClick={b}>click me </button>
      <Fithcomponent />
    </div>
  );
};
export default Third;
