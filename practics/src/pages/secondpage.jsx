const Second = (props) => {
  const c = props.take;
  const { take, setTake } = props;
  console.log(take);
  console.log(setTake);
  const d = () => {
    setTake("shot");
  };
  return (
    <div>
      <button onClick={d}>click me</button>
    </div>
  );
};
export default Second;
