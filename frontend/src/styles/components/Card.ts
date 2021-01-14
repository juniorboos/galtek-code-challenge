import styled from "styled-components";

// interface Props {
//   isFar: boolean;
//   isOpen: boolean;
// }

export const Container = styled.li<{ isFar: boolean }>`
  width: 40vmin;
  /* height: 40vmin; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 20px;
  /* border: 1px solid green; */

  background-color: ${(props) => props.theme.colors.card.background};
  box-shadow: 0px 4px 6px ${(props) => props.theme.colors.shadow};

  color: ${(props) => props.theme.colors.text};
  /* flex: 1; */
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

  h2 {
    font-size: 42px;
    width: 100%;
    /* border: 1px solid red; */
    text-align: start;

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  .weather-wrapper,
  .aditional {
    margin: 1rem;
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
  }

  .aditional {
    justify-content: space-around;

    .info-small {
      p {
        font-size: 14px;
        font-weight: normal;

        @media (max-width: 768px) {
          font-size: 12px;
        }
      }
    }
  }

  .weather-wrapper {
    .temperature,
    .status {
      /* border: 1px solid blue; */
      width: 50%;
      display: flex;
      justify-content: center;
    }

    .temperature {
      h3 {
        font-size: 96px;
        line-height: 96px;
        font-weight: bold;
        letter-spacing: -0.07em;
        margin: 0 4px;

        @media (max-width: 768px) {
          font-size: 72px;
        }
      }

      h4 {
        font-size: 36px;
        font-weight: normal;

        @media (max-width: 768px) {
          font-size: 28px;
        }
      }
    }

    .status {
      flex-direction: column;
      align-items: center;
      height: 100%;

      img {
        margin-top: -14px;
        max-width: 80%;
        height: auto;
      }

      h4 {
        margin-top: -28px;
        font-size: 28px;
        font-weight: normal;

        @media (max-width: 768px) {
          margin-top: -18px;
          font-size: 18px;
        }
      }
    }
  }

  .icon {
    width: 30px;
    height: 30px;
  }
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
    cursor: pointer;
    &:hover {
      ${(props) => (props.isFar ? `opacity: 0.3;` : `opacity: 0.8;`)}
    }
  }

  &.previous {
    &:hover {
      ${(props) =>
        props.isFar
          ? `transform: translateX(4%) scale(0.8);`
          : `transform: translateX(2%);`}
    }
  }

  &.next {
    &:hover {
      ${(props) =>
        props.isFar
          ? `transform: translateX(-4%) scale(0.8);`
          : `transform: translateX(-2%);`}
    }
  }

  /* .image-wrapper {
    background-color: #1d1f2f;
    border-radius: 1%;
    height: 100%;
    left: 0%;
    overflow: hidden;
    position: absolute;
    top: 0%;
    transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
    width: 100%;
  } */

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
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    opacity: 0.8;

    img {
      width: 20px;
      height: auto;
    }
  }

  button:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 50vmin;
  }

  @media (max-width: 425px) {
    width: 70vmin;
  }
`;

export const MoreInfo = styled.ul<{ isOpen: boolean }>`
  max-height: 0;
  width: 100%;
  overflow: hidden;

  margin-bottom: 1rem;

  /* Set our transitions up. */
  -webkit-transition: max-height 1s;
  -moz-transition: max-height 1s;
  transition: max-height 1s;

  h3 {
    font-size: 24px;
    line-height: 96px;
    font-weight: bold;
    letter-spacing: -0.07em;
    margin: 0 4px;
  }

  li {
    border-top: 1px solid ${(props) => props.theme.colors.neutral};

    display: flex;
    align-items: center;
    justify-content: space-between;

    .label {
      display: flex;
      align-items: center;

      & > * {
        margin: 4px;
      }

      img {
        height: 30px;
        width: 30px;
      }
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  li:last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral};
  }

  ${(props) => props.isOpen && `max-height: 500px`}
`;
