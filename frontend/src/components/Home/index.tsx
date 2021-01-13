import React from "react";
import { Container } from "../../styles/components/Home";
import Slider from "../Slider";

interface Item {
  id: number;
  name: string;
}

interface Props {
  toggleTheme(): void;
}

const Home = ({ toggleTheme }: Props) => {
  function create(id: number, name: string) {
    return { id: id, name: name };
  }

  const items: Item[] = [
    create(0, "Lisboa"),
    create(1, "Leira"),
    create(2, "Coimbra"),
    create(3, "Porto"),
    create(4, "Faro"),
  ];

  return (
    <Container>
      <Slider items={items} />
    </Container>
  );
};

export default Home;
