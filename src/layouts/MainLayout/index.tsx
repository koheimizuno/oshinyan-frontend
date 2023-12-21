import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";

const MainLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div className="relative border border-red-500">
        <SocialLinkGroup />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
