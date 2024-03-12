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
          <div className="border-t border-t-solid border-b-[#7070] py-[32px] text-[16px] ">
            {noticeData &&
              noticeData.map((e, i) => (
                <div
                  key={i}
                  className="mb-[16px] sm:flex sm:justify-start gap-5"
                >
                  <div className="w-[88px] xs:mb-2 sm:mb-0">
                    <p>{formatDateTime(e.created_date)}</p>
                  </div>
                  <div className="sm:ml-[16px] w-full font-bold flex justify-between gap-2">
                    <p className="w-[calc(100%-58px)]">{e.title}</p>
                    <a href={e.pdf} rel="noreferrer" target="_blank">
                      {e.pdf && (
                        <img
                          src="assets/imgs/icons/pdf_icon.webp"
                          alt="pdf_icon"
                          width={58}
                          height={24}
                        />
                      )}
                    </a>
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
