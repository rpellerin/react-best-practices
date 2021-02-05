import React, { useCallback, useRef } from "react";

const ShowCount = ({ count }) => {
  const onClickRef = useRef();
  const onClickBody = () => console.log({ count });
  onClickRef.current = onClickBody;
  const onClick = useCallback(() => onClickRef.current(), []);
  return <button onClick={onClick}>Log the count</button>;
};

const UseRefUseCallback = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <ShowCount count={count} />
      <div>Current count value: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment counter</button>
    </>
  );
};

export default UseRefUseCallback;
