import useStore from "../../context";
import { Wrapper } from "./styles";
import Item from "../item";

const List = () => {
  const { list: items } = useStore();
  return (
    <Wrapper>
      {items.map(({ key, text }) => (
        <Item key={key}>{text}</Item>
      ))}
    </Wrapper>
  );
};

export default List;
