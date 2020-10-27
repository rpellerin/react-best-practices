import React from "react";

const CountContext = React.createContext(null);

const Wrapper = ({ children }) => (
  <div
    style={{
      backgroundColor: "rgba(0,0,0,0.1)",
      padding: "25px",
      margin: "10px 0",
    }}
  >
    {children}
  </div>
);

const Child = () => {
  const { count, setCount } = React.useContext(CountContext);
  console.log("Child renders", { count });
  return (
    <div>
      <div>Child: {count} </div>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment count from context
      </button>
      <button onClick={() => setCount((count) => count)}>
        Call setCount from context with same value
      </button>
    </div>
  );
};

const Parent = () => {
  console.log("Parent renders");
  return (
    <>
      <div>Parent:</div>
      <Wrapper>
        <Child />
      </Wrapper>
    </>
  );
};

const GrandParent = ({ children }) => {
  console.log("GrandParent renders");
  return (
    <>
      <div>GrandParent:</div>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

const MemoGrandParent = React.memo(({ id, onClick }) => {
  console.log(`MemoGrandParent ${id} renders`);

  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    const buttonDOM = buttonRef.current;
    buttonDOM.addEventListener("click", onClick);
    return () => buttonDOM.removeEventListener("click", onClick);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div>React.memo(GrandParent {id})</div>
      <button ref={buttonRef}>onClick prop</button>
    </>
  );
});

const CountContextProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(count);
  countRef.current = count;

  console.log("CountContextProvider renders", { count });

  const onClickMemoGrandParent1 = () =>
    window.alert(`clickMemoGrandParent1, count: ${count}`);

  const onClickMemoGrandParent2 = React.useCallback(
    () => window.alert(`clickMemoGrandParent2, count: ${countRef.current}`),
    []
  );
  return (
    <>
      <div>CountContextProvider (count: {count})</div>
      <CountContext.Provider value={{ count, setCount }}>
        <Wrapper>
          <GrandParent>{children}</GrandParent>
        </Wrapper>
        <Wrapper>
          <MemoGrandParent id="1" onClick={onClickMemoGrandParent1} />
        </Wrapper>
        <Wrapper>
          <MemoGrandParent id="2" onClick={onClickMemoGrandParent2} />
        </Wrapper>
      </CountContext.Provider>
    </>
  );
};

const Context = () => {
  const [, forceRender] = React.useState(0);
  return (
    <>
      <h1>React context</h1>
      <div>
        <button onClick={() => forceRender((number) => number + 1)}>
          Force app re-render
        </button>
      </div>
      <br />
      <hr />
      <div>App</div>
      <Wrapper>
        <CountContextProvider>
          <Parent />
        </CountContextProvider>
      </Wrapper>
    </>
  );
};

export default Context;
