import styled from "styled-components";

interface Props {
  numItems: number;
  current: number;
}

export const Container = styled.ul<Props>`
  display: flex;
  margin: 0 2vmin;
  position: absolute;
  align-items: center;
  transition: transform 600ms cubic-bezier(0.25, 1, 0.35, 1);

  transform: translateX(-${(props) => props.current * (100 / props.numItems)}%);
  border: 1px solid green;
  height: 100vh;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(100% - 4rem);
  margin: 0 auto;
  width: 100%;
`;

export const Control = styled.button`
  align-items: center;
  background-color: transparent;
  border: 3px solid transparent;
  border-radius: 100%;
  display: flex;
  height: 3rem;
  padding: 0;
  width: 3rem;

  cursor: pointer;
  font-family: inherit;
  font-size: inherit;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }

  &:active {
    transform: translateY(1px);
  }

  &.previous > * {
    transform: rotate(180deg);
  }

  .icon {
    fill: ${(props) => props.theme.colors.neutral};
    width: 100%;
  }
`;
