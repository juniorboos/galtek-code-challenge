import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow-x: hidden;
  width: 100%;
  position: relative;

  background: linear-gradient(
    122.92deg,
    ${(props) => props.theme.colors.background[0]} 2.09%,
    ${(props) => props.theme.colors.background[1]} 84.11%
  );

  .switch {
    position: fixed;
    height: 3rem;
    right: 20px;
    top: 20px;
    z-index: 5;

    display: flex;
    align-items: center;
  }
`;
