const limit = 240;

const handleThoughtChange = (e, value, setValue) => {
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

const handleTextareaStyleChange = (ref) => {
  if (ref && ref.current) {
    const currentStyling = window.getComputedStyle(ref.current);
    const paddingTop = currentStyling.getPropertyValue("padding-top");
    const paddingBottom = currentStyling.getPropertyValue("padding-bottom");
    ref.current.style.height = "auto";
    ref.current.style.height = `calc(${ref.current.scrollHeight}px - ${paddingTop} - ${paddingBottom})`;
  }
};

export { limit, handleThoughtChange, handleTextareaStyleChange };
