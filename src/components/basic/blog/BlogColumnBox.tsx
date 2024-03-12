import React, { useState } from "react";
import { ColumnType } from "../../../constant/type";
import { formatDateTime } from "../../../utils/functions";

const BlogColumnBox = (props: ColumnType) => {
  const [hoverAction, setHoverAction] = useState(false);
  const [imgWidth, setImgWidth] = useState<number>();
  const [imgHeight, setImgHeight] = useState<number>();

  const goColumnDetail = (id: number) => {
    window.location.href = `/column/${id}`;
  };

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = event.currentTarget;
    setImgWidth(img.width);
    setImgHeight(img.height);
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
          onLoad={handleImageLoad}
          width={imgWidth}
          height={imgHeight}
        />
      </div>
      <div className="p-4">
        <p className="h-[100px] overflow-hidden leading-relaxed pb-4 tracking-tighter text-xl border-b border-[#ccc]">
          {props.title}
        </p>
        <div className="flex justify-between py-4">
          <div className="flex gap-2">
            <img
              src="/assets/imgs/icons/pen.webp"
              alt="pen"
              width={24}
              height={24}
            />
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
