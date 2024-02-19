import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BtnPurple from "./components/BtnPurple";
import PrefectureBtn from "../../basic/CustomButton";
import Twitter from "../../basic/icons/Twitter";
import Instagram from "../../basic/icons/Instagram";
import Border from "./components/Border";
import HeartCircle from "../../basic/icons/HeartCircle";
import CatFavorite from "./components/CatFavorite";
import BtnAdd from "./components/BtnAdd";
import BtnSolid from "./components/BtnSolid";
import CatImage from "./components/CatImage";
import CatCard from "../../basic/blog/CatCard";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CalendarMonthSharp } from "@mui/icons-material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import axios from "axios";
import {
  CatObjectType,
  CommentReactionIcon,
  ImageType,
  UserType,
  commentType,
} from "../../../constant/type";
import { RecommendAction } from "../../../slices/cat";
import CatDetailCarousel from "./components/Carousel";
import AlbumGallery from "./components/AlbumGallery";
import CommentImageCarousel from "./components/CommentImageCarousel";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { formatDateTime } from "../../../utils/functions";
import CatDetailComment from "./components/CatDetailComment";

const CatDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // const [expanded, setExpanded] = useState<boolean[]>([]);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const advertise = searchParams.get("advertise");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recommendLoginElement = useRef<HTMLDivElement>(null);
  const [recommendLoginShow, setRecommendLoginShow] = useState(false);
  const [showImageDetail, setShowImageDetail] = useState(false);
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const [recommendedUser, setRecommendedUser] = useState<UserType[]>([]);
  const [commentData, setCommentData] = useState<commentType[]>([]);
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
  const [reactionIconData, setReactionIconData] = useState<
    CommentReactionIcon[]
  >([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedDetail, setSelectedDetail] = useState(0);
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
    },
    images: [],
    admin_images: [],
    character: [],
    favorite_things: [],
    attendance: "",
    description: "",
    recommend: [],
    created_date: "",
  });
  const { user, authLoading, isAuthenticated } = useSelector(
    (state: any) => state.user
  );
  const { catLoading } = useSelector((state: any) => state.cat);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        recommendLoginElement.current &&
        !recommendLoginElement.current.contains(event.target)
      ) {
        setRecommendLoginShow(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
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
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("api/randomcat");
        setCatData(data);
      } catch (error) {}
    };
    if (!advertise) {
      const RetrieveCat = async () => {
        try {
          let list: string[] = [];
          const { data } = await axios.get(`api/cats/${id}/`);
          setRetrieveCat(data);
          data.images &&
            data.images.forEach((item: ImageType) => {
              list.push(item.imgs);
            });
          data.admin_images &&
            data.admin_images.forEach((it: ImageType) => {
              list.push(it.imgs);
            });
          setCatDetailImages(list);
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
    fetchData();
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

  return (
    <div className="w-full relative">
      <CatDetailCarousel data={catDetailImages} />
      <div className="w-full bg-white p-[28px]">
        <div className="flex justify-between">
          <div className="flex items-center font-bold">
            <img src="/assets/imgs/icons/face_empty.webp" alt="cat icon" />
            <span className="text-xl md:text-2xl ms-4">
              {retrieveCat.cat_name}
            </span>
          </div>
          <div
            className="relative flex gap-[6px] items-center"
            ref={recommendLoginElement}
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
                className="absolute -left-5 -bottom-[75px] w-[250px] bg-white px-4 py-2 shadow-md rounded-xl cursor-pointer"
                onClick={() => navigate("/login")}
              >
                会員ログイン後にボタンを押すことが可能です
                <span className="w-2 h-4 absolute left-10 -top-4 z-20 border-8 border-transparent border-b-white"></span>
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
          <div>
            <Instagram />
          </div>
        </div>
        <Border className="mt-6" color="#CCCCCC" />
        <div className="w-full flex flex-col gap-6 md:flex md:flex-row md:items-start md:gap-8 mt-6">
          <div className="flex gap-2">
            <div className="w-6 h-6">
              <CalendarMonthSharp
                fontSize="inherit"
                style={{ fill: "#FAD2B5" }}
              />
            </div>
            <div className="ms-2 whitespace-nowrap">出勤頻度</div>
            <div className="ms-4">
              <PrefectureBtn value={retrieveCat.attendance} />
            </div>
          </div>
          <div className="flex gap-2">
            <HeartCircle />
            <div className="ms-2 whitespace-nowrap">性格</div>
            <div className="ms-4 flex gap-2 flex-wrap">
              {retrieveCat.character &&
                retrieveCat.character.map((item, key) => (
                  <PrefectureBtn key={key} value={item.character} />
                ))}
            </div>
          </div>
        </div>
        <div className="w-full flex mt-6">
          <StarRateRoundedIcon
            className="me-2"
            style={{ fill: "#FAD2B5", fontSize: "30px" }}
          />
          <div className="w-[150px]">好きなモノ・コト</div>
          <div className="">
            {retrieveCat.favorite_things &&
              retrieveCat.favorite_things.map((item, key, arr) => (
                <span key={key}>
                  {item.favorite_things}
                  {key !== arr.length - 1 && "、"}
                </span>
              ))}
          </div>
        </div>
        <div className="w-full flex mt-6 items-center h-10">
          <div className="flex items-center">
            <img
              className="w-6"
              src="/assets/imgs/icons/recommend.svg"
              alt=""
            />
          </div>
          <div className="text-2xl font-medium ms-2">
            {retrieveCat.recommend && retrieveCat.recommend.length}ニャン
          </div>
        </div>
        <div className="w-full border-b border-black mt-4"></div>
        <div className="flex flex-wrap mt-4">
          <div className="flex flex-wrap gap-x-20 gap-y-4">
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
                    <img
                      className="ms-5"
                      src="/assets/imgs/icons/comment_abbr.webp"
                      alt=""
                    />
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
                        recommend={retrieveCat.recommend.length}
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
                <Accordion
                  expanded={expanded[key] || false}
                  onChange={() =>
                    setExpanded((prevExpanded) => ({
                      ...prevExpanded,
                      [key]: !prevExpanded[key],
                    }))
                  }
                >
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{ display: "inline-block" }}
                  >
                    <BtnAdd />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Tabs
                      selectedIndex={selectedTab}
                      onSelect={handleTabSelect}
                      className="rounded-lg p-6 shadow-md border"
                    >
                      <div className="flex items-center gap-16">
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
                        <TabList className="flex items-center gap-2">
                          <Tab
                            className={`text-base text-[#B7B7B7] ${
                              selectedTab === 0 && "text-[#070707]"
                            } cursor-pointer active:border-none`}
                            onClick={() => fetchReactionData("reactionword")}
                          >
                            メッセージ
                          </Tab>
                          <span>|</span>
                          <Tab
                            className={`text-base text-[#B7B7B7] ${
                              selectedTab === 1 && "text-[#070707]"
                            } cursor-pointer active:border-none`}
                            onClick={() => fetchReactionData("reactioncat")}
                          >
                            猫ちゃん
                          </Tab>
                          <span>|</span>
                          <Tab
                            className={`text-base text-[#B7B7B7] ${
                              selectedTab === 2 && "text-[#070707]"
                            } cursor-pointer active:border-none`}
                            onClick={() => fetchReactionData("reactionheart")}
                          >
                            気持ち
                          </Tab>
                          <span>|</span>
                          <Tab
                            className={`text-base text-[#B7B7B7] ${
                              selectedTab === 3 && "text-[#070707]"
                            } cursor-pointer active:border-none`}
                            onClick={() => fetchReactionData("reactionseason")}
                          >
                            季節
                          </Tab>
                          <span>|</span>
                          <Tab
                            className={`text-base text-[#B7B7B7] ${
                              selectedTab === 4 && "text-[#070707]"
                            } cursor-pointer active:border-none`}
                            onClick={() => fetchReactionData("reactionparty")}
                          >
                            パーティー
                          </Tab>
                          <span>|</span>
                          <Tab
                            className={`text-base text-[#B7B7B7] ${
                              selectedTab === 5 && "text-[#070707]"
                            } cursor-pointer active:border-none`}
                            onClick={() => fetchReactionData("reactionfood")}
                          >
                            フード
                          </Tab>
                        </TabList>
                      </div>
                      <div className="border-b pb-4 mb-4"></div>
                      <div className="h-24 overflow-y-auto">
                        <TabPanel className="flex flex-wrap gap-4">
                          {reactionWord &&
                            reactionWord.map((item, key) => (
                              <img
                                key={key}
                                src={item.imgs}
                                alt={item.imgs}
                                width={40}
                                className="cursor-pointer"
                                onClick={() =>
                                  handleCommentIcon(commentitem.id, item)
                                }
                              />
                            ))}
                        </TabPanel>
                        <TabPanel className="flex flex-wrap gap-4">
                          {reactionCat &&
                            reactionCat.map((item, key) => (
                              <img
                                key={key}
                                src={item.imgs}
                                alt={item.imgs}
                                width={40}
                                className="cursor-pointer"
                                onClick={() =>
                                  handleCommentIcon(commentitem.id, item)
                                }
                              />
                            ))}
                        </TabPanel>
                        <TabPanel className="flex flex-wrap gap-4">
                          {reactionHeart &&
                            reactionHeart.map((item, key) => (
                              <img
                                key={key}
                                src={item.imgs}
                                alt={item.imgs}
                                width={40}
                                className="cursor-pointer"
                                onClick={() =>
                                  handleCommentIcon(commentitem.id, item)
                                }
                              />
                            ))}
                        </TabPanel>
                        <TabPanel className="flex flex-wrap gap-4">
                          {reactionSeason &&
                            reactionSeason.map((item, key) => (
                              <img
                                key={key}
                                src={item.imgs}
                                alt={item.imgs}
                                width={40}
                                className="cursor-pointer"
                                onClick={() =>
                                  handleCommentIcon(commentitem.id, item)
                                }
                              />
                            ))}
                        </TabPanel>
                        <TabPanel className="flex flex-wrap gap-4">
                          {reactionParty &&
                            reactionParty.map((item, key) => (
                              <img
                                key={key}
                                src={item.imgs}
                                alt={item.imgs}
                                width={40}
                                className="cursor-pointer"
                                onClick={() =>
                                  handleCommentIcon(commentitem.id, item)
                                }
                              />
                            ))}
                        </TabPanel>
                        <TabPanel className="flex flex-wrap gap-4">
                          {reactionFood &&
                            reactionFood.map((item, key) => (
                              <img
                                key={key}
                                src={item.imgs}
                                alt={item.imgs}
                                width={40}
                                className="cursor-pointer"
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
              <div className="mt-6">
                <BtnAdd />
                <div className="flex flex-wrap gap-2 mt-4">
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
        <div className="mt-8 flex justify-center">
          <BtnSolid onClick={() => {}} />
        </div>
        {/* album */}
        <div className="text-base mt-14 font-medium">ニャンアルバム</div>
        <div className="w-full border-b border-black mt-4"></div>
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {commentImgs && displayAll
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
        <div className="text-right mt-[57px] mb-[32px] px-2">
          <button
            type="button"
            className="underline"
            onClick={() => setDisplayAll(true)}
          >
            すべての写真を見るニャン
          </button>
        </div>
      </div>

      {/* signboard cat in the same place */}
      <div className="text-2xl mt-8 font-medium">
        同じ地域の看板猫を探すニャン！
      </div>
      <div className="w-full border-b border-[#CBB279] mt-4"></div>
      <div className="mt-6 mb-12 flex flex-wrap justify-between">
        {catData.length !== 0 ? (
          catData.map((e, i) => (
            <CatCard
              key={i}
              id={e.id}
              is_public={e.is_public}
              cat_name={e.cat_name}
              shop={e.shop}
              images={e.images}
              admin_images={e.admin_images}
              character={e.character}
              favorite_things={e.favorite_things}
              attendance={e.attendance}
              description={e.description}
              recommend={e.recommend}
              created_date={e.created_date}
            />
          ))
        ) : (
          <p className="py-10 block w-full text-center text-xl">
            お探しの看板猫はありません
          </p>
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
  );
};

export default CatDetail;
