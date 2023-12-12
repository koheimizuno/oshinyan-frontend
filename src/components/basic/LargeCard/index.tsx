import CustomButton from "../BasicButton";
import Calendar from "../icons/Calendar";

type Props = {
  imgUrl?: string;
  isNew?: boolean;
  isChu?: boolean;
  name?: string;
  cafe?: string;
  vote?: number;
  character?: string[] | null;
  description?: string | null;
};

const LargeCard = ({
  imgUrl = "",
  isNew = false,
  isChu = false,
  name = "",
  cafe,
  vote,
  character,
  description,
}: Props) => {
  return (
    <>
      <>
        <div className="relative w-full h-[400px] mb-[15px] hover:opacity-70 flex">
          <div
            className="h-full w-[50%] bg-center bg-no-repeat"
            style={{ backgroundImage: "url('"+imgUrl+"')" }}
          ></div>
          <div className="px-[24px]  bg-white h-full w-[50%] flex flex-col">
            <div className="pt-[24px]">
              <h3 className="text-[24px] font-bold text-left text-ellipsis overflow-hidden whitespace-nowrap">
              なまむぎなまごめ
              </h3>
            </div>
            <div className="flex justify-between pb-[24px]">
              <div>
                <a href="javascript:;" className=" w-[145px] underline text-[16px] text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap ">
                  にゃんにゃんカフェ
                </a>
              </div>
              <div>
                <CustomButton value={"東京都"}></CustomButton>
              </div>
            </div>
            <hr className="border border-[#CCC]" />
            <div className="flex justify-content-start items-center pt-[10px] pb-[16px] ">
              <div>
                <img src="assets/imgs/hear-yellow.svg" alt="" />
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
            <div className="flex pb-[16px]">
              <div className="flex">
                <Calendar />
                <span className="ms-[8px] me-[8px]">毎日</span>
                <CustomButton value={"気分屋さん"} />
              </div>
            </div>
            <hr className="border border-[#CCC] p-0 m-0" />
            <div className="pb-[43px] grow max-h-[200px] py-2">
              <p className="break-words	text-[16px] text-ellipsis overflow-hidden whitespace-wrap leading-[21px]">
                □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
              </p>
            </div>
            <div className="flex justify-content-start items-center mt-[15px] mb-[8px]">
              <span className=" flex d-inline-block align-items-center w-[24px] h-[24px]  mr-[9px]">
                <img
                  src="assets/imgs/recommend.svg"
                  className=" align-items-center "
                  alt=""
                />
              </span>
              <h2 className="text-[24px] d-inline-block">000ニャン</h2>
            </div>

            {isChu ? (
              <span className="absolute bottom-[8px] right-[8px]">
                <img src="assets/imgs/mark_chu.png" alt="" />
              </span>
            ) : (
              <span className="absolute bottom-[8px] right-[8px]">
                <img src="assets/imgs/btn-foot.svg" alt="" />
              </span>
            )}
            {!isNew && (
              <span className="absolute top-0 left-0">
                <img src="assets/imgs/parts-new.svg" alt="" />
              </span>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default LargeCard;
