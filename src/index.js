import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// setTimeout(
//   () =>
//     ReactDOM.render(
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>,
//       document.getElementById("root")
//     ),
//   5000
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
