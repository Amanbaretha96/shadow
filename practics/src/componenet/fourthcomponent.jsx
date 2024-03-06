import { useState } from "react";
import Third from "../pages/thirdpage";

const Fourth = () => {
  const [data, setData] = useState("call");
  console.log(data);
  return (
    <div>
      {data}
      <Third data={data} setData={setData} />
    </div>
  );
};
export default Fourth;
