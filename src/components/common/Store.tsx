import React from "react";
import Guess from "../basic/blog/Guess";
import MoreButton from "../basic/BasicMoreButton";

const items = [
  {
    imgUrl: '/assets/imgs/cats/col_cat1.png',
  },
  {
    imgUrl: '/assets/imgs/cats/col_cat2.png',
  },
  {
    imgUrl: '/assets/imgs/cats/col_cat3.png',
  },
  {
    imgUrl: '/assets/imgs/cats/col_cat4.png',
  },
  {
    imgUrl: '/assets/imgs/cats/col_cat5.png',
  },
  {
    imgUrl: '/assets/imgs/cats/col_cat6.png',
  },
]

const Store = () => {
  return (
    <>
      <div className="w-[960px] m-auto">
        <div className="py-[48px]">
          <div className="text-center pb-[48px]">
            <h3 className=" w-[321px] border-y border-solid border-[#707070] text-center text-[32px] inline-block">
              推しニャン！コラム
            </h3>
          </div>
          <div className="flex justify-between flex-wrap">
            {
              items.map((e, i) => <Guess key={i} imgUrl={e.imgUrl}/>)
            }
          </div>
          <MoreButton />
        </div>
      </div>
    </>
  );
};

export default Store;
