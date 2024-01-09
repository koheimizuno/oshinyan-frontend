import React, { useState } from "react";

type PropsType = {
  labelTitle: string;
  labelStyle: string;
  type: string;
  containerStyle: string;
  defaultValue: string;
  placeholder: string;
  updateFormValue: any;
  updateType: string;
  autoFocus: boolean;
};

function InputText({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
  autoFocus,
}: PropsType) {
  const [value, setValue] = useState(defaultValue);

  const updateInputValue = (e: any) => {
    setValue(e.target.value);
    updateFormValue({ updateType, value: e.target.value });
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
      </label>
      <input
        autoFocus={autoFocus}
        type={type || "text"}
        placeholder={placeholder || ""}
        onChange={updateInputValue}
        className="h-[50px] rounded-lg px-[20px] w-full dark:bg-[#303841] bg-[#e6ebf5] outline-none "
      />
    </div>
  );
}

export default InputText;
