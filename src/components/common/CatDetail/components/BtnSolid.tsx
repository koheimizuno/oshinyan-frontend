const BtnSolid = ({onClick} : { onClick?: () => void}) => {
    return (
      <button className="bg-[#CBB279] w-[161px] h-8 rounded-[5px] text-center flex items-center justify-center" onClick={ e => onClick?.()}>
        <span className="text-base text-white">もっとみるニャン！</span>
      </button>
    );
  };
  
  export default BtnSolid;
  