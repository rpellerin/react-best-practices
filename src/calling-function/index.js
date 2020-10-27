import React from "react";

const showComments = ({ comments }) => {
  console.log("Comments is rendering");
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}
    </ul>
  );
};

const showPasswordInput = () => <input type="password" />;

const showCommentInput = ({ innerRef }) => <input type="text" ref={innerRef} />;

const Layout = ({ children }) => <div>{children}</div>;

const Page = ({ user, children, onLogin, onAddComment }) => {
  const inputRef = React.useRef(null);
  if (!user.isLoggedIn) {
    return (
      <Layout>
        <h3>Please log in to see and post comments</h3>
        {showPasswordInput()}
        <button onClick={onLogin}>Login!</button>
      </Layout>
    );
  }
  return (
    <Layout>
      <h3>Comments section</h3>
      {showCommentInput({ innerRef: inputRef })}
      <button onClick={() => onAddComment(inputRef.current.value)}>
        Add comment
      </button>
      {children}
    </Layout>
  );
};

const CallingFunction = () => {
  const [user, setUser] = React.useState({ isLoggedIn: false });
  const [comments, setComments] = React.useState([
    "Amazing work!",
    "I gave it a thumb up!",
  ]);
  return (
    <>
      <h1>Calling a function vs mounting a component</h1>
      <Page
        user={user}
        onLogin={() => setUser({ isLoggedIn: true })}
        onAddComment={(comment) =>
          setComments((comments) => [...comments, comment])
        }
      >
        {showComments({ comments })}
      </Page>
    </>
  );
};

export default CallingFunction;
