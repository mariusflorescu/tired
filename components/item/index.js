import React from "react";
import useStore from "../../context";
import { StyledItem, animationBlur } from "./styles";

const Item = ({ id, text }) => {
  const store = useStore();
  const itemRef = React.useRef(null);
  const [value, setValue] = React.useState(text);

  const triggerAnimation = () => {
    if (itemRef && itemRef.current) {
      itemRef.current.style.animation = `${animationBlur} 5s`;
      setTimeout(() => {
        if (itemRef && itemRef.current) {
          // pretty dumb but in case the last entry gets deleted it wont break the app
          itemRef.current.style.animation = "";
        }
      }, 5000);
    }
  };

  const updateItem = () => {
    store.update({
      key: id,
      text: value,
    });

    triggerAnimation();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updateItem();

      if (itemRef && itemRef.current) {
        itemRef.current.blur();
      }
    } else if (e.key === "Backspace" && value.length === 0) {
      store.delete(id);
    }
  };

  React.useEffect(() => {
    triggerAnimation();
  }, []);

  React.useEffect(() => {
    if (store.list.length === 0) {
      itemRef = null;
    }
  }, [store.list]);

  return (
    <StyledItem
      ref={itemRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={store.updateItem}
      onKeyDown={(e) => handleKeyDown(e)}
      onMouseOver={() => {
        if (itemRef && itemRef.current) {
          itemRef.current.style.animation = "";
        }
      }}
      placeholder="&larr; Erase it..."
    />
  );
};

export default Item;
