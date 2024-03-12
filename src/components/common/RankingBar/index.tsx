import React from "react";
import { Link } from "react-router-dom";
const RankingBar = () => {
  return (
    <div className="xs:block sm:flex sm:justify-start mt-[35px] mb-[12px] pt-[12px] pb-[11px]  border-y-2 border-y-solid border-y-[#CBB279] text-[20px]">
      <div className="flex gap-4 mr-[16px] xs:justify-center sm:justify-start xs:mb-3 sm:m-0">
        <img
          src="/assets/imgs/icons/ranking-1-cap.webp"
          alt="ranking-1-cap"
          width={36}
          height={24}
        />
        <h4 className="">推しニャンRANKING</h4>
      </div>
      <div className="w-[264px] flex justify-between items-center xs:m-auto sm:ml-[55px]">
        <div>
          <Link
            className={`${
              window.location.pathname === "/ranking/gekkan"
                ? "text-[#E695A9]"
                : "hover:text-[#E695A9]"
            } underline-0" `}
            to="/ranking/gekkan"
          >
            月間TOP10
          </Link>
        </div>
        <div className="w-0 h-[16px] border border-solid border-[#CBB279] mt-[2px]"></div>
        <div>
          <Link
            className={`${
              window.location.pathname === "/ranking"
                ? "text-[#E695A9]"
                : "hover:text-[#E695A9]"
            } underline-0`}
            to="/ranking"
          >
            総合TOP10
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RankingBar;
