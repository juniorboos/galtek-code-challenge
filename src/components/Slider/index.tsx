import React, { useState } from "react";
import { Container, Controls } from "../../styles/components/Slider";
import Card from "../Card";
import SliderControl from "./SliderControl";

interface Item {
  id: number;
  name: string;
}

interface Props {
  items: Item[];
}

const Slider = ({ items }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  function handlePreviousClick() {
    const previous = current - 1;

    setCurrent(previous < 0 ? items.length - 1 : previous);
  }

  function handleNextClick() {
    const next = current + 1;

    setCurrent(next === items.length ? 0 : next);
  }

  function handleSlideClick(index: number) {
    if (current !== index) {
      setCurrent(index);
    }
  }

  return (
    <>
      <Container numItems={items.length} current={current}>
        {items.map((item: Item, idx) => (
          <Card
            key={idx}
            slide={item}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </Container>
      <Controls>
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </Controls>
    </>
  );
};

export default Slider;
