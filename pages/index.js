import React from "react";
import useStore from "../context";
import Container from "../components/container";
import Input from "../components/input";
import List from "../components/list";

export default function Home() {
  const {list} = useStore();

  return (
    <Container>
      <Input/>

      <List items={list} />
    </Container>
  );
}
