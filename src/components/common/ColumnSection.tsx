import React, { useEffect, useState } from "react";
import MoreButton from "../basic/BasicMoreButton";
import BlogColumnBox from "../basic/blog/BlogColumnBox";
import axios from "axios";
import { ColumnType } from "../../constant/type";

const items = [
  {
    imgUrl: "/assets/imgs/cats/col_cat1.png",
  },
  {
    imgUrl: "/assets/imgs/cats/col_cat2.png",
  },
  {
    imgUrl: "/assets/imgs/cats/col_cat3.png",
  },
  {
    imgUrl: "/assets/imgs/cats/col_cat4.png",
  },
  {
    imgUrl: "/assets/imgs/cats/col_cat5.png",
  },
  {
    imgUrl: "/assets/imgs/cats/col_cat6.png",
  },
];

const ColumnSection = () => {
  const [columnData, setColumnData] = useState<ColumnType[]>([]);
  useEffect(() => {
    const fetchColumnData = async () => {
      const { data } = await axios.get("api/column/");
      setColumnData(data);
    };
    fetchColumnData();
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-[960px] xs:px-5 lg:px-0 m-auto py-[48px]">
        <div className="text-center pb-[48px]">
          <h3 className=" w-full border-y border-solid border-[#707070] text-center text-[32px] inline-block">
            推しニャン！コラム
          </h3>
        </div>
        <div className="m-auto">
          <div className="flex justify-between flex-wrap">
            {columnData &&
              columnData.map((e, i) => (
                <BlogColumnBox
                  key={i}
                  id={e.id}
                  hero_image={e.hero_image}
                  title={e.title}
                  cat_name={e.cat_name}
                  created_date={e.created_date}
                />
              ))}
          </div>
        </div>
        <MoreButton />
      </div>
    </div>
  );
};

export default ColumnSection;
