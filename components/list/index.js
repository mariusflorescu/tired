import useStore from "../../context";
import { Wrapper, DateHeading } from "./styles";
import Item from "../item";

const List = () => {
  const { list: items } = useStore();

  return (
    <Wrapper>
      <DateHeading>Today</DateHeading>
      {items.map(({ key, text, date }) => (
        <Item key={key} id={key} text={text} date={date}></Item>
      ))}
    </Wrapper>
  );
};

export default List;
