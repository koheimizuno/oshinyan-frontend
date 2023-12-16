const Border = ({ color, className }: { color: string, className: string }) => {
  return <div className={`w-full border-b border-[${color}] ${className}`}></div>;
};

export default Border;
