const First = (props) => {
  const a = props.data;
  const { data, setData } = props;
  console.log(data);
  console.log(setData);
  const b = () => {
    setData("tripati");
  };
  return (
    <div>
      <button onClick={b}> tak a shot </button>
    </div>
  );
};
export default First;
