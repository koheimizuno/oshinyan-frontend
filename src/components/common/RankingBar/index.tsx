import React from "react";
const RankingBar = ({ page }: { page?: "ranking" | "top" }) => {
  return (
    <>
      <div className="xs:block sm:flex sm:justify-start mt-[35px] mb-[12px] pt-[12px] pb-[11px]  border-y-2 border-y-solid border-y-[#CBB279] text-[20px] w-[100%]">
        <div className="flex gap-4 mr-[16px] xs:justify-center sm:justify-start xs:mb-3 sm:m-0">
          <img
            src="/assets/imgs/ranking-1-cap.svg"
            className="w-[36px]"
            alt="cat"
          />{" "}
          <h4 className="">推しニャンLANKING</h4>
        </div>
        <div className="w-[264px] flex justify-between items-center xs:m-auto sm:ml-[55px]">
          <div>
            {page === "ranking" ? (
              <a
                className="text-[#E695A9] underline-0 hover:underline"
                href="/ranking"
              >
                月間TOP10
              </a>
            ) : (
              <a className="hover:text-[#E695A9] underline-0" href="/ranking">
                月間TOP10
              </a>
            )}
          </div>
          <div className="w-0 h-[16px] border border-solid border-[#CBB279] mt-[2px]"></div>
          <div>
            {page === "top" ? (
              <a className="text-[#E695A9] underline-0" href="/">
                総合TOP10
              </a>
            ) : (
              <a
                className="hover:text-[#E695A9] underline-0 hover:underline"
                href="/"
              >
                総合TOP10
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RankingBar;
