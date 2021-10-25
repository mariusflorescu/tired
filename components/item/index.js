import React from "react";
import { StyledItem, animationBlur } from "./styles";

const Item = ({ children }) => {
  const itemRef = React.useRef(null);

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
      onMouseOver={() => {
        if (itemRef && itemRef.current) {
          itemRef.current.style.animation = "";
        }
      }}
    >
      {children}
    </StyledItem>
  );
};

export default Item;
