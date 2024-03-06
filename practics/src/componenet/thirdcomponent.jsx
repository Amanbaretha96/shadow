import { useState } from "react";
import Second from "../pages/secondpage";

const Third = (props) => {
  const [take, setTake] = useState("me");
  console.log(take);
  return (
    <div>
      <p>my name is aman baretha</p>
      {take}
      <Second take={take} setTake={setTake} />
    </div>
  );
};
export default Third;
