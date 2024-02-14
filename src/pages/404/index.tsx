import { Container } from "@mui/material";
import React from "react";

function NotFound() {
  return (
    <Container>
      <div className="h-screen flex justify-center items-center">
        <div className="text-[#515151]">
          <h1>
            <span className="text-9xl">404</span>
            <span className="ml-10 text-7xl">Not found</span>
          </h1>
          <p className="text-5xl py-2">
            お探しのページは見つかりませんでした。
          </p>
        </div>
      </div>
    </Container>
  );
}

export default NotFound;
