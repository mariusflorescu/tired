import React from "react";
import useStore from "../../context";
import {
  StyledItem,
  animationBlur,
  StyledDateWrapper,
  StyledDate,
} from "./styles";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

const limit = 240;

const Item = ({ id, text, date }) => {
  const store = useStore();
  const itemRef = React.useRef(null);
  const [value, setValue] = React.useState(text);
  const [visibleDate, setVisibleDate] = React.useState(false);
  const [isReadyOnly, setIsReadOnly] = React.useState(false);

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

  const handleOnChange = (e) => {
    //endless if but whatever
    if (
      e.target.value.length <= limit &&
      (e.target.value.trim() !== "" || value.trim() !== "") &&
      (value.length < limit || e.target.value.length < value.length)
    ) {
      setValue(e.target.value);
    }
    //slice if bigger
    else if (e.target.value.length > limit) {
      const diff = e.target.value.length - limit;
      let str = e.target.value;
      const slice = str.slice(0, -1 * diff);
      setValue(slice);
    }
  };

  const checkDate = () => {
    const arr = ["day", "days", "month", "months", "year", "years"];

    return arr.some((item) => date.includes(item));
  };

  React.useEffect(() => {
    triggerAnimation();

    if (checkDate) setIsReadOnly(true);
  }, []);

  React.useEffect(() => {
    if (store.list.length === 0) {
      itemRef = null;
    }
  }, [store.list]);

  if (itemRef && itemRef.current) {
    const currentStyling = window.getComputedStyle(itemRef.current);
    const paddingTop = currentStyling.getPropertyValue("padding-top");
    const paddingBottom = currentStyling.getPropertyValue("padding-bottom");
    itemRef.current.style.height = "auto";
    itemRef.current.style.height = `calc(${itemRef.current.scrollHeight}px - ${paddingTop} - ${paddingBottom})`;
  }

  return (
    <>
      <StyledItem
        ref={itemRef}
        value={value}
        onChange={(e) => handleOnChange(e)}
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
          {dayjs(date).toNow(true)} ago
        </StyledDate>
      </StyledDateWrapper>
    </>
  );
};

export default Item;
