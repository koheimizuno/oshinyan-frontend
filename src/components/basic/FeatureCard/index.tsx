export default ({ imgUrl, text }: { imgUrl: string; text: string }) => {
  return (
    <div className="w-[312px] h-[328px] bg-white">
      <div className="w-full h-[234px] text-center">
        <a href="/feature/detail"><img className="max-h-[234px]" src={imgUrl} alt="cat" /></a>
      </div>
      <div className="pt-[19px] px-4 pb-[10px] h-[65px] text-[20px] leading-[27px] font-bold text-ellipsis">{text}</div>
    </div>
  );
};
