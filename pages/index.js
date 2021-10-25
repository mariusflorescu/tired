import React from "react";
import Container from "../components/container";
import Input from "../components/input";
import List from "../components/list";

export default function Home() {
  const [list, setList] = React.useState([]);

  return (
    <Container>
      <Input list={list} setList={setList} />

      <List items={list} />
    </Container>
  );
}
