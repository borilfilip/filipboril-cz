import React from 'react';
import Container from "react-bootstrap/Container";

const footer = (props) => {
  return (
      <footer className="pb-3">
          <hr />
          <Container>
              <span className="text-muted">Filip Bořil 2019 ©</span>
          </Container>
      </footer>
  );
};

export default footer;
