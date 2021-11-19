import useStore from "../../context";
import { Wrapper } from "./styles";
import Item from "../item";

const List = () => {
  const { list: items } = useStore();

  return (
    <Wrapper>
      {items.map(({ key, text, date }) => (
        <Item key={key} id={key} text={text} date={date}></Item>
      ))}
    </Wrapper>
  );
};

export default List;
