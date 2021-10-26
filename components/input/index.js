import React from "react";
import useStore from "../../context";
import generateId from "../../lib/generateId";
import { StyledInput, Small } from "./styles";

const limit = 240;

const Input = () => {
  const { add } = useStore();
  const [current, setCurrent] = React.useState("");
  const [justAdded, setJustAdded] = React.useState(true);
  const [rows, setRows] = React.useState(1);

  const textareaRef = React.useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      if (current.trim() !== "") {
        const obj = {
          key: generateId(),
          text: current,
        };
        add(obj);
        setCurrent("");
        setRows(1);
      } else {
        setCurrent("");
      }
    } else if (e.keyCode === 13 && current.trim() !== "") {
      setRows((prev) => prev + 1);
    }
  };

  return (
    <React.Fragment>
      <StyledInput
        rows={1}
        ref={textareaRef}
        value={current}
        onChange={(e) =>
          e.target.value.trim() !== "" || current.trim() !== ""
            ? setCurrent(e.target.value)
            : null
        }
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
