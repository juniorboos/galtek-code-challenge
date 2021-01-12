import React, { useEffect, useState } from "react";
import { Container } from "../../styles/components/Card";

interface Item {
  id: number;
  name: string;
}

interface Props {
  slide: Item;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Card = ({ slide, current, handleSlideClick }: Props) => {
  const [classname, setClassname] = useState<string>("");
  const [isFar, setIsFar] = useState<boolean>(false);

  useEffect(() => {
    if (current === slide.id) setClassname("current");
    else if (current > slide.id) setClassname("previous");
    else if (current < slide.id) setClassname("next");

    if (current - slide.id > 1 || current - slide.id < -1) setIsFar(true);
    else setIsFar(false);
  }, [current, slide]);

  return (
    <Container
      isFar={isFar}
      className={classname}
      onClick={() => handleSlideClick(slide.id)}
    >
      <div className="image_wrapper">{slide.name}</div>
    </Container>
  );
};

export default Card;
