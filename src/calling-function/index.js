import React from "react";

const showComments = () => {
  window.alert("Comments is rendering");
  return (
    <ul>
      <li>Amazing work!</li>
      <li>I gave it a thumb up!</li>
    </ul>
  );
};

const Layout = ({ children }) => <div>{children}</div>;

const Page = ({ user, children }) => {
  if (!user.isLoggedIn) {
    return <h1>Please log in</h1>;
  }
  return <Layout>{children}</Layout>;
};

const CallingFunction = () => {
  const user = { isLoggedIn: false };
  return <Page user={user}>{showComments()}</Page>;
};

export default CallingFunction;
