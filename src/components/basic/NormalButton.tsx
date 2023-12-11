
export interface Props {
  text: string;
  color?: "purple" | "yellow";
  type?: 'pill' | 'rounded' | 'rectangle';
  size?: 'large' | 'middle' | 'small';
}

const NormalButton = ({ text, color, type, size }: Props) => {
  return (
    <>
      <button className={`text-[${size == "large" ? '28': '24'}px]] h-[${size == "large" ? '56': '48'}px] border-solid ${type == 'pill' ? "rounded" : "" } px-[${size == "large"? "14": "10"}px] py-[${size == "large" ? "8": "8"}px] text-[#C38154] translate-x-0.51 ${color == "purple" ? "bg-[#FBA1B7]" : "bg-white"} text-white`}>
        {text}
      </button>
    </>
  );
};

export default NormalButton;
