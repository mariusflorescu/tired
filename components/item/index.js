import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import useStore from "../../context";
import {
  handleThoughtChange,
  handleTextareaStyleChange,
} from "../../lib/handlers";
import { isLongerThanADay } from "../../lib/misc";
import {
  BlurryTextarea,
  animationBlur,
  StyledDateWrapper,
  StyledDate,
} from "./styles";

dayjs.extend(relativeTime);

const Item = ({ id, text, date }) => {
  const store = useStore();

  const itemRef = React.useRef(null);

  const [value, setValue] = React.useState(text);
  const [visibleDate, setVisibleDate] = React.useState(false);
  const [isReadyOnly, setIsReadOnly] = React.useState(false);

  const itemDate = dayjs(date).toNow(true);

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
    if (e.keyCode === 13 && !e.shiftKey) {
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

    if (isLongerThanADay(itemDate)) {
      setIsReadOnly(true);
    }
  }, []);

  React.useEffect(() => {
    if (store.list.length === 0) {
      itemRef = null;
    }
  }, [store.list]);

  handleTextareaStyleChange(itemRef);

  return (
    <>
      <BlurryTextarea
        rows={1}
        readOnly={isReadyOnly}
        ref={itemRef}
        value={value}
        onChange={(e) => handleThoughtChange(e, value, setValue)}
        onBlur={store.updateItem}
        onKeyDown={(e) => handleKeyDown(e)}
        onMouseOver={() => {
          if (itemRef && itemRef.current) {
            itemRef.current.style.animation = "";
          }
          setVisibleDate(true);
        }}
        onMouseLeave={() => setVisibleDate(false)}
        placeholder="Erase it... &#128465;"
      />
      <StyledDateWrapper>
        <StyledDate style={visibleDate ? { opacity: 1 } : { opacity: 0 }}>
          {itemDate} ago
        </StyledDate>
      </StyledDateWrapper>
    </>
  );
};

export default Item;
