import React from "react";
import { Link } from "react-router-dom";

function SocialLinkGroup(props: any) {
  return (
    <div
      className={`fixed left-0 z-10 bg-white flex flex-col ${
        props.page === "top" ? "top-[450px]" : "top-[150px]"
      }`}
    >
      <Link to={"/mypage"} className="p-4 inline-block">
        <img src="/assets/imgs/icons/fancier-pink.png" alt="" />
      </Link>
      <Link to={""} className="p-4 inline-block">
        <img src="/assets/imgs/icons/facebook.png" alt="" />
      </Link>
      <Link to={""} className="p-4 inline-block">
        <img src="/assets/imgs/icons/instagram.png" alt="" />
      </Link>
    </div>
  );
}

export default SocialLinkGroup;
