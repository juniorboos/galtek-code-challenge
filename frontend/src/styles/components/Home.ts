import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  position: relative;
  width: 40vmin;
  display: flex;
  align-items: center;
  border: 1px solid red;

  @media (max-width: 500px) {
    width: 70vmin;
  }
`;
