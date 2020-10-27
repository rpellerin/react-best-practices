import React from "react";
// import { v4 as uuidv4 } from 'uuid'

const DeleteButton = ({ onClick }) => (
  <button onClick={onClick}>
    <span role="img" aria-label="Delete">
      🗑️
    </span>
  </button>
);

const Input = ({ value, onDelete }) => {
  return (
    <div>
      <input type="text" defaultValue={value} />
      <DeleteButton onClick={onDelete} />
    </div>
  );
};

const KeyProp = () => {
  const [values, setValues] = React.useState(["Fill me in"]);
  return (
    <>
      <h1>The `key` prop</h1>
      <div>
        <button
          onClick={() => setValues((values) => [...values, "Fill me in"])}
        >
          Add an item
        </button>
      </div>
      {values.map((value, i) => (
        <Input
          value={value}
          onDelete={() =>
            setValues((values) => values.filter((_, index) => index !== i))
          }
        />
      ))}
    </>
  );
};

export default KeyProp;
