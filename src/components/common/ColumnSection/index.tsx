import axios from "axios";
import { useEffect, useState, useCallback, lazy } from "react";
import MoreButton from "../../basic/BasicMoreButton";
import { ColumnType } from "../../../constant/type";
const BlogColumnBox = lazy(() => import("../../basic/blog/BlogColumnBox"));

const ColumnSection = () => {
  const [columnData, setColumnData] = useState<ColumnType[]>([]);
  const [isAll, setIsAll] = useState<boolean>(true);

  useEffect(() => {
    const fetchColumnData = async () => {
      const { data } = await axios.get(`api/advancedcolumn/?all=${false}`);
      setColumnData(data);
    };
    fetchColumnData();
  }, []);

  const handleMoreDisplay = useCallback(async () => {
    const { data } = await axios.get(`api/advancedcolumn/?all=${true}`);
    setIsAll(false);
    setColumnData(data);
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-[960px] xs:px-5 lg:px-0 m-auto py-[48px]">
        <div className="text-center pb-[48px]">
          <h3 className=" w-full border-y border-solid border-[#707070] text-center text-[32px] inline-block">
            推しニャン！コラム
          </h3>
        </div>
        <div className="flex justify-start flex-wrap gap-3">
          {columnData.length !== 0 ? (
            columnData.map((e, i) => (
              <BlogColumnBox
                key={i}
                id={e.id}
                hero_image={e.hero_image}
                title={e.title}
                cat_name={e.cat_name}
                created_date={e.created_date}
              />
            ))
          ) : (
            <p className="py-10 block w-full text-center text-xl">
              表示する資料がありません。
            </p>
          )}
        </div>
        {columnData.length !== 0 && isAll && (
          <MoreButton handleMoreDisplay={handleMoreDisplay} />
        )}
      </div>
    </div>
  );
};

export default ColumnSection;
