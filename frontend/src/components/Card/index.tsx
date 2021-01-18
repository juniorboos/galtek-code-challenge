import React, { useEffect, useState } from "react";
import { Container, MoreInfo } from "../../styles/components/Card";
import { IWeather } from "../../types/weatherType";

import humiditySVG from "../../assets/humidity.svg";
import windSVG from "../../assets/wind.svg";
import thermometerSVG from "../../assets/thermometer.svg";
import pressureSVG from "../../assets/pressure.svg";
import highlowSVG from "../../assets/high-low.svg";
import dots from "../../assets/dots.svg";

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

  const handleClick = () => {
    if (current === index) handleOpen();
    else handleSlideClick(index);
  };

  return (
    <Container
      isFar={isFar}
      className={classname}
      onClick={() => handleSlideClick(index)}
      data-testid="weather-card"
    >
      <h2>{slide.city}</h2>
      <div className="weather-wrapper">
        <div className="temperature">
          <h3>{slide.currentWeather.temp}</h3>
          <h4>ºC</h4>
        </div>
        <div className="status">
          <img src={slide.currentWeather.icon} alt="" />
          <h4>{slide.currentWeather.status}</h4>
        </div>
      </div>
      <div className="aditional">
        <div className="info-small">
          <img className="icon" src={humiditySVG} alt="" />
          <p>{slide.currentWeather.humidity}% humidity</p>
        </div>
        <div className="info-small">
          <img className="icon" src={windSVG} alt="" />
          <p>{slide.currentWeather.windSpeed} m/s wind</p>
        </div>
      </div>
      <MoreInfo isOpen={open}>
        <li>
          <div className="label">
            <img className="icon" src={thermometerSVG} alt="" />
            <p>Feels Like</p>
          </div>
          <p>{slide.currentWeather.feelsLike} ºC</p>
        </li>
        <li>
          <div className="label">
            <img className="icon" src={highlowSVG} alt="" />
            <p>High / Low</p>
          </div>
          <p>
            {slide.currentWeather.tempMax} ºC / {slide.currentWeather.tempMin}{" "}
            ºC
          </p>
        </li>
        <li>
          <div className="label">
            <img className="icon" src={pressureSVG} alt="" />
            <p>Pressure</p>
          </div>
          <p>{slide.currentWeather.pressure} hPa</p>
        </li>
      </MoreInfo>
      <button onClick={() => handleClick()}>
        <img src={dots} alt="" />
      </button>
    </Container>
  );
};

export default Card;
