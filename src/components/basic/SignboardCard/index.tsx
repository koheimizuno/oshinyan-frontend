import CustomButton from "../BasicButton";
import Heart from "../icons/Heart";

interface Props {
  imgUrl: string;
  date: string;
  vote: string;
}

export default ({ imgUrl, date, vote = "0" }: Props) => {
  return (
    <div className="w-[312px]">
      <div className="w-full h-[234px]">
        <img src={imgUrl} alt="cat" className="h-auto w-full"/>
      </div>
      <div className="m-4 mt-[19px]">
        <div className="">
          店名店名店名店名店名店名店名店名店名店名店名店名店名店名
        </div>
        <div className="ms-auto flex gap-2">
          <CustomButton value="カフェ"></CustomButton>
          <CustomButton value="東京都"></CustomButton>
        </div>
      </div>
    </div>
  );
};
