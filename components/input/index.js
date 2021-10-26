import React from "react";
import useStore from "../../context";
import generateId from "../../lib/generateId";
import { StyledInput } from "./styles";

const Input = () => {
  const { add } = useStore();
  const [current, setCurrent] = React.useState("");
  const [rows, setRows] = React.useState(1);

  const textareaRef = React.useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      const obj = {
        key: generateId(),
        text: current,
      };
      add(obj);
      setCurrent("");
      setRows(1);
    } else if (
      e.keyCode === 13 &&
      e.shiftKey &&
      textareaRef &&
      textareaRef.current
    ) {
      setRows((prev) => prev + 1);
    }
  };
  return (
    <StyledInput
      ref={textareaRef}
      rows={rows}
      value={current}
      onChange={(e) => setCurrent(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e)}
      placeholder="Write your thoughts..."
    />
  );
};

export default Input;
