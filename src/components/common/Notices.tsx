import axios from "axios";
import React, { useEffect, useState } from "react";
import { NoticeType } from "../../constant/type";
import { formatDateTime } from "../../utils/functions";

const Notices = () => {
  const [noticeData, setNoticeData] = useState<NoticeType[]>([]);
  useEffect(() => {
    const fetchNotice = async () => {
      const { data } = await axios.get("api/notice/");
      setNoticeData(data);
    };
    fetchNotice();
  }, []);
  return (
    <>
      <div className="bg-[#F5F4EC]">
        <div className="max-w-[960px] xs:px-5 lg:px-0 m-auto ">
          <div className="pt-[40px] pb-[8px] border-b border-b-solid border-b-[#CCC]">
            <h3 className="text-[24px]">お知らせニャン！</h3>
          </div>
          <div className="sm:flex-column border-t border-t-solid border-b-[#7070] py-[32px] text-[16px] ">
            {noticeData &&
              noticeData.map((e, i) => (
                <div key={i} className="mb-[16px] sm:flex sm:justify-between">
                  <div className="w-[88px] xs:mb-2 sm:mb-0">
                    <p>{formatDateTime(e.created_date)}</p>
                  </div>
                  <div className="sm:ml-[16px] font-bold">
                    <p>{e.title}</p>
                  </div>
                  <a href={e.pdf} rel="noreferrer" target="_blank">
                    <img src="assets/imgs/icons/pdf_icon.webp" alt="pdf_icon" />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notices;
