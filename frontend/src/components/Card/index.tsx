import React, { useEffect, useState } from "react";
import { Container } from "../../styles/components/Card";
import { IWeather } from "../../types/weatherType";

interface Props {
  index: number;
  slide: IWeather;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Card = ({ index, slide, current, handleSlideClick }: Props) => {
  const [classname, setClassname] = useState<string>("");
  const [isFar, setIsFar] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (current === index) setClassname("current");
    else {
      setOpen(false);
      if (current > index) setClassname("previous");
      else if (current < index) setClassname("next");
    }

    if (current - index > 1 || current - index < -1) setIsFar(true);
    else setIsFar(false);
  }, [current, index]);

  const handleOpen = () => {
    setOpen(!open);
    console.log(!open);
  };

  return (
    <Container
      isFar={isFar}
      isOpen={open}
      className={classname}
      onClick={() => handleSlideClick(index)}
    >
      <div className="image_wrapper">{slide.city}</div>
      <h3>Status: {slide.currentWeather.status}</h3>
      <h3>Temperature: {slide.currentWeather.temp}</h3>
      <h3>Max: {slide.currentWeather.tempMin}</h3>
      <h3>Min: {slide.currentWeather.tempMax}</h3>
      <button onClick={() => handleOpen()}>Teste</button>
    </Container>
  );
};

export default Card;
