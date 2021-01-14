import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  position: relative;
  width: 40vmin;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 50vmin;
  }

  @media (max-width: 425px) {
    width: 70vmin;
  }
`;

export const Error = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;
