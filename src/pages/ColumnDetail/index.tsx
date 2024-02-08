import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import Title from "../../components/common/Typography/Title";
import BlogColumnBox from "../../components/basic/blog/BlogColumnBox";
import { ColumnType } from "../../constant/type";
import axios from "axios";
import { useParams } from "react-router-dom";

function ColumnDetail() {
  const { id } = useParams();
  const [columnData, setColumnData] = useState<ColumnType[]>([]);
  const [AcolumnData, setAcolumnData] = useState<ColumnType>({
    title: "",
    cat_name: "",
    hero_image: "",
    created_date: "",
  });
  useEffect(() => {
    const fetchColumnData = async () => {
      const { data } = await axios.get("api/column/");
      setColumnData(data);
    };
    const fetchGetColumnDataById = async () => {
      const { data } = await axios.get(`api/column/${id}/`);
      setAcolumnData(data);
    };
    fetchColumnData();
    fetchGetColumnDataById();
  }, []);

  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="コラムページ" />
        <Title title="推しニャンコラム" />
        <p className="text-xl py-4">
          推しニャン編集部おススメの看板猫の紹介記事です。是非、お店に会いに行ってください。
        </p>
        <div className="pt-10">
          <p className="text-xl pb-4 text-[#808080]">
            {`${new Date(AcolumnData.created_date).getFullYear()}.${
              new Date(AcolumnData.created_date).getMonth() + 1
            }.${new Date(AcolumnData.created_date).getDate()}`}
          </p>
          <h2 className="text-[32px] text-[#515151]">{AcolumnData.title}</h2>
        </div>
        <div className="my-12 h-[576px]">
          <img
            src={AcolumnData.detail_image}
            alt={AcolumnData.detail_image}
            className="h-full m-auto"
          />
        </div>
        <p className="text-2xl mb-[70px] text-[#515151]">
          {AcolumnData.subtitle}
        </p>
        <p className="text-[#515151] mb-16">{AcolumnData.description}</p>
        {AcolumnData.blog &&
          AcolumnData.blog.map((item, key) => (
            <div className="grid grid-cols-12 gap-10 mb-[60px]" key={key}>
              <div className={`col-span-5 ${key % 2 !== 0 && "order-last"}`}>
                <img src={item.imgs} alt={item.imgs} />
                <p className="text-sm mt-4 tracking-[-.2em]">
                  {item.img_caption}
                </p>
              </div>
              <p
                className={`h-[360px] overflow-hidden col-span-7 ${
                  key % 2 !== 0 && "order-first"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        <div className="mt-6 mb-10 flex flex-wrap justify-between">
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
      </Container>
    </MainLayout>
  );
}

export default ColumnDetail;
