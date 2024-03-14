import { Container } from "@mui/material";
import React from "react";

function NotFound() {
  return (
    <Container>
      <div className="h-screen flex justify-center items-center">
        <img src="/assets/imgs/404.png" alt="404.png" />
      </div>
    </Container>
  );
}

export default NotFound;
