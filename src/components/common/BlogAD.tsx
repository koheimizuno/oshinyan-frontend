import React from "react";
import BlogBox from "../basic/blog/BlogBox";

const Cats = [
  {
    imgUrl: ["/assets/imgs/cats/cat1.png", "/assets/imgs/cats/cat1-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat2.png", "/assets/imgs/cats/cat2-2.png"],
    isNew: true,
    isChu: true,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat3.png", "/assets/imgs/cats/cat3-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat4.png", "/assets/imgs/cats/cat4-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat5.png", "/assets/imgs/cats/cat5-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat6.png", "/assets/imgs/cats/cat6-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat7.png", "/assets/imgs/cats/cat7-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat8.png", "/assets/imgs/cats/cat8-2.png"],
    isNew: true,
    isChu: false,
  },
  {
    imgUrl: ["/assets/imgs/cats/cat9.png", "/assets/imgs/cats/cat9-2.png"],
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
