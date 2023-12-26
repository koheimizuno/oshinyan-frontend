import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import Container from "../../components/basic/Container";

const MainLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <div className="bg-white">
        <Container>
          <Header />
        </Container>
      </div>
      {props.children}
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;
