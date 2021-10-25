import { Wrapper } from "./styles";
import Item from "../item";

const List = ({ items }) => {
  return (
    <Wrapper>
      {items.map(({key, text}) => (
        <Item key={key}>{text}</Item>
      ))}
    </Wrapper>
  );
};

export default List;
