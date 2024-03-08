import React, { useState } from "react";
import { ColumnType } from "../../../constant/type";
import { formatDateTime } from "../../../utils/functions";

const BlogColumnBox = (props: ColumnType) => {
  const [hoverAction, setHoverAction] = useState(false);

  const goColumnDetail = (id: number) => {
    window.location.href = `/column/${id}`;
  };

  return (
    <div
      className={`w-full xs:max-w-[480px] md:max-w-[312px] md:h-[420px] mb-[15px] bg-white border ${
        hoverAction && "transform transition duration-500 scale-105"
      }`}
      onMouseOver={() => setHoverAction(true)}
      onMouseLeave={() => setHoverAction(false)}
    >
      <div
        className="h-[234px] cursor-pointer border-b"
        onClick={() => {
          props.id && goColumnDetail(props.id);
        }}
      >
        <img
          src={props.hero_image}
          className="h-full m-auto object-cover"
          alt={props.cat_name}
        />
      </div>
      <div className="p-4">
        <p className="h-[100px] overflow-hidden leading-relaxed pb-4 tracking-tighter text-xl border-b border-[#ccc]">
          {props.title}
        </p>
        <div className="flex justify-between py-4">
          <div className="flex gap-2">
            <img src="/assets/imgs/icons/pen.webp" alt="pen" />
            <span
              className={`border-b border-black ${
                hoverAction && "text-[#0000FF]"
              }`}
            >
              {props.cat_name}
            </span>
          </div>
          <p>{formatDateTime(props.created_date)}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogColumnBox;
