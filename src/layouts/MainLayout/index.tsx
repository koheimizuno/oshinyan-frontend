import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import Container from "../../components/basic/Container";
import { ReactNotifications } from "react-notifications-component";

const MainLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <ReactNotifications />
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
