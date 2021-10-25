import React from "react";
import generateId from "../../lib/generateId";
import { StyledInput } from "./styles";

const Input = ({ list, setList }) => {
  const [current, setCurrent] = React.useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const obj = {
        key: generateId(),
        text: current,
      };
      setList([obj, ...list]);
      setCurrent("");
    }
  };
  return (
    <StyledInput
      value={current}
      onChange={(e) => setCurrent(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e)}
      placeholder="Write your thoughts..."
    />
  );
};

export default Input;
