import CustomButton from "./BasicButton";

const RankingCat = () => {
    return (
        
        <div className=" w-[312px] h-[512px] mb-[15px] hover:opacity-70">
          <div className="relative w-[312px] h-[234px]">
            <img src="assets/cat-2020-1.png" className="cover" alt="" />
            <span className="absolute top-[8px] right-[8px]">
              <img src="assets/btn-foot.svg" alt="" />
            </span>
            <span className="absolute top-0 left-0">
              <img src="assets/parts-new.svg" alt="" />
            </span>
          </div>
          <div className=" px-[16px]  bg-white h-[278px]">
            <div>
              <h3 className="text-[24px] font-bold text-left text-ellipsis overflow-hidden whitespace-nowrap">
                なまむぎなまごめまごめまごめ
              </h3>
            </div>
            <div className="flex justify-between">
              <div>
                <h4 className=" w-[145px] underline text-[16px] text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap ">
                  にゃんにゃんカフェまごめまごめまごめ
                </h4>
              </div>
              <div>
                <CustomButton value={"東京都"}></CustomButton>
              </div>
            </div>
            <div className="flex justify-content-start items-center mt-[15px] mb-[8px]">
              <span className=" flex d-inline-block align-items-center w-[24px] h-[24px]  mr-[9px]">
                <img
                  src="assets/recommend.svg"
                  className=" align-items-center "
                  alt=""
                />
              </span>
              <h2 className="text-[24px] d-inline-block">000ニャン</h2>
            </div>
            <hr className="border border-[#CCC]" />
            <div className="flex justify-content-start items-center pt-[10px] pb-[19px] ">
              <div>
                <img src="assets/Group 90.svg" alt="" />
              </div>
              <div className="pl-[8px]">
                <p>性格</p>
              </div>
              <div className="pl-[8px]">
                <CustomButton value={"やさしい"} />
              </div>
              <div className="pl-[8px]">
                <CustomButton value={"気分屋さん"} />
              </div>
            </div>
            <div className=" pb-[43px]">
              <p className="break-words	text-[16px] text-ellipsis overflow-hidden whitespace-wrap ">
                □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
              </p>
            </div>
          </div>
        </div>
    )
}

export default RankingCat;