import React from "react";

const MyComponent = () => {
  const [name, setName] = React.useState("Britney");
  const [lotteryTicket, setLotteryTicket] = React.useState(Math.random());
  return (
    <div>
      Hello {name}, your lottery ticket is {lotteryTicket}
    </div>
  );
};

const MyMemoComponent = React.memo(() => <div>I am wrapped in React.memo</div>);

const CallingFunction = () => {
  const [, setCount] = React.useState(0);
  return (
    <>
      <h1>Calling a function vs mounting a component</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Force re-render
      </button>
      <MyComponent />
      {MyComponent()}
      <MyMemoComponent />
      {/* {MyMemoComponent()} */}
    </>
  );
};

export default CallingFunction;
