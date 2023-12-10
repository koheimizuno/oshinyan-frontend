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

const SmallCard = ({
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
        <div className="relative w-full h-[144px] hover:opacity-70 flex">
          <div
            className="relative w-full h-full w-[192px] bg-center bg-no-repeat"
            style={{ backgroundImage: "url('" + imgUrl + "')" }}
          >
            {isChu ? (
              <span className="absolute top-[8px] right-[8px]">
                <img
                  style={{ width: "32px", height: "32px" }}
                  src="assets/imgs/mark_chu.png"
                  alt=""
                />
              </span>
            ) : (
              <span className="absolute top-[8px] right-[8px]">
                <img
                  style={{ width: "32px", height: "32px" }}
                  src="assets/imgs/btn-foot.svg"
                  alt=""
                />
              </span>
            )}
          </div>
          <div className="px-[24px] w-[282px] bg-white h-full flex flex-col">
            <div className="pt-[16px]">
              <h3 className="text-[24px] leading-[24px] vertical-bottom font-bold text-left text-ellipsis overflow-hidden whitespace-nowrap">
              なまむぎなまごめ
              </h3>
              <a
                href="javascript:;"
                className=" w-[145px] leading-[21px] underline text-[16px] text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap "
              >
                にゃんにゃんカフェ
              </a>
            </div>
            <div className="flex justify-content-start items-center mt-[auto] mb-[8px]">
              <span className=" flex d-inline-block align-items-center w-[24px] h-[24px]  mr-[9px]">
                <img
                  src="assets/imgs/recommend.svg"
                  className=" align-items-center"
                  alt=""
                />
              </span>
              <h2 className="text-[24px] d-inline-block">000ニャン</h2>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SmallCard;
