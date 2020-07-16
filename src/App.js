import React from "react";

const CountContext = React.createContext(null);

const Child = () => {
  const { count, setCount } = React.useContext(CountContext);
  console.log("Child renders", { count });
  return (
    <span>
      Child: {count}{" "}
      <button onClick={() => setCount((count) => count + 1)}>
        Increment context
      </button>
      <button onClick={() => setCount((count) => count)}>Set same value</button>
    </span>
  );
};

const Parent = () => {
  console.log("Parent renders");
  return (
    <>
      Parent: <Child />
    </>
  );
};

const GrandParent = ({ children }) => {
  console.log("GrandParent renders");
  return <>GrandParent: {children}</>;
};

const MemoGrandParent = React.memo(({ name, onClick }) => {
  console.log(`MemoGrandParent ${name} renders`);

  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    buttonRef.current.addEventListener("click", onClick);
  }, []);

  return <button ref={buttonRef}>MemoGrandParent {name}</button>;
});

const CountContextProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  console.log("CountContextProvider renders", { count });
  const countRef = React.useRef(count);
  countRef.current = count;
  const onClickMemoGrandParent1 = () =>
    console.log(`clickMemoGrandParent1, count: ${count}`);
  const onClickMemoGrandParent2 = React.useCallback(
    () => console.log(`clickMemoGrandParent2, count: ${countRef.current}`),
    []
  );
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div>
        <GrandParent>{children}</GrandParent>
      </div>
      <div>
        <MemoGrandParent name="1" onClick={onClickMemoGrandParent1} />
      </div>
      <div>
        <MemoGrandParent name="2" onClick={onClickMemoGrandParent2} />
      </div>
    </CountContext.Provider>
  );
};

const App = () => {
  const [_, forceRender] = React.useState(0);
  return (
    <>
      <div>
        <button onClick={() => forceRender(Math.random())}>
          Force App render
        </button>
      </div>
      <div>
        <CountContextProvider>
          <Parent />
        </CountContextProvider>
      </div>
    </>
  );
};

export default App;
