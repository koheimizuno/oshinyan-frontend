import CustomButton from "../BasicButton";
import Heart from "../icons/Heart";

interface Props {
  imgUrl: string;
  cafe: string;
  prefecture: string;
}

export default ({ imgUrl, cafe, prefecture = "0" }: Props) => {
  return (
    <div className="w-[312px] bg-white">
      <div className="w-full h-[234px]">
        <img src={imgUrl} alt="cat" className="h-auto w-full"/>
      </div>
      <div className="m-4 mt-[19px] flex-wrap flex flex-end">
        <div className="w-full">
          店名店名店名店名店名店名店名店名店名店名店名店名店名店名
        </div>
        <div className="ms-auto mt-[10px] flex gap-2">
          <CustomButton value={cafe}></CustomButton>
          <CustomButton value={prefecture}></CustomButton>
        </div>
      </div>
    </div>
  );
};
