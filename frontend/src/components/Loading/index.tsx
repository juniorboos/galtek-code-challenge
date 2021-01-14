import React from "react";
import { Container } from "../../styles/components/Loading";

const Loading = () => {
  return (
    <Container>
      <div className="gooey">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
