import axios from "axios";
import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import PageBar from "../../components/common/PageBar";
import { ColumnType } from "../../constant/type";
import { formatDateTime } from "../../utils/functions";
import styles from "./index.module.css";
import "lazysizes";
import { Notification } from "../../constant/notification";
const BlogColumnBox = lazy(
  () => import("../../components/basic/blog/BlogColumnBox")
);

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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchColumnData = async () => {
      try {
        const { data } = await axios.get(`api/advancedcolumn/?all=${false}`);
        setColumnData(data);
      } catch (error) {
        Notification("error", "サーバーエラー");
      }
    };
    const fetchGetColumnDataById = async () => {
      try {
        const { data } = await axios.get(`api/column/${id}/`);
        setAcolumnData(data);
      } catch (error) {
        Notification("error", "サーバーエラー");
      }
    };
    fetchColumnData();
    fetchGetColumnDataById();
  }, [id]);

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
            {formatDateTime(AcolumnData.created_date)}
          </p>
          <h2 className="text-[32px] text-[#515151]">{AcolumnData.title}</h2>
        </div>
        <div className="my-12 h-[300px] sm:h-[400px] md:h-[576px]">
          <img
            data-src={AcolumnData.detail_image}
            alt={AcolumnData.detail_image?.substring(
              AcolumnData.detail_image.lastIndexOf("/") + 1
            )}
            className="lazyload h-full m-auto"
          />
        </div>
        {AcolumnData.blog &&
          AcolumnData.blog.map((item, key) => (
            <div
              className="sm:grid sm:grid-cols-12 sm:items-start gap-10 mb-[60px]"
              key={key}
            >
              <div
                className={`mx-auto col-span-5 mb-5 ${
                  key % 2 !== 0 && "order-last"
                }`}
              >
                <img
                  data-src={item.imgs}
                  alt={item.imgs.substring(item.imgs.lastIndexOf("/") + 1)}
                  className="lazyload w-full"
                />
                <p className="text-base sm:mt-4">{item.img_caption}</p>
              </div>
              <p
                className={`overflow-hidden col-span-7 ${styles.container} ${
                  key % 2 !== 0 && "order-first"
                }`}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        <div className="mt-6 mb-10 flex flex-wrap justify-start gap-3">
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
