import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
  color: white;
  border-radius: 50%;

  .gooey {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 142px;
    height: 40px;
    margin: -20px 0 0 -71px;
    background: rgb(0, 0, 0);
    filter: contrast(20);
  }

  .dot {
    position: absolute;
    width: 16px;
    height: 16px;
    z-index: 999;
    top: 12px;
    left: 15px;
    filter: blur(4px);
    background: rgb(255, 255, 255);
    border-radius: 50%;
    transform: translateX(0);
    animation: dot 2.8s infinite;
  }

  .dots {
    transform: translateX(0);
    margin-top: 12px;
    margin-left: 31px;
    animation: dots 2.8s infinite;

    span {
      display: block;
      float: left;
      width: 16px;
      height: 16px;
      margin-left: 16px;
      filter: blur(4px);
      background: rgb(255, 255, 255);
      border-radius: 50%;
    }
  }

  @keyframes dot {
    50% {
      transform: translateX(96px);
    }
  }
  @keyframes dots {
    50% {
      transform: translateX(-31px);
    }
  }
`;
