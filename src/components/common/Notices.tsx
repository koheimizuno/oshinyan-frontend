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
        <div className="w-[960px] m-auto ">
          <div className="pt-[40px] pb-[8px] border-b border-b-solid border-b-[#CCC]">
            <h3 className="text-[24px]">お知らせニャン！</h3>
          </div>
          <div className="flex-column border-t border-t-solid border-b-[#7070] py-[32px] text-[16px] ">
            {items.map((e, i) => (
              <div key={i} className="mb-[16px] flex">
                <div className="w-[88px]">
                  <p>{e.date}</p>
                </div>
                <div className="ml-[16px] font-bold">
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
