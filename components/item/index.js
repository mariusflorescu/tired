import React from "react";
import useStore from "../../context";
import { StyledItem, animationBlur } from "./styles";

const Item = ({ id, text }) => {
  const { update } = useStore();
  const itemRef = React.useRef(null);
  const [value, setValue] = React.useState(text);

  React.useEffect(() => {
    if (itemRef && itemRef.current) {
      itemRef.current.style.animation = `${animationBlur} 5s`;
      setTimeout(() => {
        itemRef.current.style.animation = "";
      }, 5000);
    }
  }, []);

  return (
    <StyledItem
      ref={itemRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() =>
        update({
          key: id,
          text: value,
        })
      }
      onMouseOver={() => {
        if (itemRef && itemRef.current) {
          itemRef.current.style.animation = "";
        }
      }}
    />
  );
};

export default Item;
