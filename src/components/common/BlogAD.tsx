import React from "react";
import BlogBox from "../basic/blog/BlogBox";

const Cats = [
  {
    imgUrl: "/assets/imgs/cats/cat1.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat2.png",
    isNew: true,
    isChu: true,
  },
  {
    imgUrl: "/assets/imgs/cats/cat3.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat4.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat5.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat6.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat7.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat8.png",
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/cat9.png",
    isNew: true,
    isChu: false,
  },
];

const BlogAD = () => {
  return (
    <>
      <div className="m-auto">
        <div className="flex justify-between flex-wrap ">
          {Cats.map((e, i) => (
            <BlogBox
              key={i}
              imgUrl={e.imgUrl}
              isNew={e.isNew}
              isChu={e.isChu}
              name={"heracles"}
              cafe={"cafe"}
              vote={2}
              character={["fdsa", "reqw"]}
              description={"this is description"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogAD;
