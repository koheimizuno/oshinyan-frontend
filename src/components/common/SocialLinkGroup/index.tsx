import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Twitter from "../../basic/icons/Twitter";
import { useSelector } from "react-redux";
import { Notification } from "../../../constant/notification";

function SocialLinkGroup(props: any) {
  const navigator = useNavigate();
  const { isAuthenticated } = useSelector((state: any) => state.user);
  const handleGoMyPage = () => {
    if (isAuthenticated) navigator("/mypage");
    else {
      Notification("warning", "最初にログインする必要があります。");
      setTimeout(() => {
        navigator("/login");
      }, 2000);
    }
  };
  return (
    <div
      className={`fixed left-0 z-10 bg-white hidden lg:flex lg:flex-col  ${
        props.page === "top" ? "top-[430px]" : "top-[200px]"
      }`}
    >
      <button className="p-4 inline-block" onClick={handleGoMyPage}>
        <img
          src="/assets/imgs/icons/fancier-pink.webp"
          alt="fancier-pink"
          width={24}
          height={24}
        />
      </button>
      <Link to="https://twitter.com/oshinyan222" className="p-4 inline-block">
        <Twitter />
      </Link>
    </div>
  );
}

export default SocialLinkGroup;
