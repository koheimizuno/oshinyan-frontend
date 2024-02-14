import React from "react";

function Title({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-[28px] md:text-[32px] tracking-[-.1em] py-2 border-b border-[#CBB279]">
        {title}
      </h2>
    </>
  );
}

export default Title;
