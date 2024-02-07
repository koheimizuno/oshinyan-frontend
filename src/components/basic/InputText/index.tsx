import React, { ChangeEvent } from "react";

interface InputProps {
  type?: string;
  name: string;
  value: { [key: string]: string };
  onChange: (newValue: { [key: string]: string }) => void;
  containerClass?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
}

const InputText = (props: InputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange({
      ...props.value,
      [props.name]: e.target.value,
    });
  };

  return (
    <label className={props.containerClass}>
      <input
        type={props.type || "text"}
        name={props.name}
        value={props.value[props.name]}
        onChange={handleInputChange}
        placeholder={props.placeholder}
        required={props.required}
        className={`w-full h-[40px] rounded-[4px] border border-[#CCCCCC] p-2 focus:outline-none ${props.className}`}
      />
    </label>
  );
};

export default InputText;
// className={`bg-[#FFF] border border-[#CCCCCC] rounded-[5px] w-full me-auto h-[40px] p-2 focus:outline-none focus:shadow-md focus:shadow-[#ffe4eb] ${props.className}`}
