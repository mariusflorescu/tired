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

  const handleOnChange = (e) => {
    //endless if but whatever
    if (
      e.target.value.length < limit &&
      (e.target.value.trim() !== "" || current.trim() !== "") &&
      (current.length < limit || e.target.value.length < current.length)
    ) {
      setCurrent(e.target.value);
    }
    //slice if bigger
    else if (e.target.value.length > limit) {
      const diff = e.target.value.length - limit;
      let str = e.target.value;
      const slice = str.slice(0, -1 * diff);
      setCurrent(slice);
    }
  };

  return (
    <React.Fragment>
      <StyledInput
        rows={1}
        ref={textareaRef}
        value={current}
        onChange={(e) => handleOnChange(e)}
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
