import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";

const MainLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
