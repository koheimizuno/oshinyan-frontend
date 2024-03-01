import React from "react";
import { Link } from "react-router-dom";
import Twitter from "../../basic/icons/Twitter";

function SocialLinkGroup(props: any) {
  return (
    <div
      className={`fixed left-0 z-10 bg-white hidden lg:flex lg:flex-col  ${
        props.page === "top" ? "top-[430px]" : "top-[200px]"
      }`}
    >
      <Link to={"/mypage"} className="p-4 inline-block">
        <img src="/assets/imgs/icons/fancier-pink.webp" alt="fancier-pink" />
      </Link>
      <Link to="https://twitter.com/oshinyan222" className="p-4 inline-block">
        <Twitter />
      </Link>
    </div>
  );
}

export default SocialLinkGroup;
