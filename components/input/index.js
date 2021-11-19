import React from "react";
import useStore from "../../context";
import {
  limit,
  handleThoughtChange,
  handleTextareaStyleChange,
} from "../../lib/handlers";
import generateId from "../../lib/generateId";
import { StyledInput, Small } from "./styles";

const Input = () => {
  const { add } = useStore();
  const [current, setCurrent] = React.useState("");

  const textareaRef = React.useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      if (current.trim() !== "") {
        const obj = {
          key: generateId(),
          text: current,
          date: Date.now(),
        };
        add(obj);
        setCurrent("");
      } else {
        setCurrent("");
      }
    } else if (e.keyCode === 13 && current.trim() !== "") {
    }
  };

  handleTextareaStyleChange(textareaRef);

  return (
    <React.Fragment>
      <StyledInput
        rows={1}
        ref={textareaRef}
        value={current}
        onChange={(e) => handleThoughtChange(e, current, setCurrent)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Write your thoughts..."
      />
      <Small>
        {current.length}/{limit}
      </Small>
    </React.Fragment>
  );
};

export default Input;
