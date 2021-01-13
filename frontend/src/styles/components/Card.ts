import styled from "styled-components";

interface Props {
  isFar: boolean;
  isOpen: boolean;
}

export const Container = styled.li<Props>`
  width: 40vmin;
  height: 40vmin;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.card.background};
  box-shadow: 0px 4px 6px ${(props) => props.theme.colors.shadow};

  color: ${(props) => props.theme.colors.text};
  flex: 1;
  opacity: 0.5;
  position: relative;
  text-align: center;
  transition: opacity calc(300ms) cubic-bezier(0.25, 0.46, 0.45, 0.84),
    transform calc(300ms) cubic-bezier(0.25, 0.46, 0.45, 0.84), calc(300ms);
  z-index: 1;
  margin: 0 -2vmin;
  /* margin: 0 4vmin; */

  ${(props) =>
    props.isFar &&
    `opacity: 0.15;
    transform: scale(0.8);`}

  // current = 3
  // id = 0
  // res = true || false = true

  // current = 3
  // id = 1
  // res = true || false = true

  // current = 3
  // id = 2
  // res = false || false = false

  // current = 3
  // id = 3
  // res = false || false = false

  // current = 3
  // id = 4
  // res = false || false = false

  // current = 3
  // id = 5
  // res = false || true = true

  &.previous,
  &.next {
    &:hover {
      ${(props) => (props.isFar ? `opacity: 0.3;` : `opacity: 0.8;`)}
    }
  }

  &.previous {
    cursor: w-resize;

    &:hover {
      ${(props) =>
        props.isFar
          ? `transform: translateX(4%) scale(0.8);`
          : `transform: translateX(2%);`}
    }
  }

  &.next {
    cursor: e-resize;

    &:hover {
      ${(props) =>
        props.isFar
          ? `transform: translateX(-4%) scale(0.8);`
          : `transform: translateX(-2%);`}
    }
  }

  .image-wrapper {
    background-color: #1d1f2f;
    border-radius: 1%;
    height: 100%;
    left: 0%;
    overflow: hidden;
    position: absolute;
    top: 0%;
    transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
    width: 100%;
  }

  &.current {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;

    transform: scale(1.2);
    z-index: 3;

    /* @media (hover: hover) {
      &:hover .slide__image-wrapper {
        transform: scale(1.025)
          translate(
            calc(var(--x) / var(--d) * 1px),
            calc(var(--y) / var(--d) * 1px)
          );
      }
    } */

    ${(props) =>
      props.isOpen &&
      `
        background-color: blue;
        height: 60%;

        @media (max-width: 425px) {
          height: 70%;
        }
    `}
  }
  @media (max-width: 500px) {
    width: 70vmin;
    height: 70vmin;
  }
`;
