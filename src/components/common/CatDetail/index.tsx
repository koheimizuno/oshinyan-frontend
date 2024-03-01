import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BtnPurple from "./components/BtnPurple";
import PrefectureBtn from "../../basic/CustomButton";
import Twitter from "../../basic/icons/Twitter";
import Border from "./components/Border";
import CatFavorite from "./components/CatFavorite";
import BtnAdd from "./components/BtnAdd";
import BtnSolid from "./components/BtnSolid";
import CatImage from "./components/CatImage";
import CatCard from "../../basic/blog/CatCard";
import CatDetailCarousel from "./components/Carousel";
import AlbumGallery from "./components/AlbumGallery";
import CommentImageCarousel from "./components/CommentImageCarousel";
import CatDetailComment from "./components/CatDetailComment";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Modal,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import {
  CatObjectType,
  CommentReactionIconType,
  ImageType,
  UserType,
  CommentType,
} from "../../../constant/type";
import { RecommendAction } from "../../../slices/cat";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { formatDateTime } from "../../../utils/functions";
import { Notification } from "../../../constant/notification";
import InputText from "../../basic/InputText";
import HelmetPage from "../../../layouts/MainLayout/HelmetPage";

const CatDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recommendLoginElement = useRef<HTMLDivElement>(null);
  const searchParams = new URLSearchParams(location.search);
  const advertise = searchParams.get("advertise");
  const [checked, setChecked] = useState(false);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const [recommendLoginShow, setRecommendLoginShow] = useState(false);
  const [loginSectionHover, setLoginSectionHover] = useState(false);
  const [showImageDetail, setShowImageDetail] = useState(false);
  const [recommendedUser, setRecommendedUser] = useState<UserType[]>([]);
  const [commentData, setCommentData] = useState<CommentType[]>([]);
  const [displayAll, setDisplayAll] = useState(false);
  const [showAlbumGallery, setShowAlbumGallery] = useState(false);
  const [reactionWord, setReactionWord] = useState<ImageType[]>([]);
  const [reactionCat, setReactionCat] = useState<ImageType[]>([]);
  const [reactionHeart, setReactionHeart] = useState<ImageType[]>([]);
  const [reactionSeason, setReactionSeason] = useState<ImageType[]>([]);
  const [reactionParty, setReactionParty] = useState<ImageType[]>([]);
  const [reactionFood, setReactionFood] = useState<ImageType[]>([]);
  const [reactionIconCreated, setReactionIconCreated] = useState(false);
  const [catDetailImages, setCatDetailImages] = useState<string[]>([]);
  const [reportModalShow, setReportModalShow] = useState<number | undefined>(
    undefined
  );
  const [reactionIconData, setReactionIconData] = useState<
    CommentReactionIconType[]
  >([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedDetail, setSelectedDetail] = useState(0);
  const [reportValue, setReportValue] = useState({
    kanji_name: "",
    furi_name: "",
    phone: "",
    email: "",
    content: "",
  });
  const [commentImgs, setCommentImgs] = useState<
    {
      id: number;
      imgs: string;
      username: string;
      comment: string;
    }[]
  >([]);
  const [retrieveCat, setRetrieveCat] = useState<CatObjectType>({
    id: 0,
    cat_name: "",
    shop: {
      shop_name: "",
      prefecture: "",
      address: "",
    },
    images: [],
    admin_images: [],
    character: [],
    favorite_things: "",
    attendance: "",
    description: "",
    recommend: [],
    created_date: "",
  });
  const [catNearby, setCatNearBy] = useState<CatObjectType[]>([]);
  const { user, authLoading, isAuthenticated } = useSelector(
    (state: any) => state.user
  );
  const { catLoading } = useSelector((state: any) => state.cat);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const commentFetch = async () => {
      try {
        let list: {
          id: number;
          imgs: string;
          username: string;
          comment: string;
        }[] = [];
        const { data } = await axios.get(`api/comment?cat_id=${id}`);
        setCommentData(data);
        data.map((item: any, key: number) =>
          item.comment_images.map((it: any, i: number) =>
            list.push({
              id: it.id,
              imgs: it.imgs,
              username: item.user.username,
              comment: item.comment,
            })
          )
        );
        setCommentImgs(list);
      } catch (error) {}
    };
    commentFetch();
    fetchReactionData("reactionword");
  }, [id, catLoading]);

  useEffect(() => {
    if (!advertise) {
      const RetrieveCat = async () => {
        try {
          let list: string[] = [],
            cattemp: Pick<CatObjectType, "shop"> = {
              shop: {
                shop_name: "",
                prefecture: "",
                address: "",
              },
            };
          const { data } = await axios.get(`api/cats/${id}/`);
          setRetrieveCat(data);
          cattemp = data;
          data.images &&
            data.images.forEach((item: ImageType) => {
              list.push(item.imgs);
            });
          data.admin_images &&
            data.admin_images.forEach((it: ImageType) => {
              list.push(it.imgs);
            });
          setCatDetailImages(list);
          try {
            const { data } = await axios.get(
              `api/catnearby/?address=${cattemp.shop.address}`
            );
            setCatNearBy(data);
          } catch (error) {}
        } catch (error) {}
      };
      RetrieveCat();
    } else {
      const RetrieveCat = async () => {
        try {
          const { data } = await axios.get(`api/advertise/${id}/`);
          setRetrieveCat(data);
        } catch (error) {}
      };
      RetrieveCat();
    }
  }, [isAuthenticated, catLoading, authLoading, advertise, id]);

  useEffect(() => {
    const ListRecommendUser = async () => {
      if (retrieveCat.id) {
        try {
          const { data } = await axios.get(
            `api/recommend?cat_id=${retrieveCat.id}`
          );
          setRecommendedUser(data);
        } catch (error) {}
      }
    };
    ListRecommendUser();
  }, [retrieveCat.id, catLoading]);

  const handleTabSelect = (index: number) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    const fetchReactionIcon = async () => {
      try {
        const { data } = await axios.get("api/commentreactionicon/");
        setReactionIconData(data);
      } catch (error) {}
    };
    fetchReactionIcon();
    setReactionIconCreated(false);
  }, [reactionIconCreated]);

  const handleRecommend = async () => {
    if (isAuthenticated) {
      if (!advertise) {
        if (!retrieveCat.recommend.find((e) => e.user === user.user_id)) {
          const submitData = {
            cat_id: id,
            user_id: user.user_id,
          };
          try {
            await dispatch(RecommendAction(submitData));
          } catch (error) {}
        }
      } else {
        if (!retrieveCat.recommend.find((e) => e.user === user.user_id)) {
          const submitData = {
            advertise_id: id,
            user_id: user.user_id,
          };
          try {
            await dispatch(RecommendAction(submitData));
          } catch (error) {}
        }
      }
    } else {
      setRecommendLoginShow(true);
    }
  };

  const fetchReactionData = async (str: string) => {
    try {
      const { data } = await axios.get(`api/${str}/`);
      switch (str) {
        case "reactionword":
          setReactionWord(data);
          break;
        case "reactioncat":
          setReactionCat(data);
          break;
        case "reactionheart":
          setReactionHeart(data);
          break;
        case "reactionseason":
          setReactionSeason(data);
          break;
        case "reactionparty":
          setReactionParty(data);
          break;
        case "reactionfood":
          setReactionFood(data);
          break;
        default:
          setReactionWord(data);
          break;
      }
    } catch (error) {}
  };

  const handleCommentIcon = async (comment_id: number, iconData: ImageType) => {
    await axios.post("api/commentreactionicon/", {
      comment: comment_id,
      user: user.user_id,
      imgs: iconData.imgs,
    });
    setReactionIconCreated(true);
  };

  const handleAccordion = (key: number) => {
    isAuthenticated
      ? setExpanded((prevExpanded) => ({
          ...prevExpanded,
          [key]: !prevExpanded[key],
        }))
      : navigate("/login");
  };

  const handleChange = (newFormData: { [key: string]: string }) => {
    setReportValue({
      ...reportValue,
      ...newFormData,
    });
  };

  const handleReportModalShow = (key: number) => {
    if (isAuthenticated) {
      setReportModalShow(key);
    } else {
      Notification("warning", "最初にログインする必要があります。");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  const handleReport = async (
    e: React.FormEvent<HTMLFormElement>,
    commentId: number
  ) => {
    e.preventDefault();
    try {
      await axios.post("other/report/", {
        user: user.user_id,
        url: window.location.href,
        kanji_name: reportValue.kanji_name,
        furi_name: reportValue.furi_name,
        phone: reportValue.phone,
        email: reportValue.email,
        content: reportValue.content,
        comment: commentId,
      });
      setReportModalShow(undefined);
      Notification("success", "成果的に通報しました。");
    } catch (error: any) {
      if (error.response.status === 400) {
        setReportModalShow(undefined);
        Notification("warning", "すでに通報しています。");
      }
    }
  };

  return (
    <>
      <HelmetPage
        title={`看板猫を推せるページ｜${retrieveCat.cat_name}（猫の名前）`}
        description={`看板猫（${retrieveCat.cat_name}）の詳細ページ。このページで写真投稿をしたり、「推し」ボタンが押せたり楽しめます。`}
        keywords="看板猫, 推しニャン, 猫のいる店"
      />
      <div className="w-full relative">
        <CatDetailCarousel data={catDetailImages} />
        <div className="w-full bg-white p-[28px]">
          <div className="flex justify-between">
            <div className="flex items-center font-bold">
              <img src="/assets/imgs/icons/face_empty.webp" alt="face_empty" />
              <span className="text-xl md:text-2xl ms-4">
                {retrieveCat.cat_name}
              </span>
            </div>
            <div
              className="relative flex gap-[6px] items-center"
              ref={recommendLoginElement}
              onMouseLeave={() => {
                if (!loginSectionHover) {
                  setRecommendLoginShow(false);
                  setLoginSectionHover(false);
                }
              }}
            >
              <span
                className="cursor-pointer rounded-full"
                onClick={handleRecommend}
              >
                {retrieveCat.recommend &&
                retrieveCat.recommend.find((e) => e.user === user.user_id) ? (
                  <img
                    src="/assets/imgs/icons/recommend-on.webp"
                    alt="recommend-on"
                    className="w-10 md:w-12"
                  />
                ) : (
                  <img
                    src="/assets/imgs/icons/recommend-off-black.webp"
                    alt="recommend-off-black"
                    className="w-10 md:w-12"
                  />
                )}
              </span>
              {recommendLoginShow && (
                <span
                  className="absolute z-[9999] right-1 -bottom-[70px] w-[250px] bg-white px-4 py-2 shadow-md rounded-xl cursor-pointer"
                  onClick={() => navigate("/login")}
                  onMouseOver={() => setLoginSectionHover(true)}
                  onMouseLeave={() => {
                    setRecommendLoginShow(false);
                    setLoginSectionHover(false);
                  }}
                >
                  会員ログイン後にボタンを押すことが可能です
                  <div className="absolute right-2 -top-4 w-full flex justify-end">
                    <span className="w-2 h-4 z-20 border-8 border-transparent border-b-white"></span>
                  </div>
                </span>
              )}
            </div>
          </div>
          <div className="mt-2">
            <BtnPurple
              text="ニャンアルバム"
              isShowIcon={true}
              onClick={() => {
                setShowAlbumGallery(true);
              }}
            />
          </div>
          <div className="mt-4 break-all">{retrieveCat.description}</div>
          <div className="mt-2 flex gap-5">
            <Link
              to={`/nyanplace/${id}`}
              className="underline text-base inline-block"
            >
              {retrieveCat.shop.shop_name}
            </Link>
            <PrefectureBtn value={retrieveCat.shop.prefecture} />
          </div>
          <div className="flex gap-[14px] mt-6">
            <div>
              <Twitter />
            </div>
          </div>
          <Border className="mt-6" color="#CCCCCC" />
          <div className="w-full flex flex-col gap-6 md:flex md:flex-row md:items-start md:gap-8 mt-6">
            <div className="flex gap-5">
              <div className="w-6 h-6">
                <img
                  src="/assets/imgs/icons/calendar.webp"
                  alt="calendar.webp"
                  className="w-6"
                />
              </div>
              <div className="whitespace-nowrap">出勤頻度</div>
              <div className="w-[calc(100%-128px)]">
                <PrefectureBtn value={retrieveCat.attendance} />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-6 h-6">
                <img
                  src="/assets/imgs/icons/heart.webp"
                  alt="heart.webp"
                  className="w-6"
                />
              </div>
              <div className="whitespace-nowrap">性格</div>
              <div className="w-[calc(100%-96px)] flex gap-2 flex-wrap">
                {retrieveCat.character &&
                  retrieveCat.character.map((item, key) => (
                    <PrefectureBtn key={key} value={item.character} />
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 mt-6">
            <div className="flex justify-start items-center gap-5">
              <div className="w-6 h-6">
                <img src="/assets/imgs/icons/star.webp" alt="star.webp" />
              </div>
              <div className="w-[150px]">好きなモノ・コト</div>
            </div>
            <div className="ms-11 sm:ms-0">{retrieveCat?.favorite_things}</div>
          </div>
          <div className="w-full flex mt-6 items-center h-10">
            <div className="flex items-center">
              <img
                className="w-6"
                src="/assets/imgs/icons/recommend.svg"
                alt="recommend"
              />
            </div>
            <div className="text-2xl font-medium ms-2">
              {retrieveCat.recommend && retrieveCat.recommend.length}ニャン
            </div>
          </div>
          <div className="w-full border-b border-black mt-4"></div>
          <div className="flex flex-wrap mt-4">
            <div className="flex flex-start flex-wrap gap-x-5 gap-y-4">
              {recommendedUser &&
                recommendedUser
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 12)
                  .map((item, key) => (
                    <div className="flex items-center" key={key}>
                      <img
                        className="w-7 h-7"
                        src={item.avatar_url}
                        alt={item.avatar_url}
                      />
                      <div className="ms-3">{item.username}</div>
                    </div>
                  ))}
            </div>
          </div>
          <div className="mt-9">推しニャンコメント</div>
          <div className={`w-full border-b border-black mt-5`}></div>
          <CatDetailComment id={id} />
          {/* 1 */}
          {commentData &&
            commentData.map((commentitem, key) => (
              <div key={"outer" + key} className="py-3">
                <div>
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full"
                        src={
                          commentitem.user.avatar &&
                          commentitem.user.avatar.avatar
                        }
                        alt="avatar"
                      />
                    </div>
                    <div className="text-base underline ms-4">
                      {commentitem.user.username}
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-[#767676]">
                    {formatDateTime(commentitem.user.last_login)}
                  </div>
                  <div className="break-all mt-4 text-base">
                    {commentitem.comment}
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  {commentitem.comment_images &&
                    commentitem.comment_images.map((e, i) => {
                      return (
                        <CatFavorite
                          imgUrl={e.imgs}
                          comment_images_id={e.id}
                          key={"inner" + i}
                          onClick={() => {
                            setShowImageDetail(true);
                            setSelectedDetail(key);
                          }}
                        />
                      );
                    })}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-wrap gap-2">
                      {reactionIconData &&
                        reactionIconData.map(
                          (item, key) =>
                            item.comment === commentitem.id && (
                              <img
                                key={key}
                                src={item.imgs}
                                alt={item.imgs}
                                width={28}
                              />
                            )
                        )}
                    </div>
                    <button
                      className="text-xs text-[#ccc] border-b"
                      onClick={() => handleReportModalShow(key)}
                    >
                      通報する
                    </button>
                    <Modal
                      open={reportModalShow === key}
                      onClose={() => setReportModalShow(undefined)}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className="w-full max-w-[960px] bg-white absolute rounded-md shadow-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden">
                        <form
                          className="px-20 py-10"
                          onSubmit={(e) => handleReport(e, commentitem.id)}
                        >
                          <h1 className="text-4xl text-center tracking-widest py-4">
                            通報報告
                          </h1>
                          <label className="flex items-center gap-5 py-3">
                            <span className="w-[135px]">氏名: </span>
                            <div className="w-[calc(100%-135px)]">
                              <InputText
                                name="kanji_name"
                                value={reportValue}
                                onChange={handleChange}
                                required={true}
                                containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
                              />
                            </div>
                          </label>
                          <label className="flex items-center gap-5 py-3">
                            <span className="w-[135px]">ふりなが: </span>
                            <div className="w-[calc(100%-135px)]">
                              <InputText
                                name="furi_name"
                                value={reportValue}
                                onChange={handleChange}
                                required={true}
                                containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
                              />
                            </div>
                          </label>
                          <label className="flex items-center gap-5 py-3">
                            <span className="w-[135px]">電話番号: </span>
                            <div className="w-[calc(100%-135px)]">
                              <InputText
                                type="tel"
                                name="phone"
                                value={reportValue}
                                onChange={handleChange}
                                required={true}
                                containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
                              />
                            </div>
                          </label>
                          <label className="flex items-center gap-5 py-3">
                            <span className="w-[135px]">メールアドレス: </span>
                            <div className="w-[calc(100%-135px)]">
                              <InputText
                                type="email"
                                name="email"
                                value={reportValue}
                                onChange={handleChange}
                                required={true}
                                containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
                              />
                            </div>
                          </label>
                          <label className="flex items-center gap-5 py-3">
                            <span className="w-[135px]">
                              お問い合わせ内容:{" "}
                            </span>
                            <div className="w-[calc(100%-135px)]">
                              <InputText
                                name="content"
                                value={reportValue}
                                onChange={handleChange}
                                required={true}
                                containerClass="xs:w-[calc(100%-100px)] sm:w-[calc(100%-184px)]"
                              />
                            </div>
                          </label>
                          <div className="text-center mt-[27px] pb-[27px] border-b border-[#CCCCCC]">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) => setChecked(e.target.checked)}
                                />
                              }
                              label="同意するニャン"
                              required
                            />
                          </div>
                          <div className="mt-[47px] text-center">
                            <button
                              type="submit"
                              className={`text-[24px] ${
                                checked ? "bg-[#FBA1B7]" : "bg-[#f8c6d2]"
                              }  h-[48px] border-solid rounded-full py-2 ps-[42px] pe-[40px] leading-[32px] text-center text-white`}
                            >
                              確認ニャ！
                            </button>
                          </div>
                        </form>
                      </Box>
                    </Modal>
                  </div>
                </div>
                <div className="mt-6">
                  <Accordion
                    expanded={expanded[key] || false}
                    onChange={() => handleAccordion(key)}
                  >
                    <AccordionSummary
                      aria-controls="panel1-content"
                      id="panel1-header"
                      style={{
                        display: "",
                        position: "relative",
                      }}
                    >
                      <BtnAdd />
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        padding: 0,
                      }}
                    >
                      <Tabs
                        selectedIndex={selectedTab}
                        onSelect={handleTabSelect}
                        className="rounded-lg p-6 shadow-md border"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-16">
                          {isAuthenticated && (
                            <div className="flex items-center gap-3">
                              <img
                                src={user.avatar && user.avatar.avatar}
                                alt={user.username}
                                width={32}
                              />
                              <span>{user.username}</span>
                            </div>
                          )}
                          <TabList className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center gap-2">
                            <Tab
                              className={`text-base whitespace-nowrap ${
                                selectedTab === 0
                                  ? "text-[#070707]"
                                  : "text-[#B7B7B7]"
                              } cursor-pointer active:border-none`}
                              onClick={() => fetchReactionData("reactionword")}
                            >
                              メッセージ
                            </Tab>
                            <span className="hidden sm:block">|</span>
                            <Tab
                              className={`text-base whitespace-nowrap ${
                                selectedTab === 1
                                  ? "text-[#070707]"
                                  : "text-[#B7B7B7]"
                              } cursor-pointer active:border-none`}
                              onClick={() => fetchReactionData("reactioncat")}
                            >
                              猫ちゃん
                            </Tab>
                            <span className="hidden sm:block">|</span>
                            <Tab
                              className={`text-base whitespace-nowrap ${
                                selectedTab === 2
                                  ? "text-[#070707]"
                                  : "text-[#B7B7B7]"
                              } cursor-pointer active:border-none`}
                              onClick={() => fetchReactionData("reactionheart")}
                            >
                              気持ち
                            </Tab>
                            <span className="hidden sm:block">|</span>
                            <Tab
                              className={`text-base whitespace-nowrap ${
                                selectedTab === 3
                                  ? "text-[#070707]"
                                  : "text-[#B7B7B7]"
                              } cursor-pointer active:border-none`}
                              onClick={() =>
                                fetchReactionData("reactionseason")
                              }
                            >
                              季節
                            </Tab>
                            <span className="hidden sm:block">|</span>
                            <Tab
                              className={`text-base whitespace-nowrap ${
                                selectedTab === 4
                                  ? "text-[#070707]"
                                  : "text-[#B7B7B7]"
                              } cursor-pointer active:border-none`}
                              onClick={() => fetchReactionData("reactionparty")}
                            >
                              パーティー
                            </Tab>
                            <span className="hidden sm:block">|</span>
                            <Tab
                              className={`text-base whitespace-nowrap ${
                                selectedTab === 5
                                  ? "text-[#070707]"
                                  : "text-[#B7B7B7]"
                              } cursor-pointer active:border-none`}
                              onClick={() => fetchReactionData("reactionfood")}
                            >
                              フード
                            </Tab>
                          </TabList>
                        </div>
                        <div className="border-b pb-4 mb-4"></div>
                        <div className="h-24 overflow-y-auto">
                          <TabPanel className="flex flex-wrap gap-2 sm:gap-4">
                            {reactionWord &&
                              reactionWord.map((item, key) => (
                                <img
                                  key={key}
                                  src={item.imgs}
                                  alt={item.imgs}
                                  className="cursor-pointer w-7 sm:w-10"
                                  onClick={() =>
                                    handleCommentIcon(commentitem.id, item)
                                  }
                                />
                              ))}
                          </TabPanel>
                          <TabPanel className="flex flex-wrap gap-2 sm:gap-4">
                            {reactionCat &&
                              reactionCat.map((item, key) => (
                                <img
                                  key={key}
                                  src={item.imgs}
                                  alt={item.imgs}
                                  className="cursor-pointer w-7 sm:w-10"
                                  onClick={() =>
                                    handleCommentIcon(commentitem.id, item)
                                  }
                                />
                              ))}
                          </TabPanel>
                          <TabPanel className="flex flex-wrap gap-2 sm:gap-4">
                            {reactionHeart &&
                              reactionHeart.map((item, key) => (
                                <img
                                  key={key}
                                  src={item.imgs}
                                  alt={item.imgs}
                                  className="cursor-pointer w-7 sm:w-10"
                                  onClick={() =>
                                    handleCommentIcon(commentitem.id, item)
                                  }
                                />
                              ))}
                          </TabPanel>
                          <TabPanel className="flex flex-wrap gap-2 sm:gap-4">
                            {reactionSeason &&
                              reactionSeason.map((item, key) => (
                                <img
                                  key={key}
                                  src={item.imgs}
                                  alt={item.imgs}
                                  className="cursor-pointer w-7 sm:w-10"
                                  onClick={() =>
                                    handleCommentIcon(commentitem.id, item)
                                  }
                                />
                              ))}
                          </TabPanel>
                          <TabPanel className="flex flex-wrap gap-2 sm:gap-4">
                            {reactionParty &&
                              reactionParty.map((item, key) => (
                                <img
                                  key={key}
                                  src={item.imgs}
                                  alt={item.imgs}
                                  className="cursor-pointer w-7 sm:w-10"
                                  onClick={() =>
                                    handleCommentIcon(commentitem.id, item)
                                  }
                                />
                              ))}
                          </TabPanel>
                          <TabPanel className="flex flex-wrap gap-2 sm:gap-4">
                            {reactionFood &&
                              reactionFood.map((item, key) => (
                                <img
                                  key={key}
                                  src={item.imgs}
                                  alt={item.imgs}
                                  className="cursor-pointer w-7 sm:w-10"
                                  onClick={() =>
                                    handleCommentIcon(commentitem.id, item)
                                  }
                                />
                              ))}
                          </TabPanel>
                        </div>
                      </Tabs>
                    </AccordionDetails>
                  </Accordion>
                </div>
                {showImageDetail && selectedDetail === key && (
                  <CommentImageCarousel
                    username={commentitem.user.username}
                    comment={commentitem.comment}
                    commentImgs={commentitem.comment_images}
                    showAlbumGallery={selectedDetail === key}
                    setShowAlbumGallery={setShowImageDetail}
                  />
                )}
              </div>
            ))}
          {/* 2 */}
          <Border className="mt-5 border-dashed" color="#CCCCCC" />
          {commentData.length !== 0 && (
            <div className="mt-8 flex justify-center">
              <BtnSolid onClick={() => {}} />
            </div>
          )}
          {commentImgs.length !== 0 && (
            <>
              <div className="text-base mt-14 font-medium">ニャンアルバム</div>
              <div className="w-full border-b border-black mt-4"></div>
            </>
          )}
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {commentImgs.length !== 0 && displayAll
              ? commentImgs.map((item, key) => (
                  <CatImage
                    imgUrl={item.imgs}
                    username={item.username}
                    recommend={0}
                    key={key}
                  />
                ))
              : commentImgs
                  .slice(0, 9)
                  .map((item, key) => (
                    <CatImage
                      key={key}
                      imgUrl={item.imgs}
                      username={item.username}
                      recommend={0}
                    />
                  ))}
          </div>
          {commentImgs.length !== 0 && (
            <div className="text-right mt-[57px] mb-[32px] px-2">
              <button
                type="button"
                className="underline"
                onClick={() => setDisplayAll(true)}
              >
                すべての写真を見るニャン
              </button>
            </div>
          )}
        </div>

        {/* signboard cat in the same place */}
        <div className="text-2xl mt-8 font-medium">
          同じ地域の看板猫を探すニャン！
        </div>
        <div className="w-full border-b border-[#CBB279] mt-4"></div>
        <div className="mt-6 mb-12 flex flex-wrap justify-start gap-3">
          {catNearby.length !== 0 ? (
            catNearby.map(
              (e: CatObjectType, i: number) =>
                e.id !== Number(id) && (
                  <CatCard
                    key={i}
                    id={e.id}
                    is_public={e.is_public}
                    cat_name={e.cat_name}
                    shop={e.shop}
                    images={e.images}
                    admin_images={e.admin_images}
                    character={e.character}
                    attendance={e.attendance}
                    description={e.description}
                    recommend={e.recommend}
                    created_date={e.created_date}
                  />
                )
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <AlbumGallery
          cat_name={retrieveCat.cat_name}
          commentImgs={commentImgs}
          displayAll={displayAll}
          setDisplayAll={setDisplayAll}
          showAlbumGallery={showAlbumGallery}
          setShowAlbumGallery={setShowAlbumGallery}
        />
      </div>
    </>
  );
};

export default CatDetail;
