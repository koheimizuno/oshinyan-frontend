import React from "react";

const items = [
  {
    date: "2023.00.00",
    content:
      "サイトオープンしましたサイトオープンしましたサイトオープンしました",
  },
  {
    date: "2023.00.00",
    content:
      "サイトオープンしましたサイトオープンしましたサイトオープンしました",
  },
  {
    date: "2023.00.00",
    content:
      "サイトオープンしましたサイトオープンしましたサイトオープンしました",
  },
  {
    date: "2023.00.00",
    content:
      "サイトオープンしましたサイトオープンしましたサイトオープンしました",
  },
];

const Notices = () => {
  return (
    <>
      <div className="bg-[#F5F4EC]">
        <div className="max-w-[960px] xs:px-5 lg:px-0 m-auto ">
          <div className="pt-[40px] pb-[8px] border-b border-b-solid border-b-[#CCC]">
            <h3 className="text-[24px]">お知らせニャン！</h3>
          </div>
          <div className="sm:flex-column border-t border-t-solid border-b-[#7070] py-[32px] text-[16px] ">
            {items.map((e, i) => (
              <div key={i} className="mb-[16px] sm:flex">
                <div className="w-[88px] xs:mb-2 sm:mb-0">
                  <p>{e.date}</p>
                </div>
                <div className="sm:ml-[16px] font-bold">
                  <p>{e.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notices;
