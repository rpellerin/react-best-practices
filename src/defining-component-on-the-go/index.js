import React from "react";

const DefiningComponentOnTheGo = () => {
  const LotteryTicket = () => {
    const [randomFact, setRandomFact] = React.useState(null);

    React.useEffect(() => {
      if (!randomFact) {
        const fetchLotteryNumber = async () => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          const response = await fetch("http://numbersapi.com/random");
          const body = await response.text();
          setRandomFact(body);
        };
        fetchLotteryNumber();
      }
    }, []);

    if (!randomFact) return <div>Loading your random fact...</div>;
    return <div>Hello, your random fact is: {randomFact}</div>;
  };

  const [hovered, setHovered] = React.useState(false);
  return (
    <>
      <h1>Defining a component on the go</h1>

      <div
        style={{
          backgroundColor: hovered ? "#bbb" : "#ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <LotteryTicket />
      </div>
    </>
  );
};

export default DefiningComponentOnTheGo;
