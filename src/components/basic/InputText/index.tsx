import React, { useState } from "react";

type PropsType = {
  type: string | null;
  containerStyle: string | null;
  updateFormValue: any;
  updateType: string;
};

function InputText({
  type,
  containerStyle,
  updateFormValue,
  updateType,
}: PropsType) {
  const [value, setValue] = useState("");

  const updateInputValue = (e: any) => {
    setValue(e.target.value);
    updateFormValue({ updateType, value: e.target.value });
  };

  return (
    <div className={`w-full ${containerStyle}`}>
      <input
        type={type || "text"}
        onChange={updateInputValue}
        className="h-[50px] rounded-lg px-[20px] w-full dark:bg-[#303841] bg-[#e6ebf5] outline-none "
      />
    </div>
  );
}

export default InputText;
