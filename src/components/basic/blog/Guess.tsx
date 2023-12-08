import React from "react";

type Item = {
  imgUrl: string,
}

const Guess = (props: Item) => {
  return (
    <>
      <div className=" w-[312px] h-[384px] border border-solid border-[#EAEAEA] mb-[15px] hover:opacity-70">
        <div className="relative">
          <img
            src={props.imgUrl}
            className="w-[312px] h-[234px]"
            alt=""
          />
        </div>
        <div className="p-[16px] ">
          <h3 className="text-[20px] font-bold tracking-[-0.1em] leading-normal h-[60px] text-ellipsis overflow-hidden whitespace-nowrap">
            まるで狛「猫」！15年間お店を見守る名物看猫看猫ちゃ守る名物守る名物んの…
          </h3>
          <hr className="border border-[#CCC] mt-[16px]" />
          <div className="flex justify-between items-center pt-[16px] text-[16px]">
            <div className="flex items-center">
              <img src="assets/imgs/circle-pen.svg" alt="" />
              <p className="pl-[8px] underline">猫太郎</p>
            </div>
            <div>
              <p>2024.00.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guess;
