// // import Firstcomponent from "../componenet/firstcomponent";

// // const { useState } = require("react");

// const Testes = (props) => {

//     console.log(props);
//     const a =  props.data 
//     console.log(a);
//     const { data, setData } = props;
//   console.log(data);
//   // const [aman, setAman] = useState("baretha");
//   //   console.log(aman);
//   //   const Tester = () => {
//   //     setAman("raj");
//   //   };
//   //   alert(Tester);
//   const second = () => {
//     setData("vivek");
//   };

//   return (
//     <div>
//       <button onDoubleClick={second }> click me </button>
//       {/* <Firstcomponent data = {data} setData = {setData}/> */}
//     </div>
//   );
// };
// export default Testes;
const Testes = (props) => {
  const a = props.data
  console.log(a);
  const {data, setData}= props
  console.log(data)
  console.log(setData)
  const b = () =>{
    setData("raj baretha")
  }

  return(
    <div>
      {setData}
      <button onClick={b}>click </button>
    </div>
  )
}
export default Testes;