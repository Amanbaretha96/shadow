import { useState } from "react";
import First from "../pages/firstpage";

const Second = (props) => {
  const [data, setData] = useState("pankaj");
  console.log(data);
  return <div>
  {data}
  <First data={data} setData={setData} />
  </div>;
};
export default Second;
